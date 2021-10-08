import React, { Component } from 'react'
import { Button, Form, } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import BeatsService from '../../../../services/beats.service'
import UploadsService from '../../../../services/uploads.service'


export default class BeatsForm extends Component {
    state = {
        title: "",
        cover: "",
        url: "",
        time: "",
        bpm: 0,
        price:0        
    }
    

    beatService = new BeatsService();
    uploadService = new UploadsService()

    handleChange = (e) => {
        const { value, name } = e.target;

        this.setState({
            ...this.state,
            [name]: value
        })
    }

    handleFile = (e) => {
        this.setState({
            ...this.state,
            isLoading: true
        })

        const uploadData = new FormData()
        uploadData.append('imageData', e.target.files[0])

        this.uploadService.uploadImg(uploadData)
            .then(res => {
                console.log(res)
                this.setState({
                    ...this.state,
                    isLoading: false,
                    cover: res.data.cloudinary_url
                })
            })
            .catch(err => alert("Error, esto lo hacéis vosotros."))
    }

    handleFileAudio = (e) => {
        this.setState({
            ...this.state,
            isLoading: true
        })

        const uploadData = new FormData()
        uploadData.append('audioData', e.target.files[0])

        this.uploadService.uploadAudio(uploadData)
            .then(res => {
                //console.log(res)

                this.setState({
                    ...this.state,
                    isLoading: false,
                    url: res.data.cloudinary_url
                })
            })
            .catch(err => alert("Error, esto lo hacéis vosotros."))
        }

    

    handleSubmit = (e) => {
        e.preventDefault();

        this.beatService.createBeat(this.state)
            .then(() => {
                this.setState({
                    title: "",
                    cover: "",
                    url: "",
                    time: "",
                    bpm: 0,
                    price: 0
                })
            })
            .catch(err => console.error(err))
    }

    render() {
        return (
            <div>
            <Form onSubmit={this.handleSubmit}>
                <Form.Group className="mb-3" controlId="title">
                    <Form.Label>Título: </Form.Label>
                    <Form.Control onChange={(e) => this.handleChange(e)} name="title" value={this.state.title} type="text" placeholder="Introduce título" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="cover">
                    <Form.Label>Cover: </Form.Label>
                    <Form.Control onChange={(e) => this.handleFile(e)} name="cover" type="file"  />
                </Form.Group>

                <Form.Group className="mb-3" controlId="url">
                    <Form.Label>Mp3 or Wav: </Form.Label>
                    <Form.Control onChange={(e) => this.handleFileAudio(e)} name="url" type="file" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="time">
                    <Form.Label>Tiempo: </Form.Label>
                    <Form.Control onChange={(e) => this.handleChange(e)} name="time" value={this.state.time} type="text" placeholder="Introduce el tiempo" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="bpm">
                    <Form.Label>Bpm: </Form.Label>
                    <Form.Control onChange={(e) => this.handleChange(e)} name="bpm" value={this.state.bpm} type="number" placeholder="Introduce bpm" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="price">
                    <Form.Label>Precio: </Form.Label>
                    <Form.Control onChange={(e) => this.handleChange(e)} name="price" value={this.state.price} type="number" placeholder="Introduce el precio" />
                </Form.Group>
            

                    <Button className='div-btn-beats' style={{ fontSize: '25px', fontWeight: 'bold', backgroundColor:'white', color:'black' }}  type="submit">
                    Submit
                </Button>
            </Form>

                </div>
        )
    }
}