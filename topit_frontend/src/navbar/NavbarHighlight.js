import "./navbarHighlight.css";

export default function NavbarHighlight(props) {
  return (
    <div className={`navbar--highlight ${props.location}`}>
      <div className="navbar--highlight top"></div>
      <div className="navbar--highlight mid"></div>
      <div className="navbar--highlight bot"></div>
    </div>
  );
}
