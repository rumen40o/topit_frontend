import axios from "axios";
import { useEffect, useState } from "react";
import picture from "../kitten.png";
import { Link } from "react-router-dom";
import "../pages/css/employee.css";

const Employee = () => {
  const employeeOptionsClick = () => {
    let optionsMenu = document.getElementById("employee--options");
    console.log(optionsMenu);
  };

  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:8080/employee/admin/all")
      .then((res) => {
        console.log("Getting from ::::::", res.data);
        setData(res.data);
      })
      .catch((err) => console.log(err));
  }, []);

  const deleteEmployee = (id, e) => {
    axios
      .delete(`http://localhost:8080/employee/admin/delete/${id}`)
      .then(() => console.log("function successfull"));
  };
  return (
    <div>
      {data.map((data, index) => (
        <div className="employee">
          <img className="employee--image">{data.imageUrl}</img>
          <div className="employee--fl-div">
            <h3 className="employee--name">{data.name}</h3>
            <button
              className="employee--options-button"
              onClick={employeeOptionsClick}
            >
              •••
              <ul className="employee--options active">
                <li>
                  <Link to={`/updateEmployee/${data.id}`}>
                    <button className="employee--edit-button">Edit</button>
                  </Link>
                </li>
                <li>
                  <button
                    className="employee--delete-button"
                    onClick={(e) => deleteEmployee(data.id, e)}
                  >
                    Delete
                  </button>
                </li>
              </ul>
            </button>
          </div>
          <p className="employee--job">{data.jobTitle}</p>
          <p className="employee--email">{data.email}</p>
          <p className="employee--phone">{data.phone}</p>
        </div>
      ))}
    </div>
  );
};
export default Employee;
