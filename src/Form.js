import React,{useState} from "react";

const initialState = {
 text: "",
 password: ""
}

export default function Form() {

const [value,setValue] = useState(initialState)
console.log(value);

const SubmitHandler = (e) => {
  e.preventDefault();
  console.log('Submit');
 }

const inputHandler = (e) => {
 const {name,value}
}

 return(
  <form onSubmit={SubmitHandler}>
   <div className="mb-3">
    <label className="form-label">Email address</label>
    <input 
    onChange={inputHandler}
    type="text" 
    name="firstName"
    className="form-control" 
    value={value.text} 
    />
   </div>

<div className="mb-3">
 <label className="form-label">Password</label>
 <input 
   onChange={inputHandler}
   type="password" 
   name="password"
   className="form-control" 
   value={value.password} 
   />
</div>

<button type="submit" className="btn btn-primary">Submit</button>
  </form>
 )
}