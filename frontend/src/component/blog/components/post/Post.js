import React, { useState } from 'react'
import "./post.css";
import { port } from '../../../../context/collection';
import Single from '../singlePost/SinglePost'

export default function Post({ post }) {

  const [toggler, settoggler] = useState(true);
  const singleHandler=()=>{
    settoggler(false)
  }

  const PF = port+"image/";
  return toggler?<div className="post">
      {post.image===undefined?null: <img className="postImg" src={PF + post.image} alt="" />}
      <div className="postInfo">
        <div className="postCats">
        </div>
          <span onClick={()=>singleHandler()} className="postTitle">{post.title}</span>
        <hr />
      </div>

    </div>:<Single post={post}/>
}

