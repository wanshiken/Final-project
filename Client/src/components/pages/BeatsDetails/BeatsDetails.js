import React, { Component } from 'react'
import { Col, Container, Row, Modal, Button } from 'react-bootstrap';
import BeatsService from '../../../services/beats.service';
import AudioPlayer from "react-h5-audio-player";
import "react-h5-audio-player/lib/styles.css";
import StripeContainer from '../../StripeContainer/StripeContainer';
import PurchaseForm from '../PurchaseForm/PurchaseForm';
import { Link } from 'react-router-dom'

export default class BeatsDetails extends Component {
    constructor() {
        super();

        this.state = {
            beats: null
        }

        this.beatService = new BeatsService();
    }

    componentDidMount() {
        const { id } = this.props.match.params;

        this.beatService.getOneBeat(id)
            .then(res => {
                this.setState({
                    ...this.state,
                    beats: res.data.track
                })
            })
            .catch(err => console.error(err))

    }

    openModal = () => {
        this.setState({
            ...this.state,
            show: true
        })
    }

    closeModal = () => {
        this.setState({ ...this.state, show: false });
    }

    render() {

        return (
            <Container>

                {
                    this.state.beats ?
                        <Row>
                            <Col md={6}>
                                <h1>Beat {this.state.beats.title}</h1>
                                <h3>Price: {this.state.beats.price}€</h3>

                                <hr />

                                <p>Time: {this.state.beats.time}</p>
                                <p>Bpm: {this.state.beats.bpm}</p>
                                <AudioPlayer style={{marginTop:'30px'}}src={this.state.beats.url} onPlay={e => console.log('onplay')}> </AudioPlayer>

                                <Button className="add-beat" id='purchase-btn' style={{ position: 'relative', fontSize: '25px', fontWeight: 'bold', background: 'white', marginTop: '20px', color:'black' }} onClick={() => this.openModal()} variant='dark'>Buy beat</Button>
                                <Modal show={this.state.show} onHide={() => this.closeModal()}>
                                    <Modal.Header closeButton>
                                        <Modal.Title>Purchase Details {this.title}</Modal.Title>
                                    </Modal.Header>
                                    <Modal.Body>

                                        <PurchaseForm
                                            beatInfo=
                                            {{ _id: this.state.beats._id, title: this.state.title, url: this.state.url, cover: this.state.cover, time: this.state.time, bpm: this.state.bpm, price: this.state.price }}
                                            closeModal={() => this.closeModal()} />
                                    </Modal.Body>
                                </Modal>

                                <Button style={{ position: 'relative', fontSize: '25px', fontWeight: 'bold', marginLeft:'30px', marginTop:'21px'}} as={Link} to='/beats' variant='dark' >Back</Button>
                            </Col>
                            <Col md={4}>
                                <img id='image-details' src={this.state.beats.cover} alt={this.state.beats.title} />
                                
                            </Col>
                        </Row>

                        :
                        <h3>Cargando...</h3>
                }
            </Container>
        )
    }
}