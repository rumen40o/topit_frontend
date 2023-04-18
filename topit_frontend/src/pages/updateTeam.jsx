import { useEffect, useState } from "react";
import axios from "axios";
import { Link, useParams } from "react-router-dom";
import "./css/tasks.css";

const UpdateTask = () => {
  const [data, setData] = useState(
    {
        name: "",
        leader: "",
        members: ""
    },
  );

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
        `http://localhost:8081/team/update/${id}`,
        {
            name: data.name,
            leader: data.leader,
            members: data.members,
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
      `http://localhost:8081/team/find/${id}`,
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
          id="name"
          placeholder="nameTask"
          value={data.name}
          onChange={handleChange}
          autofocus
        />
        <input
        className="form-input"
          type="text"
          id="leader"
          placeholder="leader"
          value={data.leader}
          onChange={handleChange}
        />
        <input
        className="form-input"
          type="text"
          id="members"
          placeholder="members"
          value={data.members}
          onChange={handleChange}
        />
        <button className="form-button">
        <Link to="/teams">
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
