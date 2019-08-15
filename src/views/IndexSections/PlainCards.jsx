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

class PlainCards extends React.Component {
  render() {
    return (
      <>
        <div className="section section-plain-cards">
          <Container>
            <div className="title">
              <h3>Plain Cards</h3>
              <h3>
                <small>Blog Cards</small>
              </h3>
            </div>
            {/* ********* PLAIN BLOG CARDS ********* */}
            <Row>
              <Col lg="4" md="6">
                <Card className="card-blog card-plain">
                  <div className="card-image">
                    <img
                      alt="..."
                      className="img rounded img-raised"
                      src={require("assets/img/pawel-nolbert.jpg")}
                    />
                  </div>
                  <CardBody>
                    <h6 className="category text-warning">
                      <i className="tim-icons icon-wallet-43 mr-1" />
                      Focus
                    </h6>
                    <CardTitle tag="h5">
                      <a href="#pablo" onClick={e => e.preventDefault()}>
                        Stay Focused: Train Your Brain
                      </a>
                    </CardTitle>
                    <p className="card-description">
                      Our brains are finely attuned to distraction, so today's
                      digital environment makes it especially hard to focus...
                    </p>
                  </CardBody>
                </Card>
              </Col>
              <Col lg="4" md="6">
                <Card className="card-blog card-plain">
                  <div className="card-image">
                    <a href="#pablo" onClick={e => e.preventDefault()}>
                      <img
                        alt="..."
                        className="img rounded img-raised"
                        src={require("assets/img/max.jpg")}
                      />
                    </a>
                  </div>
                  <CardBody>
                    <h6 className="category text-primary">Features</h6>
                    <CardTitle tag="h5">
                      <a href="#pablo" onClick={e => e.preventDefault()}>
                        That’s One Way To Ditch Your Passenger
                      </a>
                    </CardTitle>
                    <p className="card-description">
                      As near as we can tell, this guy must have thought he was
                      going over backwards and tapped the rear break to bring
                      the nose down...
                    </p>
                    <CardFooter>
                      <div className="author">
                        <img
                          alt="..."
                          className="avatar img-raised"
                          src={require("assets/img/lora.jpg")}
                        />
                        <span className="ml-1">Mike John</span>
                      </div>
                      <div className="stats stats-right">
                        <i className="tim-icons icon-watch-time mr-2" />5 min
                        read
                      </div>
                    </CardFooter>
                  </CardBody>
                </Card>
              </Col>
              <Col lg="4" md="6">
                <Card className="card-blog card-plain">
                  <div className="card-image">
                    <a href="#pablo" onClick={e => e.preventDefault()}>
                      <img
                        alt="..."
                        className="img img-raised rounded"
                        src={require("assets/img/serge-kutuzov.jpg")}
                      />
                    </a>
                  </div>
                  <CardBody className="text-center">
                    <h6 className="category text-danger">
                      <i className="tim-icons icon-sound-wave mr-1" />
                      Business
                    </h6>
                    <CardTitle tag="h5">
                      <a href="#pablo" onClick={e => e.preventDefault()}>
                        Axel Springer Spends $343M To Buy Business Insider
                      </a>
                    </CardTitle>
                    <p className="card-description">
                      German media giant Axel Springer has announced it’s
                      acquiring online business news publication Business
                      Inside...
                    </p>
                    <CardFooter>
                      <Button
                        color="primary"
                        href="#pablo"
                        onClick={e => e.preventDefault()}
                      >
                        Read Article
                      </Button>
                    </CardFooter>
                  </CardBody>
                </Card>
              </Col>
            </Row>
          </Container>
          {/* ********* END PLAIN BLOG CARDS ********* */}
          {/* ********* PLAIN PROFILE CARDS ********* */}
          <Container>
            <div className="title">
              <h3>
                <small>Profile Cards</small>
              </h3>
            </div>
            <Row>
              <Col lg="3" md="6">
                <Card className="card-profile card-plain">
                  <div className="card-image">
                    <img
                      alt="..."
                      className="img rounded"
                      src={require("assets/img/p10.jpg")}
                    />
                  </div>
                  <CardBody>
                    <a href="pablo">
                      <CardTitle tag="h4">Jackson Andrew</CardTitle>
                    </a>
                    <h6 className="card-category text-info">Web Designer</h6>
                    <CardFooter>
                      <Button
                        className="btn-simple"
                        color="twitter"
                        href="#pablo"
                        onClick={e => e.preventDefault()}
                        size="sm"
                      >
                        <i className="fab fa-twitter" />
                      </Button>
                      <Button
                        className="btn-simple ml-1"
                        color="dribbble"
                        href="#pablo"
                        onClick={e => e.preventDefault()}
                        size="sm"
                      >
                        <i className="fab fa-dribbble" />
                      </Button>
                      <Button
                        className="btn-simple btn-instagram ml-1"
                        color="default"
                        href="#pablo"
                        onClick={e => e.preventDefault()}
                        size="sm"
                      >
                        <i className="fab fa-instagram" />
                      </Button>
                    </CardFooter>
                  </CardBody>
                </Card>
              </Col>
              <Col lg="3" md="6">
                <Card className="card-profile card-plain">
                  <div className="card-avatar">
                    <a href="#pablo" onClick={e => e.preventDefault()}>
                      <img
                        alt="..."
                        className="img img-raised"
                        src={require("assets/img/mike.jpg")}
                      />
                    </a>
                  </div>
                  <CardBody>
                    <CardTitle tag="h4">Alexa Mike</CardTitle>
                    <h6 className="category text-gray">Designer</h6>
                    <p className="card-description">
                      One of the co-founders. Alec drives the technical strategy
                      of the platform, customer support and brand.
                    </p>
                    <CardFooter>
                      <Button
                        className="btn-icon btn-round"
                        color="twitter"
                        href="#pablo"
                        onClick={e => e.preventDefault()}
                      >
                        <i className="fab fa-twitter" />
                      </Button>
                      <Button
                        className="btn-icon btn-round ml-1"
                        color="facebook"
                        href="#pablo"
                        onClick={e => e.preventDefault()}
                      >
                        <i className="fab fa-facebook-square" />
                      </Button>
                      <Button
                        className="btn-icon btn-round ml-1"
                        color="google"
                        href="#pablo"
                        onClick={e => e.preventDefault()}
                      >
                        <i className="fab fa-google" />
                      </Button>
                    </CardFooter>
                  </CardBody>
                </Card>
              </Col>
              <Col lg="3" md="6">
                <Card className="card-profile card-plain">
                  <div className="card-avatar">
                    <a href="#pablo" onClick={e => e.preventDefault()}>
                      <img
                        alt="..."
                        className="img img-raised"
                        src={require("assets/img/james.jpg")}
                      />
                    </a>
                  </div>
                  <CardBody>
                    <h6 className="card-category">CEO / Co-Founder</h6>
                    <CardTitle tag="h4">James Thompson</CardTitle>
                    <p className="card-description">
                      Don't be scared of the truth because we need to restart
                      the human foundation in truth.
                    </p>
                    <Button
                      className="btn-round"
                      color="primary"
                      href="#pablo"
                      onClick={e => e.preventDefault()}
                    >
                      Follow
                    </Button>
                  </CardBody>
                </Card>
              </Col>
              <Col lg="3" md="6">
                <Card className="card-profile card-plain">
                  <CardBody>
                    <div className="card-avatar">
                      <a href="#pablo" onClick={e => e.preventDefault()}>
                        <img
                          alt="..."
                          className="img img-raised"
                          src={require("assets/img/mike.jpeg")}
                        />
                      </a>
                    </div>
                    <h6 className="category text-gray">Growth Hacker</h6>
                    <CardTitle tag="h4">Oliviu Thompson</CardTitle>
                    <p className="card-description">"Work hard play harder."</p>
                    <CardFooter>
                      <Button
                        className="btn-icon btn-simple btn-round"
                        color="primary"
                        href="#pablo"
                        onClick={e => e.preventDefault()}
                      >
                        <i className="fab fa-twitter" />
                      </Button>
                      <Button
                        className="btn-icon btn-simple btn-round ml-1"
                        color="primary"
                        href="#pablo"
                        onClick={e => e.preventDefault()}
                      >
                        <i className="fab fa-facebook-square" />
                      </Button>
                      <Button
                        className="btn-icon btn-simple btn-round ml-1"
                        color="primary"
                        href="#pablo"
                        onClick={e => e.preventDefault()}
                      >
                        <i className="fab fa-google" />
                      </Button>
                    </CardFooter>
                  </CardBody>
                </Card>
              </Col>
            </Row>
          </Container>
          {/* ********* END PROFILE CARDS ********* */}
        </div>
      </>
    );
  }
}

export default PlainCards;
