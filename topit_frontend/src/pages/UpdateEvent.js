
import { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import "./css/updateEmployee.css";

const UpdateEvent = () => {
  const [data, setData] = useState([
    {
        name: "",
        description: "",
        startDateEvent: "",
        endDateEvent: "",
      },
  ]);
  console.log(data);
  const { id } = useParams();

  const handleChange = (event) => {
    console.log("works");
    const { id, value } = event.target;
    setData((prevLoginInfo) => ({
      ...prevLoginInfo,
      [id]: value,
    }));
  };

  useEffect(() => {
    loadEvent();
  }, []);



  const updateEvent= () => {
    axios
      .put(
        `http://localhost:8081/event/update/${id}`,
        {
            name: data.name,
            description: data.description,
            startDateEvent: data.startDateEvent,
            endDateEvent: data.endDateEvent,
          },
        {
          headers: {
            Authorization: "Bearer " + localStorage.token,
          },
        }
      )
      .then(() => console.log("function successfull"))
  };
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
  return (
    <div className="login">
      <form className="form">
        <input
          className="form-input"
          type="text"
          id="name"
          placeholder="name"
          value={data.name}
          onChange={handleChange}
          autofocus
        />
        <input
          className="form-input"
          type="text"
          id="description"
          placeholder="description"
          value={data.description}
          onChange={handleChange}
        />
        <label>startDate</label>
        <input
          className="form-input"
          type="date"
          id="startDateEvent"
          value={data.startDateEvent}
          placeholder="startDateEvent"
          onChange={handleChange}
        />
        <label>endDate</label>
        <input
          className="form-input"
          type="date"
          id="endDateEvent"
          value={data.endDateEvent}
          placeholder="endDateEvent"
          onChange={handleChange}
        />
        <button className="form-button">
          <Link to={"/event"}>
            <button className="form-button" tabindex="-1" onClick={updateEvent}>
              addEvent
            </button>
          </Link>
        </button>
      </form>
    </div>
  );
};
export default UpdateEvent;
