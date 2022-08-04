import React, { useEffect, useState } from 'react';
import {
  CCard,
  CCardBody,
  CCol,
  CRow,
  CTable,
  CTableBody,
  CTableDataCell,
  CTableHead,
  CTableHeaderCell,
  CTableRow,
  
} from '@coreui/react'
import {
  cilArrowThickToTop,
  cilArrowBottom,
  cilPen,
  cilX,
} from '@coreui/icons'
import { port } from '../../assets/collection';
import axios from 'axios';
import CIcon from '@coreui/icons-react'




function Row(props) {
  const { row } = props;
  const [open, setOpen] = React.useState(false);
  // Delete Handler

  const deleteHandler = (id) => {
    axios.get(port + 'api/admin/deleteMessage/' + id).then((resol) => {
      alert(resol.data);
      props.setlodr(!props.lodr)
    })
  }
  return (
    <span>
      <CTableRow v-for="item in tableItems" >
        <CTableDataCell>
            {open ? <CIcon icon={cilArrowThickToTop} /> : <CIcon icon={cilArrowBottom} />}
        </CTableDataCell>
        <CTableDataCell component="th" scope="row">
          {row.email}
        </CTableDataCell>
        <CTableDataCell align="center">{row.name}</CTableDataCell>
        <CTableDataCell align="center">{row.content}</CTableDataCell>
        <CTableDataCell align="center">
          <CIcon icon={cilX} onClick={() => deleteHandler(row._id)}size="sm"/>
        </CTableDataCell>
      </CTableRow>
      {/* <CTableRow>
        <CTableDataCell style={{ paddingBottom: 0, paddingTop: 0, background: '#eeeeee', color: 'black' }} colSpan={10}>
          <Collapse in={open} timeout="auto" unmountOnExit>
            <Box margin={5}>
              <Typography variant="h5" gutterBottom component="div">
                Content
              </Typography>
              <Table aria-label="purchases">
                <h6>{row.message}</h6>
              </Table>
            </Box>
          </Collapse>
        </CTableDataCell>
      </CTableRow> */}
    </span>
  );
}


export default function CollapsibleTable() {

  // State
  const [res, setres] = useState(null);
  const [lodr, setlodr] = useState(null);

  // 
  useEffect(() => {
    axios.get(port + 'api/admin/getMessage').then((resolve) => {
      setres(resolve.data);
      setlodr(true);
    })
  }, [lodr])
  return lodr ? (
      <CCardBody >
        <CCol>
          <div style={{ fontFamily: 'sans-serif', fontSize: 'x-large', textAlign: 'center', fontWeight: 'bold', color: 'blue' }}>Messages</div>
          <br />
          <CTable>
            <CTableHead color="light">
              <CTableRow>
                <CTableHeaderCell />
                <CTableHeaderCell style={{ fontWeight: 'bold' }} >Email</CTableHeaderCell>
                <CTableHeaderCell style={{ fontWeight: 'bold' }} align="center">Name</CTableHeaderCell>
                <CTableHeaderCell style={{ fontWeight: 'bold' }} align="center">Content</CTableHeaderCell>
                <CTableHeaderCell style={{ fontWeight: 'bold' }} align="center">Delete</CTableHeaderCell>
              </CTableRow>
            </CTableHead>
            <CTableBody>
              {res.map((row, index) => (
                <Row key={index} setlodr={setlodr} lodr={lodr} row={row} />
              ))}
            </CTableBody>
          </CTable>
        </CCol>
      </CCardBody>
  ) : null;
}