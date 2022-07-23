import React, { useState } from 'react'
import { useEffect } from 'react';
import Nametable from './nametable';

export default function Midsingle({mid}) {
    const [toggle, settoggle] = useState(0);
    useEffect(() => {
        if (mid === "BOYS" || mid==="GIRLS" || mid==="UNISEX") {
            settoggle(1)
        }
        else{
            settoggle(0)
        }
    }, [mid]);
  return (
    <div className="event-schedule-area-two bg-color pad100">
        <div className="row">
            {toggle?<div className="single">{mid}</div>:<div className="single">Names with {mid}</div>}
        </div>
        <div className="row">
            <div className="col-lg-4">
               <Nametable/>
            </div>
            <div className="col-lg-4">
            <Nametable/>
            </div>

            <div className="col-lg-4">
            <Nametable/>
            </div>

           
        </div>
</div>
  )
}
