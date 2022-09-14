import React, { useEffect, useState } from 'react'
import Lodr from '../../static/lodr'
import axios from 'axios'
import gif from '../../static/new.gif'
import { port } from '../../context/collection'

export default function Notice() {

    const [notice, setnotice] = useState(null);

    useEffect(() => {
        axios.get(port+'api/getNotice').then((res)=>{
            setnotice(res.data)
        })
    }, []);
    return notice?
    <div style={{paddingBottom:'20px',margin:'5px'}}>
      <div style={{textAlign:'center',fontWeight:'bolder',fontSize:'25px',padding:'10px',color:'blue'}}>Notice Board</div>
     {notice.map((data,index)=><span key={index}> <div style={{fontFamily:'monospace',fontWeight:'bold',fontSize:'20px',color:'black',textAlign:'left'}}>{data.title}<img alt='gif' style={{height:'20px',width:'auto'}} src={gif}/></div>
      <p style={{fontFamily:'unset',fontWeight:'light',fontSize:'15px',color:'black'}} >{data.content}</p></span>)}
    </div>
    :<Lodr/>
}
