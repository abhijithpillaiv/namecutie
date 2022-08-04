import React, { useContext } from "react";
import Namepad from "./namepad";
import Lodr from '../../static/lodr'
import { search } from "../../context/search";

export default function NametableSearch({props}) {
    let serchList = null;
    const{serchName}=useContext(search)

  return props ?
    <div className="tab-content" id="myTabContent">
      <div className="tab-pane fade active show" id="home" role="tabpanel">
        <div className="table-responsive">
          <table className="table table-striped">
            <tbody>
            {props.sort((obj,obj2)=>obj.select===obj2.select?obj.name.toLowerCase()>obj2.name.toLowerCase()?1:-1:obj.select==='true'?-1:1)
                              .filter((obj)=>{
                                if(serchName === ''){
                                    serchList = obj
                                }
                                else if(obj.name.toString().toLowerCase().includes(serchName.toString().toLowerCase())){
                                    serchList = obj
                                }
                                else{}
                                return serchList
                            }).map((item,index)=><Namepad key={index} props={item} />)}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  :<Lodr/>
}
