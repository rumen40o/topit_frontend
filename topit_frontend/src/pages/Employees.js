import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Employee from "../components/Employee";

const Employees = () => {
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
