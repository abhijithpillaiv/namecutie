import React, { useEffect,useState } from "react";
import axios from "axios";
import { port } from "../../context/collection";
import "./side.css";
export default function Side() {
  const [ads, setads] = useState(null);
  useEffect(() => {
    axios.get(port+'api/getAds').then((res)=>{
      setads(res.data[1])
    })
  }, []);
  return (
    <div className="side">
      {ads? <div className="col-9 ads">{ads.ads}</div>:<div className="col-9 ads">AD GOES HERE</div>}
    </div>
  );
}
