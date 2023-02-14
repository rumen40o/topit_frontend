import { useState } from "react";
import axios from "axios";

const AddTask = () => {
  const [data, setData] = useState([
    {
      nameTask: "",
      description: "",
      link: "",
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

  const addTask = () => {
    axios
      .post("http://localhost:8080/task/admin/add", {
        nameTask: data.nameTask,
        description: data.description,
        link: data.link,
      })
      .then(() => {
        console.log("function successfull");
      });
  };
  return (
    <div>
      <div id="signup-div">
        <div id="input-div">
          <input
            type="text"
            id="nameTask"
            placeholder="Task name"
            onChange={handleChange}
            autofocus
          />
          <input
            type="text"
            id="description"
            placeholder="description"
            onChange={handleChange}
          />
          <input
            type="text"
            id="link"
            placeholder="link"
            onChange={handleChange}
          />
        </div>
        <button id="login-button" tabindex="-1" onClick={addTask}>
          addTask
        </button>
      </div>
    </div>
  );
};
export default AddTask;
