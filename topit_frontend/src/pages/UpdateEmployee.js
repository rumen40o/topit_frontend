import { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import "./css/updateEmployee.css";

const UpdateEmployees = () => {
  const [data, setData] = useState({
    name: "",
    email: "",
    jobTitle: "",
    phone: "",
    imageURL: "",
  });
  console.log(data);
  const { id } = useParams();

  const handleChange = (event) => {
    const { name, value } = event.target;
    setData((prevLoginInfo) => ({
      ...prevLoginInfo,
      [name]: value,
    }));
  };

  useEffect(() => {
    loadEmployee();
  }, []);

  const updateEmployee = () => {
    axios
      .put(
        `http://localhost:8081/employee/update/${id}`,
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
      `http://localhost:8081/employee/find/${id}`,
      {
        headers: {
          Authorization: "Bearer " + localStorage.token,
        },
      }
    );
    setData(result.data);
  };

  const [emails, setEmails] = useState([]);
  const findEmails = (email) => {
    axios
      .get("http://localhost:8081/employee/allEmails", {
        headers: {
          Authorization: "Bearer " + localStorage.token,
        },
      })
      .then((res) => {
        setEmails(res.data);
        console.log("Getting from ::::::", emails);
      });
  };
  return (
    <div className="update-employee">
      <div id="signup-div" className="update-employee">
        <input
          type="text"
          className="login-input"
          name="name"
          placeholder="name"
          value={data.name}
          onChange={handleChange}
          autofocus
        />
        <select
          type="email"
          name="email"
          onChange={handleChange}
          value={data.email}
          placeholder="E-mail"
          onClick={findEmails}
        >
          {emails?.map((email) => (
            <option value={email}>{email}</option>
          ))}
        </select>
        <input
          type="text"
          className="login-input"
          name="jobTitle"
          placeholder="jobTitle"
          value={data.jobTitle}
          onChange={handleChange}
        />
        <input
          type="number"
          className="login-input"
          name="phone"
          placeholder="phone"
          value={data.phone}
          onChange={handleChange}
        />
        <input
          type="text"
          className="login-input"
          name="imageURL"
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
