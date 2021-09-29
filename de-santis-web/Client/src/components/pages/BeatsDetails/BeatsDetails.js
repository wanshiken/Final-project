import React, { Component } from 'react'
import { Col, Container, Row } from 'react-bootstrap';
import BeatsService from '../../../services/beats.service';

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

    render() {

        return (
            <Container>
                {
                    this.state.beats ?
                        <Row>
                            <Col md={6}>
                                <h1>Beat {this.state.beats.title}</h1>
                                <h3>Price: {this.state.beats.price}</h3>

                                <hr />

                                <p>Time: {this.state.beats.time}</p>
                                <p>Bpm: {this.state.beats.bpm}</p>
                            </Col>
                            <Col md={4}>
                                <img id='image-details'src={this.state.beats.cover} alt={this.state.beats.title} />
                            </Col>
                        </Row>

                        :
                        <h3>Cargando...</h3>
                }
            </Container>
        )
    }
}