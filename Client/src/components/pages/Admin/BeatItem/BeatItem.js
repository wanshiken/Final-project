import React, { Component, useState } from 'react'
import { Button, Card, Col, Modal } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import AudioPlayer from "react-h5-audio-player";
import "react-h5-audio-player/lib/styles.css";
import PurchaseForm from '../../../PurchaseForm/PurchaseForm';
import AuthService from '../../../../services/auth.service';
import BeatsService from '../../../../services/beats.service';
import WaveForm from '../../../WaveForm/WaveForm';
import StripeContainer from '../../../StripeContainer/StripeContainer';

//const [showItem, setShowItem] = useState(false)

export default class BeatItem extends Component {
    constructor(props) {
        super(props)
        this.state = {
            show: false,
            showItem: false,
        }
        this.beatService = new BeatsService();
    }

    logOut = (props) => {

        AuthService.logout()
            .then(res => props.storeUser(null))
            .catch(err => console.log(err))
    }

    handleChange = (e) => {
        const { value, name } = e.target;

        this.setState({
            ...this.state,
            [name]: value
        })
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

    deleteHandler = () => {
        this.beatService.deleteBeat(this.props._id)
        this.props.refreshBeats()
    }


    handleClick() {

        this.setState({ showItem: true })
    }

    closeStripeModal = () => {
        this.setState({ ...this.state, showItem: false });
    }


    render() {


        return (
            <div>
                <Col md={4} className="mb-3">
                    <Card>
                        <Card.Img variant="top" src={this.props.cover} />
                        <Card.Body>

                            {this.props.loggedUser && this.props.loggedUser.rol === 'admin' &&
                                <div>

                                    <Button onClick={this.deleteHandler} variant="danger">Eliminar beat</Button>


                                    <Link to={{ pathname: `/admin/beats/${this.props._id}/editar`, state: { id: this.props._id } }} >
                                        <Button variant="warning">Editar beat</Button>
                                    </Link>
                                </div>
                            }
                            <div>
                                <Card.Title>{this.props.title}</Card.Title>

                                <Link to={`/beats/${this.props._id}`}>
                                    <Button variant="secondary">Ver detalles</Button>
                                </Link>

                                <Button block className="mt-2" onClick={() => this.openModal()}>Comprar beat</Button>
                                <Modal show={this.state.show} onHide={() => this.closeModal()}>
                                    <Modal.Header closeButton>
                                        <Modal.Title>Comprar {this.props.title}</Modal.Title>
                                    </Modal.Header>
                                    <Modal.Body>

                                        <PurchaseForm
                                            beatInfo=
                                            {{ title: this.props.title, url: this.props.url, cover: this.props.cover, time: this.props.time, bpm: this.props.bpm, price: this.props.price }}
                                            closeModal={() => this.closeModal()} />
                                    </Modal.Body>
                                </Modal>
                            </div>

                            <h1>The Spatula Store</h1>
                            {this.state.showItem ?
                                <Modal show={this.state.showItem} onHide={() => this.closeStripeModal()}>
                                    <Modal.Header closeButton>
                                        <Modal.Title>Comprar {this.props.title}</Modal.Title>
                                    </Modal.Header>
                                    <Modal.Body>
                                        <StripeContainer />
                                    </Modal.Body>
                                </Modal>
                                : <div> <h3>$10.00</h3> <img src={this.props.cover} alt="xd" />
                                    <button onClick={() => this.handleClick()}>Purchase beat</button></div>}

                        </Card.Body>
                    </Card>
                </Col>
                <WaveForm
                    beatInfo=
                    {{ title: this.props.title, url: this.props.url, cover: this.props.cover, time: this.props.time, bpm: this.props.bpm, price: this.props.price }}

                />
                <Col>

                </Col>
            </div>

        )
    }
}