import React, { Component } from 'react'
import { Form, Button } from 'react-bootstrap'
import BeatsService from '../../services/beats.service';
import PurchaseService from '../../services/purchase.service';


class PurchaseForm extends Component {

    constructor(props) {
        super(props)
        this.state = {
            track: null,
            client: null,
            email: '',
            name: '',
            phone: 0,
            subject: '',
            to: '',
            text: '',
            nameError: "",
            emailError: "",
            phoneError: ""

        }

        this.purchaseService = new PurchaseService()
        this.beatService = new BeatsService()
        this.url = React.createRef()

    }

    validate = () => {
        let nameError = "";
        let emailError = "";
        let phoneError = "";

        if (!this.state.name) {
            nameError = "Rellena este campo";
        }

        if (!this.state.email.includes("@")) {
            emailError = "correo inválido";
        }

        if (!this.state.phone) {
            phoneError = "Numero equivocado";
        }

        if (emailError || nameError || phoneError) {
            this.setState({ emailError, nameError, phoneError });
            return false;
        }


        return true;
    };

    handleChange = (e) => {
        const { value, name } = e.target;

        this.setState({
            ...this.state,
            [name]: value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault();
        const isValid = this.validate();

        if (isValid) {
            console.log(this.state);
            // clear form
            this.setState(this.state);
        }

        this.purchaseService.createPurchase({ ...this.state, beatInfo: this.props.beatInfo })
            .then(() => {
                this.setState({
                    track: null,
                    user: null,
                    email: '',
                    name: '',
                    phone: 0,
                    subject: '',
                    to: '',
                    text: '',
                })
            })
            .catch(err => console.error(err))
    }


    render() {
        return (

            // boton compra para descargar el file 
            <Form onSubmit={this.handleSubmit}>
                <Form.Group className="mb-3" controlId="name">
                    <Form.Label>Nombre: </Form.Label>
                    <Form.Control onChange={(e) => this.handleChange(e)} name="name" value={this.state.name} type="text" placeholder="Introduce tu nombre" />
                    <div style={{ fontSize: 20, color: "red" }}>
                        {this.state.nameError}
                    </div>
                </Form.Group>

                <Form.Group className="mb-3" controlId="cover">
                    <Form.Label>Telefono: </Form.Label>
                    <Form.Control onChange={(e) => this.handleChange(e)} name="phone" type="number" />
                    <div style={{ fontSize: 20, color: "red" }}>
                        {this.state.phoneError}
                    </div>
                </Form.Group>

                <Form.Group className="mb-3" controlId="cover">
                    <Form.Label>Mail: </Form.Label>
                    <Form.Control onChange={(e) => this.handleChange(e)} name="email" type="email" placeholder="Introduce tu correo" />
                    <div style={{ fontSize: 20, color: "red" }}>
                        {this.state.emailError}
                    </div>
                </Form.Group>


                <Button variant="danger" type="submit"> Comprar Beat </Button>


            </Form>

        )
    }
}

export default PurchaseForm
