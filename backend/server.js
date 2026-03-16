const express = require('express');
const cors = require('cors');
const db = require('./db/db');

const app = express();

app.use(cors());
app.use(express.json());

app.post("/register", (req, res) => {

const {
name,
username,
email,
password,
role,
disability_type,
skills,
education,
preferred_job,
company_name,
company_address,
contact_number
} = req.body;

const userSQL = "INSERT INTO users (name, username, email, password, role) VALUES (?, ?, ?, ?, ?)";

db.query(userSQL,[name, username, email, password, role],(err,result)=>{

if(err){
console.log(err);
return res.json({message:"User insert failed"});
}

const user_id = result.insertId;

if(role === "applicant"){

const applicantSQL = `
INSERT INTO applicants
(user_id, disability_type, skills, education, preferred_job)
VALUES (?, ?, ?, ?, ?)
`;

db.query(applicantSQL,[user_id, disability_type, skills, education, preferred_job]);

}

if(role === "employer"){

const employerSQL = "INSERT INTO employers (user_id, company_name, company_address, contact_number) VALUES (?, ?, ?, ?)";

db.query(employerSQL,[user_id, company_name, company_address, contact_number]);

}

res.json({message:"Registration successful"});

});

});


app.post("/login", (req,res)=>{

const { username, password } = req.body;

const sql = "SELECT * FROM users WHERE username=? AND password=?";

db.query(sql,[username,password],(err,result)=>{

if(err){
console.log(err);
return res.json({success:false,message:"Server error"});
}

if(result.length === 0){
return res.json({success:false,message:"Invalid username or password"});
}

const user = result[0];

res.json({
success:true,
message:"Login successful",
role:user.role
});

});

});

app.listen(3000, () => console.log("Server running on port 3000"));