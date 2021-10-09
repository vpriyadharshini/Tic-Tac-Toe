import React ,{useState} from "react";
import Cell from "./Cell";

function Box(){

    const [cell, setCell] = useState(Array(9).fill(null));
    const [x,setX]=useState(true);

    const result=winner(cell);
    let status;
    if(result){
        status='Winner : '+result;
    }else{
        status='Player Turn : '+(x?'X':'O');
    }
    
    const eachCell=(position)=>{
        return (
            <Cell value={cell[position]} onClick={()=>handleClick(position)}/>
        )
    }

    const handleClick=(position)=>{
        if(cell[position]===null){
        const eachCell=cell.slice();
        eachCell[position]=x?'X':'O';
        setCell(eachCell);
        setX(!x);
        }
    }

    function winner(cell){
        const combination = [
            [0, 1, 2],
            [3, 4, 5],
            [6, 7, 8],
            [0, 3, 6],
            [1, 4, 7],
            [2, 5, 8],
            [0, 4, 8],
            [2, 4, 6],
        ];
        for (let i = 0; i < combination.length; i++) {
            const [c1, c2, c3] = combination[i];
            if (cell[c1] && cell[c1] === cell[c2] && cell[c1] === cell[c3] ){
                return cell[c1];
            } 
        }
        return null;
    }

    return <>
    <div className="box">
       <div className="box-row">
         {eachCell(0)}
         {eachCell(1)}
         {eachCell(2)}
       </div>

       <div className="box-row">
         {eachCell(3)}
         {eachCell(4)}
         {eachCell(5)}
       </div>

       <div className="box-row">
         {eachCell(6)}
         {eachCell(7)}
         {eachCell(8)}
       </div>
       <span>{status}</span>
    </div>
    </>

}
export default Box;