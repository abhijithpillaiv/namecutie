
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

  const [gpti, setgpti] = useState('');
  const [gpdes, setgpdes] = useState('');
  const [gpid, setgpid] = useState('');
  const [epti, setepti] = useState('');
  const [epdes, setepdes] = useState('');
  const [epid, setepid] = useState('');

  useEffect(() => {
    axios.get(port + 'api/getMeta').then((res) => {
      if (res.data.length !== 0) {
        settitle(res.data[0].title)
        setdes(res.data[0].des)
        setkeyword(res.data[0].keyword)
        setid(res.data[0]._id)
      }
    })
    axios.get(port + 'api/getMetaGp').then((res) => {
      if (res.data.length !== 0) {
        setgpti(res.data[0].title)
        setgpdes(res.data[0].des)
        setgpid(res.data[0]._id)
      }
    })
    axios.get(port + 'api/getMetaEp').then((res) => {
      if (res.data.length !== 0) {
        setepti(res.data[0].title)
        setepdes(res.data[0].des)
        setepid(res.data[0]._id)
      }
    })
    setprogress(true)
  }, []);

  const submitHandler = () => {
    setprogress(false)
    axios.post(port + 'api/admin/addMeta', {
      'title': title, 'des': des, 'keyword': keyword, 'id': id
    }).then((res) => {
      window.location.reload(false)
    })
    axios.post(port + 'api/admin/addMetaGp', {
      'title': gpti, 'des': gpdes, 'id': gpid
    }).then((res) => {
      window.location.reload(false)
    })
    axios.post(port + 'api/admin/addMetaEp', {
      'title': epti, 'des': epdes, 'id': epid
    }).then((res) => {
      window.location.reload(false)
    })
    alert("Meta updated")
    setprogress(true)
  }

  return progress ?
    <div>
      <div>
        <h3 style={{textDecoration:'underline',color:'blue'}}>Name page</h3>
      </div>
      <br/>

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

      <div>
        <h3 style={{textDecoration:'underline',color:'blue'}}>Gender page</h3>
      </div>
      <br/>
      <div className="mb-3">
        <CFormLabel htmlFor="ethnic" className="col-sm-2 col-form-label">Meta Title</CFormLabel>
        <CInputGroup size='sm' className="mt-3 mb-3" > <CFormTextarea placeholder='add new Title' value={gpti} onChange={(e) => setgpti(e.target.value)} type="text" id="ethnic" />
          <CInputGroupText><CIcon style={{ cursor: 'pointer', color: 'red' }} onClick={(e) => setgpti('')} icon={cilX} /></CInputGroupText> </CInputGroup>

      </div>

      <div className="mb-3">
        <CFormLabel htmlFor="ethnic" className="col-sm-2 col-form-label">Meta Description</CFormLabel>
        <CInputGroup size='sm' className="mt-3 mb-3" > <CFormTextarea placeholder='add new Description' value={gpdes} onChange={(e) => setgpdes(e.target.value)} type="text" id="ethnic" />
          <CInputGroupText><CIcon style={{ cursor: 'pointer', color: 'red' }} onClick={(e) => setgpdes('')} icon={cilX} /></CInputGroupText> </CInputGroup>

      </div>
      <div>
        <h3 style={{textDecoration:'underline',color:'blue'}}>Ethnic page</h3>
      </div>
      <br/>
      <div className="mb-3">
        <CFormLabel htmlFor="ethnic" className="col-sm-2 col-form-label">Meta Title</CFormLabel>
        <CInputGroup size='sm' className="mt-3 mb-3" > <CFormTextarea placeholder='add new Title' value={epti} onChange={(e) => setepti(e.target.value)} type="text" id="ethnic" />
          <CInputGroupText><CIcon style={{ cursor: 'pointer', color: 'red' }} onClick={(e) => setepti('')} icon={cilX} /></CInputGroupText> </CInputGroup>

      </div>

      <div className="mb-3">
        <CFormLabel htmlFor="ethnic" className="col-sm-2 col-form-label">Meta Description</CFormLabel>
        <CInputGroup size='sm' className="mt-3 mb-3" > <CFormTextarea placeholder='add new Description' value={epdes} onChange={(e) => setepdes(e.target.value)} type="text" id="ethnic" />
          <CInputGroupText><CIcon style={{ cursor: 'pointer', color: 'red' }} onClick={(e) => setepdes('')} icon={cilX} /></CInputGroupText> </CInputGroup>

      </div>

      <div className="mb-3">
        <CButton onClick={submitHandler} color='success' >Upload</CButton>
      </div>


    </div>
    : <Lodr />
}