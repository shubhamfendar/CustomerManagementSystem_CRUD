import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import CustomerService from '../Service/CustomerService';

const Homepage = () => {

    const [customerList, setCustomerList] = useState([])

    const [msg, setMsg] = useState('')
    useEffect(() => {
        async function fetchData() {
        //   const token = localStorage.getItem('token');
        
          const response = await fetch("http://localhost:8080/customers", {
    
    
            headers: {
              "Authorization": "9968a6c0-a144-4466-a28f-1d914c39fc92",
            // "Authorization": {uniqueIdentifier},
            
            },
          });
          const data = await response.json();
          setCustomerList(data);
          setMsg("Record shown successfully");
          if(data.status === 500){
              alert("Invalid token");
          }
        //   console.log(uniqueIdentifier)
        }
        fetchData();
      }, []);

   

    // const init = () => {
    //     CustomerService.getAllCustomer().then((res) => {
           
    //         setCustomerList(res.data);
            
    //     }).catch((error) => {
    //         console.log(error);
    //     })
    // }


    const deleteCustomer = (custId) => {
        CustomerService.deleteCustomer(custId).then((res) => {
            setMsg("Record Deleted Successfully");
            // init();
            // fetchData();

        }).catch((error) => {
            console.log(error);
        })
    }


    return (
        <>
            <div className="container mt-3">
                <div className="row">
                    <div className="col-md-12">
                        <div className="card">
                            <div className="card-header fs-3 text-center">
                                All Customer Details
                                {msg && <p className="fs-4 text-center text-success">{msg}</p>}
                            </div>

                            <div className="card-body">
                                <table class="table">
                                    <thead>
                                        <tr>
                                            <th scope="col">Sl No</th>
                                            <th scope="col">Customer Id</th>
                                            <th scope="col">Name</th>
                                            <th scope="col">City</th>
                                            <th scope="col">Age</th>
                                            <th scope="col">Category</th>
                                            <th scope="col">Actions</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {customerList.map((p, num) => (
                                            <tr>
                                                <td>{num + 1}</td>
                                                <td>{p.custId}</td>
                                                <td>{p.name}</td>
                                                <td>{p.city}</td>
                                                <td>{p.age}</td>
                                                <td>{p.category}</td>
                                                <td>
                                                    <Link to={'editCustomer/' + p.custId} className="btn btn-sm btn-primary">
                                                        Edit
                                                    </Link>
                                                    {/* <Link to=" " className="btn btn-sm btn-danger ms-4">
                                                        Delete
                                                    </Link> */}

                                                    <button
                                                        onClick={() => deleteCustomer(p.custId)}
                                                        className="btn btn-sm btn-danger ms-4"
                                                    >
                                                        Delete
                                                    </button>
                                                </td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Homepage
