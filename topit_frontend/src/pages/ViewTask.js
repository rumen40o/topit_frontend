import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const ViewTask = () => {
  const [data, setData] = useState([
    {
      nameTask: "",
      description: "",
      link: "",
    },
  ]);

  const { id } = useParams();

  const loadTask = async () => {
    const result = await axios.get(
      `http://localhost:8080/task/admin/find/${id}`
    );
    setData(result.data);
  };
  useEffect(() => {
    loadTask();
  }, []);
  return (
    <div>
      {data.map((data, index) => (
        <div>
          <h1>{data.nameTask}</h1>
          <p>{data.description}</p>
          <a href={data.link}>{data.link}</a>
        </div>
      ))}
    </div>
  );
};

export default ViewTask;
