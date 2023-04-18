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
  };useEffect(() => {
    loadTask();
  }, []);


  const handleChange = (event) => {
    const { name, value } = event.target;
    setData((prevLoginInfo) => ({
      ...prevLoginInfo,
      [name]: value,
    }));
  };
  
  const [emps, setEmp] = useState([]);
  const findEmployees = (emp) => {
    axios
      .get("http://localhost:8081/team/allEmployees", {
        headers: {
          Authorization: "Bearer " + localStorage.token,
        },
      })
      .then((res) => {
        setEmp(res.data);
        console.log(emps)
        console.log("Getting from ::::::", emps);
      });
  };
  return (
    <div className="login">
    <form className="form">
        <input
          type="text"
          className="form-input"
          name="name"
          placeholder="nameTask"
          value={data.name}
          onChange={handleChange}
          autofocus
        />
        <select
        className="form-input"
          type="text"
          name="leader"
          placeholder="leader"
          value={data.leader}
          onChange={handleChange}
          onClick={findEmployees}
        >
          {emps?.map((emps) => (
              <option value={emps}>{emps}</option>
            ))}
        </select>
        <select
        className="form-input"
          type="text"
          name="members"
          placeholder="members"
          value={data.members}
          onChange={handleChange}
          onClick={findEmployees}
        >
          {emps?.map((emps) => (
              <option value={emps}>{emps}</option>
            ))}
        </select>
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
