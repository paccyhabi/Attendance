
import Footer from "../includes/Footer";
import Head from "../includes/Head";
import Sidebar from "../includes/Sidebar";
const Dashboard = () => {
	const token = localStorage.getItem('token')
	if(!token){
		window.location.replace("/");
	}else{
  return (
	
<div className="page-container">
	<div className="left-content">
		<div className="inner-content">
		
			<Head />
			
			<div className="outter-wp">
				<div className="custom-widgets">
					<div className="row-one">
						<div className="col-md-4 widget">
							<div className="stats-left ">

								<h5>Total</h5>
								<h4> Students</h4>
							</div>
							<div className="stats-right">
								<label>111</label>
							</div>
							<div className="clearfix"> </div>	
						</div>
						<div className="col-md-4 widget states-mdl">
							<div className="stats-left">
	
								<h5>Total</h5>
								<h4>Lectures</h4>
							</div>
							<div className="stats-right">
								<label> 222</label>
							</div>
							<div className="clearfix"> </div>	
						</div>
						
						<div className="col-md-4 widget">
							<div className="stats-left">
								
								<h5>Total</h5>
								<h4>Modules</h4>
							</div>
							<div className="stats-right">
								<label>333</label>
							</div>
							<div className="clearfix"> </div>	
						</div>
						<div className="clearfix"> </div>	
					</div>
<br />
					<div className="col-md-4 widget">
							<div className="stats-left">
								
								<h5>Total</h5>
								<h4>Institutions</h4>
							</div>
							<div className="stats-right">
								<label>444</label>
							</div>
							<div className="clearfix"> </div>	
						</div>
						<div className="clearfix"> </div>	
					</div>					
				</div>
						</div>
						<div className="outter-wp">
		
		<Footer/>
		
	</div>
</div>
<Sidebar />
<div className="clearfix"></div>		
</div>
  )

}}


export default Dashboard
