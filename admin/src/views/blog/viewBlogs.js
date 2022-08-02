import axios from 'axios';
import React, { useEffect, useState } from 'react'
import Post from './components/posts/Posts'
import Loader from '../section/lodr'
import { port } from '../../assets/collection';
function viewBlogs() {
    const [post, setpost] = useState(null);
    useEffect(() => {
        axios.get(port+'api/admin/getBlog').then((res)=>{
            setpost(res)
        })
    },[]);
  return post?<Post post={post}/>:<Loader/>
}

export default viewBlogs