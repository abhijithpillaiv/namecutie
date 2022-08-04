import React from "react";
import { useState } from "react";
import "./namepage.css";
import lovefalse from "../../static/lovex.png";
import lovetrue from "../../static/love.png";
import Message from "../message/Message";
import CIcon from "@coreui/icons-react";
import { cilEnvelopeClosed } from "@coreui/icons";
import { useEffect } from "react";
import axios from "axios";
import { port } from "../../context/collection";
export default function Details({ props }) {
  const [isClick, setClick] = useState(false);
  const [ads, setads] = useState(null);
  useEffect(() => {
    console.log(isClick);
  }, [isClick]);
  const clickhandler = () => {
    if (isClick === true) {
      setClick(false);
    } else {
      setClick(true);
    }
  };
  const [toggler, settoggler] = useState(null);
  const messageHandler=()=>{
    settoggler(true)
  }

  useEffect(() => {
    axios.get(port+'api/getAds').then((res)=>{
      setads(res.data[2])
    })
  }, []);

  return (
    <div className="container-fluid">
      <div className="namepageheader">
        <div className="row">
          <div  className="col-9">
            <div className="name">
              {props.name}
              {isClick ? (
                <img
                  src={lovetrue}
                  onClick={clickhandler}
                  alt="lovetrue"
                  className="image"
                />
              ) : (
                <img
                  onClick={clickhandler}
                  src={lovefalse}
                  alt="lovefalse"
                  className="imagelovefalse"
                />
              )}
              <span className="lovecount">{props.like}</span>
            </div>
            <div style={{textAlign:'left'}} className="row">
              <div className="col-lg-2 col-sm-12">
                <div className="gender">Gender</div>
              </div>
              <div style={{paddingLeft:'25px',paddingBottom:'10px'}} className="col-lg-10 col-sm-12">
                <span className="ans"> {props.gender}</span>
              </div>
            </div>
            <div style={{textAlign:'left'}} className="row">
              <div className="col-lg-2 col-sm-12">
                <div className="meaning">Meaning</div>
              </div>
              <div style={{paddingLeft:'25px'}} className="col-lg-10 col-sm-12">
                <span className="ans">{props.meaning}</span>
              </div>
            </div>
            <div style={{textAlign:'left'}} className="row">
              <div className="col-lg-2 col-sm-12">
                <div className="origin">Ethnic</div>
              </div>
            <div style={{paddingLeft:'25px'}} className="col-lg-10 col-sm-12">
                <span className="ans">
                  {props.ethni?props.ethni.map((name) => (
                    <span style={{ fontSize: "15px", fontWeight: "normal" }}>
                      {" "}
                      {name} ,
                    </span>
                  )):null}
                </span>{" "}
              </div>
            </div>
            <div style={{cursor:'pointer'}} onClick={messageHandler} className="sugg">
              <CIcon icon={cilEnvelopeClosed} size="lg" className="suggestion" /> Write
              Your valuable suggestions to us..
            </div>
            {toggler?<Message settoggler={settoggler}/>:null}
          </div>
          {ads?<div className="col-3">{ads.ads}</div>:<div className="col-3">AD GOES HERE</div>}
        </div>
      </div>
    </div>
  );
}
