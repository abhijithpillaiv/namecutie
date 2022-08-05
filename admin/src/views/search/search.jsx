import React, { useContext } from 'react';
import { MDBCol, MDBIcon } from "mdbreact";
import { search } from '../../context/search';

const Search = () => {
  const {setserchName}=useContext(search);
  return (
        <MDBCol md="20">
      <form className="form-inline mt-4 mb-4">
        <MDBIcon icon="search" />
        <input className="form-control form-control-sm ml-3 w-75" onChange={(e)=>setserchName(e.target.value)} type="text" placeholder="Search" aria-label="Search" />
      </form>
    </MDBCol>
    );
}

export default Search;
