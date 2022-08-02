import React, {useState } from 'react'
import {useHistory} from 'react-router-dom'
import axios from 'axios'
import './edit.css'
import lodrImg from '../../../../static/lodr.gif'
import addImage from'../../../../static/addImage.png'
import {port} from '../../../../context/collection'

function Edititem({data}) {
    const history=useHistory()

    // State
    const [title, settitle] = useState(data.title);
    const [des, setdes] = useState(data.des);
    const [content, setcontent] = useState(data.content);
    const [lodr, setlodr] = useState(false);
    const [Preview, setPreview] = useState(port+'image/'+data.image);
    const [imag, setimag] = useState(data.image);
    const id=data._id
    const [imgChange, setimgChange] = useState(false)

    // Handler
    const submitHandler=(event) =>{ 
        event.preventDefault();

        // Formdata
         let formdata = new FormData();
         formdata.append('id',id)
         formdata.append('ingredients',ingredients);
         formdata.append('preparation',preparation);
         formdata.append('title',title);
         formdata.append('serves',serves);
         formdata.append('imgChange',imgChange)
         formdata.append('image',imag);
      
         setlodr(true)
         
        // Axios 
         axios({
                method: 'post',
                url:port+'api/admin/editRecipe',
                data: formdata,
                headers: { "Content-Type": "multipart/form-data" }
              }).then((response)=>{
                   setlodr(false)
                   alert('Recipee edited sucessfully');
                   history.push('/admin/allRecipes')
                })
    }
    return lodr ? <img style={{display:'block',marginLeft:'auto',marginRight:'auto',height:'400px',widht:'400px'}} src={lodrImg} alt='loader'/> : <div>

            <div className="cardz height-auto">
                <div className="card-bodyz">
                    <div className="heading-layout1">
                        <div className="item-title">
                            <h3>Blogs</h3>
                        </div>
                    </div>

                    <form onSubmit={submitHandler} className="new-added-form">
                        <div className="row">
                        <div className="col-xl-12 col-lg-12 col-12 form-group">
                                <label>Title *</label>
                                <input value={title} style={{fontWeight:'bold',fontSize:'20px'}} required type="text" onChange={(e)=>settitle(e.target.value)} className="form-control"/>
                            </div>
                           
                            <div className="col-xl-6 col-lg-6 col-12 form-group">
                                <label>Description</label>
                                <textarea value={des} style={{fontSize:'15px',height:'250px'}}   onChange={(e)=>setdes(e.target.value)} placeholder="Add descritpion" className="form-control"/>
                            </div>
                           
                            <div className="col-xl-6 col-lg-6 col-12 form-group">
                                <label>Content</label>
                                <textarea value={content} style={{fontSize:'15px',height:'250px'}}  onChange={(e)=>setcontent(e.target.value)}  placeholder="Add content" className="form-control"/>
                            </div> 
                           
                            <div className="col-lg-6 col-12 form-group mg-t-30">
                             {Preview ? <img width="70px" height="70px" src={Preview}  alt=''/> :<img width="70px" height="70px" src={addImage}  alt=''/>}
                                <label className="text-dark-medium">Upload Photo (150px X 150px)</label>
                                <input onChange={(e)=>{setimag(e.target.files[0]); setimgChange(true);setPreview( URL.createObjectURL(e.target.files[0]))}} type="file" className="form-control-file"/></div>


                            <div className="col-12 form-group mg-t-8">
                                <button type="submit"  className="btn-fill-lg btn-gradient-yellow btn-hover-bluedark">Save</button>
                                <button onClick={()=>{setPreview(null);}} type="reset" className="btn-fill-lg bg-blue-dark btn-hover-yellow">Reset</button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>

        </div>
}

export default Edititem