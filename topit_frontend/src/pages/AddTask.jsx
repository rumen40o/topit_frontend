import { useState } from "react";
import axios from "axios";
import "./css/addTask.css";
import "./css/login.css";
import { Link } from "react-router-dom";

const AddTask = () => {
  const [data, setData] = useState(
    {
      nameTask: "",
      description: "",
      endDate: "",
      link: "",
      team_name: "",
    },
  );
  console.log(data);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setData((prevLoginInfo) => ({
      ...prevLoginInfo,
      [name]: value,
    }));
  };

  const addTask = () => {
    if (
      data.nameTask == null ||
      data.description == null ||
      data.endDate == null ||
      data.link == null ||
      data.team_name == null
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
            team_name: data.team_name,
          },
          {
            headers: {
              Authorization: "Bearer " + localStorage.token,
            },
          }
        )
        .then(() => {
          console.log("function successfull");
          console.log("------------------------")
          console.log(data)
          console.log("------------------------")
        });
    }
  };

  const [names, setNames] = useState([]);
  const findNames = (emp) => {
    axios
      .get("http://localhost:8081/task/allNames", {
        headers: {
          Authorization: "Bearer " + localStorage.token,
        },
      })
      .then((res) => {
        setNames(res.data);
        console.log(names)
        console.log("Getting from ::::::", names);
      });
  };

  console.log("one more test: " + names);

  return (
    <div className="login">
      <form className="form">
        <input
          className="form-input"
          type="text"
          name="nameTask"
          placeholder="Task name"
          onChange={handleChange}
          autofocus
        />
        <input
          className="form-input"
          type="text"
          name="description"
          placeholder="description"
          onChange={handleChange}
        />
        <input
          className="form-input"
          type="date"
          name="endDate"
          placeholder="endDate"
          onChange={handleChange}
        />

        <input
          className="form-input"
          type="text"
          name="link"
          placeholder="link"
          onChange={handleChange}
        />
        <select
          className="form-input"
          type="text"
          name="team_name"
          placeholder="team_name"
          onClick={findNames}
          onChange={handleChange}
        >
          {names?.map((names) => (
              <option value={names}>{names}</option>
            ))}
        </select>
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
