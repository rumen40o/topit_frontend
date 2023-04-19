import { useState, useEffect, useRef } from "react";
import { useParams,Link } from "react-router-dom";
import axios from "axios";
import "./css/viewTask.css";
import { useAuth } from "../Contexts/userContext";
import TaskFeedback from "../components/TaskFeedback";

const ViewTask = () => {
  const [data, setData] = useState([]);
  const [taskData, setTaskData] = useState({

    name_ask: "",
    description: "",
    endDate: "",
    link: "",
    team_name: "",
  });

  const { id } = useParams();

  const loadTask = async () => {
    const result = await axios.get(`http://localhost:8081/task/find/${id}`, {
      headers: {
        Authorization: "Bearer " + localStorage.token,
      },
    });
    setTaskData(result.data);
  };
  useEffect(() => {
    loadTask().then(console.log(taskData.endDate));
  }, []);

  useEffect(() => {
    
    axios
      .get(`http://localhost:8081/feedback/find/${id}`, {
        headers: {
          Authorization: "Bearer " + localStorage.token,
        },
      })
      .then((res) => {
        console.log("Getting from ::::::", res.data);
        setData(res.data)
      })
      .catch((err) => console.log(err));
      
  }, []);
console.log(id)

const deleteFeedBack = (id, e) => {
  axios
    .delete(`http://localhost:8081/feedback/delete/${id}`, {
      headers: {
        Authorization: "Bearer " + localStorage.token,
      },
    })
    .then(() => console.log("function successfull"))
    .then(window.location.reload());
};
  return (
    <div className="view-task">
      <h1 className="view-task--title">{taskData.nameTask}</h1>
      <label>Отбор:</label>
      <h2 className="view-task--title">{taskData.team_name}</h2>
      <label>Трябва да направи тази задача</label>
      <h3 className="view-task--date">{taskData.endDate}</h3>
      <p className="view-task--description">{taskData.description}</p>
      <a href={taskData.link} className="view-task--link">
        {taskData.link}
      </a>

     <div className="tasks">
<div className="tasks--container">
        <table className="tasks--table">
          <tr className="tasks--headers">
            <th>Answers</th>
            <th>Delete</th>
          </tr> 
          {data.map((data)=>(
          <tr>
            <td>{data.content}</td> 
            <td>
            <button
              className="tasks--link"
              onClick={(e) => deleteFeedBack(data.id, e)}
            >
              Delete
            </button>
          </td>
          </tr>
            ))}

        </table>
        <Link to={"/taskFeedback"}>
      <button className="tasks--button">Add Answer</button>
      </Link>
      </div>
      </div>
    </div>
  );
};

export default ViewTask;
