import { Link } from "react-router-dom";
import "./navbarButton.css";

export default function NavbarButton(props) {
  return (
    <Link to={props.address}>
      <button
        className={
          props.isSelected ? "navbar--button selected" : "navbar--button"
        }
        id="button-1"
        onClick={props.handleClick}
      >
        {props.title}
      </button>
    </Link>
  );
}
