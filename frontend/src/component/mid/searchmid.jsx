import React, { useContext, useState } from "react";
import { useEffect } from "react";
import Nametable from "./nametable";
import NametableSearch from "./nametableSearch";
import Lodr from "../../static/lodr";
import "./page.css";
import { search } from "../../context/search";
import DocumentMeta from "react-document-meta";

export default function Midsingle({ data }) {
  const { serchName } = useContext(search);

  const [progress, setprogress] = useState(null);
  const [sec1, setsec1] = useState(null);
  const [sec2, setsec2] = useState(null);
  const [sec3, setsec3] = useState(null);

  useEffect(() => {
    setprogress(false);

    if (data) {
      const len = data.length;
      if (len < 10) {
        setsec1(data);
      } else {
        var count = Math.ceil(len / 3);
        setsec1(data.slice(0, count));
        const temp = count * 2;
        setsec2(data.slice(count, temp));
        count = temp;
        setsec3(data.slice(count, len));
      }
    }
    setprogress(true);

  }, [data]);
  const meta = {
    title: "Search result",
  };
  return progress ? (
    <DocumentMeta {...meta}>
      <div className="event-schedule-area-two bg-color pad100">
        <div className="row">
          <div className="single">Searched Name</div>
        </div>
        <div className="row">
          <div className=" col-sm-12 col-lg-4">
            {sec1 ? (
              serchName ? (
                <NametableSearch props={sec1} />
              ) : (
                <Nametable props={sec1} />
              )
            ) : null}
          </div>
          <div className=" col-sm-12 col-lg-4">
            {sec2 ? (
              serchName ? (
                <NametableSearch props={sec2} />
              ) : (
                <Nametable props={sec2} />
              )
            ) : null}
          </div>

          <div className=" col-sm-12 col-lg-4">
            {sec3 ? (
              serchName ? (
                <NametableSearch props={sec3} />
              ) : (
                <Nametable props={sec3} />
              )
            ) : null}
          </div>
        </div>
      </div>
    </DocumentMeta>
  ) : (
    <DocumentMeta {...meta}>
      <Lodr />
    </DocumentMeta>
  );
}
