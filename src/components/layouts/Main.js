import React from 'react'
import { Link } from 'react-router-dom'

const Main = () => {
    return (
        <>
            <div className="container d-flex">
                <Link className="col-md-3 d-flex p-5 align-items-center justify-content-center text-decoration-none">
                    <i className="bi bi-wallet2 py-2 px-3" style={{ color: '#6ec1e4', fontSize: '30px', fontWeight: 'bold', borderRadius: '50%', border: '2px solid #6ec1e4' }}></i>
                    <div className="text-white mx-3" style={{ letterSpacing: '0px' }}>
                        <p className="d-flex mb-0" style={{ fontSize: '17px', fontWeight: 'bold', textTransform: 'uppercase' }}><p className="mb-0" style={{ color: '#EF3636' }}>Load</p>&nbsp;Funds</p>
                    </div>
                </Link>
                <Link className="col-md-3 d-flex p-5 align-items-center justify-content-center text-decoration-none">
                    <i className="bi bi-send py-2 px-3" style={{ color: '#6ec1e4', fontSize: '30px', fontWeight: 'bold', borderRadius: '50%', border: '2px solid #6ec1e4' }}></i>
                    <div className="text-white mx-3">
                        <p className="d-flex mb-0" style={{ fontSize: '17px', fontWeight: 'bold', textTransform: 'uppercase' }}><p className="mb-0" style={{ color: '#EF3636' }}>Send/</p>&nbsp;Request</p>
                    </div>
                </Link>
                <Link className="col-md-3 d-flex p-5 align-items-center justify-content-center text-decoration-none">
                    <i className="bi bi-bank2 py-2 px-3" style={{ color: '#6ec1e4', fontSize: '30px', fontWeight: 'bold', borderRadius: '50%', border: '2px solid #6ec1e4' }}></i>
                    <div className="text-white mx-3">
                        <p className="d-flex mb-0" style={{ fontSize: '17px', fontWeight: 'bold', textTransform: 'uppercase' }}><p className="mb-0" style={{ color: '#EF3636' }}>bank</p>&nbsp;transfer</p>
                    </div>
                </Link>
                <Link className="col-md-3 d-flex p-5 align-items-center justify-content-center text-decoration-none">
                    <i className="bi bi-currency-exchange py-2 px-3" style={{ color: '#6ec1e4', fontSize: '30px', fontWeight: 'bold', borderRadius: '50%', border: '2px solid #6ec1e4' }}></i>
                    <div className="text-white mx-3">
                        <p className="d-flex mb-0" style={{ fontSize: '17px', fontWeight: 'bold', textTransform: 'uppercase' }}><p className="mb-0" style={{ color: '#EF3636' }}>Remittance</p>&nbsp;payment</p>
                    </div>
                </Link>
            </div>
        </>
    )
}

export default Main
