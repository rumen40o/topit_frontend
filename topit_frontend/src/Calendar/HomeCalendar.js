import React from "react";
import Fullcalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction";
import { Link, useNavigate} from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import "./Homecalendar.css";

const HomeCalendar = () => {
  const [data, setData] = useState([]);
 const [selectedEvent, setSelectedEvent] = useState(null);
 const [selectedDate, setSelectedDate] = useState(null);
 const navigate = useNavigate();
 
  
    useEffect(() => {
      axios
        .get("http://localhost:8081/event/all",{
          headers: {
          Authorization: "Bearer " + localStorage.token,
        }
      })
        .then((res) => {
          console.log("Getting from ::::::", res.data);
          const formattedEvents = res.data.map(data =>({
            id: data.id,
            title: data.name,
            extendedProps:{
              description: data.description
            },
            start: data.startDateEvent,
            end: data.endDateEvent
          }))
          setData(formattedEvents);
        })
        .catch((err) => console.log(err));
    }, []);

    const handleEventClick = (info) => {
      setSelectedEvent(info.event);
    };
    const handleDateClick = (info) => {
      const selectedDate = info.startStr;
    setSelectedDate(selectedDate);

    navigate('/event',{state:{startDate: selectedDate}});
      
    };
  
    const handleCloseModal = () => {
      setSelectedEvent(null);
    };
    

  return (
    <div>
      <div id="home--calendar">
        <Fullcalendar
          plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
          initialView={"dayGridMonth"}
          selectable={true}
          dateClick={handleDateClick}
          events={data}
          headerToolbar={{
            title: "none",
            start: "today prev,next",
            end: "dayGridMonth, timeGridWeek, timeGridDay",
        }}
          eventClick={handleEventClick}
          height={"50vh"}
          
          
        />
        
        
      </div>
    </div>
  );
};

export default HomeCalendar;
