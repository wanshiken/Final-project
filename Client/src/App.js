import React from 'react'
import './App.css';
import Navigation from './components/layout/Navigation/Navigation';
import Routes from './components/routes';
import { Component } from 'react';
import AuthService from './services/auth.service';
import { Spinner } from 'react-bootstrap';

class App extends Component {
  constructor() {
    super()
    this.state = {
      loggedUser: undefined
    }
  }

  componentDidMount = () => {
    this.fetchUser()
  }

  storeUser = (user) => this.setState({ loggedUser: user })

  fetchUser = () => {
    AuthService.isloggedin()
      .then(res => {
        console.log({ res: res });
        if (res) {
          this.storeUser(res.data);
        }
      })
      .catch(err => this.storeUser(null))

  }


  render = () => {
    return (
      <div>
        <Navigation loggedUser={this.state.loggedUser} storeUser={this.storeUser} />
        {this.state.loggedUser !== undefined ? <Routes loggedUser={this.state.loggedUser} storeUser={this.storeUser} /> : <Spinner />}
      </div>
    );
  }
}

export default App;
