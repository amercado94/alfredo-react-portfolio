import React from "react";
import { Container, Row, Col, Card, Image } from "react-bootstrap";
import headshot from "../images/alfredom.jpg"
import 'bootstrap/dist/css/bootstrap.min.css'
import "../style/About.css";

function About() {
    return (
        <>
        <Image src={headshot} className="headshot"/>

        <h2>About Me</h2>
        <Container>
            <Card className="bg-dark">
    <div id="about-me" className='about-me text-white'>
    My name is Alfredo Mercado, and I am a currently studying to become a Web Developer. I was born in Austin, Texas but I consider Kansas City my home. This is where I learned to drive, got my first job, and met my wife. My goals in life have always been to move forward so I thought what better career path than a field that is always evolving and improving.
    </div>
    </Card>
    </Container>
        </>
    )
}

export default About;