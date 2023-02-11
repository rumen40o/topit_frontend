import { useState } from "react";
import axios from "axios";

const AddEmployees = () => {
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
    const { id, value } = event.target;
    setData((prevLoginInfo) => ({
      ...prevLoginInfo,
      [id]: value,
    }));
  };
  const addEmployee = () => {
    axios
      .post("http://localhost:8080/employee/admin/add", {
        name: data.name,
        email: data.email,
        jobTitle: data.jobTitle,
        phone: data.phone,
        imageURL: data.imageURL,
      })
      .then(() => {
        console.log("function successfull");
        console.log("data.imageURL: " + data.imageURL);
      });
  };
  return (
    <div>
      <div id="signup-div">
        <div id="input-div">
          <input
            type="text"
            id="name"
            placeholder="name"
            onChange={handleChange}
            autofocus
          />
          <input
            type="email"
            id="email"
            placeholder="email"
            onChange={handleChange}
          />
          <input
            type="text"
            id="jobTitle"
            placeholder="jobTitle"
            onChange={handleChange}
          />
          <input
            type="tel"
            pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
            id="phone"
            placeholder="phone"
            onChange={handleChange}
          />
          <input
            type="url"
            id="imageURL"
            placeholder="imageURL"
            onChange={handleChange}
          />
        </div>
        <button id="login-button" tabindex="-1" onClick={addEmployee}>
          addEmployee
        </button>
      </div>
    </div>
  );
};
export default AddEmployees;
