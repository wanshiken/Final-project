import { Button } from "react-bootstrap"
import { Container } from "react-bootstrap"

const Profile = ({ loggedUser }) => {

    return (
        <Container>
            <h1>¡Bienvenid@, {loggedUser.username}!</h1>
            <div>
                <h2> 
                    <Button href='/admin/beats' variant="outline-dark" type="submit">Create New Beat</Button>
                </h2>
            </div>
        </Container>
    )
}

export default Profile