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
                <h1>¡Bienvenid@, {this.props.loggedUser.username}!</h1>
                <div>
                    <Button block className="mt-2" onClick={() => this.openModal()}>Añadir beat</Button>
                    <Modal show={this.state.show} onHide={() => this.closeModal()}>
                        <Modal.Header closeButton>
                            <Modal.Title>Añadir beat</Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                            <BeatsForm closeModal={() => this.closeModal()} refreshBeats={this.refreshBeats} />
                        </Modal.Body>
                    </Modal>
                    <h2>
                      
                    </h2>
                    <h3>
                        Tus Beats:

                       <BeatsList/>

                    </h3>
                </div>
            </Container>
        )
    }
}

export default Profile