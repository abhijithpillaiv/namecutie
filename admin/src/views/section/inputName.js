import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { CForm, CRow, CFormLabel, CFormInput, CFormSelect, CButton, CCol, CInputGroup, CInputGroupText } from '@coreui/react';
import collection from '../../assets/collection'
import Lodr from '../section/lodr';
import {
    cilCheck, cilX
} from '@coreui/icons'
import CIcon from '@coreui/icons-react';
import { useNavigate } from 'react-router-dom';

export default function inputName({ edit, props }) {
    // states
    const [progress, setprogress] = useState(true)
    const [name, setname] = useState('');
    const [meaning, setmeaning] = useState('');
    const [ethi, setethi] = useState([]);
    const [gender, setgender] = useState('');
    const [_id, set_id] = useState('');
    const [val, setval] = useState('');


    const navigate = useNavigate();

    const addHandler = () => {
        val ? setethi(ethi => [...ethi, val]) : null
        setval('')
    }

    useEffect(() => {
        if (edit) {
            setethi(props.data.ethni)
            setname(props.data.name)
            setgender(props.data.gender)
            setmeaning(props.data.meaning)
            set_id(props.data._id)
            setprogress(false)
        }
        else {
            setprogress(false)
        }
    }, [edit]);


    // Accept form data
    const submitHandler = () => {
        if (edit) {
            setprogress(true)
            axios.post(collection.port + 'api/admin/editName', {
                'name': name, 'gender': gender, 'meaning': meaning, 'ethni': ethi, 'like': 0, "id": _id,
            }).then(() => {
                alert("Names edited successfully")
                setprogress(false)
                navigate(-1)
            })
        }
        else {
            setprogress(true)
            axios.post(collection.port + 'api/admin/addName', {
                'name': name, 'gender': gender, 'meaning': meaning, 'ethni': ethi, 'like': 0
            }).then(() => {
                alert("Name added successfully")
                resetHandler()
                setprogress(false)
            })
        }
    }

    const resetHandler = () => {
        setname('')
        setgender('')
        setmeaning('')
        setethi([])
        setgender('')
    }
    const deleteHandler = (props) => {
        props ? setethi(ethi => ethi.filter(ethi => ethi !== props)) : null
    }
    return progress ? <Lodr /> : <CForm>
        <CRow className="mb-3">
            <CFormLabel htmlFor="name" className="col-sm-2 col-form-label">Name</CFormLabel>
            <CCol sm={10} >
                <CFormInput required value={name} onChange={(e) => setname(e.target.value)} type="name" id="name" />
            </CCol>
        </CRow>
        <CRow className="mb-3">
            <CFormLabel htmlFor="meaning" className="col-sm-2 col-form-label">Meaning</CFormLabel>
            <CCol sm={10} >
                <CFormInput required value={meaning} onChange={(e) => setmeaning(e.target.value)} type="text" id="meaning" />
            </CCol>
        </CRow>
        <fieldset className="row mb-3">
            <legend className="col-form-label col-sm-2 pt-0">Gender</legend>
            <CCol sm={5} >
                <CFormSelect required size="sm" value={gender} onChange={(e) => setgender(e.target.value)} className="mb-3" aria-label="Small select example">
                    <option value="">add New option</option>
                    <option value="Boy">Boy</option>
                    <option value="Girl">Girl</option>
                    <option value="Unisex">Unisex</option>
                </CFormSelect>
            </CCol>
        </fieldset>


        <div className="mb-3">
            <CFormLabel htmlFor="ethnic" className="col-sm-2 col-form-label">Ethnic</CFormLabel>
            {ethi ? ethi.map((data, index) => <span key={index}>{data}  <CIcon style={{ cursor: 'pointer', color: 'red' }} onClick={(e) => deleteHandler(data)} icon={cilX} /> , </span>) : null}
            <CInputGroup size='sm' className="mt-3 mb-3">
                <CFormInput  placeholder='add new value' value={val} onChange={(e) => setval(e.target.value)} type="text"  />
                <CInputGroupText style={{ cursor: 'pointer' }} onClick={addHandler}>Click to add <CIcon icon={cilCheck}></CIcon></CInputGroupText>
            </CInputGroup>
        </div>



        {edit ? <CButton color='success' onClick={submitHandler} >Update</CButton> : name && meaning && gender ? <CButton onClick={submitHandler} color='success' >Upload</CButton> : <CButton color='success' >Upload</CButton>}
        <span style={{ paddingLeft: '100px' }}> <CButton color='primary' onClick={resetHandler} >Reset</CButton></span>

    </CForm>
}
