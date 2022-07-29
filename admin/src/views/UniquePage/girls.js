import React, { useEffect, useState } from 'react'
import Name from '../section/Name'
import Lodr from '../section/lodr'
import axios from 'axios'
import collection from '../../assets/collection'

const Girls = () => {
  const [datagirl, setdatagirl] = useState(null)


  const getData=()=>{
    axios.get(collection.port+'api/admin/getNames/Girl').then((res)=>{
      setdatagirl(res)
    })
  }

  React.useEffect(() => getData(), []);

  return (
    <>
    {datagirl?<Name gender={'GIRLS'} props={datagirl.data}/>:<Lodr/>}
    </>
  )
}

export default Girls