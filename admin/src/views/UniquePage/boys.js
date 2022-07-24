import React from 'react'
import Name from '../section/Name'

const Boys = () => {
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
    </>
  )
}

export default Boys