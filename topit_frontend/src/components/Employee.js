import "../pages/css/employee.css";
import axios from "axios";
import { Link } from "react-router-dom";
import { useState } from "react";

export default function Employee(props) {
  const toggleOptions = () => {
    setOptionsIsDisabled((prevOptionsDisabled) => !prevOptionsDisabled);
  };
  const { name } = props;
  const nameArray = name.split(" ");
  const [data, setData] = useState([]);
  const [optionsIsDisabled, setOptionsIsDisabled] = useState(true);
  const deleteEmployee = (id, e) => {
    axios
      .delete(`http://localhost:8081/employee/delete/${id}`, {
        headers: {
          Authorization: "Bearer " + localStorage.token,
        },
      })
      .then(() => console.log("function successfull"))
      .then(window.location.reload());
  };
  return (
    <div className="employee">
      <img className="employee--image" src={props.imageURL}></img>
      <div className="employee--fl-div">
        <h3 className="employee--name">
          {nameArray.length > 1
            ? `${nameArray[0]} ${nameArray[nameArray.length - 1]}`
            : `${nameArray[0]}`}
        </h3>

        <button className="employee--options-button" onClick={toggleOptions}>
          •••
          <ul
            className={
              optionsIsDisabled
                ? "employee--options disabled"
                : "employee--options"
            }
          >
            <li>
              <button className="employee--edit-button">
                <Link to={`/updateEmployee/${props.id}`}>
                  <p className="employee--edit-text">Edit</p>
                </Link>
              </button>
            </li>
            <li>
              <button
                className="employee--delete-button"
                onClick={(e) => deleteEmployee(props.id, e)}
              >
                Delete
              </button>
            </li>
          </ul>
        </button>
      </div>
      <div className="employee--data">
        <p className="employee--job">{props.jobTitle}</p>
        <p className="employee--email">{props.email}</p>
        <p className="employee--phone">{props.phone}</p>
      </div>
    </div>
  );
}
