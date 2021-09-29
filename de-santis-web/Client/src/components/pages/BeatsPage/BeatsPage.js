import React from 'react'
import { Container } from 'react-bootstrap'
import BeatsList from '../Admin/BeatsList/BeatsList'

export default function BeatsPage() {
    return (
        <Container>
            <h1>Beats Page</h1>

            <BeatsList />
        </Container>
    )
}