import React from "react";
import Headder from "../Headder/headder";
import Post from './components/posts/Posts'
import Side from "../side/side";
import Strip from "../strip/strip";
import Fotter from "../fotter/fotter";
import Search from "../search/fakeserch";
import './landing.css'
import Lodr from '../../static/lodr'
import logo from '../../static/logo.png'
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import axios from "axios";
import { port } from "../../context/collection";

function ViewBlogs() {
  const [post, setpost] = useState(null);
  const [ads, setads] = useState(null);
  useEffect(() => {
    axios.get(port + 'api/getBlog').then((res) => {
      setpost(res.data)
    })
    axios.get(port + 'api/getAds').then((res) => {
      setads(res.data[0])
    })
  }, []);
  const navigate = useNavigate()
  return post ? <div className="my">
    <div className="head-top container-fluid">
      <div className="row">
        <div style={{ cursor: 'pointer' }} onClick={() => navigate('/')} className="col-3"><img className="logo" src={logo} alt="logo" /></div>
        {ads ? <div className="col-9 ads">{ads.ads}</div> : <div className="col-9 ads">AD GOES HERE</div>}
      </div>
    </div>
    <Headder />
    <div className="container-fluid">
      <div className="row">
        <div className="col-lg-10 col-sm-8">
          <Strip />
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
          <Post posts={post} />
        </div>
      </div>
    </div>
    <Fotter />

  </div> : <Lodr />
}

export default ViewBlogs;