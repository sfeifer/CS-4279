import React, {useState} from "react";
import {Col, Row, Table} from "react-bootstrap";
import "./profile.css";
import {Link} from "react-router-dom";


const UserContext = React.createContext({
    name : "",
    email: "",
    homeCourse: "",

    setName: () => {},
    setEmail: () => {},
    setHomeCourse: () => {},
})


function EditButton(){
    return (
        <Link to = "/editprofile">
            <button> Edit Your Profile</button>
        </Link>
     )
}
function ProfilePictureUpload(){
    const [picture, setPicture] = useState(null)

    const handleInput = (event) => {
        setPicture(event.target.files[0])
    }

    const handleClick = () => {
        console.log("Selected picture: ", picture)
    }

    return (
        <div>
            <input type = "file" onChange={handleInput}/>
            <button onClick={handleClick}> Upload a profile picture! </button>
        </div>
    )
}
export default function Profile({ user }) {
    return (
        <Row className="p-5">
            <Col sm={8}>
                <h1>Player Profile</h1>
                <Row>
                    <EditButton/>
                </Row>
                <Row>
                    <Col sm={2}>
                        <h6>Name:</h6>
                    </Col>
                    <Col>
                        <p>Sam Feifer</p>
                    </Col>
                </Row>
                <Row>
                    <Col sm={2}>
                        <h6>Email:</h6>
                    </Col>
                    <Col>
                        <p>samuel.j.feifer@vanderbilt.edu</p>
                    </Col>
                </Row>
                <Row>
                    <Col sm={2}>
                        <h6>Home Course:</h6>
                    </Col>
                    <Col>
                        <p>McCabe Golf Course</p>
                    </Col>
                </Row>
                <Row>
                    <Col sm={2}>
                        <h6>Wins:</h6>
                    </Col>
                    <Col>
                        <p>1</p>
                    </Col>
                </Row>
                <Row>
                    <Col sm={2}>
                        <h6>Losses:</h6>
                    </Col>
                    <Col>
                        <p>0</p>
                    </Col>
                </Row>
                <Row>
                    <Col sm={2}>
                        <h6>Win Rate:</h6>
                    </Col>
                    <Col>
                        <p>100%</p>
                    </Col>
                </Row>
                <br />
                <h4>Sam's games</h4>
                <Table striped bordered hover>
                    <thead>
                    <tr>
                        <th>Date</th>
                        <th>Opponent</th>
                        <th>W/L</th>
                        <th>Final Score</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr>
                        <td>3/12/23</td>
                        <th>Joe Napoli</th>
                        <th>W</th>
                        <th>5-4</th>
                    </tr>
                    </tbody>
                </Table>
            </Col>
            <Col sm={2} />
        </Row>
    );
}

