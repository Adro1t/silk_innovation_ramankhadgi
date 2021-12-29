import React from 'react'
import { Link, withRouter } from 'react-router-dom'
import { isAuthenticated, signout } from '../auth'



const Navbar = (history) => {
    const { user: { name, email } } = isAuthenticated()

    return (
        <>
            <div className="container-fluid d-flex" style={{ backgroundColor: 'white', position: 'sticky', top: '0', zIndex: '1080' }}>
                <div className="col-md-2">
                    <Link className="navbar-brand d-flex align-items-center justify-content-center p-5" style={{ fontFamily: 'cursive', color: 'black', borderRight: '1px solid black' }} to="/">Sajilo Pay</Link>

                </div>
                <div className="col-md-9 pt-3">
                    <div className="row">
                        <div className="col-md-8">
                            <form className="mx-3" style={{ border: '1px solid #0948ff', borderRadius: '.25rem' }}>

                                <div className="container d-flex align-items-center p-1">

                                    <i className="bi bi-search p-2" style={{ color: '#0948ff' }}></i>
                                    <input className="form-control me-2" style={{ border: 'none' }} type="search" placeholder="Search" aria-label="Search" />
                                    <button className="btn text-white" style={{ backgroundColor: '#0948ff' }} type="submit">Search</button>
                                </div>
                            </form>
                        </div>
                        <div className="col-md-1 ">
                            <p className="text-center" style={{ color: 'black', fontWeight: 'bold' }}>Call Us<br />
                                9844363201
                            </p>
                        </div>
                        <div className="col-md-3">
                            <ul className="d-flex flex-wrap">




                                {isAuthenticated() && (
                                    <li className="list-unstyled">
                                        <p className="d-flex m-0 p-0" style={{ fontSize: '13px' }}>{name}</p>
                                        <p className="d-flex m-0 p-0" style={{ fontSize: '13px' }}>{email}</p>
                                    </li>

                                )}

                                {isAuthenticated() && (

                                    <li className="list-unstyled">
                                        <Link to="/login" className="text-decoration-none"><i class="bi bi-person p-3" style={{ color: 'black', fontSize: '25px' }}></i></Link>
                                    </li>
                                )}


                                {isAuthenticated() && (
                                    <li className="list-unstyled">
                                        <Link className="text-decoration-none" onClick={() => signout(() => {
                                            history.push('/login')
                                        })}>
                                            <i class="bi bi-door-open p-3" style={{ color: 'black', fontSize: '25px' }}></i>
                                        </Link>
                                    </li>
                                )}

                                <li className="list-unstyled">
                                    <Link to="" className="text-decoration-none"><i class="bi bi-basket p-3" style={{ color: 'black', fontSize: '25px' }}></i></Link>
                                    {/* <Link to="" className="text-decoration-none"><i class="bi bi-heart p-3" style={{ color: 'black', fontSize: '25px' }}></i></Link> */}
                                </li>


                            </ul>


                        </div>
                    </div>

                    <nav className="navbar navbar-expand-lg navbar-light">


                        <div className="container-fluid">
                            <button className="navbar-toggler d-flex justify-content-end" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                                <span className="navbar-toggler-icon"></span>
                            </button>
                            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                                    <li className="nav-item">
                                        <Link className="nav-link" to="/">Home</Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link className="nav-link" to="/shop">Statement</Link>
                                    </li>

                                    <li className="nav-item">
                                        <Link className="nav-link" to="/about-page">Terms and Conditions</Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link className="nav-link" to="/contact-page">About</Link>
                                    </li>

                                </ul>

                            </div>
                        </div>
                    </nav>

                </div>


            </div>

        </>
    )
}

export default withRouter(Navbar)
