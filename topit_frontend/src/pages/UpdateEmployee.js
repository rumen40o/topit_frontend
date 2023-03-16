import { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import "./css/updateEmployee.css";

const UpdateEmployees = () => {
  const [data, setData] = useState([
    {
      name: "",
      email: "",
      jobTitle: "",
      phone: "",
      imageURL: "",
    },
  ]);
  console.log(data);
  const { id } = useParams();

  const handleChange = (event) => {
    console.log("works");
    const { id, value } = event.target;
    setData((prevLoginInfo) => ({
      ...prevLoginInfo,
      [id]: value,
    }));
  };

  useEffect(() => {
    loadEmployee();
  }, []);

  const updateEmployee = () => {
    axios
      .put(
        `http://localhost:8081/employee/admin/update/${id}`,
        {
          name: data.name,
          email: data.email,
          jobTitle: data.jobTitle,
          phone: data.phone,
          imageURL: data.imageURL,
        },
        {
          headers: {
            Authorization: "Bearer " + localStorage.token,
          },
        }
      )
      .then(() => console.log("function successfull"))
      .then(window.location.reload());
  };
  const loadEmployee = async () => {
    const result = await axios.get(
      `http://localhost:8081/employee/admin/find/${id}`,
      {
        headers: {
          Authorization: "Bearer " + localStorage.token,
        },
      }
    );
    setData(result.data);
  };
  return (
    <div className="update-employee">
      <div id="signup-div" className="update-employee">
        <input
          type="text"
          className="login-input"
          id="name"
          placeholder="name"
          value={data.name}
          onChange={handleChange}
          autofocus
        />
        <input
          type="email"
          className="login-input"
          id="email"
          placeholder="email"
          value={data.email}
          onChange={handleChange}
        />
        <input
          type="text"
          className="login-input"
          id="jobTitle"
          placeholder="jobTitle"
          value={data.jobTitle}
          onChange={handleChange}
        />
        <input
          type="number"
          className="login-input"
          id="phone"
          placeholder="phone"
          value={data.phone}
          onChange={handleChange}
        />
        <input
          type="text"
          className="login-input"
          id="imageURL"
          placeholder="imageURL"
          value={data.imageURL}
          onChange={handleChange}
        />
        <button id="login-button" tabindex="-1" onClick={updateEmployee}>
          <Link to="/employee">
            <p className="update-employee--text">Edit</p>
          </Link>
        </button>
      </div>
    </div>
  );
};
export default UpdateEmployees;
