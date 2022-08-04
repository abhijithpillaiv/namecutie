import React from "react";
import Headder from "../Headder/headder";
import Mid from "./namepagemid";
import Side from "../side/side";
import Strip from "../strip/strip";
import Fotter from "../fotter/fotter";
import Search from "../search/fakeserch";
import './landing.css'
import Lodr from '../../static/lodr'
import logo from '../../static/logo.png'
import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useEffect } from "react";
import axios from "axios";
import { port } from "../../context/collection";

function NamePageLanding() {
  const { name,id } = useParams();
  const [data, setdata] = useState(null);
  const [ads, setads] = useState(null);
  useEffect(() => {
    axios.get(port+'api/getNames/'+name+'/'+id).then((res)=>{
      setdata(res.data)
    })
    axios.get(port+'api/getAds').then((res)=>{
      setads(res.data[0])
    })
  }, [id,name]);
  const navigate = useNavigate()
  return data?<div className="my">
    <div className="head-top container-fluid">
      <div className="row">
      <div style={{cursor:'pointer'}} onClick={()=>navigate('/')} className="col-3"><img className="logo" src={logo} alt="logo"/></div>
      {ads? <div className="col-9 ads">{ads.ads}</div>:<div className="col-9 ads">AD GOES HERE</div>}
      </div>
    </div>
          <Headder  />
      <div className="container-fluid">
        <div className="row">
          <div className="col-lg-10 col-sm-8">
          <Strip  />
          </div>
          <div className="col-lg-2 col-sm-4">
          <Search />
          </div>
        </div>
        <div className="row">
          <div className="col-2">
          <Side />
          </div>
          <div className="col-10">
           <Mid  props={data}/>
          </div>
        </div>
      </div>
      <Fotter />

    </div>:<Lodr/>
}

export default NamePageLanding;
