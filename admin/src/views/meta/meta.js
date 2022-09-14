
import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { port } from '../../assets/collection';
import Lodr from '../section/lodr'
import { CFormLabel, CInputGroup, CInputGroupText, CFormTextarea, CButton } from '@coreui/react';
import CIcon from '@coreui/icons-react';
import { cilCheck, cilX, cilPen } from '@coreui/icons';

export default function Meta() {
  const [title, settitle] = useState('');
  const [des, setdes] = useState('');
  const [keyword, setkeyword] = useState('');
  const [progress, setprogress] = useState(false);
  const [id, setid] = useState('');
  const [res, setres] = useState(null);

  useEffect(() => {
    axios.get(port + 'api/getMeta').then((res) => {
      if (res.data.length !== 0) {
        setres(res.data[0])
        settitle(res.data[0].title)
        setdes(res.data[0].des)
        setkeyword(res.data[0].keyword)
        setid(res.data[0]._id)
      }
      console.log(res.data);
      setprogress(true)
    })
  }, []);

  const submitHandler = () => {
    setprogress(false)
    axios.post(port + 'api/admin/addMeta', {
      'title': title, 'des': des, 'keyword': keyword, 'id': id
    }).then((res) => {
      alert(res.data)
      window.location.reload(false)
      setprogress(true)
    })
  }

  return progress ?
    <div>
      <div>
        <h5>How to write</h5>
        <p>Use name,gender,origin as veriables and seperate each veriable from sting using + sign and use "" for denoting strings</p>
      </div>
      <div className="mb-3">
        <CFormLabel htmlFor="ethnic" className="col-sm-2 col-form-label">Meta Title</CFormLabel>
        <CInputGroup size='sm' className="mt-3 mb-3" > <CFormTextarea placeholder='add new Title' value={title} onChange={(e) => settitle(e.target.value)} type="text" id="ethnic" />
          <CInputGroupText><CIcon style={{ cursor: 'pointer', color: 'red' }} onClick={(e) => settitle('')} icon={cilX} /></CInputGroupText> </CInputGroup>

      </div>

      <div className="mb-3">
        <CFormLabel htmlFor="ethnic" className="col-sm-2 col-form-label">Meta Description</CFormLabel>
        <CInputGroup size='sm' className="mt-3 mb-3" > <CFormTextarea placeholder='add new Description' value={des} onChange={(e) => setdes(e.target.value)} type="text" id="ethnic" />
          <CInputGroupText><CIcon style={{ cursor: 'pointer', color: 'red' }} onClick={(e) => setdes('')} icon={cilX} /></CInputGroupText> </CInputGroup>

      </div>

      <div className="mb-3">
        <CFormLabel htmlFor="ethnic" className="col-sm-2 col-form-label">Meta Keyword</CFormLabel>
        <CInputGroup size='sm' className="mt-3 mb-3" > <CFormTextarea placeholder='add new Keyword' value={keyword} onChange={(e) => setkeyword(e.target.value)} type="text" id="ethnic" />
          <CInputGroupText><CIcon style={{ cursor: 'pointer', color: 'red' }} onClick={(e) => setkeyword('')} icon={cilX} /></CInputGroupText> </CInputGroup>

      </div>

      <div className="mb-3">
        <CButton onClick={submitHandler} color='success' >Upload</CButton>
      </div>


    </div>
    : <Lodr />
}