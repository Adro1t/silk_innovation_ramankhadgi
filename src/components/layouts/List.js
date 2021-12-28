import React from 'react'
import { Link } from 'react-router-dom'

const List = () => {
    return (
        <>
            <ul className="list-unstyled">
                <li className="my-3"><Link className="text-decoration-none " style={{color:'#0948ff',fontWeight:'bold',fontSize:'18px' }}>Sajilo Payments</Link></li>
                <li className="my-3"><Link className="text-decoration-none " style={{color:'#0948ff',fontWeight:'bold',fontSize:'18px' }}>Financial Payments</Link></li>
                <li className="my-3"><Link className="text-decoration-none " style={{color:'#0948ff',fontWeight:'bold',fontSize:'18px' }}>Popular Payments</Link></li>
                <li className="my-3"><Link className="text-decoration-none " style={{color:'#0948ff',fontWeight:'bold',fontSize:'18px' }}>Merchant Payments</Link></li>
                <li className="my-3"><Link className="text-decoration-none " style={{color:'#0948ff',fontWeight:'bold',fontSize:'18px' }}>Credit Card Payment</Link></li>
            </ul>
        </>
    )
}

export default List
