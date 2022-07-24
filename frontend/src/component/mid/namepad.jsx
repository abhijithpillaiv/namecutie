import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import CIcon from '@coreui/icons-react'
import {
  cilHeart,
  cilColorFill
} from '@coreui/icons'


export default function Namepad() {
  const [details, setdetails] = useState({name:'Garrett Winters',meaning:"Its a nice name with meaning"});
  return (
    <tr >
     {/* <td><img src="https://banner2.cleanpng.com/20180315/kjw/kisspng-logo-man-computer-icons-brand-font-man-icon-5aab18713f8373.6308341715211623532602.jpg" width="32" height="32" className="rounded-circle my-n1" alt="icon"/></td> */}
     <td><Link style={{ color: 'inherit', textDecoration: 'inherit'}} to={{pathname:"/meaningof/"+details.name}}>{details.name}</Link></td>
     <td><Link style={{ color: 'inherit', textDecoration: 'inherit'}} to={{pathname:"/meaningof/"+details.name}}>{details.meaning}</Link></td>
     {/* <td><CIcon icon={cilHeart} color='red' size='lg'/></td> */}
   </tr>

    
  );
}
