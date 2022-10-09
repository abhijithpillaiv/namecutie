import React from "react";
import "./fotter.css";
import { Link } from "react-router-dom";

function fotter() {
  return (
    <footer class="footer-distributed">

      <div class="footer-left">
        <p class="footer-links">
        <Link to={{ pathname: "/contact" }}>
            <span className="letter link-1">Contact us</span>
          </Link>
          <Link to={{ pathname: "/about" }}>
            <span className="letter">About us</span>
          </Link>
          <Link to={{ pathname: "/nameOf/GIRLS" }}>
                  <span>Girls</span>
                </Link>
                <Link to={{ pathname: "/nameOf/BOYS" }}>
                  <span>Boys</span>
                </Link>
          <Link to={{ pathname: "/nameOf/UNISEX" }}>
                  <span className="myfotter">Unisex</span>
                </Link>
                <Link to={{ pathname: "/names/mostLiked" }}>
            <span className="letter">Trending Names</span>
          </Link>
          
        </p>

        <p style={{textAlign:'left'}}>Copyright &copy; 2022 , Name Cutie. All Rights Reserved</p>
      </div>
      {/* <p style={{backgroundColor:'black'}} classNameName="copy-footer-28 text-center"> Copyright &copy; 2022 , Name Cutie. All Rights Reserved</p> */}
    </footer>
  );
}

export default fotter;
