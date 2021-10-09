import React from "react";

function Cell(props){
    return <>
    <button className="btn-c" onClick={()=>props.onClick()}>{props.value}</button>
    </>
}
export default Cell;