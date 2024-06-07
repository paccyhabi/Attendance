import {
    createBrowserRouter,
    RouterProvider,
  } from "react-router-dom";
import Login from "../components/Login";
import Dashboard from "../components/Dashboard";
import InstAdd from "../components/InstAdd";
import Logout from "../components/Logout";
import LectureAdd from "../components/LectureAdd";
import InstManage from "../components/InstManage";
import EditInst from "../components/EditInst";
import DeleteInst from "../components/DeleteInst";

const RootProviders = () => {
    const router = createBrowserRouter([
        {
          path: "/",
          element: <Login/>
        },

        {
            path: "/logout",
            element: <Logout/>
          },  

        {
          path: "/dashboard",
          element: <Dashboard/>
        },   

        {
          path: "/addInst",
          element: <InstAdd/>
        }, 

        {path: "/addLecture",
          element: <LectureAdd/>
        },

        {path: "/manageInst",
        element: <InstManage/>
      },

      {path: "/editInst/:id",
      element: <EditInst/>
     },  

      {
       path: "/deleteInst/:id",
      element: <DeleteInst/>
      },      
      
      ]);
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  )
}

export default RootProviders
