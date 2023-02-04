

import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from 'axios';

const Employees = () => {

  const [data, setData] = useState([])

  useEffect(() => {
    axios.get('http://localhost:8080/admin/all')
    .then(res =>{
      console.log("Getting from ::::::", res.data)
      setData(res.data)
    }).catch(err => console.log(err))
  },[])

    const arr = data.map((data, index) =>{
      return (
        <tr>
            <th>{data.id}</th>
            <th>{data.name}</th>
            <th>{data.email}</th>
            <th>{data.jobTitle}</th>
            <th>{data.phone}</th>
            <th>{data.imageURL}</th>
          </tr>
      )
    })





    return (
      <div>
        <Link to="/addEmployee"><button id='addEmployeeButton'>AddEmployee</button></Link>
        <Link to="/updateEmployee"><button id='updateEmployeeButton'>Edit</button></Link>
        <Link to="/deleteEmployee"><button id='deleteEmployeeButton'>Delete</button></Link>
        <table>
          <tr>
            <th>ID</th>
            <th>name</th>
            <th>email</th>
            <th>JobTitle</th>
            <th>phone</th>
            <th>imageURL</th>
          </tr>
          {arr}
        </table>



     </div>
    );
  };
  
  export default Employees;