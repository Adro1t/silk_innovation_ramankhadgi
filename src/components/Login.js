import React from 'react'
import { Link } from 'react-router-dom'
import Signin from './layouts/Signin'
import Signup from './layouts/Signup'


const Login = () => {
    return (
        <>
            <div style={{ backgroundColor: '#f9f8fd' }}>
                <div className="py-5 text-center mb-3" style={{ backgroundColor: '#252525' }}>
                    <h1 className="text-white m-0">My Account</h1><br />
                    <p style={{ color: '#888888', fontSize: '15px' }}>
                        <Link to="/" className="text-decoration-none text-white"><i class="bi bi-house px-2"></i>Home</Link>
                        &nbsp;&nbsp;&gt;
                        My Account
                    </p>

                </div>

                <div className="container my-5">
                    <div className="col-md-10 offset-md-1 p-5" >
                        <div class="row g-5 shadow" style={{ backgroundColor: 'white', borderRadius: '2%' }}>
                            <Signin />
                            <Signup />

                        </div>

                    </div>
                </div>
            </div>
        </>
    )
}

export default Login
