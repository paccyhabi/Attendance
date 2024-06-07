import { useState } from "react";
import Footer from "../includes/Footer";
import Head from "../includes/Head";
import Sidebar from "../includes/Sidebar";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import { useMutation} from 'react-query';

const EditInst = () => {
  const token = localStorage.getItem('token');
  const {id} = useParams();
  if (!token) {
    window.location.replace("/");
  } else {
    const [instName, setinstName] = useState('');
    const [address, setAddress] = useState('');
    const [url, setUrl] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const navigate = useNavigate();
    const addInstitution = async (data:any) => {
      const config = {
        headers: { Authorization: `Bearer ${token}` },
      };
      const response = await axios.patch(`https://attendance-management-ipoq.onrender.com/api/institutions/${id}`, data, config);
      return response.data;
    };
    const mutation = useMutation(addInstitution, {
      onSuccess: () => navigate('/manageInst'),
      onError: (error) => console.error('Error adding institution:', error),
    });


    const handleSubmit = async (e:any) => {
      e.preventDefault();
      const data = { instName, address, url, email, phone };
      try {
        await mutation.mutate(data);
      } catch (err) {
        console.error('Error submitting form:', err);
      }
    };

    return (
      <div>
        <div className="page-container">
          <div className="left-content">
            <div className="inner-content">

              <Head />

              <div className="outter-wp">

                <div className="sub-heard-part">
                  <ol className="breadcrumb m-b-0">
                    <li><a href="dashboard.php">Home</a></li>
                    <li className="active">Edit Institution</li>
                  </ol>
                </div>

                <div className="forms-main">
                  <h2 className="inner-tittle">Edit Institution </h2>
                  <div className="graph-form">
                    <div className="form-body">
                      <form method="post" onSubmit={handleSubmit}>
                        <div className="form-group">
                          <label>Institution Name</label>
                          <input type="text" name="iname" placeholder="Institution name" value={instName} onChange={(e) => setinstName(e.target.value)} className="form-control" required />
                        </div>
                        <div className="form-group">
                          <label>Physical Address</label>
                          <input type="text" name="address" placeholder="Physical address" value={address} onChange={(e) => setAddress(e.target.value)} className="form-control" required />
                        </div>
                        <div className="form-group">
                          <label>Url</label>
                          <input type="text" name="url" placeholder="Url" value={url} onChange={(e) => setUrl(e.target.value)} className="form-control" required />
                        </div>
                        <div className="form-group">
                          <label>Email</label>
                          <input type="email" name="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} className="form-control" required />
                        </div>
                        <div className="form-group">
                          <label>Phone</label>
                          <input type="text" name="phone" placeholder="Phone number" value={phone} onChange={(e) => setPhone(e.target.value)} className="form-control" required />
                        </div>
                        <button type="submit" className="btn btn-default" name="submit" id="submit">Edit</button>
                      </form>
                    </div>
                  </div>
                </div>

              </div>
              <Footer />
            </div>
          </div>

          <Sidebar />
          <div className="clearfix"></div>

        </div>
      </div>
    );
  }
};

export default EditInst;
