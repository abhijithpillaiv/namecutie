import React from "react";
import { Link } from "react-router-dom";
import "./strip.css";

export default function ({setmid}) {
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-lg-12,col-sm-12">
          <div className="by-letter">
             <Link to={{ pathname:'/nameWith/A'}}><span>A</span></Link>
             <Link to={{ pathname:'/nameWith/B'}}><span>B</span></Link>
             <Link to={{ pathname:'/nameWith/C'}}><span>C</span></Link>
             <Link to={{ pathname:'/nameWith/D'}}><span>D</span></Link>
             <Link to={{ pathname:'/nameWith/E'}}><span>E</span></Link>
             <Link to={{ pathname:'/nameWith/F'}}><span>F</span></Link>
             <Link to={{ pathname:'/nameWith/G'}}><span>G</span></Link>
             <Link to={{ pathname:'/nameWith/H'}}><span>H</span></Link>
             <Link to={{ pathname:'/nameWith/I'}}><span>I</span></Link>
             <Link to={{ pathname:'/nameWith/J'}}><span>J</span></Link>
             <Link to={{ pathname:'/nameWith/K'}}><span>K</span></Link>
             <Link to={{ pathname:'/nameWith/L'}}><span>L</span></Link>


             <Link to={{ pathname:'/nameWith/M'}}><span>M</span></Link>
             <Link to={{ pathname:'/nameWith/N'}}><span>N</span></Link>
             <Link to={{ pathname:'/nameWith/O'}}><span>O</span></Link>
             <Link to={{ pathname:'/nameWith/P'}}><span>P</span></Link>
             <Link to={{ pathname:'/nameWith/Q'}}><span>Q</span></Link>
             <Link to={{ pathname:'/nameWith/R'}}><span>R</span></Link>
             <Link to={{ pathname:'/nameWith/S'}}><span>S</span></Link>
             <Link to={{ pathname:'/nameWith/T'}}><span>T</span></Link>
             <Link to={{ pathname:'/nameWith/U'}}><span>U</span></Link>
             <Link to={{ pathname:'/nameWith/V'}}><span>V</span></Link>
             <Link to={{ pathname:'/nameWith/W'}}><span>W</span></Link>
             <Link to={{ pathname:'/nameWith/X'}}><span>X</span></Link>
             <Link to={{ pathname:'/nameWith/Y'}}><span>Y</span></Link>
             <Link to={{ pathname:'/nameWith/Z'}}><span>Z</span></Link>
          </div>
        </div>
      </div>
    </div>
  );
}
