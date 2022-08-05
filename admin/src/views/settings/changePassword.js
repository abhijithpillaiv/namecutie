import React, { useState } from 'react'
import {  useNavigate } from 'react-router-dom'
import { useCookies } from 'react-cookie';
import axios from 'axios'
import {
  CButton,
  CCard,
  CCardBody,
  CCardGroup,
  CCol,
  CContainer,
  CForm,
  CFormInput,
  CInputGroup,
  CInputGroupText,
  CRow,
} from '@coreui/react'
import CIcon from '@coreui/icons-react'
import { cilLockLocked } from '@coreui/icons'
import { port } from '../../assets/collection';

const Login = () => {
  const navigate=useNavigate()
  const [cookies, setCookie] = useCookies(['id']);
  const [pswd, setpswd] = useState(null);


  const submitHandler = () => {
    axios.post(port+'api/admin/updatePass' , { 'id': cookies.id, 'password': pswd }).then((res) => {
      window.alert("Password changed sucessfully.")
      navigate('/logout')
    })
  }

  return <div className="bg-light min-vh-100 d-flex flex-row align-items-center">
  <CContainer>
    <CRow className="justify-content-center">
      <CCol md={8}>
        <CCardGroup>
          <CCard className="p-4">
            <CCardBody>
              <CForm>
                <h1>Update your Password</h1>
                <br/>
                <CInputGroup className="mb-4">
                  <CInputGroupText >
                    <CIcon icon={cilLockLocked} />
                  </CInputGroupText>
                  <CFormInput onChange={(e) => setpswd(e.target.value)}
                    type="text"
                    placeholder="Enter new Password"
                    autoComplete="current-password"
                  />
                </CInputGroup>
                <CRow>
                  <CCol xs={6}>
                    <CButton onClick={submitHandler} color="primary" className="px-4">
                      Update
                    </CButton>
                  </CCol>
                </CRow>
              </CForm>
            </CCardBody>
          </CCard>
        </CCardGroup>
      </CCol>
    </CRow>
  </CContainer>
</div>
}

export default Login
