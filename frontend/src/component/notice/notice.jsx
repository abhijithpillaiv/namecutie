import React, { useEffect, useState } from 'react'
import Lodr from '../../static/lodr'
import axios from 'axios'
import gif from '../../static/new.gif'
import { port } from '../../context/collection'

export default function Notice() {

    const [notice, setnotice] = useState(null);

    useEffect(() => {
        axios.get(port+'api/getNotice').then((res)=>{
          console.log(res.data);
            setnotice(res.data)
        })
    }, []);
    return notice?
    <div style={{margin:'5px'}}>
      <div style={{textAlign:'center',fontWeight:'bolder',fontSize:'25px',padding:'10px',color:'blue'}}>Notice Board</div>
     {notice.map((data,index)=><span key={index}> <div style={{fontFamily:'cursive',fontWeight:'bold',fontSize:'20px',color:'black'}}>{data.title}<img alt='gif' style={{height:'20px',width:'auto'}} src={gif}/></div>
      <p style={{fontFamily:'unset',fontWeight:'light',fontSize:'10px',color:'black'}} >{data.content}</p></span>)}
    </div>
    :<Lodr/>
}
