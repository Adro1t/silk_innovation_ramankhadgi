import React, { useState } from 'react'
import { Link, Redirect } from 'react-router-dom'
import { signin, authenticate, isAuthenticated } from '../auth'



const Signin = () => {
    const [values, setValues] = useState({
        email: '', password: '', error: '', loading: false, redirectToReferrer: false,
    });
    const { email, password, loading, error, redirectToReferrer } = values;

    const { user } = isAuthenticated();

    const handleChange = name => event => {
        setValues({ ...values, error: false, [name]: event.target.value });
    }

    const clickSubmit = (event) => {
        event.preventDefault();
        setValues({ ...values, error: false, loading: true });
        signin({ email, password })
            .then(data => {
                if (data.error) {
                    setValues({ ...values, error: data.error, loading: false })
                }
                else {
                    authenticate(data, () => {
                        setValues({
                            ...values,
                            redirectToReferrer: true
                        });
                    });
                }
            });
    };

    const showError = () => (
        <div className="alert alert-danger mb-3" style={{ display: error ? '' : 'none' }}>
            {error}
        </div>
    );

    const showLoading = () =>
        loading && (<div className="alert alert-info">
            <h2>Loading....</h2>
        </div>
        );
    const redirectUser = () => {
        if (redirectToReferrer) {
            if (user && user.role === 1) {
                return <Redirect to="/admin-account" />
            } else {
                return <Redirect to="/account" />
            }
        }
        if (isAuthenticated()) {
            return <Redirect to="/" />
        }

    }
    return (
        <>
            {showError()}
            {showLoading()}
            {redirectUser()}
            <form class="col-md-5 offset-md-1">
                <h3 style={{ color: '#132c5e', fontWeight: 'bold' }}>Login</h3>
                <p className="text-danger">Dont use Phone Number and PIN</p>
                <label className="mt-1" style={{ color: '#505a74' }} >Email Address/Phone Number</label>
                <input className="mb-1" type="text" style={{ width: '100%' }} onChange={handleChange('email')} value={email} required/>
                <label className="mt-1" style={{ color: '#505a74' }}>Password/PIN</label>
                <input className="mb-2" type="password" style={{ width: '100%' }} onChange={handleChange('password')} value={password} required/>
                <button className="btn mt-3 mb-4 px-4 py-2 w-50 shadow" style={{ backgroundColor: '#0948ff', border: 'none', color: 'white', fontSize: '18px' }} onClick={clickSubmit}>
                    Log In</button> <br />
                {/* <div class="my-3">
                    <input type="checkbox" />
                    <label className="m-1" style={{fontWeight:'bolder'}}>Remember me</label>
                </div> */}

                <Link className="text-decoration-none py-3" style={{ fontWeight: 'bolder' }} to="/account">Lost Your Password?</Link>
            </form>

        </>
    )
}

export default Signin
