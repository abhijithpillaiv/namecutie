import React, { useState } from 'react'
import { useEffect } from 'react'
import CIcon from '@coreui/icons-react'
import Lodr from '../section/lodr'
import ReactPaginate from 'react-paginate';
import { useNavigate } from 'react-router-dom';
import './page.css'
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
    
    const navigate = useNavigate();

const editHandler=()=>{
    console.log('Edit initiated');
}
const deleteHandler=()=>{
    console.log('delete initiated');
}

const clickhandler=(_id)=>{
    navigate('/names/singleName/'+_id);
}


//pagination 
const [pagination, setPagination] = useState({
    data: props.map((value, index) => (({
      name:value.name,
      meaning:value.meaning,
      like:value.like,
      gender:value.gender,
      _id:value._id
    }))),
    offset: 0,
    numberPerPage: 10,
    pageCount: 0,
    currentData: []
  });
  useEffect(() => {
    setPagination((prevState) => ({
      ...prevState,
      pageCount: prevState.data.length / prevState.numberPerPage,
      currentData: prevState.data.slice(pagination.offset, pagination.offset + pagination.numberPerPage)
    }))
  }, [pagination.numberPerPage, pagination.offset])
  const handlePageClick = event => {
    const selected = event.selected;
    const offset = selected * pagination.numberPerPage
    setPagination({ ...pagination, offset })
  }


    return (
        pagination.currentData && pagination.currentData ? <div><CRow>
            <CCard className="mb-0">
                <CCardBody>
                    <CCol >
                        <div style={{fontFamily:'sans-serif',fontSize:'x-large',textAlign:'center',fontWeight:'bold',color:'blue'}}>{gender}</div>
                        <br />
                        <CTable style={{cursor:'pointer'}} align="middle" className="mb-0 border" hover responsive>
                            <CTableHead color="light">
                                <CTableRow>
                                    <CTableHeaderCell>Name</CTableHeaderCell>
                                    <CTableHeaderCell >Meaning</CTableHeaderCell>
                                    <CTableHeaderCell >Likes</CTableHeaderCell>
                                    <CTableHeaderCell >Edit/Delete</CTableHeaderCell>
                                </CTableRow>
                            </CTableHead>
                            <CTableBody>
                                {pagination.currentData && pagination.currentData.map((item, index) => (
                                    <CTableRow onClick={()=>clickhandler(item._id)} v-for="item in tableItems" key={index}>

                                        <CTableDataCell>
                                            <div>{item.name}</div>
                                        </CTableDataCell>

                                        <CTableDataCell>
                                            <strong>{item.meaning}</strong>
                                        </CTableDataCell>

                                        <CTableDataCell>
                                            <CIcon icon={cilHeart} size='sm' />
                                            <span style={{fontSize:'small'}}>   {item.like}</span>
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
        </CRow> 
        <ReactPaginate
        previousLabel={'previous'}
        nextLabel={'next'}
        breakLabel={'...'}
        pageCount={pagination.pageCount}
        marginPagesDisplayed={2}
        pageRangeDisplayed={5}
        onPageChange={handlePageClick}
        containerClassName={'pagination'}
        activeClassName={'activez'}
      />
      </div>: <Lodr/>

    )
}

export default Name