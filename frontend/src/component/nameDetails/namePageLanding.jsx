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
import Ads from "../ads/ads";
import SearchMid from "../mid/searchmid";
import {search} from '../../context/search'

function NamePageLanding() {
  const { name,id } = useParams();
  const [serchName, setserchName] = useState('')
  const [hover, sethover] = useState(null);
  const [data, setdata] = useState(null);
  const [searchdata, setsearchdata] = useState(null);
  useEffect(() => {
    if (searchdata) {
      sethover(null)
    }
  }, [searchdata]);
  useEffect(() => {
    axios.get(port+'api/getNames/'+name+'/'+id).then((res)=>{
      setdata(res.data)
    })
  }, [id,name]);
  useEffect(() => {
    if (hover) {
    }
  }, [hover]);
  const navigate = useNavigate()

  return data?<div className="my">
    <div className="head-top container-fluid">
      <div className="row">
      <div style={{cursor:'pointer'}} onClick={()=>navigate('/')} className="col-3"><img className="logo" src={logo} alt="logo"/></div>
      <div className="col-9 ads"><Ads/></div>
      </div>
    </div>
          <Headder  />
      <div className="container-fluid">
        <div className="row">
        {/* <div className={hover?"col-lg-4 col-sm-12 col-md-12":"col-lg-8 col-sm-7"}>
          <Strip  />
          </div>
          <div className={hover?"col-lg-8 col-sm-12 col-md-12":"col-lg-4 col-sm-5"}>
          <Search setdata={setsearchdata} hover={hover} sethover={sethover} />
          </div> */}
          <div className='col-12'>
          <Strip  />
          </div>
        </div>
        <div className="row">
          <div className="col-2">
          <Side />
          </div>
          <search.Provider value={{serchName:serchName,setserchName:setserchName}}>
          <div className="col-10">
          {searchdata?<SearchMid searchdata={searchdata}/>: <Mid  props={data}/>}
          </div>
          </search.Provider>

        </div>
      </div>
      <Fotter />

    </div>:<Lodr/>
}

export default NamePageLanding;
