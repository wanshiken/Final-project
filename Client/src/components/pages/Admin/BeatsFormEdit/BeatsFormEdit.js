import React, { Component } from 'react'
import { Button, Form, } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import BeatsService from '../../../../services/beats.service'
import UploadsService from '../../../../services/uploads.service'


export default class BeatsFormEdit extends Component {
    state = {
        title: "",
        cover: "",
        url: "",
        time: "",
        bpm: 0,
        price:""        
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

        this.beatService.editBeat(this.props.location.state.id, this.state)
            .then(() => {
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
            <div>
            <Form style={{marginLeft:'50px', fontSize:'23px'}} onSubmit={this.handleSubmit}>
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
            
                <div className='btn-edit-form'>
                    <button style={{ position: 'relative', fontSize: '25px', fontWeight: 'bold', background: 'white', }} className="add-beat" type="submit">
                    Submit
                </button>
                
                    <Button style={{ position: 'relative', fontSize: '25px', fontWeight: 'bold',  }} className="add-beat" as={Link} to='/admin' variant='dark' >
                    Back
                </Button>
                </div>
            </Form>
            
                </div>

            
        )
    }
}