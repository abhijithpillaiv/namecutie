import React  from 'react'
import Midsingle from './midsingle';
import Midhome from './midhome'

export default function Mid({mid}) {
  return mid  ? <Midsingle  mid={mid}/>: <Midhome  mid={mid}/>
}
