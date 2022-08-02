import React, { useEffect, useState } from 'react'
import '../blog/components/edit/edit.css'
import Lodr from '../section/lodr'
import axios from 'axios'
import {
    cilPen, cilX
} from '@coreui/icons'
import CIcon from '@coreui/icons-react';
import { useNavigate } from 'react-router-dom';


export default function viewNotice() {
    const navigate = useNavigate();

    const [notice, setnotice] = useState(null);
    const [progress, setprogress] = useState(true);

    useEffect(() => {
        axios.get(port+'api/admin/getNotice').then((res)=>{
            setnotice(res)
        })
    }, [progress]);
    const editHandler=(_id)=>{
        navigate('/notice/editNotice/' + _id)
    }
    const deleteHandler=(_id)=>{
        axios.get(port+'api/admin/deleteNotice/'+_id).then((res)=>{
            setprogress(!progress)
        })
    }
    return notice?
        <div className="container-fluid">
            <div className="row">
                <div className="card height-auto">
                    <div className="card-body">
                        <div className="heading-layout1">
                            <div className="item-title">
                                <h3>Notice Board</h3>
                            </div>
                        </div>

                        <div className="notice-board-wrap">
                            {notice.map((data,index)=><div key={index}className="notice-list">
                                <h6>{data.title}</h6>
                                <br/>
                                <h8 className="notice-title"><span >{data.content}</span></h8>
                                <br/>
                                <CIcon onClick={(e)=>editHandler(data._id)} icon={cilPen}/>
                                <CIcon onClick={()=>deleteHandler(data._id)} icon={cilX}/>
                            </div>)}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    :<Lodr/>
}
