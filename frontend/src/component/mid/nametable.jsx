import React from "react";
import Namepad from "./namepad";
import Lodr from '../../static/lodr'
import ReactPaginate from 'react-paginate';
import { useState } from "react";
import { useEffect } from "react";

export default function Nametable({ props}) {

//pagination 
const [pagination, setPagination] = useState({
    data: props.map((value, index) => (({
        name: value.name,
        meaning: value.meaning,
        like: value.like,
        gender: value.gender,
        _id: value._id
    }))),
    offset: 0,
    numberPerPage: 10,
    pageCount: 0,
    currentData: []
});

useEffect(() => {
    setPagination((prevState) => ({
        ...prevState,
        pageCount: prevState.data.length / prevState.numberPerPage,
        currentData: prevState.data.slice(pagination.offset, pagination.offset + pagination.numberPerPage)
    }))
}, [pagination.numberPerPage, pagination.offset])
const handlePageClick = event => {
    const selected = event.selected;
    const offset = selected * pagination.numberPerPage
    setPagination({ ...pagination, offset })
}

  return pagination.currentData ?
    <div className="tab-content" id="myTabContent">
      <div className="tab-pane fade active show" id="home" role="tabpanel">
        <div className="table-responsive">
          <table className="table table-striped">
            <tbody>
            {pagination.currentData.map((item, index)=><Namepad key={index} props={item} />)}
            </tbody>
          </table>
        </div>
      </div>
     {pagination.currentData? <ReactPaginate
                previousLabel={'<   '}
                nextLabel={'   >'}
                breakLabel={'...'}
                pageCount={pagination.pageCount}
                marginPagesDisplayed={2}
                pageRangeDisplayed={5}
                onPageChange={handlePageClick}
                containerClassName={'pagination'}
                activeClassName={'activez'}
            />:null}
    </div>
  :<Lodr/>
}
