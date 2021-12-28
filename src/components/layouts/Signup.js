import React from 'react'

const Signup = () => {
    return (
        <>
            <form class="col-md-5">
                <h3 style={{ color: '#132c5e',fontWeight:'bold' }}>Register</h3>
                <label className="mt-1" style={{ color: '#505a74' }}>UserName</label>
                <input className="mb-1" type="text" style={{ width: '100%' }} />

                <label className="mt-1" style={{ color: '#505a74' }}>Email address</label>
                <input className="mb-1" type="text" style={{ width: '100%' }} />

                <label className="mt-1" style={{ color: '#505a74' }}>Password</label>
                <input className="mb-1" type="password" style={{ width: '100%' }} />

                <p className="mt-2" style={{ color:'#505a74'}}>Your personal data will be used to support your experience throughout this website, to manage access to your account, and for other purposes described in our privacy policy.</p>
                <button className="btn mb-5 w-50" style={{ backgroundColor: '#0948ff', border: 'none', color: 'white', fontSize: '18px' }}>
                    Register</button> <br />

            </form>
        </>
    )
}

export default Signup
