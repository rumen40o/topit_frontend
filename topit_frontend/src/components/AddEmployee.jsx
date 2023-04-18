import axios from "axios";
import { useState } from "react";
import "../pages/css/addEmployee.css";

function AddEmployee() {
  const [data, setData] = useState({
    name: "",
    email: "",
    phone: "",
    jobTitle: "",
    imageURL: "",
  });
  console.log("------data");
  console.log(data);
  console.log("----------");

  const handleChange = (event) => {
    const { name, value } = event.target;
    setData((prevLoginInfo) => ({
      ...prevLoginInfo,
      [name]: value,
    }));
  };

  const token = localStorage.getItem("token");
  const addEmployee = () => {
    console.log(data);
    if (
      data.name == null ||
      data.email == null ||
      data.jobTitle == null ||
      data.phone == null
    ) {
      alert("Невалидни данни");
    } else {
      axios
        .post(
          "http://localhost:8081/employee/add",
          {
            name: data.name,
            email: data.email,
            phone: data.phone,
            jobTitle: data.jobTitle,
            imageURL: data.imageURL,
          },
          {
            headers: {
              Authorization: "Bearer " + localStorage.token,
            },
          }
        )
        .then(() => {
          console.log("function successfull");
          console.log("data.imageURL: " + data.imageURL);
        })
        .then(window.location.reload());
    }
  };

  // let emails;
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

  console.log("one more test: " + emails);

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

          <select
            type="email"
            name="email"
            id="email-input"
            onChange={handleChange}
            placeholder="E-mail"
            onClick={findEmails}
          >
            {emails?.map((email) => (
              <option value={email}>{email}</option>
            ))}
          </select>

          <input
            type="tel"
            name="phone"
            id="phone-input"
            onChange={handleChange}
            placeholder="Phone"
          ></input>
          <input
            id="job-input"
            name="jobTitle"
            onChange={handleChange}
            placeholder="Occupation"
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

export default AddEmployee;
