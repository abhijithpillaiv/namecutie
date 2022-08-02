import React, { useEffect, useState } from 'react'
import {useParams} from 'react-router-dom'
import axios from 'axios'
import InputName from '../section/inputName';
import Loader from '../section/lodr';
import collection from '../../assets/collection';

export default function editName() {
  const{id}=useParams()
  const [Details, setDetails] = useState(null)
  useEffect(() => {
      axios.get(collection.port+'api/admin/getName/'+id).then((res) => {
          setDetails(res);  
      })
  }, [])
  return  Details ?  <InputName edit={true} props={Details}/>:<Loader/>
}