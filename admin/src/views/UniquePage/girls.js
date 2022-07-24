import React from 'react'
import Name from '../section/Name'

const Girls = () => {
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
    <Name gender={'GIRLS'} props={tableExample}/>
    </>
  )
}

export default Girls