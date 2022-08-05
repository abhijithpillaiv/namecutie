import React, { useEffect, useState } from 'react'
import '../blog/components/edit/edit.css'
import gif from '../../assets/new.gif'
import Lodr from '../section/lodr'
import axios from 'axios'
import {
    cilPen, cilX
} from '@coreui/icons'
import CIcon from '@coreui/icons-react';
import { useNavigate } from 'react-router-dom';
import { port } from '../../assets/collection'


export default function viewNotice() {
    const navigate = useNavigate();

    const [notice, setnotice] = useState(null);
    const [progress, setprogress] = useState(true);

    useEffect(() => {
        axios.get(port + 'api/admin/getNotice').then((res) => {
            setnotice(res.data)
        })
    }, [progress]);
    const editHandler = (_id) => {
        navigate('/notice/editNotice/' + _id)
    }
    const deleteHandler = (id) => {
        if (window.confirm('Do you want to delete Notice?')) {
            axios.get(port + 'api/admin/deleteNotice/' + id).then((res) => {
                window.alert('Deleted sucessully.')
                navigate('/notice/viewNotice')
                setprogress(!progress)
            })
        }
    }
    return notice ?
        <div style={{ margin: '5px' }}>
            <div style={{ textAlign: 'center', fontWeight: 'bolder', fontSize: '25px', padding: '10px', color: 'blue' }}>Notice Board</div>
            {notice.map((data, index) => 
            <tr key={index}>
                <td>
                    <div style={{ fontFamily: 'cursive', fontWeight: 'bold', fontSize: '20px', color: 'black' }}>{data.title}<img alt='gif' style={{ height: '20px', width: 'auto' }} src={gif} /></div>
                    <p style={{ fontFamily: 'unset', fontWeight: 'light', fontSize: '10px', color: 'black' }} >{data.content}</p>
                </td>
                <td><CIcon onClick={() => { editHandler(data._id) }} size='lg' style={{ color: 'blue', cursor: 'pointer' }} icon={cilPen} /></td>
                <td><CIcon onClick={() => { deleteHandler(data._id) }} size='lg' style={{ color: 'red', cursor: 'pointer' }} icon={cilX} /></td>
            </tr>)}
        </div>
        : <Lodr />
}
