import React from "react";
import Ads from "../ads/ads";
import "./side.css";
export default function Side() {
  return (
    <div className="side">
      <div className="col-9 ads"><Ads/></div>
    </div>
  );
}
