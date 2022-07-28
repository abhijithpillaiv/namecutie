import React from 'react'
import { CInputGroup,CFormInput,CInputGroupText,CButton,CFormTextarea } from '@coreui/react'

function addBlog() {
    return (
        <div>
            <CInputGroup className="mb-3">
                <CInputGroupText id="basic-addon2">icon</CInputGroupText>
                <CFormInput placeholder="Heading" aria-label="Heading" aria-describedby="basic-addon1" />
            </CInputGroup>

            <CInputGroup className="mb-3">
                <CInputGroupText id="basic-addon2">icon</CInputGroupText>
                <CFormInput placeholder="Description" aria-label="Description" aria-describedby="basic-addon2" />
            </CInputGroup>

            <CInputGroup>
                <CInputGroupText>Content</CInputGroupText>
                <CFormTextarea aria-label="Content"></CFormTextarea>
            </CInputGroup>
            <CButton type="submit">Upload</CButton>
        </div>
    )
}

export default addBlog