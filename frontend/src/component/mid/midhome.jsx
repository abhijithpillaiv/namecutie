import React, { useContext } from 'react'
import './mid.css'
import Nametable from './nametable'


function Mid() {

    return  (
    <div className="event-schedule-area-two bg-color pad100">
          <div className="row">
              <div className="col-lg-4">
                  <ul className="nav custom-tab custom-tab_b" >
                      <li className="nav-item">
                          <a className="nav-link "  href="#boys"
                              role="tab" aria-controls="home" aria-selected="true"><span className="boys" >BOYS</span></a>
                      </li>
                  </ul>
         <Nametable/>
              </div>
              <div className="col-lg-4">
                  <ul className="nav custom-tab custom-tab_g" >
                      <li className="nav-item">
                          <a  className="nav-link"  href="#girls"
                              role="tab" aria-controls="home" aria-selected="true"><span className="girls">GIRLS</span></a>
                      </li>
                  </ul>
                 <Nametable/>
              </div>

              <div className="col-lg-4">
                  <ul className="nav custom-tab custom-tab_u" >
                      <li >
                          <a  className="nav-link"  href="#unisex"
                              role="tab" aria-controls="home" aria-selected="true"><span className="unisex">UNISEX</span></a>
                      </li>
                  </ul>
                <Nametable/>
              </div>

             
          </div>
  </div>
    )
}

export default Mid