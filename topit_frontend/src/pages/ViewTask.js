import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import "./css/viewTask.css";

const ViewTask = () => {
  const [data, setData] = useState([
    {
      id:"",
      nameTask: "",
      description: "",
      endDate: "",
      link: "",
      description_answer: ""
    },
  ]);

  const { id } = useParams();

  const loadTask = async () => {
    const result = await axios.get(
      `http://localhost:8081/task/find/${id}`,
      {
        headers: {
          Authorization: "Bearer " + localStorage.token,
        },
      }
    );
    setData(result.data);
  };
  useEffect(() => {
    loadTask().then(console.log(data.endDate));
  }, []);

  const handleChange = (event) => {
    console.log("works");
    const { id, value } = event.target;
    setData((prevLoginInfo) => ({
      ...prevLoginInfo,
      [id]: value,
    }));
  };
  const addAnswer = () => {
    axios
      .put(
        `http://localhost:8081/task/add/answer/${id}`,
        {
          id:data.id,
          nameTask: data.nameTask,
          description: data.description,
          endDate: data.endDate,
          link: data.link,
          description_answer: data.description_answer,
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
    <div className="view-task">
      <h1 className="view-task--title">{data.nameTask}</h1>
      <h3 className="view-task--date">{data.endDate}</h3>
      <p className="view-task--description">{data.description}</p>
      <a href={data.link} className="view-task--link">
        {data.link}
      </a>
      <textarea className="view-task--description" 
          type="text"
          id="description_answer"
          placeholder="Answer"
          onChange={handleChange}/>
      <button onClick={addAnswer}>Add Answer</button>
      <h3>{data.description_answer}</h3>
    </div>
  );
};

export default ViewTask;
