import { Link } from 'react-router-dom';
import './headder.css'

export default function Headder() {
  return (
    <div className='container-fluid'>
      <div className="head-down row">
        <div className="head col-2">
          <Link  to={{pathname:'/nameOf/BOYS'}} ><span className="letter">Boys</span></Link>          
        </div>
        <div className="head col-2">
        <Link to={{pathname:'/nameOf/GIRLS'}}  ><span className="letter">Girls</span></Link>           
        </div>
        <div className="head col-2">
        <Link to={{pathname:'/nameOf/UNISEX'}} ><span className="letter">Unisex</span></Link>          
        </div>
        <div className="head col-2">
        <Link to={{pathname:'/blog'}}><span style={{paddingLeft:'10px'}} className="letter">Blogs</span></Link>           
        </div>
        <div className="head col-4">
        <Link to={{pathname:'/names/mostLiked'}}><span className="letter">Most liked</span></Link>           
        </div>
      </div>
    </div>
  );
}
