import React from 'react'
import axios from "axios";
import {useEffect, useState } from "react";
import "./singlePost.css";
import { port } from '../../../../context/collection';
import {useParams } from 'react-router';
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';
import Edit from '../edit/edit'


export default function SinglePost() {
  const PF = port+"image/";
  const {id}=useParams()

  // state
  const [res, setres] = useState(null)
  const [edit, setedit] = useState(false)

  useEffect(() => {
    axios({
      method: "get",
      url:port+'api/getBlog/'+id,
    }).then((response)=>{
        setres(response.data)
      })
  },[id]);
  
  // Handler
 const deleteHandler=(id)=>{
   if ( window.confirm('Do you want to delete the Recipe?')) {
     axios.get(port+'api/admin/deleteBlog/'+id).then((res)=>{
       window.alert('Recipe deleted sucessully.')
     })
   }
 }
 const editHandler=(data)=>{
  if ( window.confirm('Do you want to Edit the Blog?')) {
    setedit(true)
  }
}
 
  return edit ?<Edit data={res}/>: res ? (
   <div className="background">
    <div className=" singlePost container">
      <div className="singlePostWrapper row">
        <div className="col-sm-12 col-md-12">
        {res.image? (
          <img style={{height:'100%',width:'auto'}} src={PF + res.image} alt="" className="singlePostImg imag" />
        ):null}
        </div>
        <div className="col-sm-12 col-md-12 ">
          <br/>
        <DeleteIcon style={{cursor:'pointer'}} onClick={()=>deleteHandler(res._id)} />              <EditIcon style={{cursor:'pointer'}}  onClick={()=>{editHandler(res)}}/>
        </div>
        <div className="col-sm-12 col-md-12 ">
        <div className='singlePostHeading'><span className=" singlePostDesc">{res.title}</span></div>
        <p className='singlePostDesc'></p>
        </div>
        <div className="col-sm-12 col-md-12">
        <div className='singlePostHeading'>Description</div><br/>
        <p className=" singlePostDesc">{res.des}</p>
        </div>
        <div className="col-sm-12 col-md-12">
        <div className='singlePostHeading'>Content</div><br/>
        <p className="singlePostDesc">{res.content}</p>
        </div>
      </div>
    </div>
    </div>
  ):<h1>Waiting</h1>;
}
