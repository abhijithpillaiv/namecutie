import React, { useState } from 'react'
import { port } from '../../assets/collection'
import addImg from '../../assets/addImage.png'
import './components/edit/edit.css'
import { CInputGroup, CFormInput, CFormLabel,CInputGroupText, CButton, CFormTextarea, CForm } from '@coreui/react'
import { useNavigate } from 'react-router-dom'
import Lodr from '../section/lodr'
import axios from 'axios'

function addBlog() {
   const navigate = useNavigate()
    const [title, settitle] = useState(null);
    const [des, setdes] = useState(null);
    const [content, setcontent] = useState(null);
    const [imgPview, setimgPview] = useState(null);
    const [image, setimage] = useState(null);
    const [preview, setpreview] = useState(false);

    // Handler
    const submitHandler=(event) =>{ 
        event.preventDefault();
        setpreview(false)

        // Formdata
         let formdata = new FormData();
         formdata.append('title',title);
         formdata.append('des',des);
         formdata.append('content',content);
         formdata.append('image',image);
      
         // Axios 
         axios({
                method: 'post',
                url:port+'api/admin/addBlog',
                data: formdata,
                headers: { "Content-Type": "multipart/form-data" }
              }).then((response)=>{
                   setpreview(false)
                   alert('Blog added sucessfully');
                   navigate(-1)
                })
    }
    return preview?<Lodr/>: <div>

            <div className="cardz height-auto">
                <div className="card-bodyz">
                    <div className="heading-layout1">
                        <div className="item-title">
                            <h3>Blogs</h3>
                        </div>
                    </div>

                    <form  className="new-added-form">
                        <div className="row">
                            <div className="col-xl-12 col-lg-12 col-12 form-group">
                                <label>Title *</label>
                                <input style={{fontWeight:'bold',fontSize:'20px'}} required type="text" onChange={(e)=>settitle(e.target.value)} className="form-control"/>
                            </div>
                           
                            <div className="col-xl-6 col-lg-6 col-12 form-group">
                                <label>Description</label>
                                <textarea style={{fontSize:'15px',height:'250px'}}   onChange={(e)=>setdes(e.target.value)} placeholder="Add descritpion" className="form-control"/>
                            </div>
                           
                            <div className="col-xl-6 col-lg-6 col-12 form-group">
                                <label>Content</label>
                                <textarea style={{fontSize:'15px',height:'250px'}}  onChange={(e)=>setcontent(e.target.value)}  placeholder="Add content" className="form-control"/>
                            </div> 

                            <div className="col-lg-6 col-12 form-group mg-t-30">
                             {imgPview ? <img width="70px" height="70px" src={imgPview}  alt=''/> :<img width="70px" height="70px" src={addImg}  alt=''/>}
                                <label className="text-dark-medium">Upload Photo </label>
                                <input onChange={(e)=>{setimage(e.target.files[0]);setimgPview( URL.createObjectURL(e.target.files[0]))}} type="file" className="form-control-file"/></div>


                            <div className="col-12 form-group mg-t-8">
                                <button onClick={submitHandler}  className="btn-fill-lg btn-gradient-yellow btn-hover-bluedark">Save</button>
                                <button onClick={()=>{setimage(null), setimgPview(null); setcontent(null),setdes(null),settitle(null)}} type="reset" className="btn-fill-lg bg-blue-dark btn-hover-yellow">Reset</button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>

        </div>
}

export default addBlog