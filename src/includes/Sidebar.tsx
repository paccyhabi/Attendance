

const Sidebar = () => {
  return (

    <div className="sidebar-menu">
    <header className="logo">
        <a href="#" className="sidebar-icon"> <span className="fa fa-bars"></span> </a> <a href="dashboard.php"> <span id="logo"> <h1>SAMS</h1></span> 
            {/* <!--<img id="logo" src="" alt="Logo"/>-->  */}
        </a> 
    </header>
    <div className="my-border"></div>
    <div className="down">  
        <a href="dashboard.php"><img src="/images/images.jpg" height="70" width="70" /></a>
        <a href="dashboard.php"><span className=" name-caret"></span></a>
    
        <ul>
            <li><a className="tooltips" href="/admin-profile"><span>Profile</span><i className="lnr lnr-user"></i></a></li>
            <li><a className="tooltips" href="/change-password"><span>Settings</span><i className="lnr lnr-cog"></i></a></li>
            <li><a className="tooltips" href="/logout"><span>Log out</span><i className="lnr lnr-power-switch"></i></a></li>
        </ul>
    </div>

    <div className="menu">
        <ul id="menu" >
            <li><a href="/dashboard"><i className="fa fa-tachometer"></i> <span>Dashboard</span></a></li>

            <li id="menu-academico" ><a href="#"><i className="fa fa-user"></i><span>Institutions</span> <span className="fa fa-angle-right floats"></span></a>
                <ul id="menu-academico-sub" >
                    <li id="menu-academico-avaliacoes" ><a href="/addInst"> Add Institutions</a></li>
                    <li id="menu-academico-boletim" ><a href="/manageInst">Manage Institutions</a></li>
                   
                </ul>
            </li>

            <li id="menu-academico" ><a href="#"><i className="fa fa-user"></i><span>Lectures</span> <span className="fa fa-angle-right floats"></span></a>
                <ul id="menu-academico-sub" >
                    <li id="menu-academico-avaliacoes" ><a href="/addLecture"> Add Lecture</a></li>
                    <li id="menu-academico-boletim" ><a href="/manageLectures">Manage Lectures</a></li>
                   
                </ul>
            </li>            

            <li id="menu-academico" ><a href="#"><i className="fa fa-user"></i><span>Students</span> <span className="fa fa-angle-right floats"></span></a>
                <ul id="menu-academico-sub" >
                    <li id="menu-academico-avaliacoes" ><a href="/addStudent"> Add Student</a></li>
                    <li id="menu-academico-boletim" ><a href="/manageStudent">Manage Student</a></li>
                   
                </ul>
            </li>

            <li id="menu-academico" ><a href="#"><i className="fa fa-file-text-o"></i><span>Courses</span> <span className="fa fa-angle-right floats"></span></a>
                <ul id="menu-academico-sub" >
                    <li id="menu-academico-avaliacoes" ><a href="/addCourse"> Add Course</a></li>
                    <li id="menu-academico-boletim" ><a href="/manageCourses">Manage Courses</a></li>
                   
                </ul>
            </li>          
            
      
        </ul>
    </div>
</div>
  )
}

export default Sidebar
