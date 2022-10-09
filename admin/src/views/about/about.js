import React, { useState } from 'react'
import { port } from '../../assets/collection'
import '../blog/components/edit/edit.css'
import Lodr from '../section/lodr'
import axios from 'axios'
import { useEffect } from 'react'

function about() {
    const [content, setcontent] = useState('');
    const [_id, set_id] = useState('');
    const [preview, setpreview] = useState(false);
    // Handler
    const submitHandler=(event) =>{ 
        event.preventDefault();
        setpreview(true)
      
         // Axios 
         axios.post(port + 'api/admin/addAbout', {
             'content': content,'id':_id
        }).then((res) => {
            alert(res.data)
            setpreview(false)
        })
    }
    useEffect(() => {
        setpreview(true)
        axios.get(port+'api/about').then((res)=>{
            if (res.data.length!==0) {
                setcontent(res.data[0].content)
                set_id(res.data[0]._id)
                console.log(res.data);
            }
            setpreview(false)
        })
    }, []);

    return preview?<Lodr/>: <div>

            <div className="cardz height-auto">
                <div className="card-bodyz">
                    <div className="heading-layout1">
                        <div className="item-title">
                            <h3>About</h3>
                        </div>
                    </div>

                    <form  className="new-added-form">
                        <div className="row">
                           
                            <div className="col-xl-12 col-lg-12 col-12 form-group">
                                <label>Content</label>
                                <textarea style={{fontSize:'15px',height:'250px'}} value={content}  onChange={(e)=>setcontent(e.target.value)}  placeholder="Add content" className="form-control"/>
                            </div> 


                            <div className="col-12 form-group mg-t-8">
                                <button onClick={submitHandler}  className="btn-fill-lg btn-gradient-yellow btn-hover-bluedark">Save</button>
                                <button onClick={()=>{ setcontent('')}} type="reset" className="btn-fill-lg bg-blue-dark btn-hover-yellow">Reset</button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>

        </div>
}

export default about