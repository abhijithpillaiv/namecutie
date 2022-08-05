import React, { useEffect, useState } from 'react';
import { port } from '../../assets/collection';
import axios from 'axios';
import { CTableHead,CTable,CTableRow,CTableBody,CTableDataCell,CTableHeaderCell } from '@coreui/react';
import {
  cilX
} from '@coreui/icons'
import CIcon from '@coreui/icons-react';


export default function CollapsibleTable() {
  
  // State
  const [res, setres] = useState(null);
  const [lodr, setlodr] = useState(null);
  // 
  useEffect(() => {
    axios.get(port+'api/admin/getMessage').then((resolve)=>{
      setres(resolve.data);
      console.log(resolve.data);
      setlodr(true);
    })
  }, [lodr])

    // Delete Handler

    const deleteHandler=(id)=>{
      setlodr(false)
      axios.get(port+'api/admin/deleteMessage/'+id).then((resol)=>{
        alert(resol.data);
        setlodr(true)
      })
    }

    
  return lodr&&res ? <CTable align="middle" responsive>
  <CTableHead>
    <CTableRow>
      <CTableHeaderCell scope="col" className="w-25">
        Name
      </CTableHeaderCell>
      <CTableHeaderCell scope="col" className="w-25">
        Email
      </CTableHeaderCell>
      <CTableHeaderCell scope="col" className="w-25">
        Content
      </CTableHeaderCell>
      <CTableHeaderCell scope="col">
        Delete
      </CTableHeaderCell>
    </CTableRow>
  </CTableHead>
  <CTableBody>
    {res.map((data,index)=><CTableRow key={index}>
      <CTableDataCell>
        {data.name}
      </CTableDataCell>
      <CTableDataCell>
        {data.email}
      </CTableDataCell>
      <CTableDataCell>
        {data.content}
      </CTableDataCell>
      <CTableDataCell>
        <CIcon size='lg' style={{color:'red',cursor:'pointer'}} onClick={()=>deleteHandler(data._id)} icon={cilX}/>
      </CTableDataCell>
    </CTableRow>
    )}
  </CTableBody>
</CTable>:null;
}