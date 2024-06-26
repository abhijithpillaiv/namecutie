import React from "react";
import Headder from "../Headder/headder";
import Mid from "./mostLikedMid";
import Strip from "../strip/strip";
import Fotter from "../fotter/fotter";
import Search from "../search/search";
import Notice from '../notice/notice'
import './choice.css'
import logo from '../../static/logo.png'
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import {search} from '../../context/search'
import Ads from "../ads/ads";

function Landing() {
  const navigate = useNavigate()


  const [serchName, setserchName] = useState('')
  
  return  <div className="my">
    <div className="head-top container-fluid">
      <div className="row">
      <div style={{cursor:'pointer'}} onClick={()=>navigate('/')} className="col-3"><img className="logo" src={logo} alt="logo"/></div>
      <div className="col-9 ads"><Ads/></div>
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
        <div className="col-lg-3 col-sm-12">
          <Ads/>
          </div>
          <div className="col-lg-9 col-sm-12 ">
            <h2 style={{textAlign:'center',color:'navy',fontFamily:'monospace',fontSize:'25px'}}>MOST LIKED NAMES</h2>
          <Mid />
          </div>
        </div>
        </search.Provider>

      </div>
      <Fotter />

    </div>
}

export default Landing;
