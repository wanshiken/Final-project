import React from 'react'
import { Container } from 'react-bootstrap'
import BeatsList from '../Admin/BeatsList/BeatsList'


export default function BeatsPage(props) {


    return (
        <Container>
            <h1 className='de-santis-title'> Beats <img src="https://res.cloudinary.com/juandesantis/image/upload/v1633345254/De%20Santis.com%20image%20designs/logo_dj_de_santis_vector_bajsww.png" width='120px' height='120px' ></img> </h1>

            <BeatsList loggedUser={props.loggedUser} />
        
        </Container>
    )
}