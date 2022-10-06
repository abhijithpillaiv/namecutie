import React, { useState} from "react";
import {
  CButton,
  CCard,
  CRow,
  CCol,
  CCardBody,
  CCardTitle,
  CForm,
  CFormInput,
  CCloseButton,
} from "@coreui/react";
import { MultiSelect } from "react-multi-select-component";
import axios from "axios";
import { port } from "../../context/collection";
const AdvanceSearch = ({setdata, ethni, hover, sethover }) => {
  const [selected, setSelected] = useState([]);
  const [gender, setgender] = useState([]);
  const [lastn, setlastn] = useState(null);
  const [firstn, setfirstn] = useState(null);
  const ethtemp =[]
  let eth=[]
  ethni.map((val) => ethtemp.push(val.value))

  const searchHandler = () => {
    setdata(false)
    if (selected.length!==0) {
      selected.map((val) => eth.push(val.value))
      axios
        .post(port + "api/searchName", {
          gender: gender,
          lastn: lastn,
          firstn: firstn,
          eth: eth,
        })
        .then((res) => {
          setdata(res.data)
          eth=[]
        });
    } else {
      axios
        .post(port + "api/searchName", {
          gender: gender,
          lastn: lastn,
          firstn: firstn,
          eth: ethtemp,
        })
        .then((res) => {
          setdata(res.data)
        });
    }
  };
  return (
    <CCard className="mb-3" style={{ maxWidth: "1100px" }}>
      <CRow className="g-0">
        <CCol md={7}>
          <CCardBody>
            <CCardTitle>Choose Ethnic</CCardTitle>
            <div style={{ paddingBottom: "20px" }}>
              <pre>
                {selected.map((val, index) => {
                  return <span key={index}>{val.value},</span>;
                })}
              </pre>
              <MultiSelect
                options={ethni}
                value={selected}
                onChange={setSelected}
              />
            </div>
          </CCardBody>
          <CCardBody>
            <CCardTitle>Choose Gender</CCardTitle>
            <label
              style={{
                paddingLeft: "20px",
                fontSize: "22px",
                fontWeight: "bold",
              }}
            >
              <input
                onChange={() => {
                  setgender(["Boy"]);
                }}
                type="radio"
                name="inlineRadioOptions"
                value="boy"
              />
              Boy
            </label>
            <label
              style={{
                paddingLeft: "20px",
                fontSize: "22px",
                fontWeight: "bold",
              }}
            >
              <input
                onChange={() => {
                  setgender(["Girl"]);
                }}
                type="radio"
                name="inlineRadioOptions"
                value="girl"
              />
              Girl
            </label>
            <label
              style={{
                paddingLeft: "20px",
                fontSize: "22px",
                fontWeight: "bold",
              }}
            >
              <input
                onChange={() => {
                  setgender(["Unisex"]);
                }}
                type="radio"
                name="inlineRadioOptions"
                value="unisex"
              />
              Unisex
            </label>
          </CCardBody>
          <CCardBody>
            <CButton onClick={searchHandler}>Search</CButton>
          </CCardBody>
        </CCol>
        <CCol md={4}>
          <CCardBody>
            <CCardTitle>Search by letters</CCardTitle>
            <CForm style={{ paddingTop: "10px" }}>
              <CFormInput
                onChange={(e) => {
                  setfirstn(e.target.value);
                }}
                type="text"
                label="First Letter"
                text="Add first letter."
                aria-describedby="exampleFormControlInputHelpInline"
              />
            </CForm>
            <CForm style={{ paddingTop: "10px" }}>
              <CFormInput
                onChange={(e) => {
                  setlastn(e.target.value);
                }}
                type="text"
                label="Last Letter"
                text="Add last letter."
                aria-describedby="exampleFormControlInputHelpInline"
              />
            </CForm>
          </CCardBody>
        </CCol>
        <CCol
          onClick={() => sethover(!hover)}
          style={{ cursor: "pointer" }}
          md={1}
        >
          <CCloseButton color="red" />
          close
        </CCol>
      </CRow>
    </CCard>
  );
};

export default AdvanceSearch;
