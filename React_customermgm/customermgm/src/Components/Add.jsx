import React from 'react'
import { useState } from 'react';
import CustomerService from '../Service/CustomerService';

const Add = () => {

    const [customer, setCustomer] = useState({
        custId: '',
        name: '',
        city: '',
        age: '',
        category: ''
    })

    const [msg, setMsg] = useState('')

    const handleChange = (e) => {
        const value = e.target.value;
        setCustomer({ ...customer, [e.target.name]: value })
    };

    const CustomerRegister = (e) => {
        e.preventDefault();
        CustomerService.addCustomer(customer).then((res) => {
            console.log('customer=> ' + JSON.stringify(customer))
            console.log("Customer added Successfully");
            setMsg("Successfully added Details");
            setCustomer({
                custId: '',
                name: '',
                city: '',
                age: '',
                category: ''
            });

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
                                <form onSubmit={(e) => CustomerRegister(e)}>
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
                                    <button className="btn btn-primary col-md-12">Submit</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Add
