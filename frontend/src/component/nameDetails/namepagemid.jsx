import React from "react";
import { useState } from "react";
import "./namepage.css";
import lovefalse from "../../static/lovex.png";
import lovetrue from "../../static/love.png";
import Message from "../message/Message";
import CIcon from "@coreui/icons-react";
import { cilPen } from "@coreui/icons";
import { useEffect } from "react";
import axios from "axios";
import { useCookies } from 'react-cookie';
import { port } from "../../context/collection";
export default function Details({ props }) {
  const [cookies, setCookie] = useCookies(['like']);
  const [isClick, setClick] = useState(false);
  const [likeIndex, setlikeIndex] = useState(null);
  const [ads, setads] = useState(null);
  const [like, setlike] = useState(props.like);

  useEffect(() => {
    if (cookies.like) {
      cookies.like.map((key,index)=>{
        if (key===props._id) {
          setlikeIndex(index)
          setClick(true)
        }
        return(<div></div>)
      })
    }
  }, [props,cookies.like]);
  const clickhandler = () => {
    if (isClick === true) {
      axios.post(port+'api/like/',{like:parseInt(props.like)-1,id:props._id}).then(()=>{
        setClick(false);
        console.log(likeIndex);
        console.log(cookies.like);
        cookies.like.splice(likeIndex,1)
        setCookie('like',cookies.like,{path:'/'})
        setlike(parseInt(props.like)-1)
      })
    } else {
      axios.post(port+'api/like/',{like:parseInt(props.like)+1,id:props._id}).then(()=>{
        if (cookies.like) {
          cookies.like=[...cookies.like,props._id]
          setCookie('like',cookies.like,{path:'/'})
        }
        else{
          setCookie('like',[props._id] , { path: '/' });
        }
        setClick(true);
        setlike(parseInt(props.like)+1)
      })
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

  return <div className="container-fluid">
      <div className="namepageheader">
        <div className="row">
          <div  className="col-9">
            <div className="name">
              {props.name}
              {isClick ? (
                <img
                  src={lovetrue}
                  onClick={()=>clickhandler()}
                  alt="lovetrue"
                  className="image"
                />
              ) : (
                <img
                  onClick={()=>clickhandler()}
                  src={lovefalse}
                  alt="lovefalse"
                  className="imagelovefalse"
                />
              )}
              <span className="lovecount">{like}</span>
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
            <div style={{cursor:'pointer',color:'blue',textAlign:'left'}} onClick={messageHandler} className="sugg">
              <CIcon icon={cilPen} size="lg" className="suggestion" /> Write
              Your valuable suggestions to us..
            </div>
            {toggler?<Message settoggler={settoggler}/>:null}
          </div>
          {ads?<div className="col-3">{ads.ads}</div>:<div className="col-3">AD GOES HERE</div>}
        </div>
      </div>
    </div>
}
