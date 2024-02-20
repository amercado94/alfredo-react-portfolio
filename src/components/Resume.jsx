import React from "react";
import { Button, Col, Container, Row, Card } from "react-bootstrap";
import "../style/Resume.css"
import PDF from "../resume/AlfredoResume2024new.pdf"


function Resume() {
    return (
        <>
        <div id='contact' className="contact-wrapper">
            <Container>
                <Row>
                    <Col>
                    <h1 className="contact-title">My Resume</h1>
                    <Button className="button" href={PDF} download>
                        Download Resume
                    </Button>
                    </Col>
                    <hr/>
                        <h3>Skills</h3>
                            <ul className="list">
                                <li>Front End Development</li>
                                <li>HTML5</li>
                                <li>CSS3</li>
                                <li>JavaScript ES6+</li>
                                <li>SQL</li>
                                <li>Express.js</li>
                                <li>React</li>
                                <li>Node.js</li>
                                <li>Bilingual (Spanish)</li>
                            </ul>
                            <hr/>
                    <h3>Experience</h3>
                    <Card className="experience bg-transparent">
                    <h5>Logistics Coordinator, Strawberry Hill Baking Company; Merriam, KS — 2023-Present</h5>
                    Responsibilities for this job include:
                    • Keeping track of inventory and making the proper adjustments.
                    • Processing shipments for the shipping department to pack.
                    • Making any and all corrections to orders held up in the systems.
                    • Communicating with delivery drivers to make sure all shipping needs are met.
                    </Card>
                    <Card className="experience bg-transparent">
                    <h5>Shipping & Receiving Associate, Synexis Biodefense; Overland Park, KS — 2020-2023</h5>
                    Responsibilities for this job include:
                    • Processing all shipments scheduled to ship out on the respective day. • Keeping track of inventory in multiple warehouses.
                    • Stocking the production floor with supplies needed in their area.
                    • Receiving returned items and processing them in the system.
                    </Card>
                    <Card className="experience bg-transparent">
                    <h5>Packaging Operator, Elanco Animal Health; Overland Park, KS — 2013-2020</h5>
                    Responsibilities for this job include:
                    • Setting up rooms to start packaging process.
                    • Coding cartridge belts with product name and Lot number.
                    • Filling the cartridge belt with final product.
                    • Putting belts in pouches to be packed in a carton, to a box, and on to a pallet.
                    • Cleaning rooms for product change and approving cleans for product change when not involved in clean.
                    • Doing daily checks in room to make sure product was running well.
                    • Eventually moved to the warehouse where I scheduled shipments, received raw materials, and used SAP to keep and transfer inventory.
                    </Card>
                    <hr/>
                    <h3>Education</h3>
                    <Card className="experience bg-transparent">
                    Certificate, Full Stack Web Development — University of Kansas Lawrence, KS
                    </Card>
                </Row>
            </Container>
        </div>
        </>
    );
}

export default Resume;