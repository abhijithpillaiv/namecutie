import React, { useEffect } from "react";
import Headder from "../Headder/headder";
import Mid from "../mid/mid";
import Strip from "../strip/strip";
import Fotter from "../fotter/fotter";
import Search from "../search/search";
import Notice from "../notice/notice";
import SearchMid from "../mid/searchmid";
import "./landing.css";
import logo from "../../static/logo.png";
import { useNavigate, useParams } from "react-router-dom";
import { useState } from "react";
import { search } from "../../context/search";
import Ads from "../ads/ads";

function Landing() {
  let { letter } = useParams();
  const navigate = useNavigate();
  const [hover, sethover] = useState(null);
  const [serchName, setserchName] = useState("");
  const [data, setdata] = useState(null);
  useEffect(() => {
    setdata(null);
    sethover(null);
  }, [letter]);
  useEffect(() => {
    if (data) {
      sethover(null);
    }
  }, [data]);
  return (
    <div className="my">
      <div className="head-top container-fluid">
        <div className="row">
          <div
            style={{ cursor: "pointer" }}
            onClick={() => navigate("/")}
            className="col-3"
          >
            <img className="logo" src={logo} alt="logo" />
          </div>
          <div className="col-9 ads">
            <Ads />
          </div>
        </div>
      </div>
      <Headder />
      <div className="container-fluid">
        <search.Provider
          value={{ serchName: serchName, setserchName: setserchName }}
        >
          <div className="row">
            <div
              className={
                hover ? "col-lg-2 col-sm-4 col-md-4" : "col-lg-3 col-sm-3"
              }
            >
              <Notice />
            </div>
            <div
              className={
                hover ? "col-lg-3 col-sm-8 col-md-8" : "col-lg-6 col-sm-5"
              }
            >
              <Strip />
            </div>
            <div
              className={
                hover ? "col-lg-7 col-sm-12 col-md-12" : "col-lg-3 col-sm-4"
              }
            >
              <Search setdata={setdata} hover={hover} sethover={sethover} />
            </div>
          </div>
          <div className="row">
            <div className="col-lg-3 col-sm-12">
              <Ads />
            </div>
            <div className="col-lg-9 col-sm-12">
              {data ? <SearchMid data={data} /> : <Mid mid={letter} />}
            </div>
          </div>
        </search.Provider>
      </div>
      <div style={{paddingTop:'0px'}}>
        <Fotter />
      </div>
    </div>
  );
}

export default Landing;
