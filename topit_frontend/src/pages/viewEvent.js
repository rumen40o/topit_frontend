import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import "./css/viewTask.css";

const ViewEvent = (props) => {
 
  const [data, setData] = useState([
    {
      name: "",
      description: "",
      startDateEvent: "",
      endDateEvent: "",
    },
  ]);

  const { id } = useParams();

  const loadEvent = async () => {
    const result = await axios.get(
      `http://localhost:8081/event/find/${id}`,
      {
        headers: {
          Authorization: "Bearer " + localStorage.token,
        },
      }
    );
    setData(result.data);
  };
  useEffect(() => {
    loadEvent().then(console.log(data.endDate));
  }, []);

  return (
    <div>
      <h1>{props.name}</h1>
      <p>{props.startDateEvent}</p>
      <p>{props.endDateEvent}</p>
      <p>{props.description}</p>
    </div>
  );
};

export default ViewEvent;