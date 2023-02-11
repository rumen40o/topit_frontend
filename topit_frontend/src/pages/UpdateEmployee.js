import { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

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
      .put(`http://localhost:8080/employee/admin/update/${id}`, {
        name: data.name,
        email: data.email,
        jobTitle: data.jobTitle,
        phone: data.phone,
        imageURL: data.imageURL,
      })
      .then(() => console.log("function successfull"));
  };
  const loadEmployee = async () => {
    const result = await axios.get(
      `http://localhost:8080/employee/admin/find/${id}`
    );
    setData(result.data);
  };
  return (
    <div>
      <div id="signup-div">
        <div id="input-div">
          <input
            type="text"
            id="name"
            placeholder="name"
            value={data.name}
            onChange={handleChange}
            autofocus
          />
          <input
            type="email"
            id="email"
            placeholder="email"
            value={data.email}
            onChange={handleChange}
          />
          <input
            type="text"
            id="jobTitle"
            placeholder="jobTitle"
            value={data.jobTitle}
            onChange={handleChange}
          />
          <input
            type="number"
            id="phone"
            placeholder="phone"
            value={data.phone}
            onChange={handleChange}
          />
          <input
            type="text"
            id="imageURL"
            placeholder="imageURL"
            value={data.imageURL}
            onChange={handleChange}
          />
        </div>
        <button id="login-button" tabindex="-1" onClick={updateEmployee}>
          Edit
        </button>
      </div>
    </div>
  );
};
export default UpdateEmployees;
