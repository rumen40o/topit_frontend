
import axios from "axios";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import "./css/viewTask.css";

const ViewTeam = () => {
    const [data, setData] = useState([]);
   
    const { id } = useParams();
  
    const loadTeam = async () => {
      const result = await axios.get(`http://localhost:8081/team/find/${id}`, {
        headers: {
          Authorization: "Bearer " + localStorage.token,
        },
      });
      setData(result.data);
    };

    useEffect(() => {
      loadTeam();
    }, []);
    
    
    return (
      <div className="view-task">
        <label>Team:</label>
        <h1 className="view-task--title">{data.name}</h1>
        <label>The leader is:</label>
        <h2 className="view-task--title">{data.leader}</h2>
        <label>The members are:</label>
        <h3>{data.members}</h3>
      </div>
    );
  };
  
  export default ViewTeam;