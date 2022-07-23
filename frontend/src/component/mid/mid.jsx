import React, { useEffect } from 'react'
import { useState } from 'react';
import Midsingle from './midsingle';
import Midhome from './midhome'

export default function Mid({mid}) {
  return (
    <div>
            {mid  ? <Midsingle mid={mid}/>: <Midhome mid={mid}/>}
    </div>
  )
}
