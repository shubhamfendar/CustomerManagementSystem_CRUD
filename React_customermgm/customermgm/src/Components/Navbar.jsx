import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
    return (
        <>
            <nav class="navbar navbar-expand-lg navbar-light bg-success">
                <a class="navbar-brand ms-5" href="#" ><i><b><h2>Customer Management System</h2></b></i></a>
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>

                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav mr-auto">
                        <li class="nav-item active">
                            <Link to='/' class="nav-link" href="/">Home <span class="sr-only"></span></Link>
                        </li>

                        <li class="nav-item active">
                            <Link to='addCustomer' class="nav-link" href="/addCustomer"><b>Add Customer</b> <span class="sr-only"></span></Link>
                        </li>

                        <li class="nav-item active">
                            <Link to='signup' class="nav-link" href="/signup"><b>SignUp</b> <span class="sr-only"></span></Link>
                        </li>

                        <li class="nav-item active">
                            <Link to='login' class="nav-link" href="/login"><b>Login </b> <span class="sr-only"></span></Link>
                        </li>

                        <li class="nav-item active">
                            <Link to='listCustomer' class="nav-link" href="/listCustomer"><b>List All Customers </b> <span class="sr-only"></span></Link>
                        </li>
                      
                      
                    
                    </ul>
                   
                </div>
            </nav>
        </>
    )
}

export default Navbar
