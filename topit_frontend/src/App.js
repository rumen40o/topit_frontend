import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Events from "./pages/Events";
import AddEmployee from "./pages/AddEmployee";
import Employees from "./pages/Employees";
import Tasks from "./pages/Tasks";
import Account from "./pages/Account";
import "./App.css";
import NavBar from "./navbar/NavBar";
import Login from "./pages/Login";
import Register from "./pages/Register";
import UpdateEmployee from "./pages/UpdateEmployee";
import AddTask from "./pages/AddTask";
import ViewTask from "./pages/ViewTask";
import { useState } from "react";

function App() {
  const [user, setUser] = useState(undefined);
  console.log(user);

  return (
    <>
      <div className="routes">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/employee" element={<Employees />} />
          <Route path="/task" element={<Tasks />} />
          <Route path="/event" element={<Events />} />
          <Route path="/account" element={<Account />} />
          <Route path="/login" element={<Login setUser={setUser} />} />
          <Route path="/register" element={<Register />} />
          <Route path="/addEmployee" element={<AddEmployee />} />
          <Route path="/updateEmployee/:id" element={<UpdateEmployee />} />
          <Route path="/addTask" element={<AddTask />} />
          <Route path="/viewTask/:id" element={<ViewTask />} />
        </Routes>
      </div>
      <div className="navbar">
        <NavBar />
      </div>
    </>
  );
}

export default App;
