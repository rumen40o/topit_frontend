import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import "../pages/css/feedback.css";

const TaskFeedback = () => {
  const [data, setData] = useState([
    {
      content: "",
    },
  ]);

  const handleChange = (event) => {
    console.log("works");
    const { id, value } = event.target;
    setData((prevLoginInfo) => ({
      ...prevLoginInfo,
      [id]: value,
    }));
  };

  const AddAnswer = () => {
    axios
      .post(
        "http://localhost:8081/feedback/add",
        {
          content: data.content,
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
    <div>
      <textarea
        className="view-task--description"
        type="text"
        id="content"
        placeholder="content"
        onChange={handleChange}
      />

      <button className="feedback--button" onClick={AddAnswer}>
        Add Answer
      </button>
    </div>
  );
};

export default TaskFeedback;
