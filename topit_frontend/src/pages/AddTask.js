import { useState } from "react";
import axios from "axios";
import "./css/addTask.css";
import "./css/login.css";
import { Link } from "react-router-dom";

const AddTask = () => {
  const [data, setData] = useState([
    {
      nameTask: "",
      description: "",
      endDate: "",
      link: "",
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

  const addTask = () => {
    axios
      .post(
        "http://localhost:8081/task/admin/add",
        {
          nameTask: data.nameTask,
          description: data.description,
          endDate: data.endDate,
          link: data.link,
        },
        {
          headers: {
            Authorization: "Bearer " + localStorage.token,
          },
        }
      )
      .then(() => {
        console.log("function successfull");
      });
  };

  return (
    <div className="add-task">
      <div className="login-div">
        <input
          className="login-input"
          type="text"
          id="nameTask"
          placeholder="Task name"
          onChange={handleChange}
          autofocus
        />
        <input
          className="login-input"
          type="text"
          id="description"
          placeholder="description"
          onChange={handleChange}
        />
        <input
          className="login-input"
          type="date"
          id="endDate"
          placeholder="endDate"
          onChange={handleChange}
        />

        <input
          className="login-input"
          type="text"
          id="link"
          placeholder="link"
          onChange={handleChange}
        />
        <Link to="/task">
          <button id="login-button" tabindex="-1" onClick={addTask}>
            Add Task
          </button>
        </Link>
      </div>
    </div>
  );
};
export default AddTask;
