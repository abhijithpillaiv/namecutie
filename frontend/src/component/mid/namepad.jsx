import React from "react";
import {  useNavigate } from "react-router-dom";
import Lodr from "../../static/lodr";


export default function Namepad({ props }) {
  const navigate=useNavigate()
    const clickhandler = () => {
      navigate('/meaningof/' + props.name+'/'+props._id);
  }

  return props ? (
    <tr onClick={clickhandler}>
      <td style={{fontFamily:"sans-serif",fontSize:'18px',fontWeight:'bold'}} >{props.name}</td>
      <td style={{fontFamily:"cursive",fontSize:'15px',fontWeight:'normal'}}>{props.meaning}</td>
    </tr>
  ) : (
    <Lodr />
  );
}
