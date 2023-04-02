import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import "../pages/css/tasks.css";

const Teams = () =>{
    const [data, setData] = useState([]);

    useEffect(() => {
      axios
        .get("http://localhost:8081/team/admin/all", {
          headers: {
            Authorization: "Bearer " + localStorage.token,
          },
        })
        .then((res) => {
          console.log("Getting from ::::::", res.data);
          setData(res.data);
        })
        .catch((err) => console.log(err));
    }, []);
  
    const deleteTask = (id, e) => {
      axios
        .delete(`http://localhost:8081/team/admin/delete/${id}`, {
          headers: {
            Authorization: "Bearer " + localStorage.token,
          },
        })
        .then(() => console.log("function successfull"))
        .then(window.location.reload());
    };
    return(
        <table className="tasks--table">
      <tr className="tasks--headers">
        <th className="task--name">Task Name</th>
        <th>Leader</th>
        <th>View</th>
        <th>Edit</th>
        <th>Delete</th>
      </tr>
      {data.map((data, index) => (
        <tr>
          <td>{data.nameTeam}</td>
          <td>
            <Link to={`/viewTeam/${data.id}`}>
              <p className="tasks--link">View</p>
            </Link>
          </td>
          <td>
            <Link to={`/updateTeam/${data.id}`}>
              <p className="tasks--link">Edit</p>
            </Link>
          </td>
          <td>
            <button
              className="tasks--link"
              >
              Delete
            </button>
          </td>
        </tr>
      ))}
    </table>
    );
}
export default Teams;
