import React from "react";
import Fullcalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import "./calendar.css";

const Calendar = () => {
  const [data, setData] = useState([]);
  function GetEvents() {
    useEffect(() => {
      axios
        .get("http://localhost:8081/event/admin/all")
        .then((res) => {
          console.log("Getting from ::::::", res.data);
          setData(res.data);
        })
        .catch((err) => console.log(err));
    }, []);
  }
  return (
    <div>
      <div id="calendar">
        <Fullcalendar
          plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
          initialView={"dayGridMonth"}
          events={[
            {
              title: `${data.name}`,
              start: `${data.startDateEvent}`,
              end: `${data.endDateEvent}`,
            },
          ]}
          headerToolbar={{
            title: "none",
            start: "today prev,next",
            end: "dayGridMonth, timeGridWeek, timeGridDay",
          }}
          height={"100vh"}
        />
      </div>
    </div>
  );
};

export default Calendar;
