import React from 'react'
import { useState,useEffect } from 'react'
import './clock.css'

const Clock = () => {
    const [time, setTime] = useState(0)
    const [timerOn, setTimerOn] = useState(false)
    useEffect(() => {
        let Interval=null;    
        if(timerOn){
            Interval=setInterval(()=>{
             setTime(prevTime=>prevTime + 10)   
            },10)
        }else{
            clearInterval(Interval)}
        return () => {clearInterval(Interval)
        }
    }, [timerOn])
    return (
        <div className="App-header">
        <span>{("0" + Math.floor((time/60000) % 60)).slice(-2)}:</span>
         <span>{('0'+ Math.floor((time/1000) % 60)).slice(-2)}:</span>
        <span>{('0'+ (time/10) % 100).slice(-2)}</span>
        <br />
        <button  onClick={()=>setTimerOn(true)}>start</button>
        <button onClick={()=>setTimerOn(false)}>stop</button>
        <button onClick={()=>setTimerOn(true)}>Resume</button>
        <button onClick={()=>setTime(0)}>Reset</button>
        </div>
    )
}

export default Clock
