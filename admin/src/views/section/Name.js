import React from 'react'
import { useEffect } from 'react'
import CIcon from '@coreui/icons-react'

import {
    CAvatar,
    CButton,
    CButtonGroup,
    CCard,
    CCardBody,
    CCardFooter,
    CCardHeader,
    CCol,
    CProgress,
    CRow,
    CTable,
    CTableBody,
    CTableDataCell,
    CTableHead,
    CTableHeaderCell,
    CTableRow,
} from '@coreui/react'
import {
    cilHeart,
    cilPen,
    cilX,
} from '@coreui/icons'
const Name = ({ gender, props }) => {
    useEffect(() => {
        console.log(props);
    }, [props])

const editHandler=()=>{
    console.log('Edit initiated');
}
const deleteHandler=()=>{
    console.log('delete initiated');
}
    return (
        props ? <CRow>
            <CCard className="mb-0">
                <CCardBody>
                    <CCol >
                        <div style={{fontFamily:'sans-serif',fontSize:'x-large',textAlign:'center',fontWeight:'bold',color:'blue'}}>{gender}</div>
                        <br />
                        <CTable align="middle" className="mb-0 border" hover responsive>
                            <CTableHead color="light">
                                <CTableRow>
                                    <CTableHeaderCell>Name</CTableHeaderCell>
                                    <CTableHeaderCell >Meaning</CTableHeaderCell>
                                    <CTableHeaderCell >Total likes</CTableHeaderCell>
                                    <CTableHeaderCell >Edit/Delete</CTableHeaderCell>
                                </CTableRow>
                            </CTableHead>
                            <CTableBody>
                                {props.map((item, index) => (
                                    <CTableRow v-for="item in tableItems" key={index}>

                                        <CTableDataCell>
                                            <div>{item.name}</div>
                                        </CTableDataCell>

                                        <CTableDataCell>
                                            <strong>{item.meaning}</strong>
                                        </CTableDataCell>

                                        <CTableDataCell>
                                            <CIcon icon={cilHeart} size='sm' />
                                            <span style={{fontSize:'small'}}>   200</span>
                                        </CTableDataCell>

                                        <CTableDataCell>
                                            <CIcon onClick={editHandler} style={{color: "blue",cursor:'pointer'}} icon={cilPen} size='lg' />
                                            <CIcon onClick={deleteHandler} style={{color: "red",cursor:'pointer',marginLeft:'20px'}}  icon={cilX} size='lg' />
                                        </CTableDataCell>

                                    
                                    </CTableRow>
                                ))}
                            </CTableBody>
                        </CTable>
                    </CCol>
                    {/* <CIcon icon={cilPuzzle} size='sm'/> */}
                </CCardBody>
            </CCard>
        </CRow> : <div>loading gif</div>

    )
}

export default Name