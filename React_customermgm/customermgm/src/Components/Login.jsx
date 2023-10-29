import React, { useEffect } from 'react'
import { useState } from 'react';
import { render } from 'react-dom';
import { useNavigate } from 'react-router-dom';
import ListCustomers from './ListCustomers';

const Login = () => {
    const [userId, setUserId] = useState("");
    const [pass, setPassword] = useState("");
    const [msg, setMsg] = useState('');
    const [uniqueIdentifier, setUniqueIdentifier] = useState('');
    const navigate = useNavigate();

    

    const handleSubmit = async e => {
        e.preventDefault();
        const response = await fetch("http://localhost:8080/login", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ userId, pass })
        }).then((response) => {
            return response.json();
        }).then((data) => {
            console.log("Data--->> " + data.httpStatus);
            console.log("Unique--->> " + data.uniqueIdentifier);
            if (data.httpStatus == 'OK') {
                setMsg("Successfully added Details");
                setUniqueIdentifier(data.uniqueIdentifier);
                console.log("Myyyyy--->> " + uniqueIdentifier);
                navigate('/listCustomer')
            }
            else {
                setMsg("Login failed, Please retry..!!");
            }
        });

    };

    return (
        <>
            {/* <div>
                <ListCustomers data={uniqueIdentifier} />
            </div> */}
            <div className="container mt-3">
                <div className="row-md-3">
                    <div className="col-md-6 offset-md-3">
                        <br></br><br></br><br></br>
                        <div className="card">
                            <div className="card-header fs-3 text-center">LOGIN</div>
                            {
                                msg &&

                                <p className='fs-4 text-center text-success'>{msg}</p>
                            }

                            <div className="card-body" >

                                <style>{'body { background-color: grey; }'}</style>

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
                                        <button className="btn btn-success col-md-12" type="submit">Login</button>
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

export default Login
