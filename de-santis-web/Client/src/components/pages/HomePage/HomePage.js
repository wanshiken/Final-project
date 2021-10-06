import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { Button, Container, Row, Col } from 'react-bootstrap'
import WaveForm from '../../WaveForm/WaveForm'
import { render } from 'react-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { solid, regular, brands } from '@fortawesome/fontawesome-free'
import { FaGithub } from 'react-icons/fa';
import { BsInstagram } from 'react-icons/bs';
import { BsYoutube } from 'react-icons/bs';
import { BsLinkedin } from 'react-icons/bs';





export default class HomePage extends Component {

    render() {
        return (
            <Container >

                <Row xs={6} md={4} id='home-page-image'>

                    <img id='de-santis-logo-home' src="https://res.cloudinary.com/juandesantis/image/upload/v1633345254/De%20Santis.com%20image%20designs/logo_dj_de_santis_vector_bajsww.png"
                        alt="De Santis Logo"></img>

                </Row>

                <Row xs={12} md={6} id='speaker'>
                    <Col >
                        <img id='speaker-left' src="https://res.cloudinary.com/juandesantis/image/upload/v1633348210/De%20Santis.com%20image%20designs/speaker_gordo_nuneuq.png"
                            alt="Speaker" width="150" height="200"></img> 
                        
                    </Col>

                    <div className='div-btn-beats' style={{ position: 'relative', textAlign: 'center', }}>
                        <Link to="/beats">
                            <button className='btn' style={{ fontSize: '25px', fontWeight: 'bold' }}>Beats here!</button>
                        </Link>
                    </div>
                    <Col >
                        <img id='speaker-right' class='effect' src="https://res.cloudinary.com/juandesantis/image/upload/v1633348210/De%20Santis.com%20image%20designs/speaker_gordo_nuneuq.png"
                            alt="Speaker" width="150" height="200"></img>
                    </Col>
                </Row>


                <div class='wave'>

                    <h1 class='follow-me'> Follow me here! </h1>
                    {/* <WaveForm beatInfo=
                    {{ title: this.props.title, url: this.props.url, cover: this.props.cover, time: this.props.time, bpm: this.props.bpm, price: this.props.price }} /> */}
                </div>


                <fontAwesome />
                <div class='social-media'>
                    <a href='' class='github-logo'> <FaGithub /> </a>
                    <a href='' class='instagram-logo'> <BsInstagram /> </a>
                    <a href='' class='youtube-logo'> <BsYoutube /></a>
                    <a href='' class='linkedin-logo'> <BsLinkedin /></a>

                </div>

                {/* <div className="main-icon" data-type="svg"><svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" viewBox="0 0 470 470" enable-background="new 0 0 470 470">
                    <g className="speaker">
                        <path className="border" d="M386.511,0H83.489c-4.142,0-7.5,3.358-7.5,7.5v455c0,4.142,3.358,7.5,7.5,7.5h303.022c4.142,0,7.5-3.358,7.5-7.5V7.5   C394.011,3.358,390.653,0,386.511,0z M379.011,455H90.989V15h288.022V455z"></path>
                        <path className="inner-right" d="m427.383,273.504c-2.381-3.39-7.06-4.207-10.448-1.825-3.389,2.381-4.207,7.059-1.825,10.448 5.958,8.48 9.107,18.461 9.107,28.862 0,10.401-3.149,20.382-9.107,28.862-2.381,3.389-1.564,8.067 1.825,10.448 1.312,0.921 2.815,1.364 4.305,1.364 2.36,0 4.684-1.111 6.143-3.189 7.742-11.019 11.834-23.981 11.834-37.485 0-13.504-4.092-26.466-11.834-37.485z"></path>
                        <path className="outer-right" d="m452.57,255.807c-2.381-3.389-7.059-4.206-10.449-1.825-3.389,2.381-4.206,7.06-1.825,10.449 9.62,13.689 14.704,29.789 14.704,46.558 0,16.768-5.084,32.867-14.703,46.558-2.381,3.389-1.564,8.067 1.825,10.448 1.312,0.921 2.815,1.364 4.305,1.364 2.36,0 4.683-1.111 6.143-3.189 11.403-16.229 17.43-35.31 17.43-55.181 0-19.872-6.027-38.953-17.43-55.182z"></path>
                        <path className="inner-left" d="m53.065,271.679c-3.39-2.381-8.068-1.564-10.448,1.825-7.742,11.019-11.834,23.981-11.834,37.485 0,13.504 4.092,26.466 11.834,37.485 1.46,2.078 3.783,3.189 6.143,3.189 1.49,0 2.994-0.442 4.305-1.364 3.389-2.381 4.207-7.059 1.825-10.448-5.958-8.48-9.107-18.461-9.107-28.862 0-10.401 3.149-20.381 9.107-28.862 2.382-3.389 1.565-8.067-1.825-10.448z"></path>
                        <path className="outer-left" d="m15,310.989c0-16.769 5.084-32.869 14.704-46.559 2.381-3.389 1.564-8.067-1.825-10.449-3.389-2.381-8.067-1.564-10.449,1.825-11.403,16.23-17.43,35.312-17.43,55.183 0,19.87 6.027,38.952 17.43,55.181 1.46,2.078 3.783,3.189 6.143,3.189 1.49,0 2.994-0.442 4.305-1.364 3.389-2.381 4.207-7.059 1.825-10.448-9.619-13.691-14.703-29.79-14.703-46.558z"></path>
                        <g className="lower-speaker">
                            <path d="M235,418.338c59.192,0,107.349-48.157,107.349-107.349S294.192,203.64,235,203.64s-107.349,48.157-107.349,107.349   S175.808,418.338,235,418.338z M235,218.64c50.921,0,92.349,41.428,92.349,92.349S285.921,403.338,235,403.338   s-92.349-41.428-92.349-92.349S184.079,218.64,235,218.64z"></path>
                            <path d="m257.5,310.989c0-12.196-10.304-22.5-22.5-22.5s-22.5,10.304-22.5,22.5 10.304,22.5 22.5,22.5 22.5-10.303 22.5-22.5zm-22.5,7.5c-3.995,0-7.5-3.505-7.5-7.5s3.505-7.5 7.5-7.5 7.5,3.505 7.5,7.5-3.505,7.5-7.5,7.5z"></path>
                            <path d="m218.39,386.524c4.048,0.888 8.046-1.669 8.935-5.715s-1.67-8.046-5.715-8.935c-28.369-6.234-48.959-31.84-48.959-60.884 0-34.379 27.97-62.349 62.349-62.349s62.349,27.97 62.349,62.349c0,29.045-20.59,54.65-48.959,60.884-4.045,0.889-6.604,4.889-5.715,8.935 0.77,3.503 3.873,5.892 7.318,5.892 0.533,0 1.075-0.057 1.617-0.176 35.195-7.734 60.739-39.501 60.739-75.535 0-42.65-34.699-77.349-77.349-77.349s-77.349,34.699-77.349,77.349c0,36.033 25.544,67.8 60.739,75.534z"></path>
                        </g>
                        <g className="upper-speaker">
                            <path d="m235,177.31c34.642,0 62.824-28.183 62.824-62.824 0-34.642-28.183-62.824-62.824-62.824-34.641,0-62.824,28.183-62.824,62.824 0,34.641 28.183,62.824 62.824,62.824zm0-110.648c26.37,0 47.824,21.454 47.824,47.824 0,26.37-21.454,47.824-47.824,47.824s-47.824-21.454-47.824-47.824c0-26.37 21.454-47.824 47.824-47.824z"></path>
                            <path d="m235,147.31c18.099,0 32.824-14.725 32.824-32.824s-14.725-32.823-32.824-32.823-32.824,14.725-32.824,32.824 14.725,32.823 32.824,32.823zm0-50.647c9.828,0 17.824,7.996 17.824,17.824s-7.996,17.823-17.824,17.823-17.824-7.996-17.824-17.824 7.996-17.823 17.824-17.823z"></path>
                        </g>

                    </g>
                </svg></div> */}
            </Container>
            
            
        )
    }
}