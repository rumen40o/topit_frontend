import { useState, useEffect, useRef } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import "./css/viewTask.css";
import { useAuth } from "../Contexts/userContext";

const ViewTask = () => {
  const { currentUser } = useAuth();

  const [taskFeedback, setTaskFeedback] = useState([
    {
      content: "",
    },
  ]);

  const [taskData, setTaskData] = useState({
    id: "",
    nameTask: "",
    description: "",
    endDate: "",
    link: "",
    team_number: "",
  });

  console.log(localStorage.token);

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

  const handleChange = (event) => {
    const { value } = event.target;
    setTaskFeedback({
      content: value,
    });
    // console.log(taskData);
  };
  // const addAnswer = () => {
  //   // "SELECT user_id FROM users WHERE email=fojewoijewjf"
  //   axios
  //     .post(
  //       `http://localhost:8081/feedback/add`,
  //       {
  //         content: taskFeedback.content,
  //         task_id: taskData.current.id,
  //         // user_id:
  //       },
  //       {
  //         headers: {
  //           Authorization: "Bearer " + localStorage.token,
  //         },
  //       }
  //     )
  //     .then(() => {
  //       console.log("function successfull");
  //     });
  // };

  return (
    <div className="view-task">
      <h1 className="view-task--title">{taskData.nameTask}</h1>
      <label>Отбор:</label>
      <h2 className="view-task--title">{taskData.team_number}</h2>
      <label>Трябва да направи тази задача</label>
      <h3 className="view-task--date">{taskData.endDate}</h3>
      <p className="view-task--description">{taskData.description}</p>
      <a href={taskData.link} className="view-task--link">
        {taskData.link}
      </a>
      <textarea
        className="view-task--description"
        type="text"
        name="content"
        placeholder="Answer"
        value={taskFeedback.content}
        onChange={handleChange}
      />
      <button onClick={() => console.log("bruh", currentUser.email)}>
        Add Answer
      </button>
      <h3>{taskFeedback.content}</h3>
    </div>
  );
};

export default ViewTask;
