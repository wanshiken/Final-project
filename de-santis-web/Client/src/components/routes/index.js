import React from 'react'
import { Switch, Route, Redirect } from 'react-router-dom';
import HomePage from '../pages/HomePage/HomePage';
import Login from '../pages/Login/Login';
import Profile from '../pages/Admin/Profile/Profile';
import Signup from '../pages/Signup/Signup';
import BeatsForm from '../pages/Admin/BeatsForm/BeatsForm'


const Routes = ({ storeUser, loggedUser }) => {
    return (
        <Switch>
            <Route exact path="/" render={() => <HomePage />} />
            <Route exact path="/registro" render={(props) => <Signup {...props} />} />
            <Route exact path="/iniciar-sesion" render={(props) => <Login storeUser={storeUser} {...props} />} />
            <Route path="/admin" render={() => loggedUser ? <Profile loggedUser={loggedUser} /> : <Redirect to="/iniciar-sesion" />} />
            <Route path="/admin" render={() => <BeatsForm />} />
        </Switch>
    )
}

export default Routes