import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Employee from "../components/Employee";
import axios from "axios";
import "./css/employees.css";

import AddEmployee from "../components/AddEmployee";

const Employees = () => {
  const [data, setData] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    axios
      .get("http://localhost:8081/employee/all", {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
          "Access-Control-Allow-Origin": "*",
        },
      })
      .then((res) => {
        console.log("Getting from ::::::", res.data);
        setData(res.data);
      })
      .catch((err) => console.log(err));
  }, []);

  console.log(data);

  let allEmployees = data
    .filter((employee) => {
      if (search === "") {
        return employee;
      } else if (
        employee.name.toLowerCase().includes(search.toLowerCase()) ||
        employee.email.toLowerCase().includes(search.toLowerCase()) ||
        employee.jobTitle.toLowerCase().includes(search.toLowerCase()) ||
        employee.phone.toLowerCase().includes(search.toLowerCase())
      ) {
        return employee;
      }
    })
    .map((employee) => (
      <Employee
        id={employee.id}
        name={employee.name}
        email={employee.email}
        jobTitle={employee.jobTitle}
        phone={employee.phone}
        imageURL={employee.imageURL}
      />
    ));

  return (
    <div className="employees">
      <input
        className="employees--search"
        type="text"
        placeholder="Search..."
        onChange={(e) => setSearch(e.target.value)}
      ></input>
      <AddEmployee />
      <div className="employees--grid">{allEmployees}</div>
    </div>
  );
};

export default Employees;
