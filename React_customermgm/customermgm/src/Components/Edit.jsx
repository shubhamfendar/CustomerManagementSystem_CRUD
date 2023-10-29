import React, { useState } from 'react'
import { useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import CustomerService from '../Service/CustomerService';

const Edit = () => {
  const [customer, setCustomer] = useState({
    custId: '',
    name: '',
    city: '',
    age: '',
    category: ''
})

const navigate=useNavigate();

const{custId}= useParams();
console.log(custId);

const [msg, setMsg] = useState('')

useEffect(()=>{
  CustomerService.getSingleCustomer(custId).then((res)=>{
    setCustomer(res.data);
  }).catch((error)=>{
    console.log(error)
  })
},[])

const handleChange = (e) => {
    const value = e.target.value;
    setCustomer({ ...customer, [e.target.name]: value })
};

const CustomerUpdate = (e) => {
    e.preventDefault();
    CustomerService.editCustomer(customer).then((res) => {
        // console.log('customer=> ' + JSON.stringify(customer))
        console.log("Customer updated Successfully");
        setMsg("Successfully updated Details");
        navigate("/");
    }).catch((error) => {
        console.log(error);
    })

};

return (
    <>
        <div className="container mt-3">
            <div className="row">
                <div className="col-md-6 offset-md-3">
                    <div className="card">
                        <div className="card-header fs-3 text-center">Add Customer</div>
                        {
                            msg &&

                            <p className='fs-4 text-center text-success'>{msg}</p>
                        }

                        <div className="card-body">
                            <form onSubmit={(e) => CustomerUpdate(e)}>
                                <div className="mb-3">
                                    <label>Enter Customer Id</label>
                                    <input
                                        type="text"
                                        name="custId"
                                        className="form-control"
                                        onChange={(e) => handleChange(e)}
                                        value={customer.custId}

                                    />
                                </div>

                                <div className="mb-3">
                                    <label>Enter Customer Name</label>
                                    <input
                                        type="text"
                                        name="name"
                                        className="form-control"
                                        onChange={(e) => handleChange(e)}
                                        value={customer.name}

                                    />
                                </div>
                                <div className="mb-3">
                                    <label>Enter City</label>
                                    <input
                                        type="text"
                                        name="city"
                                        className="form-control"
                                        onChange={(e) => handleChange(e)}
                                        value={customer.city}

                                    />
                                </div>

                                <div className="mb-3">
                                    <label>Enter Age</label>
                                    <input
                                        type="text"
                                        name="age"
                                        className="form-control"
                                        onChange={(e) => handleChange(e)}
                                        value={customer.age}

                                    />
                                </div>

                                <div className="mb-3">
                                    <label>Enter Category</label>
                                    <input
                                        type="text"
                                        name="category"
                                        className="form-control"
                                        onChange={(e) => handleChange(e)}
                                        value={customer.category}

                                    />
                                </div>
                                <button className="btn btn-primary col-md-12">Update</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>
);
};

export default Edit
