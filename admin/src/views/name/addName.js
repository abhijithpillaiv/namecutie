import React, { useEffect, useState } from 'react'
import axios from 'axios';
var xlsx = require('xlsx');
import { CForm, CRow, CFormLabel, CFormInput, CFormCheck, CButton, CCol } from '@coreui/react';
import collection from '../../assets/collection'
import Lodr from '../section/lodr';
import InputName from '../section/inputName';

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
            var eth = [];
            for (let j = 0; j < 100; j++) {
                data[i][j] ? eth.push(data[i][j]) : null;
            }
            axios.post(collection.port + 'api/admin/addName', {
                'name': data[i].Name, 'gender': data[i].Gender, 'meaning': data[i].Meaning, 'ethni': eth, 'like': 0
            }).then((response) => {
                alert("Names added sucessfully")
                setprogress(false)
                //history.push('/addStudent/'+cate)
            })
        }
    }


    return progress ? <Lodr /> :
        <div>
            <InputName edit={0} props={0}/>
            <br /><br />
            <form>
                <label htmlFor="upload">Upload Excel File</label>
                <input
                    type="file"
                    name="upload"
                    id="upload"
                />
            <div><br/> <CButton color='success' onClick={readUploadFile}>Upload File</CButton></div>
            </form>
        </div>
}
