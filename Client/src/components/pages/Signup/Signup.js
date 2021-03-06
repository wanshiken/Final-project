import React, { Component } from 'react'
import { Container, Form, Button } from 'react-bootstrap'
import AuthService from '../../../services/auth.service'

class Signup extends Component {
    constructor(props) {
        super(props)
        this.state = {
            username: "",
            pwd: ""
        }
    }

    handleInput = (e) => {
        const { name, value } = e.target
        this.setState({ [name]: value })
    }

    handleFormSubmit = (e) => {
        e.preventDefault();
        const { username, pwd } = this.state
        AuthService.signup(username, pwd)
            .then(res => this.props.history.push("/"))
            .catch(err => console.log(err))
           
    }

    render() {
        return (
            <Container>
                <Form onSubmit={this.handleFormSubmit}>
                    <Form.Group className="mb-3" controlId="formBasicMail">
                        <Form.Label>Username</Form.Label>
                        <Form.Control name="username" value={this.state.username} onChange={this.handleInput} type="text" placeholder="Create username" />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control name="pwd" value={this.state.pwd} onChange={this.handleInput} type="password" placeholder="Create Password" />
                    </Form.Group>
                    <div className='div-btn-beats' style={{ position: 'relative', textAlign: 'center',}}>
                        <button  type="submit" className='btn' style={{ fontSize: '25px', fontWeight: 'bold' }} >Sign Up
                    </button>
                    </div>
                </Form>
            </Container>
        )
    }
}

export default Signup