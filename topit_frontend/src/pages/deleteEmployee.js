import { useState } from 'react';
import axios from 'axios';
import { Link } from "react-router-dom";

const AddEmployees = () => {
  const [data,setData]= useState([{
    name : "",
    email : "",
    jobTitle : "",
    phone : "",
    imageURL : ""
}
]
)
console.log(data)

  const deleteEmployee = () => {
        axios.delete('http://localhost:8080/admin/delete',{
        name:data.name,
        email:data.email,
        jobTitle:data.jobTitle,
        phone:data.phone,
        imageURL:data.imageURL
       }).then(() => console.log('function successfull'))

    }
    return (
      <div>
        <div>
            <h1>Are you sure?</h1>
            <button onClick={deleteEmployee}>Delete</button>
            <Link to="/employee"><button>Cancel</button></Link>
        </div>
      </div>
    );
  };
  export default AddEmployees;