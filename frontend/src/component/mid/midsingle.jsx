import axios from "axios";
import React, { useContext, useState } from "react";
import { useEffect } from "react";
import Nametable from "./nametable";
import NametableSearch from "./nametableSearch";
import collection from "../../context/collection";
import Lodr from "../../static/lodr";
import "./page.css";
import { search } from "../../context/search";
import DocumentMeta from "react-document-meta";

export default function Midsingle({ mid }) {

  const {serchName} = useContext(search)

  const [toggle, settoggle] = useState(0);
  const [progress, setprogress] = useState(null);
  const [temp, settemp] = useState(null);
  const [sec1, setsec1] = useState(null);
  const [sec2, setsec2] = useState(null);
  const [sec3, setsec3] = useState(null);

useEffect(() => {
  console.log(toggle);
}, [toggle]);
  useEffect(() => {
    if (mid === "A" ||mid ==="B" ||mid ==="C"||mid ==="D"||mid ==="E"||mid ==="F"||mid ==="G"||mid ==="H"||mid ==="I"||mid ==="J"||mid ==="K"||mid ==="L"||mid ==="M"||mid ==="N"||mid ==="O"||mid ==="P"||mid ==="Q"||mid ==="R"||mid ==="S"||mid ==="T"||mid ==="U"||mid ==="V"||mid ==="W"||mid ==="X"||mid ==="Y"||mid ==="Z") {
      console.log('in alphabet');
      settoggle(1)
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
    }else{
      settoggle(0)
      setprogress(false)
      if (mid === "BOYS") {
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

      }else {
          axios.get(collection.port + "api/getNames/ethnic/"+mid).then((res) => {
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
            settemp(' Ethnic : ')
            setprogress(true)
          });
      }
    }
  }, [mid]);
  const meta = {
    title: toggle?"Names with "+mid:"Names of "+mid 
  };
  return progress? (<DocumentMeta {...meta}>
    <div className="event-schedule-area-two bg-color pad100">
      <div className="row">
        {toggle ?  (
          <div className="single">Names with {mid}</div>
        ):(
          <div className="single">{temp}{mid}</div>
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
    </div></DocumentMeta>
  ) :<DocumentMeta {...meta}><Lodr/></DocumentMeta>
}
