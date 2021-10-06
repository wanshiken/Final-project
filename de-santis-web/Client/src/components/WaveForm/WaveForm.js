import React, { Component } from 'react'
import WaveSurfer from 'wavesurfer.js';
import audio from '../../media/Rauw Alejandro - Cosa Guapa.mp3'
import play from '../../media/play.png'
import stop from '../../media/stop.png'
import volume from '../../media/volume.png'
import pause from '../../media/pause.png'



export default class WaveForm extends Component {


    constructor(props) {
        super(props)
        this.state = {
            wavesurfer: undefined
        }
    }

    componentDidMount() {
        let wavesurfer = WaveSurfer.create({
            container: '#waveform',
            waveColor: 'purple',
            progressColor: 'violet',
            barWidth: 6,
            height:90,
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
        if(this.handlePlay = {play}){
           this.handlePlay = {pause}
        }else {
            this.handlePlay = {play}
        }
    };

    handleStop = () => {
        this.state.wavesurfer.stop()
    };

    handleMute = () => {
        this.state.wavesurfer.toggleMute()
    };





    render() {
        return (
            <div class='music'>
                <img src={this.props.beatInfo.cover} width='250px' height='300px'></img>
                <div class='info'>
                    <h1> {this.props.beatInfo.title} </h1>
                    <p>  Time: {this.props.beatInfo.time} - BPM: {this.props.beatInfo.bpm}   </p>

                    <div id="waveform"></div>
                    <div class='controls'>
                        <img id='playBtn' src={play} onClick={this.handlePlay} ></img>
                        <img src={stop} onClick={this.handleStop}></img>
                        <img src={volume} onClick={this.handleMute} ></img>
                    </div>
                    <p> {this.props.beatInfo.price}€</p>
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