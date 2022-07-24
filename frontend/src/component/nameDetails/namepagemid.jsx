import React from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";
import "./namepage.css";
import lovefalse from '../../static/lovex.png'
import lovetrue from '../../static/love.png'
import CIcon from '@coreui/icons-react'
import {
  cilPen
} from '@coreui/icons'
import { useEffect } from "react";
export default function Details() {
  const [isClick, setClick] = useState(false);
  useEffect(() => {
   console.log(isClick);
  }, [isClick])
  const clickhandler=()=>{
    if (isClick==true) {
      setClick(false)
    }
    else{
      setClick(true)
    }
  }
  
  const { details } = useParams();
  return (
    <div className="container-fluid">
      <div className="namepageheader">
        <div className="row">
          <div className="col-7">
            <div className="name">NAME 
            {isClick ?<img src={lovetrue} onClick={clickhandler}  alt="lovetrue" className="image" />:<img onClick={clickhandler} src={lovefalse} alt="lovefalse" className="imagelovefalse" />}
            <span className="lovecount">200</span>
            </div>
            <div className="meaning">Meaning || <span className="ans"> Meaning goes here</span></div>
            <div className="gender">Gender   || <span className="ans"> Male</span></div>
            <div className="origin">Origin  || <span className="ans">XXX</span></div>
            <div className="sugg"><CIcon icon={cilPen} size="lg" className="suggestion"/> Write Your valuable suggestions to us..</div>
          </div>
          <div className="col-5">
            AD GOES HERE
          </div>
        </div>
      </div>
    </div>
  );
}
