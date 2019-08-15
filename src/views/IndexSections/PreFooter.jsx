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
// nodejs library that concatenates classes
import classnames from "classnames";
// reactstrap components
import {
  Button,
  Card,
  CardBody,
  Form,
  Input,
  InputGroupAddon,
  InputGroupText,
  InputGroup,
  Container,
  Row,
  Col
} from "reactstrap";

class Prefooter extends React.Component {
  state = {};
  render() {
    return (
      <>
        <div className="section section-pre-footer">
          <div id="pre-footer-areas">
            <Container>
              <div className="title">
                <h3>Pre-Footer Areas</h3>
              </div>
            </Container>
            {/* ********* SIMPLE SOCIAL LINE ********* */}
            <div className="social-line social-line-blue text-center">
              <Container>
                <Row className="justify-content-center">
                  <Col md="12">
                    <h4 className="title">Thank you for your support!</h4>
                  </Col>
                  <Button
                    className="btn-round"
                    color="twitter"
                    href="#pablo"
                    onClick={e => e.preventDefault()}
                  >
                    <i className="fab fa-twitter" />
                    Twitter · 2.5k
                  </Button>
                  <Button
                    className="btn-round"
                    color="facebook"
                    href="#pablo"
                    onClick={e => e.preventDefault()}
                  >
                    <i className="fab fa-facebook-square" />
                    Facebook · 3.2k
                  </Button>
                  <Button
                    className="btn-round"
                    color="google"
                    href="#pablo"
                    onClick={e => e.preventDefault()}
                  >
                    <i className="fab fa-google-plus" />
                    Google · 1.2k
                  </Button>
                  <Button
                    className="btn-round"
                    color="dribbble"
                    href="#pablo"
                    onClick={e => e.preventDefault()}
                  >
                    <i className="fab fa-dribbble" />
                    Dribbble · 1.8k
                  </Button>
                </Row>
              </Container>
            </div>
            {/* ********* SIMPLE SOCIAL LINE ********* */}
            <br />
            <br />
            {/* ********* SIMPLE SOCIAL LINE ********* */}
            <div className="social-line social-line-big-icons">
              <Container>
                <Row>
                  <Col md="2">
                    <Button
                      className="btn-icon btn-simple btn-footer"
                      color="twitter"
                      href="#pablo"
                      onClick={e => e.preventDefault()}
                    >
                      <i className="fab fa-twitter" />
                    </Button>
                  </Col>
                  <Col md="2">
                    <Button
                      className="btn-icon btn-simple btn-footer"
                      color="facebook"
                      href="#pablo"
                      onClick={e => e.preventDefault()}
                    >
                      <i className="fab fa-facebook-square" />
                    </Button>
                  </Col>
                  <Col md="2">
                    <Button
                      className="btn-icon btn-simple btn-footer"
                      color="google"
                      href="#pablo"
                      onClick={e => e.preventDefault()}
                    >
                      <i className="fab fa-google-plus" />
                    </Button>
                  </Col>
                  <Col md="2">
                    <Button
                      className="btn-icon btn-simple btn-footer"
                      color="dribbble"
                      href="#pablo"
                      onClick={e => e.preventDefault()}
                    >
                      <i className="fab fa-dribbble" />
                    </Button>
                  </Col>
                  <Col md="2">
                    <Button
                      className="btn-icon btn-simple btn-footer"
                      color="youtube"
                      href="#pablo"
                      onClick={e => e.preventDefault()}
                    >
                      <i className="fab fa-youtube" />
                    </Button>
                  </Col>
                  <Col md="2">
                    <Button
                      className="btn-icon btn-simple btn-instagram btn-footer"
                      color="default"
                      href="#pablo"
                      onClick={e => e.preventDefault()}
                    >
                      <i className="fab fa-instagram" />
                    </Button>
                  </Col>
                </Row>
              </Container>
            </div>
            {/* ********* SIMPLE SOCIAL LINE ********* */}
            <br />
            <br />
            {/* ********* SIMPLE BLACK SOCIAL LINE ********* */}
            <div className="social-line social-line-big-icons">
              <Container>
                <Row>
                  <Col md="2">
                    <Button
                      className="btn-simple btn-icon btn-footer"
                      color="default"
                      href="#pablo"
                      onClick={e => e.preventDefault()}
                    >
                      <i className="fab fa-twitter" />
                    </Button>
                  </Col>
                  <Col md="2">
                    <Button
                      className="btn-simple btn-icon btn-footer"
                      color="default"
                      href="#pablo"
                      onClick={e => e.preventDefault()}
                    >
                      <i className="fab fa-facebook-square" />
                    </Button>
                  </Col>
                  <Col md="2">
                    <Button
                      className="btn-simple btn-icon btn-footer"
                      color="default"
                      href="#pablo"
                      onClick={e => e.preventDefault()}
                    >
                      <i className="fab fa-google-plus" />
                    </Button>
                  </Col>
                  <Col md="2">
                    <Button
                      className="btn-simple btn-icon btn-footer"
                      color="default"
                      href="#pablo"
                      onClick={e => e.preventDefault()}
                    >
                      <i className="fab fa-dribbble" />
                    </Button>
                  </Col>
                  <Col md="2">
                    <Button
                      className="btn-simple btn-icon btn-footer"
                      color="default"
                      href="#pablo"
                      onClick={e => e.preventDefault()}
                    >
                      <i className="fab fa-youtube" />
                    </Button>
                  </Col>
                  <Col md="2">
                    <Button
                      className="btn-simple btn-icon btn-footer"
                      color="default"
                      href="#pablo"
                      onClick={e => e.preventDefault()}
                    >
                      <i className="fab fa-instagram" />
                    </Button>
                  </Col>
                </Row>
              </Container>
            </div>
            <br />
            <br />
            {/* ********* SIMPLE BLACK SOCIAL LINE ********* */}
            <br />
            <br />
            {/* ********* SIMPLE SUBSCRIBE LINE ********* */}
            <div className="subscribe-line subscribe-line-white">
              <Container>
                <Row>
                  <Col lg="6">
                    <h4 className="title">Get Tips &amp; Tricks every Week!</h4>
                    <p className="description">
                      Join our newsletter and get news in your inbox every week!
                      We hate spam too, so no worries about this.
                    </p>
                  </Col>
                  <Col lg="6">
                    <Card className="card-plain card-form-horizontal">
                      <CardBody>
                        <Form action="" method="">
                          <Row>
                            <Col sm="8">
                              <InputGroup
                                className={classnames({
                                  "input-group-focus": this.state.emailFocus
                                })}
                              >
                                <InputGroupAddon addonType="prepend">
                                  <InputGroupText>
                                    <i className="tim-icons icon-email-85" />
                                  </InputGroupText>
                                </InputGroupAddon>
                                <Input
                                  placeholder="Your Email..."
                                  type="text"
                                  onFocus={e =>
                                    this.setState({ emailFocus: true })
                                  }
                                  onBlur={e =>
                                    this.setState({ emailFocus: false })
                                  }
                                />
                              </InputGroup>
                            </Col>
                            <Col sm="4">
                              <Button
                                block
                                className="btn-round"
                                color="primary"
                                type="button"
                              >
                                Subscribe
                              </Button>
                            </Col>
                          </Row>
                        </Form>
                      </CardBody>
                    </Card>
                  </Col>
                </Row>
              </Container>
            </div>
            {/* ********* SIMPLE SUBSCRIBE LINE ********* */}
            <br />
            <br />
            {/* ********* IMAGE SUBSCRIBE LINE ********* */}
            <div className="subscribe-line">
              <Container>
                <Row>
                  <Col className="ml-auto mr-auto" lg="6" sm="10">
                    <div className="text-center">
                      <h4 className="title">Subscribe to our Newsletter</h4>
                      <p className="description">
                        Join our newsletter and get news in your inbox every
                        week! We hate spam too, so no worries about this.
                      </p>
                    </div>
                    <Card className="card-raised card-form-horizontal">
                      <CardBody>
                        <Form action="" method="">
                          <Row>
                            <Col sm="8">
                              <InputGroup
                                className={classnames({
                                  "input-group-focus": this.state.emailFocus2
                                })}
                              >
                                <InputGroupAddon addonType="prepend">
                                  <InputGroupText>
                                    <i className="tim-icons icon-email-85" />
                                  </InputGroupText>
                                </InputGroupAddon>
                                <Input
                                  placeholder="Your Email..."
                                  type="email"
                                  onFocus={e =>
                                    this.setState({ emailFocus2: true })
                                  }
                                  onBlur={e =>
                                    this.setState({ emailFocus2: false })
                                  }
                                />
                              </InputGroup>
                            </Col>
                            <Col sm="4">
                              <Button
                                block
                                className="btn-round"
                                color="primary"
                                type="button"
                              >
                                Subscribe
                              </Button>
                            </Col>
                          </Row>
                        </Form>
                      </CardBody>
                    </Card>
                  </Col>
                </Row>
              </Container>
            </div>
            {/* ********* IMAGE SUBSCRIBE LINE ********* */}
          </div>
        </div>
      </>
    );
  }
}

export default Prefooter;
