import { Link } from "react-router-dom";
import axios from "axios";
import { useState } from "react";
import "./css/tasks.css";

const AddTeam = () => {

  const [data, setData] = useState({
    name: "",
    leader: "",
    members: ""
  });
  console.log("------data");
  console.log(data);
  console.log("----------");

  const addTeam = () => {
    console.log(data);
    if (
      data.name == null ||
      data.leader == null ||
      data.members == null
    ) {
      alert("Невалидни данни");
    } else {
      axios
        .post(
          "http://localhost:8081/team/add",
          {
            name: data.name,
            leader: data.leader,
            members: data.members,
          },
          {
            headers: {
              Authorization: "Bearer " + localStorage.token,
            },
          }
        )
        .then(() => {
          console.log("function successfull");
          console.log("------------------------")
          console.log(data)
          console.log("------------------------")
        })
    }
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setData((prevLoginInfo) => ({
      ...prevLoginInfo,
      [name]: value,
    }));
  };




  const [emps, setEmp] = useState([]);
  const findEmployees = (emp) => {
    axios
      .get("http://localhost:8081/team/allEmployees", {
        headers: {
          Authorization: "Bearer " + localStorage.token,
        },
      })
      .then((res) => {
        setEmp(res.data);
        console.log(emps)
        console.log("Getting from ::::::", emps);
      });
  };

  console.log("one more test: " + emps);

  return (
    <div className="login">
    <form className="form">
      <input
        className="form-input"
        type="text"
        name="name"
        placeholder="name"
        onChange={handleChange}
        autofocus
      />
      <select
        className="form-input"
        type="text"
        name="leader"
        placeholder="leader"
        id="email-input"
        onChange={handleChange}
        onClick={findEmployees}
        multiple
      >
            {emps?.map((emps) => (
              <option value={emps}>{emps}</option>
            ))}
      </select>
      <input
        className="form-input"
        type="text"
        name="members"
        placeholder="members"
        onChange={handleChange}
      />
      <button className="form-button">
        <Link to={"/teams"}>
          <button className="form-button" tabindex="-1" onClick={addTeam}>
            addTeam
          </button>
        </Link>
      </button>
    </form>
  </div>
  );
};

export default AddTeam;
