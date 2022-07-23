import React from 'react'
import Name from './Name'

const Dashboard = () => {
  const tableExample = [
    {
        name: 'Yiorgos Avraamu',
        meaning: 'nice name'
    },
    {
      name: 'Yiorgos Avraamu',
      meaning: 'nice name'
  },
  ]

  return (
    <>
    <Name gender={'BOYS'} props={tableExample}/>
    <Name gender={'Girls'} props={tableExample}/>
    <Name gender={'Unisex'} props={tableExample}/>
    </>
  )
}

export default Dashboard
