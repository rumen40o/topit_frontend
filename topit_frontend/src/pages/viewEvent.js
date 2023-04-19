import { useState, useEffect } from "react";
import { useParams ,Link} from "react-router-dom";
import axios from "axios";
import "./css/viewTask.css";

const ViewEvent = () => {
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
  const deleteEvent = (id, e) => {
    axios
      .delete(`http://localhost:8081/event/delete/${id}`, {
        headers: {
          Authorization: "Bearer " + localStorage.token,
        },
      })
      .then(() => console.log("function successfull"))
      .then(window.location.reload());
  };
  const handleChange = (event) => {
    console.log("works");
    const { id, value } = event.target;
    setData((prevLoginInfo) => ({
      ...prevLoginInfo,
      [id]: value,
    }));
  };
  
  return (
    <div className="view-task">
      <h1 className="view-task--title">{data.name}</h1>
      <h3 className="view-task--date">{data.startDateEvent}</h3>
      <h3 className="view-task--date">{data.endDateEvent}</h3>
      <p className="view-task--description">{data.description}</p>

          <div>
            
            <Link to={`/updateEvent/${data.id}`}>
            <button className="edit--button">Edit</button>
            </Link>
            
            <button className="delete--button" onClick={(e) => deleteEvent(data.id, e)}><Link to="/event">Delete</Link></button>
    </div>
    </div>
  );
};

export default ViewEvent;
