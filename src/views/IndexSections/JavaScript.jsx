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
// react plugin used to create datetimepicker
import ReactDatetime from "react-datetime";

// reactstrap components
import {
  Button,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  CardImg,
  CardTitle,
  Collapse,
  FormGroup,
  Form,
  Input,
  InputGroupAddon,
  InputGroupText,
  InputGroup,
  Modal,
  ModalBody,
  Container,
  Row,
  Col,
  UncontrolledTooltip,
  UncontrolledPopover,
  PopoverBody,
  PopoverHeader,
  UncontrolledCarousel
} from "reactstrap";

// core components
import ImageUpload from "components/CustomUpload/ImageUpload.jsx";

const carouselItems = [
  {
    src: require("assets/img/denys.jpg"),
    altText: "Slide 1",
    caption: ""
  },
  {
    src: require("assets/img/fabien-bazanegue.jpg"),
    altText: "Slide 2",
    caption: ""
  },
  {
    src: require("assets/img/mark-finn.jpg"),
    altText: "Slide 3",
    caption: ""
  }
];

class JavaScript extends React.Component {
  state = {
    visible: true,
    modalMini: false,
    modalClassic: false,
    modalNotice: false,
    modalLogin: false,
    openedCollapses: ["collapseOne"]
  };
  toggleModalClassic = () => {
    this.setState({
      modalClassic: !this.state.modalClassic
    });
  };
  toggleModalNotice = () => {
    this.setState({
      modalNotice: !this.state.modalNotice
    });
  };
  toggleModalMini = () => {
    this.setState({
      modalMini: !this.state.modalMini
    });
  };
  toggleModalLogin = () => {
    this.setState({
      modalLogin: !this.state.modalLogin
    });
  };
  // with this function we create an array with the opened collapses
  // it is like a toggle function for all collapses from this page
  collapsesToggle = collapse => {
    let openedCollapses = this.state.openedCollapses;
    if (openedCollapses.includes(collapse)) {
      this.setState({
        openedCollapses: this.state.openedCollapses.filter(
          prop => prop !== collapse
        )
      });
    } else {
      this.setState({
        openedCollapses: [...this.state.openedCollapses, collapse]
      });
    }
  };
  render() {
    return (
      <>
        <div className="section section-javascript" id="javascriptComponents">
          <img
            alt="..."
            className="path"
            src={require("assets/img/path5.png")}
          />
          <img
            alt="..."
            className="path path1"
            src={require("assets/img/path5.png")}
          />
          <Container>
            <h3 className="title mb-5">Javascript components</h3>
            <h4 className="mb-5">Modal</h4>
            <Row id="modals">
              <Col md="12">
                <Button
                  className="mr-3"
                  color="primary"
                  onClick={this.toggleModalClassic}
                >
                  <i className="tim-icons icon-single-copy-04 mr-1" />
                  Classic
                </Button>
                <Button
                  className="mr-3"
                  color="primary"
                  onClick={this.toggleModalMini}
                >
                  <i className="tim-icons icon-button-power mr-1" />
                  Launch Modal Mini
                </Button>
                <Button
                  className="mr-3"
                  color="primary"
                  onClick={this.toggleModalNotice}
                >
                  <i className="tim-icons icon-trophy mr-1" />
                  Notice
                </Button>
                <Button color="primary" onClick={this.toggleModalLogin}>
                  <i className="tim-icons icon-single-02 mr-1" />
                  Login Modal
                </Button>
              </Col>
              {/* Classic Modal */}
              <Modal
                isOpen={this.state.modalClassic}
                toggle={this.toggleModalClassic}
              >
                <div className="modal-header justify-content-center">
                  <button
                    aria-hidden={true}
                    className="close"
                    data-dismiss="modal"
                    type="button"
                    onClick={this.toggleModalClassic}
                  >
                    <i className="tim-icons icon-simple-remove" />
                  </button>
                  <h6 className="title title-up">Modal title</h6>
                </div>
                <ModalBody className="text-center">
                  <p>
                    Far far away, behind the word mountains, far from the
                    countries Vokalia and Consonantia, there live the blind
                    texts. Separated they live in Bookmarksgrove right at the
                    coast of the Semantics, a large language ocean. A small
                    river named Duden flows by their place and supplies it with
                    the necessary regelialia. It is a paradisematic country, in
                    which roasted parts of sentences fly into your mouth.
                  </p>
                </ModalBody>
                <div className="modal-footer">
                  <Button
                    color="default"
                    type="button"
                    onClick={this.toggleModalClassic}
                  >
                    Nice Button
                  </Button>
                  <Button
                    color="danger"
                    data-dismiss="modal"
                    type="button"
                    onClick={this.toggleModalClassic}
                  >
                    Close
                  </Button>
                </div>
              </Modal>
              {/* End Classic Modal */}
              {/* Notice Modal */}
              <Modal
                isOpen={this.state.modalNotice}
                toggle={this.toggleModalNotice}
              >
                <div className="modal-header">
                  <button
                    aria-hidden={true}
                    className="close"
                    data-dismiss="modal"
                    type="button"
                    onClick={this.toggleModalNotice}
                  >
                    <i className="tim-icons icon-simple-remove" />
                  </button>
                  <h5 className="modal-title" id="myModalLabel">
                    How Do You Become an Affiliate?
                  </h5>
                </div>
                <ModalBody>
                  <div className="instruction">
                    <Row>
                      <Col md="8">
                        <strong>1. Register</strong>
                        <p className="description">
                          The first step is to create an account at{" "}
                          <a
                            href="https://www.creative-tim.com/?ref=blkdspr-index"
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            Creative Tim
                          </a>
                          . You can choose a social network or go for the
                          classic version, whatever works best for you.
                        </p>
                      </Col>
                      <Col md="4">
                        <div>
                          <img
                            alt="..."
                            className="rounded img-raised"
                            src={require("assets/img/pricing1.jpg")}
                          />
                        </div>
                      </Col>
                    </Row>
                  </div>
                  <div className="instruction">
                    <Row>
                      <Col md="8">
                        <strong>2. Apply</strong>
                        <p className="description">
                          The first step is to create an account at{" "}
                          <a
                            href="https://www.creative-tim.com/?ref=blkdspr-index"
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            Creative Tim
                          </a>
                          . You can choose a social network or go for the
                          classic version, whatever works best for you.
                        </p>
                      </Col>
                      <Col md="4">
                        <div>
                          <img
                            alt="..."
                            className="rounded img-raised"
                            src={require("assets/img/project9.jpg")}
                          />
                        </div>
                      </Col>
                    </Row>
                  </div>
                  <p>
                    If you have more questions, don't hesitate to contact us or
                    send us a tweet {`@creativetim. We're `}
                    here to help!
                  </p>
                </ModalBody>
                <div className="modal-footer justify-content-center">
                  <Button
                    className="btn-round"
                    color="info"
                    data-dismiss="modal"
                    type="button"
                    onClick={this.toggleModalNotice}
                  >
                    Sounds good!
                  </Button>
                </div>
              </Modal>
              {/* End Notice Modal */}
              {/* Small Modal */}
              <Modal
                modalClassName="modal-mini modal-primary"
                isOpen={this.state.modalMini}
                toggle={this.toggleModalMini}
              >
                <div className="modal-header justify-content-center">
                  <button
                    aria-hidden={true}
                    className="close"
                    data-dismiss="modal"
                    type="button"
                    onClick={this.toggleModalMini}
                  >
                    <i className="tim-icons icon-simple-remove text-white" />
                  </button>
                  <div className="modal-profile">
                    <i className="tim-icons icon-single-02" />
                  </div>
                </div>
                <ModalBody className="text-center">
                  <p>Always have an access to your profile</p>
                </ModalBody>
                <div className="modal-footer">
                  <Button
                    className="btn-neutral"
                    color="link"
                    type="button"
                    onClick={this.toggleModalMini}
                  >
                    Back
                  </Button>
                  <Button
                    className="btn-neutral"
                    color="link"
                    data-dismiss="modal"
                    type="button"
                    onClick={this.toggleModalMini}
                  >
                    Close
                  </Button>
                </div>
              </Modal>
              {/* End Small Modal */}
              {/* Login Modal */}
              <Modal
                isOpen={this.state.modalLogin}
                toggle={this.toggleModalLogin}
                modalClassName="modal-login"
              >
                <Card className="card-login">
                  <Form action="" className="form" method="">
                    <CardHeader>
                      <CardImg
                        alt="..."
                        src={require("assets/img/square-purple-1.png")}
                      />
                      <CardTitle tag="h4">Login</CardTitle>
                      <button
                        aria-label="Close"
                        className="close"
                        data-dismiss="modal"
                        type="button"
                        onClick={this.toggleModalLogin}
                      >
                        <i className="tim-icons icon-simple-remove" />
                      </button>
                    </CardHeader>
                    <CardBody>
                      <InputGroup
                        className={classnames("input-lg", {
                          "input-group-focus": this.state.firstNameFocus
                        })}
                      >
                        <InputGroupAddon addonType="prepend">
                          <InputGroupText>
                            <i className="tim-icons icon-single-02" />
                          </InputGroupText>
                        </InputGroupAddon>
                        <Input
                          placeholder="First Name..."
                          type="text"
                          onFocus={e => this.setState({ firstNameFocus: true })}
                          onBlur={e => this.setState({ firstNameFocus: false })}
                        />
                      </InputGroup>
                      <InputGroup
                        className={classnames("input-lg", {
                          "input-group-focus": this.state.lastNameFocus
                        })}
                      >
                        <InputGroupAddon addonType="prepend">
                          <InputGroupText>
                            <i className="tim-icons icon-caps-small" />
                          </InputGroupText>
                        </InputGroupAddon>
                        <Input
                          placeholder="Last Name..."
                          type="text"
                          onFocus={e => this.setState({ lastNameFocus: true })}
                          onBlur={e => this.setState({ lastNameFocus: false })}
                        />
                      </InputGroup>
                    </CardBody>
                    <CardFooter className="text-center">
                      <Button
                        block
                        className="btn-round"
                        color="primary"
                        href="#pablo"
                        onClick={e => e.preventDefault()}
                        size="lg"
                      >
                        Get Started
                      </Button>
                    </CardFooter>
                    <div className="pull-left ml-3 mb-3">
                      <h6>
                        <a
                          className="link footer-link"
                          href="#pablo"
                          onClick={e => e.preventDefault()}
                        >
                          Create Account
                        </a>
                      </h6>
                    </div>
                    <div className="pull-right mr-3 mb-3">
                      <h6>
                        <a
                          className="link footer-link"
                          href="#pablo"
                          onClick={e => e.preventDefault()}
                        >
                          Need Help?
                        </a>
                      </h6>
                    </div>
                  </Form>
                </Card>
              </Modal>
              {/* End Modal */}
            </Row>
            <br />
            <br />
            <Row>
              <Col md="6">
                <h4>Datetimepicker</h4>
                <Row>
                  <Col md="6">
                    <div className="datepicker-container">
                      <FormGroup>
                        <ReactDatetime
                          inputProps={{
                            className: "form-control",
                            placeholder: "Datetime Picker Here"
                          }}
                        />
                      </FormGroup>
                      <FormGroup>
                        <ReactDatetime
                          dateFormat={false}
                          inputProps={{
                            className: "form-control",
                            placeholder: "Time Picker Here"
                          }}
                        />
                      </FormGroup>
                      <FormGroup>
                        <ReactDatetime
                          inputProps={{
                            className: "form-control",
                            placeholder: "Date Picker Here"
                          }}
                          timeFormat={false}
                        />
                      </FormGroup>
                    </div>
                  </Col>
                </Row>
                {/* collapse */}
                <div id="collapse">
                  <div className="title">
                    <h4>Collapse</h4>
                  </div>
                  <Row>
                    <Col md="12">
                      <div
                        aria-multiselectable={true}
                        className="card-collapse"
                        id="accordion"
                        role="tablist"
                      >
                        <Card className="card-plain">
                          <CardHeader id="headingOne" role="tab">
                            <a
                              className="d-flex"
                              href="#pablo"
                              data-toggle="collapse"
                              aria-expanded={this.state.openedCollapses.includes(
                                "collapseOne"
                              )}
                              onClick={e => {
                                e.preventDefault();
                                this.collapsesToggle("collapseOne");
                              }}
                            >
                              Collapsible Group Item #1{" "}
                              <i className="tim-icons icon-minimal-down ml-auto" />
                            </a>
                          </CardHeader>
                          <Collapse
                            role="tabpanel"
                            isOpen={this.state.openedCollapses.includes(
                              "collapseOne"
                            )}
                          >
                            <CardBody>
                              Anim pariatur cliche reprehenderit, enim eiusmod
                              high life accusamus terry richardson ad squid. 3
                              wolf moon officia aute, non cupidatat skateboard
                              dolor brunch. Food truck quinoa nesciunt laborum
                              eiusmod. Brunch 3 wolf moon tempor, sunt aliqua
                              put a bird on it squid single-origin coffee nulla
                              assumenda shoreditch et. Nihil anim keffiyeh
                              helvetica, craft beer labore wes anderson cred
                              nesciunt sapiente ea proident. Ad vegan excepteur
                              butcher vice lomo. Leggings occaecat craft beer
                              farm-to-table, raw denim aesthetic synth nesciunt
                              you probably haven't heard of them accusamus
                              labore sustainable VHS.
                            </CardBody>
                          </Collapse>
                        </Card>
                        <Card className="card-plain">
                          <CardHeader role="tab">
                            <a
                              className="d-flex"
                              href="#pablo"
                              data-toggle="collapse"
                              onClick={e => {
                                e.preventDefault();
                                this.collapsesToggle("collapseTwo");
                              }}
                              aria-expanded={this.state.openedCollapses.includes(
                                "collapseTwo"
                              )}
                            >
                              Collapsible Group Item #2{" "}
                              <i className="tim-icons icon-minimal-down ml-auto" />
                            </a>
                          </CardHeader>
                          <Collapse
                            isOpen={this.state.openedCollapses.includes(
                              "collapseTwo"
                            )}
                          >
                            <CardBody>
                              Anim pariatur cliche reprehenderit, enim eiusmod
                              high life accusamus terry richardson ad squid. 3
                              wolf moon officia aute, non cupidatat skateboard
                              dolor brunch. Food truck quinoa nesciunt laborum
                              eiusmod. Brunch 3 wolf moon tempor, sunt aliqua
                              put a bird on it squid single-origin coffee nulla
                              assumenda shoreditch et. Nihil anim keffiyeh
                              helvetica, craft beer labore wes anderson cred
                              nesciunt sapiente ea proident. Ad vegan excepteur
                              butcher vice lomo. Leggings occaecat craft beer
                              farm-to-table, raw denim aesthetic synth nesciunt
                              you probably haven't heard of them accusamus
                              labore sustainable VHS.
                            </CardBody>
                          </Collapse>
                        </Card>
                        <Card className="card-plain">
                          <CardHeader role="tab">
                            <a
                              className="d-flex"
                              href="#pablo"
                              data-toggle="collapse"
                              onClick={e => {
                                e.preventDefault();
                                this.collapsesToggle("collapseThree");
                              }}
                              aria-expanded={this.state.openedCollapses.includes(
                                "collapseThree"
                              )}
                            >
                              Collapsible Group Item #3{" "}
                              <i className="tim-icons icon-minimal-down ml-auto" />
                            </a>
                          </CardHeader>
                          <Collapse
                            role="tabpanel"
                            isOpen={this.state.openedCollapses.includes(
                              "collapseThree"
                            )}
                          >
                            <CardBody>
                              Anim pariatur cliche reprehenderit, enim eiusmod
                              high life accusamus terry richardson ad squid. 3
                              wolf moon officia aute, non cupidatat skateboard
                              dolor brunch. Food truck quinoa nesciunt laborum
                              eiusmod. Brunch 3 wolf moon tempor, sunt aliqua
                              put a bird on it squid single-origin coffee nulla
                              assumenda shoreditch et. Nihil anim keffiyeh
                              helvetica, craft beer labore wes anderson cred
                              nesciunt sapiente ea proident. Ad vegan excepteur
                              butcher vice lomo. Leggings occaecat craft beer
                              farm-to-table, raw denim aesthetic synth nesciunt
                              you probably haven't heard of them accusamus
                              labore sustainable VHS.
                            </CardBody>
                          </Collapse>
                        </Card>
                      </div>
                    </Col>
                  </Row>
                </div>
                {/* end collapse */}
              </Col>
            </Row>
            <div className="space-50" />
            <Row>
              <Col md="6">
                <h4 className="mb-5 mt-3">Popovers</h4>
                <Button color="default" id="tooltip669427795" size="sm">
                  On top
                </Button>
                <UncontrolledPopover placement="top" target="tooltip669427795">
                  <PopoverHeader>Popover on Top</PopoverHeader>
                  <PopoverBody>
                    Here will be some very useful information about his popover.
                  </PopoverBody>
                </UncontrolledPopover>
                <Button
                  color="default"
                  className="ml-1"
                  id="tooltip321540180"
                  size="sm"
                >
                  On right
                </Button>
                <UncontrolledPopover
                  placement="right"
                  target="tooltip321540180"
                >
                  <PopoverHeader>Popover on Right</PopoverHeader>
                  <PopoverBody>
                    Here will be some very useful information about his popover.
                    <br /> Here will be some very useful information about his
                    popover.
                  </PopoverBody>
                </UncontrolledPopover>
                <Button
                  color="default"
                  className="ml-1"
                  id="tooltip806423535"
                  size="sm"
                >
                  On bottom
                </Button>
                <UncontrolledPopover
                  placement="bottom"
                  target="tooltip806423535"
                >
                  <PopoverHeader>Popover on Bottom</PopoverHeader>
                  <PopoverBody>
                    Here will be some very useful information about his popover.
                  </PopoverBody>
                </UncontrolledPopover>
                <Button
                  color="default"
                  className="ml-1"
                  id="tooltip253117229"
                  size="sm"
                >
                  On left
                </Button>
                <UncontrolledPopover placement="left" target="tooltip253117229">
                  <PopoverHeader>Popover On Left</PopoverHeader>
                  <PopoverBody>
                    Here will be some very useful information about his popover.
                  </PopoverBody>
                </UncontrolledPopover>
              </Col>
              <Col md="6">
                <h4 className="mb-5 mt-3">Tooltips</h4>
                <Button
                  className="btn-tooltip"
                  color="default"
                  id="tooltip104653228"
                  size="sm"
                >
                  On left
                </Button>
                <UncontrolledTooltip
                  delay={0}
                  placement="left"
                  target="tooltip104653228"
                >
                  Tooltip on left
                </UncontrolledTooltip>
                <Button
                  className="btn-tooltip ml-1"
                  color="default"
                  id="tooltip924738888"
                  size="sm"
                >
                  On top
                </Button>
                <UncontrolledTooltip
                  delay={0}
                  placement="top"
                  target="tooltip924738888"
                >
                  Tooltip on top
                </UncontrolledTooltip>
                <Button
                  className="btn-tooltip ml-1"
                  color="default"
                  id="tooltip915051522"
                  size="sm"
                >
                  On bottom
                </Button>
                <UncontrolledTooltip
                  delay={0}
                  placement="bottom"
                  target="tooltip915051522"
                >
                  Tooltip on bottom
                </UncontrolledTooltip>
                <Button
                  className="btn-tooltip ml-1"
                  color="default"
                  id="tooltip115586049"
                  size="sm"
                >
                  On right
                </Button>
                <UncontrolledTooltip
                  delay={0}
                  placement="right"
                  target="tooltip115586049"
                >
                  Tooltip on right
                </UncontrolledTooltip>
                <div className="clearfix" />
                <br />
                <br />
              </Col>
            </Row>
          </Container>
          <div id="file-uploader">
            <Container>
              <div className="title">
                <h4>File Uploader</h4>
              </div>
              <Row>
                <Col md="5" sm="8">
                  <CardTitle tag="h4">Regular Image</CardTitle>
                  <ImageUpload />
                </Col>
                <Col md="3" sm="4">
                  <h4>
                    <small>Avatar</small>
                  </h4>
                  <ImageUpload avatar />
                </Col>
              </Row>
            </Container>
          </div>
          <div className="section">
            <Container>
              <div className="title">
                <h3>Carousel</h3>
              </div>
              <Row className="justify-content-between align-items-center">
                <Col className="mb-5 mb-lg-0" lg="5">
                  <h1 className="text-white font-weight-light">
                    Bootstrap carousel
                  </h1>
                  <p className="text-white mt-4">
                    BLK• React Design comes with three pre-built pages to help
                    you get started faster. You can change the text and images
                    and you're good to go.
                  </p>
                  <Button
                    className="mt-4"
                    color="warning"
                    href="https://demos.creative-tim.com/blk-design-system-pro-react/#/documentation/alert?ref=blkdspr-index"
                  >
                    See all components
                  </Button>
                </Col>
                <Col lg="6">
                  <UncontrolledCarousel
                    items={carouselItems}
                    indicators={false}
                  />
                </Col>
              </Row>
            </Container>
          </div>
        </div>
      </>
    );
  }
}

export default JavaScript;
