import React, { useEffect, useState } from 'react'
import Name from '../section/Name'
import axios from 'axios'
import collection from '../../assets/collection'
import Lodr from '../section/lodr'
const Dashboard = () => {
  const [databoy, setdataboy] = useState(null)
  const [datagirl, setdatagirl] = useState(null)
  const [dataunisex, setdataunisex] = useState(null)


  const getData=()=>{
    axios.get(collection.port+'api/admin/getNames/Boy').then((res)=>{
      setdataboy(res)
    })
    axios.get(collection.port+'api/admin/getNames/Girl').then((res)=>{
      setdatagirl(res)
      console.log(res);
    })
    axios.get(collection.port+'api/admin/getNames/Unisex').then((res)=>{
      setdataunisex(res)
    })
  }

  React.useEffect(() => getData(), []);
  return (
    <>
    {databoy&&datagirl&&dataunisex?<div>
    <Name gender={'BOYS'} props={databoy.data}/>
   <Name gender={'Girls'} props={datagirl.data}/>
    <Name gender={'Unisex'} props={dataunisex.data}/>
    </div>:<Lodr/>}
    </>
  )
}

export default Dashboard
