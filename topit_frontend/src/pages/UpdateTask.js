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
        `http://localhost:8081/task/admin/update/${id}`,
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
      `http://localhost:8081/task/admin/find/${id}`,
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
    <div className="update-task">
      <div className="login-div">
        <input
          type="text"
          id="nameTask"
          placeholder="nameTask"
          value={data.nameTask}
          onChange={handleChange}
          autofocus
        />
        <input
          type="text"
          id="description"
          placeholder="description"
          value={data.description}
          onChange={handleChange}
        />
        <input
          type="date"
          id="endDate"
          placeholder="EndDate"
          value={data.endDate}
          onChange={handleChange}
        />
        <input
          type="text"
          id="link"
          placeholder="link"
          value={data.link}
          onChange={handleChange}
        />
        <Link to="/task">
          <button id="login-button" tabindex="-1" onClick={updateTask}>
            Edit
          </button>
        </Link>
      </div>
    </div>
  );
};
export default UpdateTask;
