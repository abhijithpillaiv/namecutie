import React from 'react'
import Name from '../section/Name'

const Unisex = () => {
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
    <Name gender={'UNISEX'} props={tableExample}/>
    </>
  )
}

export default Unisex