import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import DashBoard from './components/DashBoard'
import PrivateRoute from './components/auth/PrivateRoute'

import Login from './components/Login'

const Routes = () => {
    return (
        <>
            <Router>
                <Switch>
                    <Route exact path="/login" component={Login} />
                    <PrivateRoute exact path="/account" component={DashBoard}/>
                    <Route exact path="/" component={DashBoard}/>
                </Switch>
            </Router>
        </>
    )
}

export default Routes
