import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { port } from '../../assets/collection';
import Lodr from '../section/lodr'
import { CFormLabel, CInputGroup, CInputGroupText, CFormInput,CButton } from '@coreui/react';
import CIcon from '@coreui/icons-react';
import { cilCheck, cilX } from '@coreui/icons';

export default function adspage() {
  const [ads, setads] = useState(null);
  const [val, setval] = useState(null);
  const [progress, setprogress] = useState(false);

  useEffect(() => {
    axios.get(port + 'api/getAds').then((res) => {
      setprogress(true)
      console.log(res.data);
      setads(res.data)
    })
  }, []);

  const addHandler = () => {
    val ? setads(ads => [...ads, val]) : null
  }
  const deleteHandler = (props) => {
    props ? setads(ads => ads.filter(ads => ads !== props)) : null
  }

  const submitHandler = () => {
        setprogress(false)
        axios.post(port + 'api/admin/addAds', {
            'ads':ads
        }).then(() => {
            alert("ads added sucessfully")
            setprogress(true)
        })
}

  return progress ?
    <div className="mb-3">
      <CFormLabel htmlFor="ethnic" className="col-sm-2 col-form-label">Ads</CFormLabel>
      {ads ? ads.map((data, index) => <CInputGroup size='sm' className="mt-3 mb-3" key={index}> <CFormInput placeholder='add new value' value={data} type="text" id="ethnic" />
        <CInputGroupText><CIcon style={{ cursor: 'pointer', color: 'red' }} onClick={(e) => deleteHandler(data)} icon={cilX} /></CInputGroupText> </CInputGroup>) : null}
      <CInputGroup size='sm' className="mt-3 mb-3">
        <CFormInput placeholder='add new value' onChange={(e) => setval(e.target.value)} type="text" id="ethnic" />
        <CInputGroupText style={{ cursor: 'pointer' }} onClick={addHandler}>Click to add <CIcon icon={cilCheck}></CIcon></CInputGroupText>
      </CInputGroup>
      <CButton onClick={submitHandler} color='success' >Upload</CButton>
    </div>
    : <Lodr />
}


