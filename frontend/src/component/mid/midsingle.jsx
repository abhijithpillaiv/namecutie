import axios from "axios";
import React, { useContext, useState } from "react";
import { useEffect } from "react";
import Nametable from "./nametable";
import NametableSearch from "./nametableSearch";
import collection from "../../context/collection";
import Lodr from "../../static/lodr";
import "./page.css";
import { search } from "../../context/search";

export default function Midsingle({ mid }) {

  const {serchName} = useContext(search)

  const [toggle, settoggle] = useState(0);
  const [progress, setprogress] = useState(null);
  const [sec1, setsec1] = useState(null);
  const [sec2, setsec2] = useState(null);
  const [sec3, setsec3] = useState(null);


  useEffect(() => {
    if (mid === "BOYS" || mid === "GIRLS" || mid === "UNISEX") {
      settoggle(1);
      if (mid === "BOYS") {
        setprogress(false)
        axios.get(collection.port + "api/getNames/Boy").then((res) => {
            setsec1(null);setsec2(null);setsec3(null)
          const len = res.data.length;
          if (len < 10) {
            setsec1(res.data);
          } else {
            var count = Math.ceil(len / 3);
            setsec1(res.data.slice(0, count));
            const temp = count * 2;
            setsec2(res.data.slice(count, temp));
            count = temp;
            setsec3(res.data.slice(count, len));
          }
          setprogress(true)
        });
      } else if (mid === "GIRLS") {
        setprogress(false)
        axios.get(collection.port + "api/getNames/Girl").then((res) => {
            setsec1(null);setsec2(null);setsec3(null)
          const len = res.data.length;
          if (len < 10) {
            setsec1(res.data);
          } else {
            var count = Math.ceil(len / 3);
            setsec1(res.data.slice(0, count));
            const temp = count * 2;
            setsec2(res.data.slice(count, temp));
            count = temp;
            setsec3(res.data.slice(count, len));
          }
          setprogress(true)
        });
      } else if (mid === "UNISEX") {
        setprogress(false)
        axios.get(collection.port + "api/getNames/Unisex").then((res) => {
            setsec1(null);setsec2(null);setsec3(null)
          const len = res.data.length;
          if (len < 10) {
            setsec1(res.data);
          } else {
            var count = Math.ceil(len / 3);
            setsec1(res.data.slice(0, count));
            const temp = count * 2;
            setsec2(res.data.slice(count, temp));
            count = temp;
            setsec3(res.data.slice(count, len));
          }
          setprogress(true)

        });

      }
    } else {
      settoggle(0);
      setprogress(false)

      axios
        .get(collection.port + "api/getNames/alphabet/" + mid)
        .then((res) => {
            setsec1(null);setsec2(null);setsec3(null)
          const len = res.data.length;
          if (len < 10) {
            setsec1(res.data);
          } else {
            var count = Math.ceil(len / 3);
            setsec1(res.data.slice(0, count));
            const temp = count * 2;
            setsec2(res.data.slice(count, temp));
            count = temp;
            setsec3(res.data.slice(count, len));
          }
          setprogress(true)

        });
    }
  }, [mid]);

  return progress? (
    <div className="event-schedule-area-two bg-color pad100">
      <div className="row">
        {toggle ? (
          <div className="single">{mid}</div>
        ) : (
          <div className="single">Names with {mid}</div>
        )}
      </div>
      <div className="row">
        <div className=" col-sm-12 col-lg-4">
          {sec1 ? serchName?<NametableSearch props={sec1}/> : <Nametable props={sec1} />: null}
        </div>
        <div className=" col-sm-12 col-lg-4">
        {sec2 ? serchName?<NametableSearch props={sec2}/> : <Nametable props={sec2} />: null}

        </div>

        <div className=" col-sm-12 col-lg-4">
        {sec3 ? serchName?<NametableSearch props={sec3}/> : <Nametable props={sec3} />: null}

        </div>
      </div>
    </div>
  ) :<Lodr/>
}
