import React, { useState } from "react";
import { Link } from "react-router-dom";
import './navbar.css';


export default function NavBar(){

    const  [highlightLocation, setHighlightLocation] = useState(0)
    const  [textColor, setTextColor] = useState({
        0:["black",true],
        1:["white",false],
        2:["white",false],
        3:["red",false],
        4:["white",false]
    })
    const [backgroundColor, setBackgroundColor] = useState({
        0:["transparent",true],
        1:["#fff5",false],
        2:["#fff5",false],
        3:["#fff5",false],
        4:["#fff5",false]
    })

    const [prevTargetId, setPrevTargetId] = useState(null)

    function handleClick(targetId) {
        if(targetId === "account"){
            setTextColor(textColor =>({
                ...textColor, [4] : "black", [prevTargetId] : "white"
             }))
             setBackgroundColor(textColor =>({
                ...textColor, [4] : "transparent", [prevTargetId] : "#fff5"
             }))
             setHighlightLocation(`translateY(${624}px`)
             setPrevTargetId(4)
        }else{
            if(!textColor[targetId[1]]){
                setTextColor(textColor =>({
                    ...textColor, [targetId] : "black", [prevTargetId] : "white"
                 }))
                 setBackgroundColor(textColor =>({
                    ...textColor, [targetId] : "transparent", [prevTargetId] : "#fff5"
                 }))
                 setHighlightLocation(`translateY(${12.605042016806722*targetId}vh`)
                 setPrevTargetId(targetId)
            }
        }
       
    }
    return(

        <div id="container">
            <Highlight location = {highlightLocation}/>
            <div id="top-div">
                <Link to="/"><button className="button" style={{color:textColor[0], backgroundColor:backgroundColor[0]}} id="button-1" onClick={() => handleClick(0)}>Home</button></Link>
                <Link to="/employee"><button className="button" style={{color:textColor[1], backgroundColor:backgroundColor[1]}} id="button-2" onClick={() => handleClick(1)}>Employees</button></Link>
                <Link to="/task"><button className="button" style={{color:textColor[2], backgroundColor:backgroundColor[2]}} id="button-3" onClick={() => handleClick(2)}>Tasks</button></Link>
                <Link to="/event"><button className="button" style={{color:textColor[3], backgroundColor:backgroundColor[3]}} id="button-4" onClick={() => handleClick(3)}>Events</button></Link>
            </div>
            <Link to="/account"><button className="button" style={{color:textColor[4], backgroundColor:backgroundColor[4]}} id="button-5" onClick={() => handleClick("account")}>Account</button></Link> 
        </div>
    );
}


function Highlight(props){

    return(
        <div className="highlight" style={{transform: props.location}}>
            <div className="highlight top"></div>
            <div className="highlight mid"></div>
            <div className="highlight bot"></div>
        </div>
    )
}