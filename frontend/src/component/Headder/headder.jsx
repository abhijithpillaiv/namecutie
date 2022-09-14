import React, { useState } from 'react'
import axios from "axios";
import { port } from "../../context/collection";
import Headder from './headdersub';
import { useEffect } from 'react';

const Header = () => {
  const [ethni, setethni] = useState(null);
  useEffect(() => {
    if (!ethni) {
      axios.get(port + "api/getEthni").then((res) => {
        console.log(res.data);
        setethni(res.data);
      });
    }
  }, [ethni]);
return (
  ethni?<Headder props={ethni}/>:null
)
}

export default Header;

