import React from 'react'
import { Button, Card, Col } from 'react-bootstrap'
import { Link } from 'react-router-dom'

export default function BeatItem({ _id, title, url, cover, bpm, price, }) {
    return (
        <Col md={4} className="mb-3">
            <Card>
                <Card.Img variant="top" src={cover} />
                <Card.Body>
                    <Card.Title>{title}</Card.Title>

                    <Link to={`/beats/${_id}`}>
                        <Button variant="secondary">Ver detalles</Button>
                    </Link>
                    
                        <Button variant="danger">Eliminar beat</Button>
                 
                    <Link to={`/beats/${_id}/editar`}>
                        <Button variant="warning">editar beat</Button>
                    </Link>
                        <Button variant="primary">Comprar beat</Button>
                </Card.Body>
            </Card>
        </Col>
    )
}