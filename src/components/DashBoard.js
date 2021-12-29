import React from 'react'
// import { Link } from 'react-router-dom'
import Carousel from './layouts/Carousel'
import List from './layouts/List'
import Navbar from './layouts/Navbar'
import Main from './layouts/Main'
import Services from './layouts/Services'

const DashBoard = () => {
    return (
        <>
            <Navbar />
            
            <div className="container my-3 d-flex flex-wrap" style={{ display: 'flex',height:'350px' }}>
                <div className="col-md-2">
                    <List />
                </div>
                <div className="col-md-9 offset-md-1">
                    <Carousel />
                </div>
            </div>

            <div className="container-fluid mt-5" style={{ backgroundColor: '#252525' }}>
                <Main />
            </div>
            <Services/>
        </>

    )
}

export default DashBoard
