import React from 'react'
import { Component } from "react"
import { Button, Modal } from 'react-bootstrap'
import { Container } from "react-bootstrap"
import BeatsForm from '../BeatsForm/BeatsForm';
import { Link } from 'react-router-dom'
import BeatsService from "../../../../services/beats.service";
import BeatItem from "../BeatItem/BeatItem";
import BeatsList from "../BeatsList/BeatsList";

class Profile extends Component {
    constructor(props) {
        super(props)
        this.state = {
            beats: null,
            show: false,
            searchValue: ""
        }
        this.beatService = new BeatsService();
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


    render = () => {
        return (
            <Container>
                <h1 className='admin-title'> Welcome - {this.props.loggedUser.username}!</h1>
                <div>
                <div className='div-add-beat' style={{ position: 'relative', textAlign: 'center', }}>
                    <button style={{ position:'relative', fontSize: '25px', fontWeight: 'bold', background:'white' }} className="add-beat" onClick={() => this.openModal()}>Añadir beat</button>
                    <Modal show={this.state.show} onHide={() => this.closeModal()}>
                        <Modal.Header closeButton>
                            <Modal.Title>Añadir beat</Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                            <BeatsForm closeModal={() => this.closeModal()} refreshBeats={this.refreshBeats} />
                        </Modal.Body>
                    </Modal>
                </div>
                    <div className='admin-subtitle'>
                        <h3 className='beats-panel'>
                        Beats panel:
                    </h3>

                        <BeatsList loggedUser={this.props.loggedUser} />

                    </div>
                </div>
            </Container>
        )
    }
}

export default Profile