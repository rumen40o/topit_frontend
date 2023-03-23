import React, { useState } from "react";
import NavbarButton from "./NavbarButton";
import NavbarHighlight from "./NavbarHighlight";
import "./navbar.css";

export default function NavBar(props) {
  const [selectedId, setSelectedId] = useState(props.selectedButtonId);

  return (
    <div className="navbar">
      <div className="navbar--top-div">
        <NavbarHighlight location={`on-${selectedId}`} />
        <NavbarButton
          title="Home"
          address="/"
          id={0}
          isSelected={selectedId === 0 ? true : false}
          handleClick={() => setSelectedId(0)}
        />
        <NavbarButton
          title="Employees"
          address="/employee"
          id={1}
          isSelected={selectedId === 1 ? true : false}
          handleClick={() => setSelectedId(1)}
        />
        <NavbarButton
          title="Tasks"
          address="/task"
          id={2}
          isSelected={selectedId === 2 ? true : false}
          handleClick={() => setSelectedId(2)}
        />
        <NavbarButton
          title="Events"
          address="/event"
          id={3}
          isSelected={selectedId === 3 ? true : false}
          handleClick={() => setSelectedId(3)}
        />
        <NavbarButton
          title="Teams"
          address="/teams"
          id={4}
          isSelected={selectedId === 4 ? true : false}
          handleClick={() => setSelectedId(4)}
        />
      </div>

      <NavbarButton
        title="Account"
        address={localStorage.token ? "/account" : "/login"}
        id={5}
        isSelected={selectedId === 5 ? true : false}
        handleClick={() => setSelectedId(5)}
      />
    </div>
  );
}
