import React, { Component } from 'react'
import { Button, Form } from 'react-bootstrap'
import BeatsService from '../../../../services/beats.service'

export default class BeatsForm extends Component {
    state = {
        title: "",
        cover: "",
        url: "",
        time: "",
        bpm: 0,
        price:""
    }

    beatService = new BeatsService();

    handleChange = (e) => {
        const { value, name } = e.target;

        this.setState({
            ...this.state,
            [name]: value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault();

        this.beatService.createBeat(this.state)
            .then(() => {
                this.props.closeModal();
                this.props.refreshBeats();
                this.setState({
                    title: "",
                    cover: "",
                    url: "",
                    time: "",
                    bpm: 0,
                    price: ""
                })
            })
            .catch(err => console.error(err))
    }

    render() {
        return (
            <Form onSubmit={this.handleSubmit}>
                <Form.Group className="mb-3" controlId="title">
                    <Form.Label>Título: </Form.Label>
                    <Form.Control onChange={(e) => this.handleChange(e)} name="title" value={this.state.title} type="text" placeholder="Introduce título" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="cover">
                    <Form.Label>Descripción: </Form.Label>
                    <Form.Control onChange={(e) => this.handleChange(e)} name="description" value={this.state.description} type="text" placeholder="Introduce descripción" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="url">
                    <Form.Label>Inversiones: </Form.Label>
                    <Form.Control onChange={(e) => this.handleChange(e)} name="inversions" value={this.state.inversions} type="number" placeholder="Introduce inversiones" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="time">
                    <Form.Label>Longitud: </Form.Label>
                    <Form.Control onChange={(e) => this.handleChange(e)} name="length" value={this.state.length} type="number" placeholder="Introduce longitud" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="bpm">
                    <Form.Label>Imagen: </Form.Label>
                    <Form.Control onChange={(e) => this.handleChange(e)} name="imageUrl" value={this.state.imageUrl} type="text" placeholder="Introduce imagen" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="price">
                    <Form.Label>Imagen: </Form.Label>
                    <Form.Control onChange={(e) => this.handleChange(e)} name="imageUrl" value={this.state.imageUrl} type="text" placeholder="Introduce imagen" />
                </Form.Group>


                <Button variant="primary" type="submit">
                    Submit
                </Button>
            </Form>
        )
    }
}