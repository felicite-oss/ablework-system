import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { loginUser } from "../api/api";

function Login(){

const [form,setForm] = useState({
username:"",
password:""
});

const navigate = useNavigate();

const handleChange = (e)=>{
setForm({
...form,
[e.target.name]:e.target.value
});
};

const handleSubmit = async (e)=>{
e.preventDefault();

const result = await loginUser(form);

alert(result.message);

if(result.success){
// save user info in localStorage
localStorage.setItem("user", JSON.stringify(result));

// redirect based on role
if(result.role === "applicant"){
navigate("/applicant-dashboard");
}
else if(result.role === "employer"){
navigate("/employer-dashboard");
}

}

};

return(

<div style={{textAlign:"center", marginTop:"100px"}}>

<h2>Login</h2>

<form onSubmit={handleSubmit}>

<div>
<input 
name="username"
placeholder="Username"
onChange={handleChange}
/>
</div>

<br/>

<div>
<input 
type="password"
name="password"
placeholder="Password"
onChange={handleChange}
/>
</div>

<br/>

<button type="submit">Login</button>

</form>

</div>

);
}

export default Login;