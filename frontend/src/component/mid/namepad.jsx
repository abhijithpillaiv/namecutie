import React, { useState } from "react";
import {  useNavigate } from "react-router-dom";
import Lodr from "../../static/lodr";
import { cilHeart } from '@coreui/icons'
import CIcon from '@coreui/icons-react'
import { useEffect } from "react";
import axios from "axios";
import { useCookies } from "react-cookie";
import { port } from "../../context/collection";
import lovefalse from "../../static/lovex.png";
import lovetrue from "../../static/love.png";

export default function Namepad({ props }) {

  const [cookies, setCookie] = useCookies(["like"]);
  const [isClick, setClick] = useState(false);
  const [likeIndex, setlikeIndex] = useState(null);
  const [like, setlike] = useState(props.like);

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
  const likeclickhandler = () => {
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

  const navigate=useNavigate()
    const clickhandler = () => {
      navigate('/meaningof/' + props.name+'/'+props._id);
  }
  return props ?
    <tr  style={{width:'100%'}}>
      <td onClick={clickhandler} style={{fontFamily:"sans-serif",fontSize:'20px',fontWeight:'bold'}} >{props.name}</td>
      <td onClick={clickhandler}style={{fontFamily:"cursive",fontSize:'17px',fontWeight:'normal'}}>{props.meaning}</td>
      {/* <td style={{color:'red'}}>{like} {like===1?<div >Like</div>:<div>Likes</div>}</td> */}
      {/* <td  onClick={() => likeclickhandler()}>{isClick ? (
                  <img
                    src={lovetrue}
                    alt="lovetrue" 
                    style={{height:'50px',width:'auto'}} 
                  />
                ) : (
                  <img
                    src={lovefalse}
                    alt="lovefalse"
                    style={{height:'50px',width:'auto'}} 
                  />
                )}</td> */}

  </tr>

     :<Lodr />
}
