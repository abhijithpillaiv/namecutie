import React from "react";
import { useState } from "react";
import DocumentMeta from "react-document-meta";
import "./namepage.css";
import lovefalse from "../../static/lovex.png";
import lovetrue from "../../static/love.png";
import Message from "../message/Message";
import CIcon from "@coreui/icons-react";
import { cilPen } from "@coreui/icons";
import { useEffect } from "react";
import axios from "axios";
import { useCookies } from "react-cookie";
import { port } from "../../context/collection";
import Ads from "../ads/ads";
import { Link } from "react-router-dom";

export default function Details({ props }) {
  const [cookies, setCookie] = useCookies(["like"]);
  const [isClick, setClick] = useState(false);
  const [likeIndex, setlikeIndex] = useState(null);
  const [like, setlike] = useState(props.like);
  const [progress, setprogress] = useState(false);
  const [title, settitle] = useState('');
  const [des, setdes] = useState('');
  const [keyword, setkeyword] = useState('');
  const name=props.name
  const gender=props.gender
  const origin=props.ethni[0]

  useEffect(() => {
    if (cookies.like) {
      cookies.like.map((key, index) => {
        if (key === props._id) {
          setlikeIndex(index);
          setClick(true);
        }
        return <div></div>;
      });
    }
  }, [props, cookies.like]);
  const clickhandler = () => {
    if (isClick === true) {
      axios
        .post(port + "api/like/", { like: like - 1, id: props._id })
        .then(() => {
          setClick(false);
          console.log(likeIndex);
          console.log(cookies.like);
          cookies.like.splice(likeIndex, 1);
          setCookie("like", cookies.like, { path: "/" });
          setlike(like - 1);
        });
    } else {
      axios
        .post(port + "api/like/", { like: like + 1, id: props._id })
        .then(() => {
          if (cookies.like) {
            cookies.like = [...cookies.like, props._id];
            setCookie("like", cookies.like, { path: "/" });
          } else {
            setCookie("like", [props._id], { path: "/" });
          }
          setClick(true);
          setlike(like + 1);
        });
    }
  };
  const [toggler, settoggler] = useState(null);
  const messageHandler = () => {
    settoggler(true);
  };

  useEffect(() => {
    axios.get(port+'api/getmeta').then((res)=>{
      if (res.data.length!==0) {
        if (res.data[0].title) {
          settitle(eval(res.data[0].title))
        }
        if (res.data[0].keyword) {
          setkeyword(eval(res.data[0].keyword))
        }
        if (res.data[0].des) {
          setdes(eval(res.data[0].des))
        } 
      }
        setprogress(true)
    })
  }, [])
  //let titl = name+" Baby Name Meaning, Populariy, Origin & Definition - NameCutie.com";
  //let de ="Looking for a perfect name for your kid? "+name+" may be a perfect one for your cutie pie. Search here for more wonderful names from around the world."+gender+" "+name+" Meaning, Numerology, information."
  //let keywor= name+"baby name Meaning, "+name+"baby name definition, "+name+" baby name origin, "+name+" baby name rakshi, "+name+" baby name Nakshtram, "+name+" baby name lucky no, "+origin+" name meaning, "+gender+" name details"
  const meta = {
    title: title,
    description: des,
    meta: {
      charset: "utf-8",
      name: {
        keywords: keyword,
      },
    },
  };

  return progress?(
    <DocumentMeta {...meta}>
      <div className="container-fluid">
        <div className="row">
          <div className="col-10">
            <div className="namepageheader ">
              <div className="name">
                {name}
                {isClick ? (
                  <img
                    src={lovetrue}
                    onClick={() => clickhandler()}
                    alt="lovetrue"
                    className="image"
                  />
                ) : (
                  <img
                    onClick={() => clickhandler()}
                    src={lovefalse}
                    alt="lovefalse"
                    className="imagelovefalse"
                  />
                )}
                <span className="lovecount">{like}</span>
              </div>
              <div
                style={{
                  textAlign: "left",
                  fontFamily: "fantasy",
                  fontWeight: "revert-layer",
                  paddingBottom: "20px",
                }}
              >
                Looking for a perfect name for your kid?{" "}
                <span style={{ fontSize: "30px", fontWeight: "bolder" }}>
                  {name}
                </span>{" "}
                may be a perfect one for your cutie pie. Search here for more
                wonderful names from around the world.
              </div>
              <div style={{ textAlign: "left" }} className="row">
                <div className="col-lg-2 col-sm-12">
                  <div className="gender">Gender</div>
                </div>
                <div
                  style={{ paddingLeft: "25px", paddingBottom: "10px" }}
                  className="col-lg-10 col-sm-12"
                >
                  <span className="ans"> {gender}</span>
                </div>
              </div>
              <div style={{ textAlign: "left" }} className="row">
                <div className="col-lg-2 col-sm-12">
                  <div className="meaning">Meaning</div>
                </div>
                <div
                  style={{ paddingLeft: "25px" }}
                  className="col-lg-10 col-sm-12"
                >
                  <span className="ans">{props.meaning}</span>
                </div>
              </div>
              <div style={{ textAlign: "left" }} className="row">
                <div className="col-lg-2 col-sm-12">
                  <div className="origin">Ethnic</div>
                </div>
                <div
                  style={{ paddingLeft: "25px" }}
                  className="col-lg-10 col-sm-12"
                >
                  <span >
                    {props.ethni
                      ? props.ethni.map((name) => (
                        <Link key={name} to={{ pathname: "/nameOf/" + name }}>
                      <span
                            style={{color:'black'}}
                          >
                            {" "}
                            <span className="eth">{name}</span> ,
                          </span>
                    </Link>
                          
                        ))
                      : null}
                  </span>{" "}
                </div>
              </div>
              <div
                style={{ cursor: "pointer", color: "blue", textAlign: "left" }}
                onClick={messageHandler}
                className="sugg"
              >
                <CIcon icon={cilPen} size="lg" className="suggestion" /> Write
                Your valuable suggestions to us..
              </div>
              {toggler ? <Message settoggler={settoggler} /> : null}
            </div>
          </div>
          <div className="col-2"><Ads/></div>
        </div>
      </div>
    </DocumentMeta>
  ):null;
}