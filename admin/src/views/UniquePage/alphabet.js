import React from 'react'
import Name from '../section/Name'

const Alphabet = () => {
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
    <Name gender={'A'} props={tableExample}/>
    </>
  )
}

export default Alphabet