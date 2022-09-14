import React, { useEffect } from 'react'
import { useState } from 'react';
import { port } from '../../context/collection'
import axios from 'axios'

export default function Ads() {

  const [ads, setads] = useState(null);
useEffect(() => {
  (window.adsbygoogle = window.adsbygoogle || []).push({});
  axios.get(port + "api/getAds").then((res) => {
    setads(res.data[0].ads);
    console.log(res.data[0].ads);
  });
}, []);

    return ads? <span>{ads}</span>:<div>Add appears here</div>;
}