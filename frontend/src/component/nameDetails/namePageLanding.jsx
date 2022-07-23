import React, { useContext } from "react";
import Headder from "../Headder/headder";
import Mid from "./namepagemid";
import Side from "../side/side";
import Strip from "../strip/strip";
import Fotter from "../fotter/fotter";
import Search from "../search/search";
import './landing.css'
import logo from '../../static/logo.png'
import { useState } from "react";

function Landing() {
  const [mid, setmid] = useState('home');
  return (
    <div className="my">
    <div className="head-top container-fluid">
      <div className="row">
      <div className="col-3"><img className="logo" src={logo} alt="logo"/></div>
      <div className="col-9 ads">AD GOES HERE</div>
      </div>
    </div>
          <Headder setmid={setmid} />
      <div className="container-fluid">
        <div className="row">
          <div className="col-lg-10 col-sm-8">
          <Strip setmid={setmid} />
          </div>
          <div className="col-lg-2 col-sm-4">
          <Search/>
          </div>
        </div>
        <div className="row">
          <div className="col-2">
          <Side setmid={setmid} />
          </div>
          <div className="col-10">
           <Mid mid={mid}/>
          </div>
        </div>
      </div>
      <Fotter />

    </div>
  );
}

export default Landing;
