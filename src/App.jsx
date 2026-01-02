import React , {useRef, useState} from "react";
import './App.css';

function Form(){
  const nameRef = useRef();
  const emailRef = useRef();
  const [data,  setData] = useState({});

  function submit(e){
    e.preventDefault();
    setData({
      name: nameRef.current.value , 
      email: emailRef.current.value 
    })
  }
  return(
    <div className="container">
      <form className="form" onSubmit={submit}>
        <div className="field">
           <input type="text" required placeholder="Enter your Name " ref={nameRef} />
           <label></label>
        </div>
        <div className="field">
          <input type="email" placeholder="Enter Your Email" ref={emailRef}/>
        </div>
        <button>Submit</button>

        {data.name &&(
          <div className="output">
            <p><b>Name:</b>{data.name}</p>
            <p><b>Email:</b>{data.email}</p>
          </div>
        )}
      </form>
    </div>
  )
}
export default Form;