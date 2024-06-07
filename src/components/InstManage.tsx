import { useQuery } from 'react-query';
import Footer from "../includes/Footer";
import Head from "../includes/Head";
import Sidebar from "../includes/Sidebar";
import axios from 'axios';

const InstManage = () => {
  const token = localStorage.getItem('token');

  if (!token) {
    window.location.replace("/");
    return;
  }

  const fetchInstitutions = async () => {
    const response = await axios.get('https://attendance-management-ipoq.onrender.com/api/institutions/allInstitutions', {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return response.data;
  };

  const { isLoading, error, data: institutions } = useQuery('institutions', fetchInstitutions, {
    retry: 2, // Retry fetching data up to 2 times on failure (adjust as needed)
    refetchInterval: 60 * 1000, // Refetch data every minute (adjust as needed)
  });

  return (
    <div className="page-container">
      <div className="left-content">
        <div className="inner-content">
          <Head />
          <div className="outter-wp">
            <div className="sub-heard-part">
              <ol className="breadcrumb m-b-0">
                <li><a href="/dashboard">Home</a></li>
                <li className="active">Manage Student</li>
              </ol>
            </div>
            <div className="graph-visual tables-main">
              {isLoading ? (
                <p>Loading institutions...</p>
              ) : error ? (
                <p>Error fetching institutions</p>
              ) : (
                <div>
                  <h3 className="inner-tittle two">Manage Students</h3>
                  <div className="graph">
                    <div className="tables">
                      <table className="table" border={1}>
                        <thead>
                          <tr>
                            <th>#</th>
                            <th>Institution Name</th>
                            <th>Address</th>
                            <th>Url</th>
                            <th>Email</th>
                            <th>Phone</th>
                            <th>Action</th>
                          </tr>
                        </thead>
                        <tbody>
                          {institutions.map((institution:any, index:any) => (
                            <tr key={index} className="active">
                              <th scope="row">{index + 1}</th>
                              <td>{institution.instName}</td>
                              <td>{institution.address}</td>
                              <td>{institution.url}</td>
                              <td>{institution.email}</td>
                              <td>{institution.phone}</td>
                              <td>
                                <a href={`/editInst/${institution.id}`}>Edit</a>
                                || <a href={`/deleteInst/${institution.id}`}>Delete</a>
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
          <Footer />
        </div>
      </div>
      <Sidebar />
      <div className="clearfix"></div>
    </div>
  );
};

export default InstManage;
