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
    cilCalculator,
    cilChartPie,
    cilCursor,
    cilDescription,
    cilDrop,
    cilNotes,
    cilPencil,
    cilPuzzle,
    cilSpeedometer,
    cilStar,
} from '@coreui/icons'
const Name = ({ gender, props }) => {
    useEffect(() => {
        console.log(props);
    }, [props])


    return (
        props ? <CRow>
            <CCard className="mb-0">
                <CCardBody>
                    <CCol >
                        <div>{gender}</div>
                        <br />
                        <CTable align="middle" className="mb-0 border" hover responsive>
                            <CTableHead color="light">
                                <CTableRow>
                                    <CTableHeaderCell>Name</CTableHeaderCell>
                                    <CTableHeaderCell className="text-center">Meaning</CTableHeaderCell>
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