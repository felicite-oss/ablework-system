import { useState } from "react";
import { registerUser } from "../api/api";

function EmployerRegister(){

const [form,setForm] = useState({
name:"",
username:"",
email:"",
password:"",
company_name:"",
company_address:"",
contact_number:""
});

const handleChange = (e)=>{
setForm({
...form,
[e.target.name]:e.target.value
});
};

const handleSubmit = async (e)=>{
e.preventDefault();

const result = await registerUser({
...form,
role:"employer"
});

alert(result.message);

};

return(

<div>

<h2>Employer Registration</h2>

<form onSubmit={handleSubmit}>

<input name="name" placeholder="Full Name" onChange={handleChange} />

<input name="username" placeholder="Username" onChange={handleChange} />

<input name="email" placeholder="Email" onChange={handleChange} />

<input type="password" name="password" placeholder="Password" onChange={handleChange} />

<input name="company_name" placeholder="Company Name" onChange={handleChange} />

<input name="company_address" placeholder="Company Address" onChange={handleChange} />

<input name="contact_number" placeholder="Contact Number" onChange={handleChange} />

<button type="submit">Register</button>

</form>

</div>

);

}

export default EmployerRegister;