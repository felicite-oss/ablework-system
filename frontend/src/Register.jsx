import { useState } from "react";
import { registerUser } from "./Api";

function Register(){

const [role,setRole] = useState("applicant");

const [form,setForm] = useState({
name:"",
username:"",
email:"",
password:"",
disability_type:"",
skills:"",
company_name:""
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
role
});

alert(result.message);

};

return(

<div>

<h2>Register</h2>

<form onSubmit={handleSubmit}>

<input
name="name"
placeholder="Full Name"
onChange={handleChange}
/>

<input
name="username"
placeholder="Username"
onChange={handleChange}
/>

<input
name="email"
placeholder="Email"
onChange={handleChange}
/>

<input
type="password"
name="password"
placeholder="Password"
onChange={handleChange}
/>

<select value={role} onChange={(e)=>setRole(e.target.value)}>

<option value="applicant">Applicant</option>
<option value="employer">Employer</option>

</select>

{role === "applicant" && (

<>

<input
name="disability_type"
placeholder="Type of Disability"
onChange={handleChange}
/>

<input
name="skills"
placeholder="Skills"
onChange={handleChange}
/>

</>

)}

{role === "employer" && (

<input
name="company_name"
placeholder="Company Name"
onChange={handleChange}
/>

)}

<button type="submit">Register</button>

</form>

</div>

);

}

export default Register;