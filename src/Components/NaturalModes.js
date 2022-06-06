import roots from '../Database/RootsDatabase.js';
import modes from '../Database/ModesDatabase.js';
import "../App.css";
import React from 'react';
import { useState } from 'react';
import { Hoverable } from './Hoverable.js';



export function NaturalModes() {
 
    const [root, setRoot] = useState(roots[0]);
    const [mode, setMode] = useState(modes[0]);

    function newRoot() {
      setRoot(roots[Math.floor(Math.random()*roots.length)]);
      setMode(modes[Math.floor(Math.random()*modes.length)]);
    }
    const pattern = Math.floor(Math.random()*7) + 1;
    //he vants 3 cards, all tourqouise
    // he vants control panel (user can choose from all modes (checkmark) or choose all)
    return (
      <div className="grid gap-4 grid-cols-1">
        <div className="scale-box text"> 
              {root.base} 
        </div>  
       <div className="scale-box text">
         <Hoverable intervals={mode.intervals} scale={mode.name}/>
       </div>

        <div class="scale-box text">       
        Pattern: {pattern} 
        </div> 

        <div class="scale-box">
          <button id='new-scale'class="text" onClick={newRoot}>New Scale</button>
        </div>
      </div> )
}

