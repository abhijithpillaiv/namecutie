import axios from 'axios'
import React, {  useContext, useState } from 'react'
import './mid.css'
import Nametable from '../mid/nametable'
import Lodr from '../../static/lodr'
import collection from '../../context/collection'
import { Link } from 'react-router-dom'
import {search} from '../../context/search'
import NametableSearch from '../mid/nametableSearch'


function Mid() {

  const {serchName}=useContext(search)

    const [databoy, setdataboy] = useState(null)
    const [datagirl, setdatagirl] = useState(null)
    const [dataunisex, setdataunisex] = useState(null)

    const getData=()=>{
        axios.get(collection.port+'api/admin/getNames/Boy').then((res)=>{
          res.data.sort((a, b) => b.like - a.like);
          setdataboy(res.data)
        })
        axios.get(collection.port+'api/admin/getNames/Girl').then((res)=>{
          res.data.sort((a, b) => a.like - b.like);
          setdatagirl(res.data)
        })
        axios.get(collection.port+'api/admin/getNames/Unisex').then((res)=>{
          res.data.sort((a, b) => a.like - b.like);
          setdataunisex(res.data)
        })
      }
    
      React.useEffect(() => getData(), []);

    return  databoy&&datagirl&&dataunisex? <div className="event-schedule-area-two bg-color pad100">
          <div className="row">
              <div className="col-lg-4">
                  <ul className="nav custom-tab custom-tab_b" >
                      <li className="nav-item">
                          <Link className="nav-link "  to="/nameOf/BOYS"
                              role="tab" aria-controls="home" aria-selected="true"><span className="boys" >BOYS</span></Link>
                      </li>
                  </ul>
        {serchName? <NametableSearch gender={"BOYS"} props={databoy} /> : <Nametable  gender={"BOYS"} props={databoy}/>}
              </div>
              <div className="col-lg-4">
                  <ul className="nav custom-tab custom-tab_g" >
                      <li className="nav-item">
                          <Link  className="nav-link"  to="/nameOf/GIRLS"
                              role="tab" aria-controls="home" aria-selected="true"><span className="girls">GIRLS</span></Link>
                      </li>
                  </ul>
                  {serchName? <NametableSearch gender={"GIRLS"} props={datagirl} /> : <Nametable  gender={"GIRLS"} props={datagirl}/>}
              </div>

              <div className="col-lg-4">
                  <ul className="nav custom-tab custom-tab_u" >
                      <li >
                          <Link  className="nav-link"  to="/nameOf/UNISEX"
                              role="tab" aria-controls="home" aria-selected="true"><span className="unisex">UNISEX</span></Link>
                      </li>
                  </ul>
                  {serchName? <NametableSearch gender={"UNISEX"} props={dataunisex} /> : <Nametable  gender={"UNISEX"} props={dataunisex}/>}
              </div>

             
          </div>
  </div>
    :<Lodr/>
}

export default Mid