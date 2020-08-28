import React from 'react';
import {Route, Switch } from 'react-router-dom';
import Login from './Login'
import Dashboard from './dashboard'
import UnAuthorize from './UnAuthorize'
import {PrivateRoute} from '../routes/AuthRoutes'




function RestrictedContainer(props) {
    return (
        <Switch>
        <Route path="/" component={Login} exact />
        <Route path="/login" component={Login} />
        <PrivateRoute path="/dashboard" component={Dashboard} Role={"BM,ACE"} />
        <PrivateRoute path="/forbidden" component={UnAuthorize} Role={"BM,ACE"} />
    </Switch>
    )
}
export default RestrictedContainer
