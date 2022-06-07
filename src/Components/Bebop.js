import roots from '../Database/RootsDatabase.js';
import bebops from '../Database/BebopScales.js';
import '../App.css';
import { Hoverable } from './Hoverable.js';
import React from 'react';
import { useState } from 'react';

export function Bebop() {
  const [bebop, setBebop] = useState(bebops[0]);
  const [root, setRoot] = useState(roots[0]);
  const [pattern, setPattern ] = useState(1)

  function newOnlyScale() {
    setBebop(bebops[Math.floor(Math.random()*bebops.length)]); 
  } 
  function newPattern() {
    setPattern(Math.floor(Math.random()*7) + 1);
   }

  function newRoot() {
    setRoot(roots[Math.floor(Math.random()*roots.length)])
  }

  function newBebopScale() {
    newOnlyScale();
    newRoot();
    newPattern();
  }
 

  return (
       <div className="window container grid gap-4 grid-cols-1">
        <div className="scale-box text">
          <Hoverable intervals={bebop.intervals} scale={bebop.name}/>
          <button onClick={newOnlyScale} >new scale</button>
        </div>
        {/* <div class="scale-box text">   
          {bebop.intervals}  
        </div>    */}
        <div class="scale-box text">   
          {root.base}  
          <button onClick={newRoot} >new starting note!</button>    
        </div>   

        <div class="scale-box text">       
          Pattern: {pattern}
          <button onClick={newPattern} >new pattern!</button>  
        </div> 

        <div class="scale-box">
         <button class="text" onClick={newBebopScale} >new bebop scale!</button>         
        </div>
      </div> )
};
