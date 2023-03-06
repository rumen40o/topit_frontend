import { useState } from "react";
import axios from "axios";
import "./css/addEvent.css";

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
      .post("http://localhost:8081/event/admin/add", {
        name: data.name,
        description: data.description,
        startDateEvent: data.startDateEvent,
        endDateEvent: data.endDateEvent,
      })
      .then(() => {
        console.log("function successfull");
      });
  };
  return (
    <div>
      <div className="add-task">
        {/* <div id=""> */}
        <input
          type="text"
          id="name"
          placeholder="name"
          onChange={handleChange}
          autofocus
        />
        <input
          type="text"
          id="description"
          placeholder="description"
          onChange={handleChange}
        />
        <label>startDate</label>
        <input
          type="date"
          id="startDateEvent"
          placeholder="startDateEvent"
          onChange={handleChange}
        />
        <label>endDate</label>
        <input
          type="date"
          id="endDateEvent"
          placeholder="endDateEvent"
          onChange={handleChange}
        />
        {/* </div> */}
        <button id="task-button" tabindex="-1" onClick={addEvent}>
          addEvent
        </button>
      </div>
    </div>
  );
};
export default AddEvent;
