import { useState} from 'react';
import axios from 'axios';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [loginError, setLoginError] = useState('');

  const handleSubmit = async (e:any) => {
    e.preventDefault();
    try {
      const response = await axios.post('https://attendance-management-ipoq.onrender.com/api/users/login', { username, password });
      const token = response.data.token; 
      if (token) {
        console.log('Login successful');
        console.log('Token:', token); 
        localStorage.setItem('token', token); 
        window.location.replace("/dashboard");
      }
    } catch (err) {
      console.error('Login error:', err);
      setLoginError('Invalid Username or password. Please try again.');
    }
  };

  return (
    <div className="login-container">
      <form className="login-form" onSubmit={handleSubmit}>
        <h2 className="login-title">Login</h2>
        {loginError && (
        <div className="alert alert-danger" role="alert">
          {loginError}
        </div>
      )}
        <div className="form-group">
          <label htmlFor="exampleInputUsername1" className="form-label">
            Username
          </label>
          <input
            type="Username"
            className="form-control"
            id="exampleInputUsername1"
            aria-describedby="UsernameHelp"
            placeholder="Enter Username"
            required
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="exampleInputPassword1" className="form-label">
            Password
          </label>
          <input
            type="password"
            className="form-control"
            id="exampleInputPassword1"
            placeholder="Password"
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        <button type="submit" className="btn btn-primary but">
          Login
        </button>
      </form>
    </div>
  );
};

export default Login;
