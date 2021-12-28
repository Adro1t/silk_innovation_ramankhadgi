import React from 'react'
import { Link } from 'react-router-dom'

const Carousel = () => {
    return (
        <>
            <div id="carouselExampleControls" className="carousel slide carousel-fade" data-bs-ride="carousel">
                <div className="carousel-inner">
                    <div className="carousel-item active" style={{ backgroundColor: 'black', height: '250px', flexWrap: 'nowrap' }}>
                        <img src="" className="d-block w-45 px-5 h-100" style={{ position: 'absolute', right: '6%' }} alt="..." />
                        <div className="carousel-caption text-start" style={{ fontWeight: 'bolder' }}>
                            <h1 style={{ fontSize: '40px' }}>Tickets for upcoming concerts</h1>
                            <p><Link className="btn btn-lg mt-2 text-white" style={{ backgroundColor: '#0948ff' }} to="/shop">Book Now</Link></p>
                        </div>
                    </div>
                    <div className="carousel-item" style={{ backgroundColor: 'black', height: '250px' }}>
                        <img src="" className="d-block w-50 h-100 mx-5" alt="..." />
                        <div className="carousel-caption text-end" style={{ fontWeight: 'bolder' }}>
                            <h1 style={{ fontSize: '45px' }}>Buy League Tickets from Sajilo pay
                            </h1>
                            <p><Link className="btn btn-lg mt-2 text-white" style={{ backgroundColor: '#0948ff' }} to="/shop">Buy Now</Link></p>
                        </div>
                    </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>
        </>
    )
}

export default Carousel
