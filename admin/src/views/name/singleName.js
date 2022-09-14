import React, { useEffect, useState } from 'react'
import Name from '../section/Name'
import Lodr from '../section/lodr'
import axios from 'axios'
import collection from '../../assets/collection'
import { useParams } from 'react-router-dom'
import { cilHeart } from '@coreui/icons'
import CIcon from '@coreui/icons-react'


export default function singleName() {
  const{id}=useParams()
  const [data, setdata] = useState(null)
  const getData=()=>{
    axios.get(collection.port+'api/admin/getName/'+id).then((res)=>{
      setdata(res.data)
    })
  }

  React.useEffect(() => getData(), []);
  return data? <div className="card">
  <h4 style={{textAlign:'center'}} className="card-header">{data.name}  </h4>
  <div className="card-body">
    <h4 className="card-title">Meaning :: <span style={{fontSize:'15px',fontWeight:'normal'}}>{data.meaning}</span></h4>
    <br></br>
    <h4 className="card-text">Ethnic   :: {data.ethni. map(name => <span style={{fontSize:'15px',fontWeight:'normal'}}> {name} ,</span>)}</h4>
    <br/>
    <span style={{fontSize:'20px',fontWeight:'normal'}}><CIcon icon={cilHeart} height={20} alt='heart'></CIcon>  {data.like}</span>
    <br/><br/>
    <h4 style={{textAlign:'center'}}>Happy Birthday {data.name}</h4>
  </div>
</div>:<Lodr/>
}
 