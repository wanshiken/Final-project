import React, { Component, useState } from 'react'
import { Button, Card, Col, Modal } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import AudioPlayer from "react-h5-audio-player";
import "react-h5-audio-player/lib/styles.css";
import AuthService from '../../../../services/auth.service';
import BeatsService from '../../../../services/beats.service';
import WaveForm from '../../WaveForm/WaveForm';
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
                <WaveForm
                    idx={this.props.idx}
                    refreshBeats={this.props.refreshBeats}
                    loggedUser={this.props.loggedUser}
                    beatInfo=
                    {{ _id: this.props._id, title: this.props.title, url: this.props.url, cover: this.props.cover, time: this.props.time, bpm: this.props.bpm, price: this.props.price }}

                />
            </div>

        )
    }
}