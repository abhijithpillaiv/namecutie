import React, { useState } from 'react'
import { port } from '../../context/collection'
import Lodr from '../../static/lodr'
import axios from 'axios'

function Message({settoggler}) {
    const [name, setname] = useState(null);
    const [email, setemail] = useState(null);
    const [content, setcontent] = useState(null);
    const [preview, setpreview] = useState(false);

    // Handler
    const submitHandler=(event) =>{ 
        event.preventDefault();
        setpreview(true)
      
         // Axios 
         axios.post(port + 'api/setMessage', {
            'name': name, 'email': email, 'content': content,
        }).then(() => {
            alert("Message sent sucessfully")
            settoggler(false)
            setpreview(false)
        })
    }
    const resetHandler=()=>{
        setcontent(null);
        setemail(null);
        setname(null)
    }
    return preview?<Lodr/>: <div>

            <div className="cardz height-auto">
                <div className="card-bodyz">
                    <div className="heading-layout1">
                        <div className="item-title">
                            <h3>Write us</h3>
                        </div>
                    </div>

                    <form  className="new-added-form">
                        <div className="row">
                            <div className="col-xl-6 col-lg-6 col-12 form-group">
                                <label>Name *</label>
                                <input style={{fontWeight:'bold',fontSize:'20px'}} required type="text" onChange={(e)=>setname(e.target.value)} className="form-control"/>
                            </div>
                            <div className="col-xl-6 col-lg-6 col-12 form-group">
                                <label>Email *</label>
                                <input style={{fontWeight:'bold',fontSize:'20px'}} required type="mail" onChange={(e)=>setemail(e.target.value)} className="form-control"/>
                            </div>
                           
                           
                            <div className="col-xl-12 col-lg-12 col-12 form-group">
                                <label>Content</label>
                                <textarea style={{fontSize:'15px',height:'250px'}}  onChange={(e)=>setcontent(e.target.value)}  placeholder="Add content" className="form-control"/>
                            </div> 

                            
                            <div className="col-12 form-group mg-t-8">
                                <button onClick={submitHandler}  className="btn-fill-lg btn-gradient-yellow btn-hover-bluedark">Save</button>
                                <button onClick={resetHandler} type="reset" className="btn-fill-lg bg-blue-dark btn-hover-yellow">Reset</button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>

        </div>
}

export default Message