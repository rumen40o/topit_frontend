import { useState, useEffect, useRef } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";
import "../pages/css/feedback.css";

const TaskFeedback = (props) => {
  const [feedback, setFeetback] = useState({
    task_id: Number(props.taskId),
    content: "",
  });

  const handleChange = (event) => {
    console.log("works");
    const { name, value } = event.target;
    setFeetback((prevLoginInfo) => ({
      ...prevLoginInfo,
      [name]: value,
    }));
    console.log(feedback);
  };

  const AddAnswer = (e) => {
    e.preventDefault();

    axios
      .post(
        "http://localhost:8081/feedback/add",
        {
          task_id: feedback.task_id,
          content: feedback.content,
        },
        {
          headers: {
            Authorization: "Bearer " + localStorage.token,
          },
        }
      )
      .then(() => {
        setFeetback((prev) => ({
          ...prev,
          content: "",
        }));
        props.fetchFeedback();
      });
  };
  return (
    <div className="login">
      <form className="feedback-form" onSubmit={AddAnswer}>
        <input
          className="view--content"
          type="text"
          name="content"
          value={feedback.content}
          placeholder="content"
          onChange={handleChange}
        />
        <button className="feedback--submit-button">Add Answer</button>
      </form>
    </div>
  );
};

export default TaskFeedback;
