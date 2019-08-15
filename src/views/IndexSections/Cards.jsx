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
  Badge,
  Button,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  CardTitle,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  UncontrolledDropdown,
  ListGroupItem,
  ListGroup,
  Table,
  Container,
  Row,
  Col
} from "reactstrap";

class Cards extends React.Component {
  render() {
    return (
      <>
        <div className="section section-cards" id="cards">
          {/* ********* BLOG CARDS ********* */}
          <div className="cards">
            <Container>
              <div className="title">
                <h3 className="title">Cards</h3>
                <h3>
                  <small>Blog Cards</small>
                </h3>
              </div>
              <Row>
                <Col lg="4" md="6">
                  <Card data-background-color="red">
                    <CardBody>
                      <h6 className="category-social">
                        <i className="fa fa-fire mr-1" />
                        Trending
                      </h6>
                      <p className="card-description">
                        "The supreme art of war is to subdue the enemy without
                        fighting."
                      </p>
                      <CardFooter>
                        <div className="author">
                          <img
                            alt="..."
                            className="avatar img-raised mr-2"
                            src={require("assets/img/julie.jpg")}
                          />
                          <span>Susan B. Anthony</span>
                        </div>
                        <div className="stats stats-right">
                          <i className="tim-icons icon-heart-2 mr-2" />
                          10.4K ·{" "}
                          <i className="tim-icons icon-single-copy-04 mr-2" />
                          425
                        </div>
                      </CardFooter>
                    </CardBody>
                  </Card>
                  <Card className="card-blog">
                    <div className="card-image">
                      <img
                        alt="..."
                        className="img rounded"
                        src={require("assets/img/steven-roe.jpg")}
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
                  <Card>
                    <CardBody>
                      <h6 className="category text-danger">
                        <i className="tim-icons icon-sound-wave mr-2" />
                        Trending
                      </h6>
                      <CardTitle tag="h5">
                        <a href="#pablo" onClick={e => e.preventDefault()}>
                          Here Be Dragons
                        </a>
                      </CardTitle>
                      <p className="card-description">
                        An immersive production studio focused on virtual
                        reality content, has closed a $10 million Series A round
                        led by Discovery Communications
                      </p>
                      <CardFooter>
                        <div className="author">
                          <img
                            alt="..."
                            className="avatar img-raised"
                            src={require("assets/img/olivia.jpg")}
                          />
                          <span className="ml-1">Lord Alex</span>
                        </div>
                        <div className="stats stats-right">
                          <i className="tim-icons icon-heart-2 mr-2" />
                          342 ·{" "}
                          <i className="tim-icons icon-single-copy-04 mr-2" />
                          45
                        </div>
                      </CardFooter>
                    </CardBody>
                  </Card>
                </Col>
                <Col lg="4" md="6">
                  <Card className="bg-default">
                    <CardBody>
                      <h6 className="category-social">
                        <i className="tim-icons icon-app mr-1" />
                        New Apps
                      </h6>
                      <CardTitle tag="h4">
                        <a href="#pablo" onClick={e => e.preventDefault()}>
                          FiftyThree Files For Paper
                        </a>
                      </CardTitle>
                      <p className="card-description">
                        Yesterday, as Facebook launched its news reader app
                        Paper, design-focused startup FiftyThree called out
                        Facebook publicly for using their brand name...
                      </p>
                      <CardFooter className="text-center">
                        <Button
                          className="btn-round"
                          color="default"
                          href="#pablo"
                          onClick={e => e.preventDefault()}
                        >
                          Read Article
                        </Button>
                      </CardFooter>
                    </CardBody>
                  </Card>
                  <Card className="card-blog">
                    <div className="card-image">
                      <a href="#pablo" onClick={e => e.preventDefault()}>
                        <img
                          alt="..."
                          className="img rounded"
                          src={require("assets/img/denys.jpg")}
                        />
                      </a>
                    </div>
                    <CardBody>
                      <h6 className="category text-primary">Features</h6>
                      <CardTitle tag="h5">
                        That’s One Way To Ditch Your Passenger
                      </CardTitle>
                      <p className="card-description">
                        As near as we can tell, this guy must have thought he
                        was going over backwards and tapped the rear break to
                        bring the nose down...
                      </p>
                      <CardFooter>
                        <div className="author">
                          <img
                            alt="..."
                            className="avatar img-raised"
                            src={require("assets/img/ryan.jpg")}
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
                  <Card data-background-color="blue">
                    <CardBody>
                      <h6 className="category-social">
                        <i className="fab fa-twitter mr-1" />
                        Twitter
                      </h6>
                      <p>
                        "You Don't Have to Sacrifice Joy to Build a Fabulous
                        Business and Life"
                      </p>
                      <CardFooter>
                        <div className="author">
                          <img
                            alt="..."
                            className="avatar img-raised"
                            src={require("assets/img/mike.jpg")}
                          />
                          <span className="ml-1">Tania Andrew</span>
                        </div>
                        <div className="stats stats-right">
                          <i className="tim-icons icon-heart-2 mr-2" />
                          2.4K ·{" "}
                          <i className="tim-icons icon-single-copy-04 mr-2" />
                          45
                        </div>
                      </CardFooter>
                    </CardBody>
                  </Card>
                </Col>
                <Col lg="4" md="8">
                  <Card className="card-blog">
                    <div className="card-image">
                      <a href="#pablo" onClick={e => e.preventDefault()}>
                        <img
                          alt="..."
                          className="img rounded"
                          src={require("assets/img/mark-harrison.jpg")}
                        />
                      </a>
                    </div>
                    <CardBody className="text-center">
                      <h6 className="category text-danger">
                        <i className="tim-icons icon-sound-wave mr-1" />
                        Business
                      </h6>
                      <CardTitle tag="h5">
                        Axel Springer Spends $343M To Buy Business Insider
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
                  <Card className="card-blog">
                    <div className="card-image">
                      <img
                        alt="..."
                        className="img rounded"
                        src={require("assets/img/noah-wetering.jpg")}
                      />
                    </div>
                    <CardBody>
                      <h6 className="category text-info">
                        <i className="tim-icons icon-camera-18 mr-2" />
                        Photo
                      </h6>
                      <CardTitle tag="h5">
                        <a href="#pablo" onClick={e => e.preventDefault()}>
                          Indispensible to nature photography: the hide
                        </a>
                      </CardTitle>
                      <CardFooter>
                        <div className="stats stats-right">
                          <i className="tim-icons icon-heart-2 mr-2" />
                          342 ·{" "}
                          <i className="tim-icons icon-single-copy-04 mr-2" />
                          45
                        </div>
                        <div className="author">
                          <img
                            alt="..."
                            className="avatar img-raised"
                            src={require("assets/img/her.png")}
                          />
                          <span className="ml-1">Denise Coldewey</span>
                        </div>
                      </CardFooter>
                    </CardBody>
                  </Card>
                </Col>
              </Row>
            </Container>
          </div>
          {/* ********* END BLOG CARDS ********* */}
          {/* ********* PROFILE CARDS ********* */}
          <div className="cards">
            <Container>
              <div className="title">
                <h3>
                  <small>Profile Cards</small>
                </h3>
              </div>
              <Row>
                <Col className="ml-auto mr-auto" lg="4" md="6">
                  <Card className="card-profile">
                    <div className="card-image">
                      <h4 className="title">Dylan Wyatt</h4>
                      <UncontrolledDropdown>
                        <DropdownToggle
                          aria-expanded={false}
                          caret
                          className="btn-icon"
                          color="link"
                          data-toggle="dropdown"
                          type="button"
                        >
                          <i className="tim-icons icon-settings-gear-63" />
                        </DropdownToggle>
                        <DropdownMenu right x-placement="bottom-end">
                          <DropdownItem
                            href="#pablo"
                            onClick={e => e.preventDefault()}
                          >
                            Edit Profile
                          </DropdownItem>
                          <DropdownItem
                            href="#pablo"
                            onClick={e => e.preventDefault()}
                          >
                            Settings
                          </DropdownItem>
                          <DropdownItem
                            href="#pablo"
                            onClick={e => e.preventDefault()}
                          >
                            Log out
                          </DropdownItem>
                        </DropdownMenu>
                      </UncontrolledDropdown>
                      <a href="#pablo" onClick={e => e.preventDefault()}>
                        <img
                          alt="..."
                          className="img img-raised rounded"
                          src={require("assets/img/p10.jpg")}
                        />
                      </a>
                    </div>
                    <CardBody>
                      <hr className="line-primary" />
                      <h3 className="job-title">Team Lead</h3>
                      <Table className="tablesorter" responsive>
                        <tbody>
                          <tr>
                            <td className="text-left">
                              <i className="tim-icons icon-atom mr-2" />
                              Skills
                            </td>
                            <td className="text-right">Leadership</td>
                          </tr>
                          <tr>
                            <td className="text-left">
                              <i className="tim-icons icon-user-run mr-2" />
                              Hobbies
                            </td>
                            <td className="text-right">Skiing, Chess</td>
                          </tr>
                          <tr>
                            <td className="text-left">
                              <i className="tim-icons icon-chart-bar-32 mr-2" />
                              Level
                            </td>
                            <td className="text-right">• • • • •</td>
                          </tr>
                        </tbody>
                      </Table>
                    </CardBody>
                  </Card>
                </Col>
                <Col className="ml-auto mr-auto" lg="4" md="6">
                  <Card className="card-profile profile-bg">
                    <CardHeader
                      style={{
                        backgroundImage:
                          "url(" +
                          require("assets/img/sendra-martorell.jpg") +
                          ")"
                      }}
                    >
                      <div className="card-avatar">
                        <a href="#pablo" onClick={e => e.preventDefault()}>
                          <img
                            alt="..."
                            className="img img-raised"
                            src={require("assets/img/ryan.png")}
                          />
                        </a>
                      </div>
                    </CardHeader>
                    <CardBody>
                      <CardTitle tag="h3">Jon Collins</CardTitle>
                      <h6 className="category text-primary">Data Specialist</h6>
                      <p className="card-description">
                        Scaling DevOps: Strategy &amp; Technical Considerations
                        for Successful Enterprise DevOps
                      </p>
                    </CardBody>
                    <CardFooter>
                      <div className="follow float-left">
                        <Button
                          className="btn-simple"
                          color="primary"
                          href="#pablo"
                          onClick={e => e.preventDefault()}
                          size="sm"
                        >
                          <i className="tim-icons icon-check-2 mr-1" />
                          Following
                        </Button>
                      </div>
                      <div className="d-inline float-right">
                        <Button
                          className="btn-icon btn-round"
                          color="dribbble"
                          href="#pablo"
                          onClick={e => e.preventDefault()}
                        >
                          <i className="fab fa-dribbble" />
                        </Button>
                        <Button
                          className="btn-icon btn-round ml-1"
                          color="linkedin"
                          href="#pablo"
                          onClick={e => e.preventDefault()}
                        >
                          <i className="fab fa-linkedin" />
                        </Button>
                        <Button
                          className="btn-icon btn-round ml-1"
                          color="behance"
                          href="#pablo"
                          onClick={e => e.preventDefault()}
                        >
                          <i className="fab fa-behance" />
                        </Button>
                      </div>
                    </CardFooter>
                  </Card>
                </Col>
                <Col className="ml-auto mr-auto" lg="4" md="6">
                  <Card className="card-profile" data-background="full">
                    <a href="#pablo" onClick={e => e.preventDefault()}>
                      <img
                        alt="..."
                        className="img img-raised rounded"
                        src={require("assets/img/kareya-saleh.jpg")}
                      />
                    </a>
                    <div className="card-image">
                      <h4 className="title">Jane Doe</h4>
                      <UncontrolledDropdown>
                        <DropdownToggle
                          aria-expanded={false}
                          caret
                          className="btn-icon"
                          color="link"
                          data-toggle="dropdown"
                          type="button"
                        >
                          <i className="tim-icons icon-settings-gear-63" />
                        </DropdownToggle>
                        <DropdownMenu right x-placement="bottom-end">
                          <DropdownItem
                            href="#pablo"
                            onClick={e => e.preventDefault()}
                          >
                            Edit Profile
                          </DropdownItem>
                          <DropdownItem
                            href="#pablo"
                            onClick={e => e.preventDefault()}
                          >
                            Settings
                          </DropdownItem>
                          <DropdownItem
                            href="#pablo"
                            onClick={e => e.preventDefault()}
                          >
                            Log out
                          </DropdownItem>
                        </DropdownMenu>
                      </UncontrolledDropdown>
                    </div>
                    <CardBody>
                      <hr className="line-primary" />
                      <h3 className="job-title">Scrum Master</h3>
                      <Table className="tablesorter" responsive>
                        <tbody>
                          <tr>
                            <td className="text-left">
                              <i className="tim-icons icon-atom mr-2" />
                              Skills
                            </td>
                            <td className="text-right">Organization</td>
                          </tr>
                          <tr>
                            <td className="text-left">
                              <i className="tim-icons icon-user-run mr-2" />
                              Hobbies
                            </td>
                            <td className="text-right">Singing Jogging</td>
                          </tr>
                          <tr>
                            <td className="text-left">
                              <i className="tim-icons icon-chart-bar-32 mr-2" />
                              Level
                            </td>
                            <td className="text-right">• • • • •</td>
                          </tr>
                        </tbody>
                      </Table>
                    </CardBody>
                  </Card>
                </Col>
              </Row>
            </Container>
          </div>
          {/* ********* END PROFILE CARDS ********* */}
          {/* ********* FULL Background CARDS ********* */}
          <div className="cards">
            <Container>
              <div className="title">
                <h3>
                  <small>Full Background Cards</small>
                </h3>
              </div>
              <Row>
                <Col md="6">
                  <Card
                    className="card-blog card-background"
                    data-animation={true}
                  >
                    <div
                      className="full-background"
                      style={{
                        backgroundImage:
                          "url(" +
                          require("assets/img/marc-olivier-jodoin.jpg") +
                          ")"
                      }}
                    />
                    <CardBody>
                      <div className="content-bottom">
                        <h6 className="card-category">Sales Leads</h6>
                        <a href="#pablo" onClick={e => e.preventDefault()}>
                          <CardTitle tag="h3">
                            Configure Blockchain Technology
                          </CardTitle>
                        </a>
                      </div>
                    </CardBody>
                  </Card>
                </Col>
                <Col lg="3" md="6">
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
                <Col lg="3" md="6">
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
          {/* ********* END PRODUCT CARDS ********* */}
          {/* ********* PRICING CARDS ********* */}
          <div className="cards">
            <Container>
              <div className="title">
                <h3>
                  <small>Pricing Cards</small>
                </h3>
              </div>
              <Row className="pricing-2">
                <Col lg="3" md="6">
                  <Card className="card-pricing">
                    <CardHeader
                      className="card-background"
                      style={{
                        backgroundImage:
                          "url(" + require("assets/img/waranont.jpg") + ")"
                      }}
                    >
                      <Badge color="primary">Enterprise</Badge>
                      <CardTitle tag="h1">
                        <small>$</small>
                        599
                      </CardTitle>
                      <h5>per year</h5>
                    </CardHeader>
                    <CardBody>
                      <ul>
                        <li>
                          <i className="tim-icons icon-check-2 mr-1" />
                          10.000 MB
                        </li>
                        <li>
                          <i className="tim-icons icon-email-85 mr-1" />
                          Unlimited emails
                        </li>
                        <li>
                          <i className="tim-icons icon-chart-bar-32 mr-1" />
                          50 Databases
                        </li>
                        <li>
                          <i className="tim-icons icon-alert-circle-exc mr-1" />
                          Premium Support
                        </li>
                      </ul>
                      <Button
                        className="mt-4"
                        color="primary"
                        href="#pablo"
                        onClick={e => e.preventDefault()}
                      >
                        Get started
                      </Button>
                    </CardBody>
                  </Card>
                </Col>
                <Col lg="3" md="6">
                  <Card className="card-pricing">
                    <CardBody>
                      <h6 className="category">Alpha Pack</h6>
                      <div className="icon icon-primary">
                        <i className="tim-icons icon-heart-2" />
                      </div>
                      <CardTitle tag="h3">$67</CardTitle>
                      <p className="card-description">
                        This is good if your company size is between 100 and 299
                        employees.
                      </p>
                      <Button
                        className="btn-round"
                        color="neutral"
                        href="#pablo"
                        onClick={e => e.preventDefault()}
                      >
                        Add to Cart
                      </Button>
                    </CardBody>
                  </Card>
                </Col>
                <Col lg="3" md="6">
                  <Card className="card-pricing">
                    <CardHeader className="bg-warning">
                      <Badge className="badge-default">pro</Badge>
                      <CardTitle tag="h1">
                        <small>$</small>
                        68
                      </CardTitle>
                      <h5>per month</h5>
                    </CardHeader>
                    <CardBody>
                      <ul>
                        <li>
                          <i className="tim-icons icon-check-2 mr-1" />5 GB
                        </li>
                        <li>
                          <i className="tim-icons icon-email-85 mr-1" />
                          2k emails
                        </li>
                        <li>
                          <i className="tim-icons icon-chart-bar-32 mr-1" />5
                          Databases
                        </li>
                        <li>
                          <i className="tim-icons icon-alert-circle-exc mr-1" />
                          Premium Support
                        </li>
                      </ul>
                      <Button
                        className="mt-4"
                        color="warning"
                        href="#pablo"
                        onClick={e => e.preventDefault()}
                      >
                        Get started
                      </Button>
                    </CardBody>
                  </Card>
                </Col>
                <Col lg="3" md="6">
                  <Card className="card-pricing card-plain card-primary">
                    <CardBody>
                      <h2 className="title">Free</h2>
                      <h5 className="description">
                        $0.00 <small>/Monthly</small>
                      </h5>
                      <ul>
                        <li>1 GB of space</li>
                        <li>Limited Support</li>
                        <li>Support at $25/hour</li>
                        <li>Limited cloud access</li>
                      </ul>
                      <Button
                        className="btn-round"
                        color="neutral"
                        href="#pablo"
                        onClick={e => e.preventDefault()}
                      >
                        Choose plan
                      </Button>
                    </CardBody>
                  </Card>
                </Col>
              </Row>
              <div className="title">
                <h3>
                  <small>Coin Cards</small>
                </h3>
              </div>
              <Row className="card-coins">
                <Col md="4">
                  <Card className="card-coin card-plain">
                    <CardHeader>
                      <img
                        alt="..."
                        className="img-center img-fluid"
                        src={require("assets/img/bitcoin.png")}
                      />
                    </CardHeader>
                    <CardBody>
                      <Row>
                        <Col className="text-center" md="12">
                          <h4 className="text-uppercase">Light Coin</h4>
                          <span>Plan</span>
                          <hr className="line-primary" />
                        </Col>
                      </Row>
                      <Row>
                        <ListGroup>
                          <ListGroupItem>50 messages</ListGroupItem>
                          <ListGroupItem>100 emails</ListGroupItem>
                          <ListGroupItem>24/7 Support</ListGroupItem>
                        </ListGroup>
                      </Row>
                    </CardBody>
                    <CardFooter className="text-center">
                      <Button className="btn-simple" color="primary">
                        Get plan
                      </Button>
                    </CardFooter>
                  </Card>
                </Col>
                <Col md="4">
                  <Card className="card-coin card-plain">
                    <CardHeader>
                      <img
                        alt="..."
                        className="img-center img-fluid"
                        src={require("assets/img/etherum.png")}
                      />
                    </CardHeader>
                    <CardBody>
                      <Row>
                        <Col className="text-center" md="12">
                          <h4 className="text-uppercase">Dark Coin</h4>
                          <span>Plan</span>
                          <hr className="line-success" />
                        </Col>
                      </Row>
                      <Row>
                        <ListGroup>
                          <ListGroupItem>150 messages</ListGroupItem>
                          <ListGroupItem>1000 emails</ListGroupItem>
                          <ListGroupItem>24/7 Support</ListGroupItem>
                        </ListGroup>
                      </Row>
                    </CardBody>
                    <CardFooter className="text-center">
                      <Button className="btn-simple" color="success">
                        Get plan
                      </Button>
                    </CardFooter>
                  </Card>
                </Col>
                <Col md="4">
                  <Card className="card-coin card-plain">
                    <CardHeader>
                      <img
                        alt="..."
                        className="img-center img-fluid"
                        src={require("assets/img/ripp.png")}
                      />
                    </CardHeader>
                    <CardBody>
                      <Row>
                        <Col className="text-center" md="12">
                          <h4 className="text-uppercase">Bright Coin</h4>
                          <span>Plan</span>
                          <hr className="line-info" />
                        </Col>
                      </Row>
                      <Row>
                        <ListGroup>
                          <ListGroupItem>350 messages</ListGroupItem>
                          <ListGroupItem>10K emails</ListGroupItem>
                          <ListGroupItem>24/7 Support</ListGroupItem>
                        </ListGroup>
                      </Row>
                    </CardBody>
                    <CardFooter className="text-center">
                      <Button className="btn-simple" color="info">
                        Get plan
                      </Button>
                    </CardFooter>
                  </Card>
                </Col>
              </Row>
            </Container>
          </div>
          {/* ********* END PRICING CARDS ********* */}
        </div>
      </>
    );
  }
}

export default Cards;
