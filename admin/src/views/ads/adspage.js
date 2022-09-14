// import React, { useEffect, useState } from 'react'
// import axios from 'axios'
// import { port } from '../../assets/collection';
// import Lodr from '../section/lodr'
// import { CFormLabel, CInputGroup, CInputGroupText, CFormInput,CButton } from '@coreui/react';
// import CIcon from '@coreui/icons-react';
// import { cilCheck, cilX } from '@coreui/icons';

// export default function adspage() {
//   const [ads, setads] = useState(null);
//   const [val, setval] = useState('');
//   const [progress, setprogress] = useState(false);

//   useEffect(() => {
//     axios.get(port + 'api/getAds').then((res) => {
//       setprogress(true)
//       setads(res.data)
//     })
//   }, []);

//   const addHandler = () => {
//     val ? setads(ads => [...ads, val]) : null
//     setval('')
//   }
//   const deleteHandler = (props) => {
//     props ? setads(ads => ads.filter(ads => ads !== props)) : null
//   }

//   const submitHandler = () => {
//         setprogress(false)
//         axios.post(port + 'api/admin/addAds', {
//             'ads':ads
//         }).then(() => {
//             alert("ads added successfully")
//             setprogress(true)
//         })
// }

//   return progress ?
//     <div className="mb-3">
//       <CFormLabel htmlFor="ethnic" className="col-sm-2 col-form-label">Ads</CFormLabel>
//       {ads ? ads.map((data, index) => <CInputGroup size='sm' className="mt-3 mb-3" key={index}> <CFormInput placeholder='add new value' value={data} type="text" id="ethnic" />
//         <CInputGroupText><CIcon style={{ cursor: 'pointer', color: 'red' }} onClick={(e) => deleteHandler(data)} icon={cilX} /></CInputGroupText> </CInputGroup>) : null}
//       <CInputGroup size='sm' className="mt-3 mb-3">
//         <CFormInput placeholder='add new value' value={val} onChange={(e) => setval(e.target.value)} type="text" id="ethnic" />
//         <CInputGroupText style={{ cursor: 'pointer' }} onClick={addHandler}>Click to add <CIcon icon={cilCheck}></CIcon></CInputGroupText>
//       </CInputGroup>
//       <CButton onClick={submitHandler} color='success' >Upload</CButton>
//     </div>
//     : <Lodr />
// }


import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { port } from '../../assets/collection';
import Lodr from '../section/lodr'
import { CFormLabel, CInputGroup, CInputGroupText, CFormInput,CButton } from '@coreui/react';
import CIcon from '@coreui/icons-react';
import { cilCheck, cilX,cilPen } from '@coreui/icons';

export default function adspage() {
  const [ads, setads] = useState(null);
  const [val, setval] = useState('');
  const [progress, setprogress] = useState(false);

  useEffect(() => {
    axios.get(port + 'api/getAds').then((res) => {
      setprogress(true)
      setads(res.data[0])
    })
  }, []);

  const deleteHandler = (id) => {
    setads(null)
    setprogress(false)
    axios.get(port + 'api/admin/deleteAds/'+id).then(() => {
        alert("ads deleted successfully")
        setprogress(true)
    })  }

  const submitHandler = () => {
        setprogress(false)
        axios.post(port + 'api/admin/addAds', {
            'ads':val
        }).then(() => {
            alert("ads added successfully")
            window.location.reload(false)

        })
}

  return progress ?
    <div className="mb-3">
      <CFormLabel htmlFor="ethnic" className="col-sm-2 col-form-label">Ads</CFormLabel>
     {ads?<CInputGroup size='sm' className="mt-3 mb-3" > <CFormInput placeholder='add new value' value={ads.ads} type="text" id="ethnic" />
        <CInputGroupText><CIcon style={{ cursor: 'pointer', color: 'red' }} onClick={(e) => deleteHandler(ads._id)} icon={cilX} /></CInputGroupText> </CInputGroup>
      :<span><CInputGroup size='sm' className="mt-3 mb-3">
        <CFormInput placeholder='add new value' value={val} onChange={(e) => setval(e.target.value)} type="text" id="ethnic" />
      </CInputGroup>
      <CButton onClick={submitHandler} color='success' >Upload</CButton></span>} 
    </div>
    : <Lodr />
}