import React, { useState } from "react";
import {  useNavigate} from "react-router-dom";

const SignUp = () => {
    const [userId, setUserId] = useState("");
    const [pass, setPassword] = useState("");
    const [msg, setMsg] = useState('')

   
    const navigate=useNavigate();
    const handleSubmit = async e => {
        e.preventDefault();
        const response = await fetch("http://localhost:8080/signup", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ userId, pass })
        }).then((response) => {
            if(response.status === 200){
                return response.json();
            }
        }).then((data) => {
            if(data.httpStatus == "OK"){
                setMsg("Successfully added Details");
            }
            else{
                setMsg("SignUp failed, Please retry..!!");
            }
        });

        navigate('/login');
        
        // const data = await response.json();
        // console.log(data);
    };

    return (
        <>

            <div className="container mt-3">
                <div className="row">
                    <div className="col-md-6 offset-md-3">
                    <br></br><br></br><br></br>
                        <div className="card">
                            <div className="card-header fs-3 text-center">SIGN UP</div>
                            {
                                msg &&

                                <p className='fs-4 text-center text-success'>{msg}</p>
                            }

                            <div className="card-body">
                                <form onSubmit={handleSubmit}>
                                    <div align="center">
                                    <div className="mb-3">
                                   <h3><i> <label>Enter User Id </label>&nbsp;&nbsp;&nbsp;</i></h3>
                                        <input
                                            type="text"
                                            placeholder="User ID"
                                            value={userId}
                                            onChange={e => setUserId(e.target.value)}
                                        />
                                    </div>
                                    <div className="mb-3">
                                    <h3>  <i><label>Enter Password </label>&nbsp;&nbsp;&nbsp;</i></h3>
                                        <input
                                            type="password"
                                            placeholder="Password"
                                            value={pass}
                                            onChange={e => setPassword(e.target.value)}
                                        />
                                    </div>
                                    <button className="btn btn-primary col-md-12" type="submit">Sign Up</button>
                                </div>
                                </form>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default SignUp;
