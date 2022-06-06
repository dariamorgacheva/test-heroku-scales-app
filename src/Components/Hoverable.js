import React, { useState } from 'react';
import '../App.css';

export function Hoverable(props) {
  const [isShown, setIsShown] = useState(false);

  return (
    <div>
      <div 

        onMouseEnter={() => setIsShown(true)}
        onMouseLeave={() => setIsShown(false)}>
        {props.scale}
      </div>
      {isShown && (
        <div 
        style={{color:"#00495C", background: "#6F9C1C"}}>
          {props.intervals}
        </div>
      )}
    </div>
  );
}
