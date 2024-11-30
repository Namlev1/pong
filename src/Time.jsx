import {useState} from "react";

function Time(){
    const [time,setTime]=useState(0)
    
    return <p>{time}s</p>
}

export default Time;