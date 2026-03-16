import { useState } from "react";
import { registerUser } from "../api/api";

function ApplicantRegister(){

const [form,setForm] = useState({
name:"",
username:"",
email:"",
password:"",
disability_type:"",
skills:"",
education:"",
preferred_job:""
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
role:"applicant"
});

alert(result.message);

};

return(

<div>

<h2>Applicant Registration</h2>

<form onSubmit={handleSubmit}>

<input name="name" placeholder="Full Name" onChange={handleChange} />

<input name="username" placeholder="Username" onChange={handleChange} />

<input name="email" placeholder="Email" onChange={handleChange} />

<input type="password" name="password" placeholder="Password" onChange={handleChange} />

<select name="disability_type" onChange={handleChange}>

<option value="">Select Disability</option>
<option value="visual">Visual Impairment</option>
<option value="hearing">Hearing Impairment</option>
<option value="mobility">Mobility Disability</option>
<option value="speech">Speech Disability</option>
<option value="learning">Learning Disability</option>

</select>

<input name="skills" placeholder="Skills" onChange={handleChange} />

<select name="education"
  value={form.education}      
  onChange={handleChange}>

<option value="">Select Education</option>
<option value="High School">High School</option>
<option value="Senior High School">Senior High School</option>
<option value="Vocational">Vocational</option>
<option value="College Undergraduate">College Undergraduate</option>
<option value="College Graduate">College Graduate</option>

</select>

<input
  name="preferred_job"
  placeholder="Preferred Job"
  value={form.preferred_job}   // <-- bind to state
  onChange={handleChange}
/>

<button type="submit">Register</button>

</form>

</div>

);

}

export default ApplicantRegister;