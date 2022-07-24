import React from "react";
import "./side.css";
export default function side({setmid}) {
  return (
    <div className="side">
      <table className="table side">
        <tbody>
          <tr>
            <td onClick={()=>setmid('gener 1')}>gener 1</td>
          </tr>
          <tr>
            <td onClick={()=>setmid('gener 2')}>gener 2</td>
          </tr>
          <tr>
            <td onClick={()=>setmid('gener 3')}>gener 3</td>
          </tr>
        </tbody>
      </table>
      <div className="ads">AD GOES HERE</div>
    </div>
  );
}
