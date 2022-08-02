import React, { useState,useEffect } from 'react'
import { port } from '../../assets/collection'
import '../blog/components/edit/edit.css'
import { useNavigate, useParams } from 'react-router-dom'
import Lodr from '../section/lodr'
import axios from 'axios'

function editNotice() {
    
    const{id}=useParams()
   const navigate = useNavigate()
    const [title, settitle] = useState(null);
    const [content, setcontent] = useState(null);
    const [preview, setpreview] = useState(true);
    const [_id, set_id] = useState(null);

    // Handler
    const submitHandler=(event) =>{ 
        event.preventDefault();
        setpreview(true)
      
         // Axios 
         axios.post(port + 'api/admin/editNotice', {
            'title': title, 'content': content,'id':_id,
        }).then(() => {
            alert("Notice edited sucessfully")
            setpreview(false)
        })
    }

    useEffect(() => {
        axios.get(port+'api/admin/getSingleNotice/'+id).then((res)=>{
         settitle(res.data.title)
         setcontent(res.data.content)
         set_id(req.data._id)
         setpreview(false)
        })
     }, []);

    return preview?<Lodr/>: <div>

            <div className="cardz height-auto">
                <div className="card-bodyz">
                    <div className="heading-layout1">
                        <div className="item-title">
                            <h3>Notice</h3>
                        </div>
                    </div>

                    <form  className="new-added-form">
                        <div className="row">
                            <div className="col-xl-12 col-lg-12 col-12 form-group">
                                <label>Title *</label>
                                <input value={title} style={{fontWeight:'bold',fontSize:'20px'}} required type="text" onChange={(e)=>settitle(e.target.value)} className="form-control"/>
                            </div>
                           
                            <div className="col-xl-6 col-lg-6 col-12 form-group">
                                <label>Content</label>
                                <textarea value={content} style={{fontSize:'15px',height:'250px'}}  onChange={(e)=>setcontent(e.target.value)}  placeholder="Add content" className="form-control"/>
                            </div> 


                            <div className="col-12 form-group mg-t-8">
                                <button onClick={submitHandler}  className="btn-fill-lg btn-gradient-yellow btn-hover-bluedark">Save</button>
                                <button onClick={()=>{ setcontent(null),settitle(null)}} type="reset" className="btn-fill-lg bg-blue-dark btn-hover-yellow">Reset</button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>

        </div>
}

export default editNotice