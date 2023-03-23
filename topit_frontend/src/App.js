import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Events from "./pages/Events";
import Employees from "./pages/Employees";
import Tasks from "./pages/Tasks";
import Account from "./pages/Account";
import "./App.css";
import NavBar from "./navbar/NavBar";
import Login from "./pages/Login";
import Register from "./pages/Register";
import UpdateEmployee from "./pages/UpdateEmployee";
import AddTask from "./pages/AddTask";
import AddEvent from "./pages/AddEvent";
import ViewTask from "./pages/ViewTask";
import UpdateTask from "./pages/UpdateTask";
import UpdateEvent from "./pages/UpdateEvent";
import ViewEvent from "./pages/viewEvent";
import { useState } from "react";

import Teams from "./components/Teams";

function App() {
  const [user, setUser] = useState(undefined);

  return (
    <div className="app">
      <div className="routes">
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Home />
              </>
            }
          />
          <Route
            path="/employee"
            element={
              <>
                <NavBar selectedButtonId={1} />
                <Employees />
              </>
            }
          />
          <Route
            path="/updateEmployee/:id"
            element={
              <>
                <NavBar selectedButtonId={1} />
                <UpdateEmployee />
              </>
            }
          />
          <Route
            path="/viewEvent/:id"
            element={
              <>
                <NavBar selectedButtonId={1} />
                <ViewEvent />
              </>
            }
          />
          <Route
            path="/task"
            element={
              <>
                <NavBar selectedButtonId={2} />
                <Tasks />
              </>
            }
          />
          <Route
            path="/addTask"
            element={
              <>
                <NavBar selectedButtonId={2} />
                <AddTask />
              </>
            }
          />
          <Route
            path="/viewTask/:id"
            element={
              <>
                <NavBar selectedButtonId={2} />
                <ViewTask />
              </>
            }
          />
          <Route
            path="/updateTask/:id"
            element={
              <>
                <NavBar selectedButtonId={2} />
                <UpdateTask />
              </>
            }
          />
          <Route
            path="/event"
            element={
              <>
                <NavBar selectedButtonId={3} />
                <Events />
              </>
            }
          />
          <Route
            path="/addEvent"
            element={
              <>
                <NavBar selectedButtonId={3} />
                <AddEvent />
              </>
            }
          />
          <Route
            path="/updateEvent/:id"
            element={
              <>
                <NavBar selectedButtonId={3} />
                <UpdateEvent />
              </>
            }
          />
          <Route
            path="/account/:id"
            element={
              <>
                <NavBar selectedButtonId={5} />
                <Account />
              </>
            }
          />
          <Route
            path="/login"
            element={
              <>
                <NavBar selectedButtonId={5} />
                <Login setUser={setUser} />
              </>
            }
          />
          <Route
            path="/register"
            element={
              <>
                <NavBar selectedButtonId={5} />
                <Register />
              </>
            }
          />
          <Route
            path="/teams"
            element={
              <>
                <NavBar selectedButtonId={4} />
                <Teams />
              </>
            }
          />
        </Routes>
      </div>
    </div>
  );
}

export default App;
