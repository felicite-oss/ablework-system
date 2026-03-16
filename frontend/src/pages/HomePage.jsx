import { useNavigate } from "react-router-dom";

function HomePage(){

const navigate = useNavigate();

return(
<div style={{textAlign:"center", marginTop:"100px"}}>

<h1>Welcome to ABLEWORK</h1>
<p>Connecting Employers and Persons with Disabilities</p>

<div style={{marginTop:"30px"}}>

<button onClick={()=>navigate("/login")} style={{marginRight:"20px"}}>
Login
</button>

<button onClick={()=>navigate("/chooserole")}>
Register
</button>

</div>

</div>
);
}

export default HomePage;