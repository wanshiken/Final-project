import React from 'react'
import { Switch, Route, Redirect } from 'react-router-dom';
import HomePage from '../pages/HomePage/HomePage';
import Login from '../pages/Login/Login';
import Profile from '../pages/Admin/Profile/Profile';
import Signup from '../pages/Signup/Signup';
import BeatsForm from '../pages/Admin/BeatsForm/BeatsForm'
import BeatsPage from '../pages/BeatsPage/BeatsPage';
import BeatsDetails from '../pages/BeatsDetails/BeatsDetails';
import BeatsFormEdit from '../pages/Admin/BeatsFormEdit/BeatsFormEdit';


const Routes = ({ storeUser, loggedUser }) => {
    return (
        <Switch>
            <Route exact path="/" render={(props) => <HomePage {...props}/>} />
            <Route exact path="/registro" render={(props) => <Signup {...props} />} />
            <Route exact path="/iniciar-sesion" render={(props) => <Login storeUser={storeUser} {...props} />} />
            <Route exact path="/admin" render={() => loggedUser ? <Profile loggedUser={loggedUser} /> : <Redirect to="/iniciar-sesion" />} />
            <Route exact path="/admin/beats" render={() => <BeatsForm />} />
            <Route exact path="/beats" render={() => <BeatsPage loggedUser={loggedUser}  />} />
            <Route path="/beats/:id" render={(props) => <BeatsDetails {...props} />} />
            <Route path="/admin/beats/:id/editar" render={(props) => <BeatsFormEdit {...props} />} />
        </Switch>
    )
}

export default Routes