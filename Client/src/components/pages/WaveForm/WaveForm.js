import React, { Component } from 'react'
import WaveSurfer from 'wavesurfer.js';
import play from '../../../media/play.png'
import stop from '../../../media/stop.png'
import volume from '../../../media/volume.png'
import pause from '../../../media/pause.png'
import AuthService from '../../../services/auth.service';
import { Button, Card, Modal, Col } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import "react-h5-audio-player/lib/styles.css";
import PurchaseForm from '../PurchaseForm/PurchaseForm';
import StripeContainer from '../../StripeContainer/StripeContainer';
import BeatsService from '../../../services/beats.service';


export default class WaveForm extends Component {


    constructor(props) {
        super(props)
        this.state = {
            wavesurfer: undefined,
            play: true

        }
        this.beatService = new BeatsService();
    }

    componentDidMount() {
        let wavesurfer = WaveSurfer.create({
            container: `#${this.props.idx}`,
            waveColor: 'purple',
            progressColor: 'violet',
            barWidth: 6,
            height: 90,
            responsive: true,
            hideScrollbar: true,
            barRadius: 2,
        });

        this.setState({ wavesurfer })

        wavesurfer.load(this.props.beatInfo.url);

        //  wavesurfer.on('ready', function () {
        //      wavesurfer.playPause();
        //  });
    }

    handlePlay = () => {
        this.state.wavesurfer.playPause()
        this.setState({ play: !this.state.play })
    };

    handleStop = () => {
        this.state.wavesurfer.stop()
    };

    handleMute = () => {
        this.state.wavesurfer.toggleMute()
    };

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
        this.beatService.deleteBeat(this.props.beatInfo._id)
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
            <div className='music'>
                <img src={this.props.beatInfo.cover} width='250px' height='300px'></img>
                <div className='info'>
                    <h1> {this.props.beatInfo.title} </h1>
                    <p>  Price: {this.props.beatInfo.price}€  </p>

                    <div id={this.props.idx}></div>
                    <div className='controls'>
                        <img id='playBtn' src={this.state.play ? play : pause} onClick={this.handlePlay} ></img>
                        <img src={stop} onClick={this.handleStop}></img>
                        <img src={volume} onClick={this.handleMute} ></img>
                    </div>

                    <div className='btn-waveform'>

                        {this.props.loggedUser && this.props.loggedUser.rol === 'admin' &&
                            <>
                                <button className='delete-btn' style={{ position: 'relative', fontSize: '25px', fontWeight: 'bold', background: 'white' }} onClick={this.deleteHandler} >Delete beat</button>


                                <Link to={{ pathname: `/admin/beats/${this.props.beatInfo._id}/editar`, state: { id: this.props.beatInfo._id } }} >
                                    <button id='edit-btn' style={{ position: 'relative', fontSize: '25px', fontWeight: 'bold', background: 'white' }}  >Edit Beat</button>
                                </Link>
                            </>
                        }


                        <Link to={`/beats/${this.props.beatInfo._id}`}>
                            <button id='details-btn' style={{ position: 'relative', fontSize: '25px', fontWeight: 'bold', background: 'white' }}  >Details</button>
                        </Link>

                        <button id='purchase-btn' style={{ position: 'relative', fontSize: '25px', fontWeight: 'bold', background: 'white' }} onClick={() => this.openModal()}>Buy beat</button>
                        <Modal show={this.state.show} onHide={() => this.closeModal()}>
                            <Modal.Header closeButton>
                                <Modal.Title>Purchase Details {this.props.beatInfo.title}</Modal.Title>
                            </Modal.Header>
                            <Modal.Body>

                                <PurchaseForm
                                    beatInfo=
                                    {{ _id: this.props.beatInfo._id, title: this.props.beatInfo.title, url: this.props.beatInfo.url, cover: this.props.beatInfo.cover, time: this.props.beatInfo.time, bpm: this.props.beatInfo.bpm, price: this.props.beatInfo.price }}
                                    closeModal={() => this.closeModal()} />
                            </Modal.Body>
                        </Modal>


                    </div>

                </div>

            </div>

        )
    }
}

{/* <div class='music'>
    <img src={this.props.beatInfo.cover}></img>
    <div class='info'>
        <h1>{this.props.beatInfo.title}</h1>
        <p> {this.props.beatInfo.price}</p>
    </div>

</div> */}




// declaro waveform y le paso a beatinfo lo q requirea <WaveForm beatInfo = {{cover, url}}) />