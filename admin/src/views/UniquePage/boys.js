import React, { useEffect, useState } from 'react'
import Name from '../section/Name'
import Lodr from '../section/lodr'
import axios from 'axios'
import collection from '../../assets/collection'

const Boys = () => {
  const [databoy, setdataboy] = useState(null)
  const getData=()=>{
    axios.get(collection.port+'api/admin/getNames/Boy').then((res)=>{
      setdataboy(res)
    })
  }

  React.useEffect(() => getData(), []);

  return (
    <>
    {databoy?<Name gender={'BOYS'} props={databoy.data}/>:<Lodr/>}
    </>
  )
}

export default Boys