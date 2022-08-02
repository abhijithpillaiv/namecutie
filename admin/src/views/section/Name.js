import React, { useState } from 'react'
import { useEffect } from 'react'
import CIcon from '@coreui/icons-react'
import Lodr from '../section/lodr'
import ReactPaginate from 'react-paginate';
import { useNavigate } from 'react-router-dom';
import collection from '../../assets/collection'
import './page.css'
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
    cilHeart,
    cilPen,
    cilX,
} from '@coreui/icons'
import axios from 'axios';
const Name = ({ gender, props }) => {

    const navigate = useNavigate();

    const editHandler = (_id) => {
        navigate('/names/editName/' + _id)
    }
    const deleteHandler = (_id,index) => {
        setprogress(false)
        axios.get(collection.port + 'api/admin/deleteName/' + _id).then((res) => {
           pagination.currentData.splice(index,1)
            setprogress(true)
        })
    }

    const clickhandler = (_id) => {
        setprogress(false)
        navigate('/names/singleName/' + _id);
        setprogress(true)

    }

    const [progress, setprogress] = useState(true);


    //pagination 
    const [pagination, setPagination] = useState({
        data: props.map((value, index) => (({
            name: value.name,
            meaning: value.meaning,
            like: value.like,
            gender: value.gender,
            _id: value._id
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
        progress && pagination.currentData ? <div><CRow>
            <CCard className="mb-0">
                <CCardBody>
                    <CCol >
                        <div style={{ fontFamily: 'sans-serif', fontSize: 'x-large', textAlign: 'center', fontWeight: 'bold', color: 'blue' }}>{gender}</div>
                        <br />
                        <CTable style={{ cursor: 'pointer' }} align="middle" className="mb-0 border" hover responsive>
                            <CTableHead color="light">
                                <CTableRow>
                                    <CTableHeaderCell>Name</CTableHeaderCell>
                                    <CTableHeaderCell >Meaning</CTableHeaderCell>
                                    <CTableHeaderCell >Likes</CTableHeaderCell>
                                    <CTableHeaderCell >Edit/Delete</CTableHeaderCell>
                                </CTableRow>
                            </CTableHead>
                            <CTableBody>
                                {pagination.currentData.map((item, index) => (
                                    <CTableRow v-for="item in tableItems" key={index}>

                                        <CTableDataCell onClick={() => clickhandler(item._id)}>
                                            <div>{item.name}</div>
                                        </CTableDataCell>

                                        <CTableDataCell onClick={() => clickhandler(item._id)}>
                                            <strong>{item.meaning}</strong>
                                        </CTableDataCell>

                                        <CTableDataCell onClick={() => clickhandler(item._id)}>
                                            <CIcon icon={cilHeart} size='sm' />
                                            <span style={{ fontSize: 'small' }}>   {item.like}</span>
                                        </CTableDataCell>

                                        <CTableDataCell>
                                            <CIcon onClick={() => editHandler(item._id)} style={{ color: "blue", cursor: 'pointer' }} icon={cilPen} size='lg' />
                                            <CIcon onClick={() => deleteHandler(item._id,index)} style={{ color: "red", cursor: 'pointer', marginLeft: '20px' }} icon={cilX} size='lg' />
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
        </div> : <Lodr />

    )
}

export default Name