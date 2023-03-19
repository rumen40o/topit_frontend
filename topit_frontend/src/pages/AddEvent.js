import { useState } from "react";
import axios from "axios";
import "./css/addEvent.css";
import { Link } from "react-router-dom";

const AddEvent = () => {
  const [data, setData] = useState([
    {
      name: "",
      description: "",
      startDateEvent: "",
      endDateEvent: "",
    },
  ]);
  console.log(data);

  const handleChange = (event) => {
    console.log("works");
    const { id, value } = event.target;
    setData((prevLoginInfo) => ({
      ...prevLoginInfo,
      [id]: value,
    }));
  };

  const addEvent = () => {
    axios
      .post("http://localhost:8081/event/add", {
        name: data.name,
        description: data.description,
        startDateEvent: data.startDateEvent,
        endDateEvent: data.endDateEvent,
      },{
        headers: {
        Authorization: "Bearer " + localStorage.token,
      }
    })
      .then(() => {
        console.log("function successfull");
      });
  };
  return (
    <div className="login">
      <form className="form">
        <input
        className="form-input"
          type="text"
          id="name"
          placeholder="name"
          onChange={handleChange}
          autofocus
        />
        <input
        className="form-input"
          type="text"
          id="description"
          placeholder="description"
          onChange={handleChange}
        />
        <label>startDate</label>
        <input
        className="form-input"
          type="date"
          id="startDateEvent"
          placeholder="startDateEvent"
          onChange={handleChange}
        />
        <label>endDate</label>
        <input
        className="form-input"
          type="date"
          id="endDateEvent"
          placeholder="endDateEvent"
          onChange={handleChange}
        />
        <button className="form-button">
        <Link to={"/event"}>
        <button className="form-button" tabindex="-1" onClick={addEvent}>
          addEvent
        </button>
        </Link>
        </button>
        </form>
      </div>
   
  );
};
export default AddEvent;
