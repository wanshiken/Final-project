import React from 'react'
import { Link } from 'react-router-dom'
import { Button, Container } from 'react-bootstrap'

export default function HomePage() {
    return (
        <Container style={{ minHeight: "100vh" }}>
            <h1>De Santis ☻</h1>
            

            <Link to="/beats">
                <Button>Beats</Button>
            </Link>
        </Container>
    )
}