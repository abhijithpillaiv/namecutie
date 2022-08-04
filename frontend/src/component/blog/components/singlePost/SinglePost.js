import React from 'react'
import "./singlePost.css";
import { port } from '../../../../context/collection';


export default function SinglePost({post}) {
  const PF = port+"image/";
  
  
  return post ? (
   <div className="background">
    <div className=" singlePost container">
      <div className="singlePostWrapper row">
        <div style={{textAlign:'center'}} className="col-sm-12 col-md-12">
        {post.image? (
          <img style={{height:'100%',width:'auto'}} src={PF + post.image} alt="" className="singlePostImg imag" />
        ):null}
        </div>
        <div className="col-sm-12 col-md-12 ">
          <br/>
        </div>
        <div className="col-sm-12 col-md-12 ">
        <div className='singlePostHeading'><span className=" singlePostDesc">{post.title}</span></div>
        <p className='singlePostDesc'></p>
        </div>
        <div className="col-sm-12 col-md-12">
        <div className='singlePostHeading'>Description</div><br/>
        <p className=" singlePostDesc">{post.des}</p>
        </div>
        <div className="col-sm-12 col-md-12">
        <div className='singlePostHeading'>Content</div><br/>
        <p className="singlePostDesc">{post.content}</p>
        </div>
      </div>
    </div>
    </div>
  ):<h1>Waiting</h1>;
}
