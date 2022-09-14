import React, {  useEffect } from "react";
import { MDBCol, MDBIcon } from "mdbreact";
import {
  CButton,
} from "@coreui/react";
import axios from "axios";
import { port } from "../../context/collection";
import AdvanceSearch from "./advanceSearch";
import { useState } from "react";
const FakeSearch = ({setdata, hover, sethover }) => {
  const [ethni, setethni] = useState(null);
  useEffect(() => {
    if (!ethni) {
      axios.get(port + "api/getEthni").then((res) => {
        setethni(res.data);
      });
    }
  }, [ethni]);
  return (
        <MDBCol md="20">
      <div className="form-inline mt-4 mb-4">
        <MDBIcon icon="search" />
        <input className="form-control form-control-sm ml-3 w-75"  type="text" placeholder="Search" aria-label="Search" />
      <span style={{ paddingLeft: "30px", paddingTop: "10px" }}>
            {/* <CButton
              color="info"
              onClick={() => {
                sethover(!hover);
              }}
              shape="rounded-pill"
              variant="outline"
            >
              Advance search
            </CButton> */}
          </span>
        </div>
        {hover ?<AdvanceSearch setdata={setdata} ethni={ethni} hover={hover} sethover={sethover}/> : null}
      </MDBCol>    
    );
}

export default FakeSearch;
