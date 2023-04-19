import { useState, useEffect, useRef } from "react";
import { Link,useParams } from "react-router-dom";
import axios from "axios";
import "../pages/css/feedback.css";

const TaskFeedback = () => {
  const [feedback, setFeetback] = useState([
    {
      content: "",
    },
  ]);
 
  const handleChange = (event) => {
    console.log("works");
    const { name, value } = event.target;
    setFeetback((prevLoginInfo) => ({
      ...prevLoginInfo,
      [name]: value,
    }));
  };

  const AddAnswer = () => {
    axios
      .post(
        "http://localhost:8081/feedback/add",
        {
          content: feedback.content,
          
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
    <div className="login">
    <form className="form">
      <textarea
        className="view-task--description"
        type="text"
        name="content"
        placeholder="content"
        onChange={handleChange}
      />
     
      <Link to={"/task"}>
      <button className="feedback--button" onClick={AddAnswer}>
        Add Answer
      </button>
      </Link>
      </form>
    </div>
  );
};

export default TaskFeedback;
