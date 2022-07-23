import React from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";
import "./namepage.css";

export default function Details() {
  const { details } = useParams();
  return (
    <div className="container-fluid">
      <div className="namepageheader">
        <div className="row">
          <div className="col-7">
            <div className="name">NAME</div>
            <div className="gender">Gender :: Male</div>
            <div className="origin">Origin :: xxx</div>
            <div className="pronunciation">pronunciation</div>
          
          </div>
          <div className="col-5">
            AD GOES HERE
          </div>
        </div>
      </div>
    </div>
  );
}
