import React, { useEffect, useState } from 'react'
import Name from '../section/Name'
import Lodr from '../section/lodr'
import axios from 'axios'
import collection from '../../assets/collection'

const Unisex = () => {
  const [dataunisex, setdataunisex] = useState(null)


  const getData=()=>{
    axios.get(collection.port+'api/admin/getNames/Unisex').then((res)=>{
      setdataunisex(res)
    })
  }

  React.useEffect(() => getData(), []);
  return (
    <>
    {dataunisex?<Name gender={'UNISEX'} props={dataunisex.data}/>:<Lodr/>}
    </>
  )
}

export default Unisex