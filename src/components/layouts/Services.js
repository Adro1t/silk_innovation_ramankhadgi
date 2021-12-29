import React from 'react'
import { Link } from 'react-router-dom'

const Services = () => {
    return (
        <>
            <div className="container-fluid p-3" style={{ backgroundColor: '#f9f8fd' }}>
                <div className="container">
                    <h3>Sajilo Payments</h3>
                    <div className="row row-cols-1 row-cols-md-6 g-3 p-0 my-3">

                        <Link className="col text-center text-decoration-none shadow-sm p-3" style={{ backgroundColor: 'white' }}>
                            <i class="bi bi-lightbulb-fill p-3" style={{ fontSize: '20px' }}></i>
                            <p className="p-2 m-2">Electricity</p>
                        </Link>
                        <Link className="col text-center text-decoration-none shadow-sm p-3" style={{ backgroundColor: 'white' }}>
                            <i class="bi bi-telephone-fill p-3" style={{ fontSize: '20px' }}></i>
                            <p className="p-2 m-2">Landline</p>
                        </Link>
                        <Link className="col text-center text-decoration-none shadow-sm p-3" style={{ backgroundColor: 'white' }}>
                            <i class="bi bi-phone-fill p-3" style={{ fontSize: '20px' }}></i>
                            <p className="p-2 m-2">Top Up</p>
                        </Link>
                        <Link className="col text-center text-decoration-none shadow-sm p-3" style={{ backgroundColor: 'white' }}>
                            <i class="bi bi-router-fill p-3" style={{ fontSize: '20px' }}></i>
                            <p className="p-2 m-2">Internet</p>
                        </Link>
                        <Link className="col text-center text-decoration-none shadow-sm p-3" style={{ backgroundColor: 'white' }}>
                            <i class="bi bi-credit-card-fill p-3" style={{ fontSize: '20px' }}></i>
                            <p className="p-2 m-2">RC Card</p>
                        </Link>
                        <Link className="col text-center text-decoration-none shadow-sm p-3" style={{ backgroundColor: 'white' }}>
                            <i class="bi bi-tv-fill p-3" style={{ fontSize: '20px' }}></i>
                            <p className="p-2 m-2">Television</p>
                        </Link>
                        <Link className="col text-center text-decoration-none shadow-sm p-3" style={{ backgroundColor: 'white' }}>
                            <i class="bi bi-droplet-fill p-3" style={{ fontSize: '20px' }}></i>
                            <p className="p-2 m-2">Water</p>
                        </Link>
                        <Link className="col text-center text-decoration-none shadow-sm p-3" style={{ backgroundColor: 'white' }}>
                            <i class="bi bi-bank2 p-3" style={{ fontSize: '20px' }}></i>
                            <p className="p-2 m-2">Govt. Payments</p>
                        </Link>
                        <Link className="col text-center text-decoration-none shadow-sm p-3" style={{ backgroundColor: 'white' }}>
                            <i class="bi bi-wallet-fill p-3" style={{ fontSize: '20px' }}></i>
                            <p className="p-2 m-2">EMI</p>
                        </Link>
                        <Link className="col text-center text-decoration-none shadow-sm p-3" style={{ backgroundColor: 'white' }}>
                            <i class="bi bi-person-fill p-3" style={{ fontSize: '20px' }}></i>
                            <p className="p-2 m-2">Insurance</p>
                        </Link>
                    </div>
                </div>

                <div className="container mt-3">
                    <h3 >Financial Payments</h3>
                    <div className="row row-cols-1 row-cols-md-6 g-3 p-0 my-3">

                        <Link className="col text-center text-decoration-none shadow-sm p-3" style={{ backgroundColor: 'white' }}>
                            <i class="bi bi-person-check-fill p-3" style={{ fontSize: '20px' }}></i>
                            <p className="p-2 m-2">Broker Fees</p>
                        </Link>
                        <Link className="col text-center text-decoration-none shadow-sm p-3" style={{ backgroundColor: 'white' }}>
                            <i class="bi bi-credit-card-2-front-fill p-3" style={{ fontSize: '20px' }}></i>
                            <p className="p-2 m-2">Credit Card</p>
                        </Link>
                        <Link className="col text-center text-decoration-none shadow-sm p-3" style={{ backgroundColor: 'white' }}>
                            <i class="bi bi-graph-up-arrow p-3" style={{ fontSize: '20px',fontWeight:'bolder' }}></i>
                            <p className="p-2 m-2">Demat Fee</p>
                        </Link>
                        <Link className="col text-center text-decoration-none shadow-sm p-3" style={{ backgroundColor: 'white' }}>
                            <i class="bi bi-hand-thumbs-up-fill p-3" style={{ fontSize: '20px' }}></i>
                            <p className="p-2 m-2">Cooperative Transfer</p>
                        </Link>
                        
                    </div>
                </div>
            </div>
        </>
    )
}

export default Services
