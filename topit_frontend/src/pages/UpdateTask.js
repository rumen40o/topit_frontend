import { useEffect, useState } from "react";
import axios from "axios";
import { Link, useParams } from "react-router-dom";
import "./css/tasks.css";

const UpdateTask = () => {
  const [data, setData] = useState([
    {
      nameTask: "",
      description: "",
      endDate: "",
      link: "",
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
  const updateTask = () => {
    axios
      .put(
        `http://localhost:8081/task/update/${id}`,
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
      .then(() => console.log("function successfull"));
  };
  const loadTask = async () => {
    const result = await axios.get(
      `http://localhost:8081/task/find/${id}`,
      {
        headers: {
          Authorization: "Bearer " + localStorage.token,
        },
      }
    );
    console.log(result);
    setData(result.data);
  };

  useEffect(() => {
    loadTask();
  }, []);
  return (
    <div className="login">
    <form className="form">
        <input
          type="text"
          className="form-input"
          placeholder="nameTask"
          value={data.nameTask}
          onChange={handleChange}
          autofocus
        />
        <input
        className="form-input"
          type="text"
          id="description"
          placeholder="description"
          value={data.description}
          onChange={handleChange}
        />
        <input
        className="form-input"
          type="date"
          id="endDate"
          placeholder="EndDate"
          value={data.endDate}
          onChange={handleChange}
        />
        <input
        className="form-input"
          type="text"
          id="link"
          placeholder="link"
          value={data.link}
          onChange={handleChange}
        />
        <button className="form-button">
        <Link to="/task">
          <button className="form-button" tabindex="-1" onClick={updateTask}>
            Edit
          </button>
        </Link>
        </button>
      </form>
    </div>
  );
};
export default UpdateTask;
