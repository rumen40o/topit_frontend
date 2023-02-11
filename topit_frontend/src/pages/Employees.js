import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Employee from "../components/Employee";

const Employees = () => {
  const [data, setData] = useState([]);
  const [search, setSerch] = useState("");

  const employee_search = data.filter((data) => {
    if (search === "") {
      return data;
    } else if (
      data.email.toLowerCase().includes(search.toLowerCase()) ||
      data.name.toLowerCase().includes(search.toLowerCase()) ||
      data.jobTitle.toLowerCase().includes(search.toLowerCase()) ||
      data.phone.toLowerCase().includes(search.toLowerCase())
    ) {
      return data;
    }
  });

  return (
    <div>
      <Link to="/addEmployee">
        <button id="addEmployeeButton">AddEmployee</button>
      </Link>
      <Employee />
    </div>
  );
};

export default Employees;
