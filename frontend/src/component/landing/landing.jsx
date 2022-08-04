import React from "react";
import Headder from "../Headder/headder";
import Mid from "../mid/mid";
import Strip from "../strip/strip";
import Fotter from "../fotter/fotter";
import Search from "../search/search";
import Notice from '../notice/notice'
import './landing.css'
import logo from '../../static/logo.png'
import { useNavigate, useParams } from "react-router-dom";
import { useState,useEffect } from "react";
import { port } from "../../context/collection";
import axios from "axios";
import {search} from '../../context/search'

function Landing() {
  const [ads, setads] = useState(null);
  let {letter}=useParams()
  const navigate = useNavigate()

  useEffect(() => {
    axios.get(port+'api/getAds').then((res)=>{
      setads(res.data[0])
    })
  }, []);
  const [serchName, setserchName] = useState('')
  
  return  <div className="my">
    <div className="head-top container-fluid">
      <div className="row">
      <div style={{cursor:'pointer'}} onClick={()=>navigate('/')} className="col-3"><img className="logo" src={logo} alt="logo"/></div>
      {ads? <div className="col-9 ads">{ads.ads}</div>:<div className="col-9 ads">AD GOES HERE</div>}
      </div>
    </div>
          <Headder  />
      <div className="container-fluid">
      <search.Provider value={{serchName:serchName,setserchName:setserchName}}>
        <div className="row">
        <div className="col-lg-3 col-sm-3">
          <Notice/>
          </div>
          <div className="col-lg-7 col-sm-6">
          <Strip  />
          </div>
          <div className="col-lg-2 col-sm-3">
          <Search />
          </div>
        </div>
        <div className="row">
          <div className="col-12 ">
          <Mid  mid={letter}/>
          </div>
        </div>
        </search.Provider>

      </div>
      <Fotter />

    </div>
}

export default Landing;
