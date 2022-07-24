import { useEffect } from 'react';
import {useState} from 'react';
import { Link } from 'react-router-dom';
import './headder.css'

export default function Headder({setmid}) {
  return (
    <div className='container-fluid'>
      <div className="head-down row">
        <div className="head col-2">
          <Link  to={{pathname:'/nameOf/boys'}} ><span className="letter">Boys</span></Link>          
        </div>
        <div className="head col-2">
        <Link to={{pathname:'/nameOf/girls'}}  ><span className="letter">Girls</span></Link>           
        </div>
        <div className="head col-2">
        <Link to={{pathname:'/nameOf/unisex'}} ><span className="letter">Unisex</span></Link>          
        </div>
        <div className="head col-2">
        <Link to={{pathname:'/blog'}}><span className="letter">Blogs</span></Link>           
        </div>
        <div className="head col-2">
        <Link to={{pathname:'/names/mostLiked'}}><span className="letter">Most liked names</span></Link>           
        </div>
      </div>
    </div>
  );
}
