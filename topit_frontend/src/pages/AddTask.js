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
      team_number: "",
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
    if (
      data.nameTask == null ||
      data.description == null ||
      data.endDate == null ||
      data.link == null ||
      data.team_number == null
    ) {
      alert("Не валидни данни");
    } else {
      axios
        .post(
          "http://localhost:8081/task/add",
          {
            nameTask: data.nameTask,
            description: data.description,
            endDate: data.endDate,
            link: data.link,
            team_number: data.team_number,
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
    }
  };

  return (
    <div className="login">
      <form className="form">
        <input
          className="form-input"
          type="text"
          id="nameTask"
          placeholder="Task name"
          onChange={handleChange}
          autofocus
        />
        <input
          className="form-input"
          type="text"
          id="description"
          placeholder="description"
          onChange={handleChange}
        />
        <input
          className="form-input"
          type="date"
          id="endDate"
          placeholder="endDate"
          onChange={handleChange}
        />

        <input
          className="form-input"
          type="text"
          id="link"
          placeholder="link"
          onChange={handleChange}
        />
        <input
          className="form-input"
          type="text"
          id="team_number"
          placeholder="team_number"
          onChange={handleChange}
        />
        <button className="form-button">
          <Link to="/task">
            <button className="form-button" tabindex="-1" onClick={addTask}>
              Add Task
            </button>
          </Link>
        </button>
      </form>
    </div>
  );
};
export default AddTask;
