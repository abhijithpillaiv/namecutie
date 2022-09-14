import React ,{ useEffect,useState } from 'react'
import { Link } from "react-router-dom";
import "./headder.css";
import {
  CDropdown,
  CDropdownToggle,
  CDropdownMenu,
  CDropdownDivider,
  CNavbarNav,
} from "@coreui/react";
import ReactPaginate from "react-paginate";

export default function Headder({props}) {

  //pagination
  const [pagination, setPagination] = useState({
    data: props.sort((a, b) => a.value > b.value ? 1 : -1).map((valu) => ({
      val:valu.value
    })),
    offset: 0,
    numberPerPage: 20,
    pageCount: 0,
    currentData: [],
  });

  useEffect(() => {
    setPagination((prevState) => ({
      ...prevState,
      pageCount: prevState.data.length / prevState.numberPerPage,
      currentData: prevState.data.slice(
        pagination.offset,
        pagination.offset + pagination.numberPerPage
      ),
    }));
  }, [pagination.numberPerPage, pagination.offset]);
  const handlePageClick = (event) => {
    const selected = event.selected;
    const offset = selected * pagination.numberPerPage;
    setPagination({ ...pagination, offset });
  };

  return pagination.currentData ? (
    <div className="container-fluid">
      <div className="head-down row">
        <div className="head col-4">
          <CNavbarNav role="string">
            <CDropdown autoClose="outside" placement="bottom" variant="nav-item">
              <CDropdownToggle>
                <span className="letter">Ethnic</span>
              </CDropdownToggle>
              <CDropdownMenu>
             <span className="ddsection" style={{color:'blue'}}>Choose from the given Ethnic.</span> 
                <CDropdownDivider />
                {pagination.currentData.map((item, index) => {
                  return (
                    <Link key={index} to={{ pathname: "/nameOf/" + item.val }}>
                      <span className="ddsection">{item.val}</span>
                    </Link>
                  );
                })}
                <CDropdownDivider />
                <ReactPaginate
                  previousLabel={"<    "}
                  nextLabel={"    >"}
                  breakLabel={"..."}
                  pageCount={pagination.pageCount}
                  marginPagesDisplayed={2}
                  pageRangeDisplayed={5}
                  onPageChange={handlePageClick}
                  containerClassName={"pagination"}
                  activeClassName={"activez"}
                />
              </CDropdownMenu>
            </CDropdown>
          </CNavbarNav>
        </div>
        <div className="head col-4">
          <CNavbarNav role="string">
            <CDropdown placement="bottom" variant="nav-item">
              <CDropdownToggle>
                <span className="letter">Gender</span>
              </CDropdownToggle>
              <CDropdownMenu>
                <Link to={{ pathname: "/nameOf/BOYS" }}>
                  <span className="ddsection">Boys</span>
                </Link>
                <CDropdownDivider />
                <Link to={{ pathname: "/nameOf/GIRLS" }}>
                  <span className="ddsection">Girls</span>
                </Link>
                <CDropdownDivider />
                <Link to={{ pathname: "/nameOf/UNISEX" }}>
                  <span className="ddsection">Unisex</span>
                </Link>
              </CDropdownMenu>
            </CDropdown>
          </CNavbarNav>
        </div>
        {/* <div className="head col-2">
        <Link to={{pathname:'/blog'}}><span style={{paddingLeft:'10px'}} className="letter">Blogs</span></Link>           
        </div> */}
        <div className="head col-4">
          <Link to={{ pathname: "/names/mostLiked" }}>
            <span className="letter">Most liked</span>
          </Link>
        </div>
      </div>
    </div>
  ) : null;
}
