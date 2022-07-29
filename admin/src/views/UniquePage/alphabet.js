import React, { useEffect, useState } from 'react'
import {useParams} from 'react-router-dom'
import Name from '../section/Name'
import Lodr from '../section/lodr'
import axios from 'axios'
import collection from '../../assets/collection'

const Alphabet = () => {
  const {alpha}=useParams() 
  const [char, setchar] = useState(null)
  const getData=()=>{
    axios.get(collection.port+'api/admin/getNames/alphabet/'+alpha).then((res)=>{
      setchar(res)
    })
  }
  useEffect(() => {
    setchar(null)
    getData()
  }, [alpha]);
  return (
    <>
    {char?<Name gender={alpha} props={char.data}/>:<Lodr/>}
    </>
  )
}

export default Alphabet