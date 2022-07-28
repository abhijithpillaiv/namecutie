import React, { useEffect, useState } from 'react'
var xlsx = require('xlsx');
import { CForm, CRow, CFormLabel, CFormInput, CFormCheck, CButton, CCol } from '@coreui/react';
const port=null;
import lodr from '../../assets/logo.png';

export default function addName() {

    // excel reader
    const [data, setdata] = useState(null)
    const readUploadFile = (e) => {
        e.preventDefault();
        if (e.target.files) {
            const reader = new FileReader();
            reader.onload = (e) => {
                const data = e.target.result;
                const workbook = xlsx.read(data, { type: "array" });
                const sheetName = workbook.SheetNames[0];
                const worksheet = workbook.Sheets[sheetName];
                const json = xlsx.utils.sheet_to_json(worksheet);
                setdata(json)
            };
            reader.readAsArrayBuffer(e.target.files[0]);
        }
    }


    // states
    const [progress, setprogress] = useState(false)

    useEffect(() => {
        if (data) {
            setprogress(true)
            submitHandler();
        }
    }, [data])


    // Accept form data
    const submitHandler = (event) => {
        //event.preventDefault();
        for (let i = 0; i < data.length; i++) {
            var eth=[];
            for (let j = 0; j < 100; j++) {
                data[i][j] ? eth.push(data[i][j]): null;
            }
            axios.post(port+'/api/admin/addName',{
                'name':data[i].Name,'gender':data[i].Gender,'meaning':data[i].Meaning,'ethni':eth
            }).then((response) => {
                setprogress(false)
                //history.push('/addStudent/'+cate)
            })
        }
    }


    return progress ? <img src={lodr} alt="loader"></img> :
        <div>

            <CForm>
                <CRow className="mb-3">
                    <CFormLabel htmlFor="name" className="col-sm-2 col-form-label">Name</CFormLabel>
                    <CCol sm={10} >
                        <CFormInput type="name" id="name" />
                    </CCol>
                </CRow>
                <CRow className="mb-3">
                    <CFormLabel htmlFor="meaning" className="col-sm-2 col-form-label">Meaning</CFormLabel>
                    <CCol sm={10} >
                        <CFormInput type="text" id="meaning" />
                    </CCol>
                </CRow>
                <CRow className="mb-3">
                    <CFormLabel htmlFor="origin" className="col-sm-2 col-form-label">Origin</CFormLabel>
                    <CCol sm={5} >
                        <CFormInput type="text" id="origin" />
                    </CCol>
                </CRow>
                <fieldset className="row mb-3">
                    <legend className="col-form-label col-sm-2 pt-0">Gender</legend>
                    <CCol sm={5} >
                        <CFormCheck type="radio" name="gridRadios" id="gridRadios1" value="male" label="male" defaultChecked />
                        <CFormCheck type="radio" name="gridRadios" id="gridRadios2" value="female" label="female" />
                        <CFormCheck type="radio" name="gridRadios" id="gridRadios3" value="unisex" label="unisex" />
                    </CCol>
                </fieldset>
                <CButton type="submit">Upload</CButton>
            </CForm>
            <br /><br />
            <form>
                <label htmlFor="upload">Upload Excel File</label>
                <input
                    type="file"
                    name="upload"
                    id="upload"
                    onChange={readUploadFile}
                />
            </form>
        </div>
}
