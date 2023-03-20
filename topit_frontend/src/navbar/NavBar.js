import React, { useState } from "react";
import NavbarButton from "./NavbarButton";
import NavbarHighlight from "./NavbarHighlight";
import "./navbar.css";

export default function NavBar(props) {
  const [highlightLocation, setHighlightLocation] = useState(0);
  const [selectedId, setSelectedId] = useState(props.selectedButtonId);

  const [prevTargetId, setPrevTargetId] = useState(null);

  function handleClick(targetId) {
    setSelectedId(targetId);

    if (targetId === 4) {
      setHighlightLocation(`translateY(${624}px`);
      setPrevTargetId(targetId);
    } else {
      setHighlightLocation(`translateY(${12.605042016806722 * targetId}vh`);
      setPrevTargetId(targetId);
    }
  }

  return (
    <div className="navbar">
      <div className="navbar--top-div">
        <NavbarHighlight location={`on-${selectedId}`} />
        <NavbarButton
          title="Home"
          address="/"
          id={0}
          isSelected={selectedId === 0 ? true : false}
          handleClick={() => handleClick(0)}
        />
        <NavbarButton
          title="Employees"
          address="/employee"
          id={1}
          isSelected={selectedId === 1 ? true : false}
          handleClick={() => handleClick(1)}
        />
        <NavbarButton
          title="Tasks"
          address="/task"
          id={2}
          isSelected={selectedId === 2 ? true : false}
          handleClick={() => handleClick(2)}
        />
        <NavbarButton
          title="Events"
          address="/event"
          id={3}
          isSelected={selectedId === 3 ? true : false}
          handleClick={() => handleClick(3)}
        />
        <NavbarButton
          title="Teams"
          address="/teams"
          id={4}
          isSelected={selectedId === 4 ? true : false}
          handleClick={() => handleClick(4)}
        />
      </div>
      

      <NavbarButton
        title="Account"
        address="/login"
        id={5}
        isSelected={selectedId === 5 ? true : false}
        handleClick={() => handleClick(5)}
      />
    </div>
  );
}
