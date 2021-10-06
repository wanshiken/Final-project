import React, { Component } from 'react'
import { Container, Form, Button } from 'react-bootstrap'
import AuthService from '../../../services/auth.service'

class Login extends Component {
    constructor(props) {
        super(props)
        this.state = {
            username: "",
            pwd: "",
            usernameError: "",
            passwordError: ""
        }
    }

    validate = () => {
        let usernameError = "";
        let passwordError = "";

        if (!this.state.username) {
            usernameError = "Rellena este campo";
        }

        if (!this.state.pwd) {
            passwordError = "Contraseña incorrecta";
        }

        console.log(usernameError, passwordError)
        if (passwordError || usernameError) {
            this.setState({ passwordError, usernameError });
            return false;
        }

        return true;
    };

    handleInput = (e) => {
        const { name, value } = e.target
        this.setState({ [name]: value })
    }

    handleFormSubmit = (e) => {
        e.preventDefault();
        const { username, pwd } = this.state
        const isValid = this.validate();

        if (isValid) {
            console.log(this.state);
            // clear form
            this.setState(this.state);
        }

        AuthService.login(username, pwd)
            .then(res => {
                this.props.storeUser(res.data)
                this.props.history.push("/")
            })
            .catch(err => console.log(err))
    }

    render() {
        return (
            <Container>
                <Form onSubmit={this.handleFormSubmit}>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Username</Form.Label>
                        <Form.Control name="username" value={this.state.username} onChange={this.handleInput} type="text" placeholder="Enter username" />
                        <div style={{ fontSize: 20, color: "red" }}>
                            {this.state.usernameError}
                        </div>
                    </Form.Group>


                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control name="pwd" value={this.state.pwd} onChange={this.handleInput} type="password" placeholder="Password" />
                        <div style={{ fontSize: 20, color: "red" }}>
                            {this.state.passwordError}
                        </div>
                    </Form.Group>

                    <Button variant="primary" type="submit">
                        Submit
                    </Button>
                </Form>
            </Container>
        )
    }
}

export default Login