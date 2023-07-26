import React,{useState} from 'react';

const Clock = () => {
  const [time, setTime] = useState("");

  function showTime(){
    setTime(new Date().toLocaleTimeString());
  }

  return (
    <div className="clock">
      <h1>Real Time Clock</h1>
      <button onClick={showTime}>Show Time</button>
      {
        time && <div className="time">{time}</div>
      }
    </div>
  );
};

export default Clock;
