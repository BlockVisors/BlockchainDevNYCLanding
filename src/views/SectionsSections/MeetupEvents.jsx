/*!

=========================================================
* BLK Design System PRO React - v1.0.0
=========================================================

* Product Page: https://www.creative-tim.com/product/blk-design-system-pro-react
* Copyright 2019 Creative Tim (https://www.creative-tim.com)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React from "react";

// reactstrap components
import {
  Button,
  Card,
  CardBody,
  CardFooter,
  CardTitle,
  Container,
  Row,
  Col
} from "reactstrap";

class MeetupEvents extends React.Component {
  render() {
    return (
      <>
        <div className="cd-section" id="blogs">
        
          {/* ********* BLOGS 2 ********* */}
          <div className="section blogs-2" id="blogs-2">
            <Container fluid>
              <h2 className="title">Our Lastest Events and Meetups</h2>
              <br />
              <Row>
                <Col lg="3">
                  <Card
                    className="card-blog card-background"
                    data-animation="zooming"
                  >
                    <div
                      className="full-background"
                      style={{
                        backgroundImage:
                          "url(" + require("assets/img/steven-roe.jpg") + ")"
                      }}
                    />
                    <CardBody>
                      <div className="content-bottom">
                        <h6 className="card-category">Research Byte</h6>
                        <a href="#pablo" onClick={e => e.preventDefault()}>
                          <CardTitle tag="h3">AI at the Edge</CardTitle>
                        </a>
                      </div>
                    </CardBody>
                  </Card>
                </Col>
                <Col lg="3">
                  <Card
                    className="card-blog card-background"
                    data-animation="zooming"
                  >
                    <div
                      className="full-background"
                      style={{
                        backgroundImage:
                          "url(" + require("assets/img/noah-wetering.jpg") + ")"
                      }}
                    />
                    <CardBody>
                      <div className="content-bottom">
                        <h6 className="card-category">Data Virtualization</h6>
                        <a href="#pablo" onClick={e => e.preventDefault()}>
                          <CardTitle tag="h3">
                            A Spectrum of Approaches
                          </CardTitle>
                        </a>
                      </div>
                    </CardBody>
                  </Card>
                </Col>
                <Col lg="3">
                  <Card
                    className="card-blog card-background"
                    data-animation="zooming"
                  >
                    <div
                      className="full-background"
                      style={{
                        backgroundImage:
                          "url(" + require("assets/img/matthew-henry.jpg") + ")"
                      }}
                    />
                    <CardBody>
                      <div className="content-bottom">
                        <h6 className="card-category">New Challenges</h6>
                        <a href="#pablo" onClick={e => e.preventDefault()}>
                          <CardTitle tag="h3">Touch on a trend</CardTitle>
                        </a>
                      </div>
                    </CardBody>
                  </Card>
                </Col>
                <Col lg="3">
                  <Card
                    className="card-blog card-background"
                    data-animation="zooming"
                  >
                    <div
                      className="full-background"
                      style={{
                        backgroundImage:
                          "url(" + require("assets/img/waranont.jpg") + ")"
                      }}
                    />
                    <CardBody>
                      <div className="content-bottom">
                        <h6 className="card-category">Driverless Future</h6>
                        <a href="#pablo" onClick={e => e.preventDefault()}>
                          <CardTitle tag="h3">Self-Driving Cars</CardTitle>
                        </a>
                      </div>
                    </CardBody>
                  </Card>
                </Col>
              </Row>
            </Container>
          </div>
          {/* ********* END BLOGS 2 ********* */}
       
        
        </div>{" "}
      </>
    );
  }
}

export default MeetupEvents;
