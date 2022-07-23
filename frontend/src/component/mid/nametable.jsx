import React from "react";
import Namepad from "./namepad";
import { ModalHover } from "react-modal-hover";

export default function Nametable() {
  return (
    <div className="tab-content" id="myTabContent">
      <div className="tab-pane fade active show" id="home" role="tabpanel">
        <div className="table-responsive">
          <table className="table table-striped">
            <tbody>
            <Namepad/><Namepad/><Namepad/>
            <Namepad/><Namepad/><Namepad/>
            <Namepad/><Namepad/><Namepad/>
            <Namepad/><Namepad/><Namepad/>
            <Namepad/><Namepad/><Namepad/>  
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
