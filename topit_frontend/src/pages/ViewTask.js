import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import "./css/viewTask.css";

const ViewTask = () => {
  const [data, setData] = useState([
    {
      nameTask: "",
      description: "",
      endDate: "",
      link: "",
    },
  ]);

  const { id } = useParams();

  const loadTask = async () => {
    const result = await axios.get(
      `http://localhost:8081/task/admin/find/${id}`
    );
    setData(result.data);
  };
  useEffect(() => {
    loadTask().then(console.log(data.endDate));
  }, []);

  return (
    <div className="view-task">
      <h1 className="view-task--title">{data.nameTask}</h1>
      <h3 className="view-task--date">{data.endDate}</h3>
      <p className="view-task--description">{data.description}</p>
      <a href={data.link} className="view-task--link">
        {data.link}
      </a>
    </div>
  );
};

export default ViewTask;
