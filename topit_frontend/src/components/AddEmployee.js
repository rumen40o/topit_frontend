import axios from "axios";
import { useState } from "react";
import "../pages/css/addEmployee.css";

function AddEmpTest() {
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

  const handleChange = (event) => {
    console.log("works");
    const { name, value } = event.target;
    setData((prevLoginInfo) => ({
      ...prevLoginInfo,
      [name]: value,
    }));
  };
  const addEmployee = () => {
    axios
      .post("http://localhost:8081/employee/admin/add", {
        name: data.name,
        email: data.email,
        jobTitle: data.jobTitle,
        phone: data.phone,
        imageURL: data.imageURL,
      })
      .then(() => {
        console.log("function successfull");
        console.log("data.imageURL: " + data.imageURL);
      })
      .then(window.location.reload());
  };

  return (
    <div id="add-emp">
      <button id="add-emp-button">
        <h3 className="add-emp--header">Add Employee</h3>
        <div id="input-div">
          <input
            id="name-input"
            name="name"
            placeholder="Full Name"
            onChange={handleChange}
          ></input>
          <input
            type="email"
            name="email"
            id="email-input"
            onChange={handleChange}
            placeholder="E-mail"
          ></input>
          <input
            id="job-input"
            name="jobTitle"
            onChange={handleChange}
            placeholder="Occupation"
          ></input>
          <input
            type="tel"
            name="phone"
            id="phone-input"
            onChange={handleChange}
            placeholder="Phone"
          ></input>
          <input
            id="avatar-input"
            name="imageURL"
            onChange={handleChange}
            placeholder="Image link"
          ></input>
          <button id="submit-button" onClick={addEmployee}>
            Add
          </button>
        </div>
      </button>
    </div>
  );
}

export default AddEmpTest;
