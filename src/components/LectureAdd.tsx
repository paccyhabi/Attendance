

import Head from '../includes/Head'
import Footer from '../includes/Footer'
import Sidebar from '../includes/Sidebar'

const LectureAdd = () => {
    const token = localStorage.getItem('token')
	if(!token){
		window.location.replace("/");
	}else{
  return (
<div className="page-container">
<div className="left-content">
<div className="inner-content">
	
<Head/>

<div className="outter-wp">
<div className="sub-heard-part">
<ol className="breadcrumb m-b-0">
<li><a href="dashboard.php">Home</a></li>
<li className="active">Add Lecture</li>
</ol>
</div>	

<div className="forms-main">
<h2 className="inner-tittle">Add Lecture </h2>
<div className="graph-form">
<div className="form-body">
	<form method="post" action="/addLecture1"> 
		<div className="form-group">
			<label>Institution</label>
			<select name="inst_id" id="institution" className="form-control">
				<option value="">Select an Institution</option>
			</select>
		</div>
		<div className="form-group">
			<label>Lecture Name</label>
			<input type="text" name="lecture_name" placeholder="Lecture Name" className="form-control" required/>
		</div>
		<div className="form-group">
			<label>Phone</label>
			<input type="text" name="lecture_phone" placeholder="Phone number" className="form-control" required/>
		</div>
		<div className="form-group">
			<label>Email</label>
			<input type="text" name="lecture_email" placeholder="Email" className="form-control" required/>
		</div>
		<button type="submit" className="btn btn-default" name="submit" id="submit">Save</button>
	</form> 
	
</div>
</div>
</div> 
</div>
<Footer/>

</div>
</div>		
<Sidebar/>

<div className="clearfix"></div>		
</div>
  )
}}

export default LectureAdd
