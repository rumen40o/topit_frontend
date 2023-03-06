import Calendar from "../Calendar/Calendar";
import { Link } from "react-router-dom";

const Event = () => {
  return (
    <div>
      <Link to="/addEvent">
        <button>AddEvent</button>
      </Link>

      <Calendar />
    </div>
  );
};

export default Event;
