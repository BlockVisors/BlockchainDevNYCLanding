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
// react plugin that creates an input with badges
import TagsInput from "react-tagsinput";
// react plugin used to create DropdownMenu for selecting items
import Select from "react-select";
// react plugin used to create switch buttons
import Switch from "react-bootstrap-switch";
// plugin that creates slider
import Slider from "nouislider";

// reactstrap components
import {
  Button,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  UncontrolledDropdown,
  Label,
  FormGroup,
  Input,
  InputGroupAddon,
  InputGroupText,
  InputGroup,
  Container,
  Row,
  Col
} from "reactstrap";

class Basic extends React.Component {
  state = {
    singleSelect: null,
    multipleSelect: null,
    tags: ["Amsterdam", "Washington", "Sydney", "Beijing"]
  };
  handleTags = regularTags => {
    this.setState({ tags: regularTags });
  };
  componentDidMount() {
    var slider1 = this.refs.slider1;
    var slider2 = this.refs.slider2;
    Slider.create(slider1, {
      start: [40],
      connect: [true, false],
      step: 1,
      range: { min: 0, max: 100 }
    });
    Slider.create(slider2, {
      start: [20, 60],
      connect: [false, true, false],
      step: 1,
      range: { min: 0, max: 100 }
    });
  }
  render() {
    return (
      <>
        <div className="section section-basic" id="basic-elements">
          <img
            alt="..."
            className="path"
            src={require("assets/img/path1.png")}
          />
          <Container>
            <h2 className="title">Basic Elements</h2>
            <h3>Buttons</h3>
            <p className="category">Pick your style</p>
            <Row>
              <Col md="10">
                <Button color="primary" type="button">
                  Default
                </Button>
                <Button
                  className="btn-round ml-1"
                  color="primary"
                  type="button"
                >
                  Round
                </Button>
                <Button
                  className="btn-round ml-1"
                  color="primary"
                  type="button"
                >
                  <i className="tim-icons icon-heart-2" />
                  With Icon
                </Button>
                <Button
                  className="btn-icon btn-round ml-1"
                  color="primary"
                  type="button"
                >
                  <i className="tim-icons icon-heart-2" />
                </Button>
                <Button
                  className="btn-simple btn-round ml-1"
                  color="primary"
                  type="button"
                >
                  Simple
                </Button>
              </Col>
            </Row>
            <p className="category">Pick your size</p>
            <Row>
              <Col md="10">
                <Button color="primary" size="sm">
                  Small
                </Button>
                <Button color="primary" className="ml-1">
                  Regular
                </Button>
                <Button color="primary" size="lg" className="ml-1">
                  Large
                </Button>
              </Col>
            </Row>
            <p className="category">Pick your color</p>
            <Row>
              <Col md="12">
                <Button color="default">Default</Button>
                <Button color="primary" className="ml-1">
                  Primary
                </Button>
                <Button color="info" className="ml-1">
                  Info
                </Button>
                <Button color="success" className="ml-1">
                  Success
                </Button>
                <Button color="warning" className="ml-1">
                  Warning
                </Button>
                <Button color="danger" className="ml-1">
                  Danger
                </Button>
                <Button color="neutral" className="ml-1">
                  Neutral
                </Button>
              </Col>
            </Row>
            <br />
            <h3>Links</h3>
            <Row>
              <Col md="8">
                <Button color="link">Default</Button>
                <Button className="btn-link ml-1" color="primary">
                  Primary
                </Button>
                <Button className="btn-link ml-1" color="info">
                  Info
                </Button>
                <Button className="btn-link ml-1" color="success">
                  Success
                </Button>
                <Button className="btn-link ml-1" color="warning">
                  Warning
                </Button>
                <Button className="btn-link ml-1" color="danger">
                  Danger
                </Button>
              </Col>
            </Row>
            {/* social buttons */}
            <div className="mt-5" id="social-buttons">
              <h4>Social Buttons</h4>
              <Row>
                <Col md="4" sm="5">
                  <p className="category">Default</p>
                  <Button color="twitter">
                    <i className="fab fa-twitter" />
                    Connect with Twitter
                  </Button>
                </Col>
                <Col md="1" sm="1">
                  <p className="category">&nbsp;</p>
                  <Button className="btn-icon" color="twitter">
                    <i className="fab fa-twitter" />
                  </Button>
                </Col>
                <Col md="1" sm="1">
                  <p className="category">&nbsp;</p>
                  <Button className="btn-icon btn-round" color="twitter">
                    <i className="fab fa-twitter" />
                  </Button>
                </Col>
                <Col md="1" sm="1">
                  <p className="category">Neutral</p>
                  <Button className="btn-icon btn-simple" color="twitter">
                    <i className="fab fa-twitter" />
                  </Button>
                </Col>
                <Col md="3" sm="4">
                  <p className="category">&nbsp;</p>
                  <Button className="btn-simple" color="twitter">
                    <i className="fab fa-twitter" />
                    Connect with Twitter
                  </Button>
                </Col>
              </Row>
              <Row>
                <Col md="4" sm="5">
                  <Button color="facebook">
                    <i className="fab fa-facebook-square" />
                    Share · 2.2k
                  </Button>
                </Col>
                <Col md="1" sm="1">
                  <Button className="btn-icon" color="facebook">
                    <i className="fab fa-facebook" />
                  </Button>
                </Col>
                <Col md="1" sm="1">
                  <Button className="btn-icon btn-round" color="facebook">
                    <i className="fab fa-facebook" />
                  </Button>
                </Col>
                <Col md="1" sm="1">
                  <Button className="btn-icon btn-simple" color="facebook">
                    <i className="fab fa-facebook-square" />
                  </Button>
                </Col>
                <Col md="3" sm="4">
                  <Button className="btn-simple" color="facebook">
                    <i className="fab fa-facebook-square" />
                    Share · 2.2k
                  </Button>
                </Col>
              </Row>
              <Row>
                <Col md="4" sm="5">
                  <Button color="google">
                    <i className="fab fa-google" />
                    Share on Google+
                  </Button>
                </Col>
                <Col md="1" sm="1">
                  <Button className="btn-icon" color="google">
                    <i className="fab fa-google" />
                  </Button>
                </Col>
                <Col md="1" sm="1">
                  <Button className="btn-icon btn-round" color="google">
                    <i className="fab fa-google" />
                  </Button>
                </Col>
                <Col md="1" sm="1">
                  <Button className="btn-icon btn-simple" color="google">
                    <i className="fab fa-google" />
                  </Button>
                </Col>
                <Col md="3" sm="4">
                  <Button className="btn-simple" color="google">
                    <i className="fab fa-google" />
                    Share on Google+
                  </Button>
                </Col>
              </Row>
              <Row>
                <Col md="4" sm="5">
                  <Button color="linkedin">
                    <i className="fab fa-linkedin" />
                    Connect with Linkedin
                  </Button>
                </Col>
                <Col md="1" sm="1">
                  <Button className="btn-icon" color="linkedin">
                    <i className="fab fa-linkedin" />
                  </Button>
                </Col>
                <Col md="1" sm="1">
                  <Button className="btn-icon btn-round" color="linkedin">
                    <i className="fab fa-linkedin" />
                  </Button>
                </Col>
                <Col md="1" sm="1">
                  <Button className="btn-icon btn-simple" color="linkedin">
                    <i className="fab fa-linkedin" />
                  </Button>
                </Col>
                <Col md="3" sm="4">
                  <Button className="btn-simple" color="linkedin">
                    <i className="fab fa-linkedin" />
                    Connect with Linkedin
                  </Button>
                </Col>
              </Row>
              <Row>
                <Col md="4" sm="5">
                  <Button color="pinterest">
                    <i className="fab fa-pinterest" />
                    Pint it · 212
                  </Button>
                </Col>
                <Col md="1" sm="1">
                  <Button className="btn-icon" color="pinterest">
                    <i className="fab fa-pinterest" />
                  </Button>
                </Col>
                <Col md="1" sm="1">
                  <Button className="btn-icon btn-round" color="pinterest">
                    <i className="fab fa-pinterest" />
                  </Button>
                </Col>
                <Col md="1" sm="1">
                  <Button className="btn-icon btn-simple" color="pinterest">
                    <i className="fab fa-pinterest" />
                  </Button>
                </Col>
                <Col md="3" sm="4">
                  <Button className="btn-simple" color="pinterest">
                    <i className="fab fa-pinterest" />
                    Pint it · 212
                  </Button>
                </Col>
              </Row>
              <Row>
                <Col md="4" sm="5">
                  <Button color="youtube">
                    <i className="fab fa-youtube" />
                    View on Youtube
                  </Button>
                </Col>
                <Col md="1" sm="1">
                  <Button className="btn-icon" color="youtube">
                    <i className="fab fa-youtube" />
                  </Button>
                </Col>
                <Col md="1" sm="1">
                  <Button className="btn-icon btn-round" color="youtube">
                    <i className="fab fa-youtube" />
                  </Button>
                </Col>
                <Col md="1" sm="1">
                  <Button className="btn-icon btn-simple" color="youtube">
                    <i className="fab fa-youtube" />
                  </Button>
                </Col>
                <Col md="3" sm="4">
                  <Button className="btn-simple" color="youtube">
                    <i className="fab fa-youtube" />
                    View on Youtube
                  </Button>
                </Col>
              </Row>
              <Row>
                <Col md="4" sm="5">
                  <Button color="tumblr">
                    <i className="fab fa-tumblr-square" />
                    Repost
                  </Button>
                </Col>
                <Col md="1" sm="1">
                  <Button className="btn-icon" color="tumblr">
                    <i className="fab fa-tumblr-square" />
                  </Button>
                </Col>
                <Col md="1" sm="1">
                  <Button className="btn-icon btn-round" color="tumblr">
                    <i className="fab fa-tumblr-square" />
                  </Button>
                </Col>
                <Col md="1" sm="1">
                  <Button className="btn-icon btn-simple" color="tumblr">
                    <i className="fab fa-tumblr-square" />
                  </Button>
                </Col>
                <Col md="3" sm="4">
                  <Button className="btn-simple" color="tumblr">
                    <i className="fab fa-tumblr-square" />
                    Repost
                  </Button>
                </Col>
              </Row>
              <Row>
                <Col md="4" sm="5">
                  <Button color="github">
                    <i className="fab fa-github" />
                    Connect with Github
                  </Button>
                </Col>
                <Col md="1" sm="1">
                  <Button className="btn-icon" color="github">
                    <i className="fab fa-github" />
                  </Button>
                </Col>
                <Col md="1" sm="1">
                  <Button className="btn-icon btn-round" color="github">
                    <i className="fab fa-github" />
                  </Button>
                </Col>
                <Col md="1" sm="1">
                  <Button className="btn-icon btn-simple" color="github">
                    <i className="fab fa-github" />
                  </Button>
                </Col>
                <Col md="3" sm="4">
                  <Button className="btn-simple" color="github">
                    <i className="fab fa-github" />
                    Connect with Github
                  </Button>
                </Col>
              </Row>
              <Row>
                <Col md="4" sm="5">
                  <Button color="behance">
                    <i className="fab fa-behance-square" />
                    Follow us
                  </Button>
                </Col>
                <Col md="1" sm="1">
                  <Button className="btn-icon" color="behance">
                    <i className="fab fa-behance" />
                  </Button>
                </Col>
                <Col md="1" sm="1">
                  <Button className="btn-icon btn-round" color="behance">
                    <i className="fab fa-behance" />
                  </Button>
                </Col>
                <Col md="1" sm="1">
                  <Button className="btn-icon btn-simple" color="behance">
                    <i className="fab fa-behance" />
                  </Button>
                </Col>
                <Col md="3" sm="4">
                  <Button className="btn-simple" color="behance">
                    <i className="fab fa-behance-square" />
                    Follow us
                  </Button>
                </Col>
              </Row>
              <Row>
                <Col md="4" sm="5">
                  <Button color="dribbble">
                    <i className="fab fa-dribbble" />
                    Find us on Dribble
                  </Button>
                </Col>
                <Col md="1" sm="1">
                  <Button className="btn-icon" color="dribbble">
                    <i className="fab fa-dribbble" />
                  </Button>
                </Col>
                <Col md="1" sm="1">
                  <Button className="btn-icon btn-round" color="dribbble">
                    <i className="fab fa-dribbble" />
                  </Button>
                </Col>
                <Col md="1" sm="1">
                  <Button className="btn-icon btn-simple" color="dribbble">
                    <i className="fab fa-dribbble" />
                  </Button>
                </Col>
                <Col md="3" sm="4">
                  <Button className="btn-simple" color="dribbble">
                    <i className="fab fa-dribbble" />
                    Find us on Dribble
                  </Button>
                </Col>
              </Row>
              <Row>
                <Col md="4" sm="5">
                  <Button color="reddit">
                    <i className="fab fa-reddit" />
                    Repost · 232
                  </Button>
                </Col>
                <Col md="1" sm="1">
                  <Button className="btn-icon" color="reddit">
                    <i className="fab fa-reddit" />
                  </Button>
                </Col>
                <Col md="1" sm="1">
                  <Button className="btn-icon btn-round" color="reddit">
                    <i className="fab fa-reddit" />
                  </Button>
                </Col>
                <Col md="1" sm="1">
                  <Button className="btn-icon btn-simple" color="reddit">
                    <i className="fab fa-reddit" />
                  </Button>
                </Col>
                <Col md="3" sm="4">
                  <Button className="btn-simple" color="reddit">
                    <i className="fab fa-reddit" />
                    Repost · 232
                  </Button>
                </Col>
              </Row>
            </div>
            {/* end social buttons */}
            <div className="space-70" />
            <div id="inputs">
              <h3>Inputs</h3>
              <p className="category">Form Controls</p>
              <Row>
                <Col lg="3" sm="6">
                  <FormGroup>
                    <Input defaultValue="" placeholder="Regular" type="text" />
                  </FormGroup>
                </Col>
                <Col lg="3" sm="6">
                  <FormGroup className="has-success">
                    <Input
                      className="form-control-success"
                      defaultValue="Success"
                      type="text"
                    />
                  </FormGroup>
                </Col>
                <Col lg="3" sm="6">
                  <FormGroup className="has-danger">
                    <Input
                      className="form-control-danger"
                      defaultValue="Error Input"
                      type="email"
                    />
                  </FormGroup>
                </Col>
                <Col lg="3" sm="6">
                  <InputGroup
                    className={classnames({
                      "input-group-focus": this.state.fontAwesomeFocus
                    })}
                  >
                    <InputGroupAddon addonType="prepend">
                      <InputGroupText>
                        <i className="fa fa-user" />
                      </InputGroupText>
                    </InputGroupAddon>
                    <Input
                      placeholder="Left Font Awesome Icon"
                      type="text"
                      onFocus={e => this.setState({ fontAwesomeFocus: true })}
                      onBlur={e => this.setState({ fontAwesomeFocus: false })}
                    />
                  </InputGroup>
                </Col>
                <Col lg="3" sm="6">
                  <InputGroup
                    className={classnames({
                      "input-group-focus": this.state.timIconsFocus
                    })}
                  >
                    <Input
                      placeholder="Right Nucleo Icon"
                      type="text"
                      onFocus={e => this.setState({ timIconsFocus: true })}
                      onBlur={e => this.setState({ timIconsFocus: false })}
                    />
                    <InputGroupAddon addonType="append">
                      <InputGroupText>
                        <i className="tim-icons icon-lock-circle" />
                      </InputGroupText>
                    </InputGroupAddon>
                  </InputGroup>
                </Col>
              </Row>
            </div>
            <div className="space-70" />
            {/* select */}
            <div className="select">
              <Row>
                <Col md="6">
                  <div className="title">
                    <h4>Customizable Select</h4>
                  </div>
                  <Row>
                    <Col lg="6" md="8" sm="5">
                      <Select
                        className="react-select react-select-primary mb-2"
                        classNamePrefix="react-select"
                        name="singleSelect"
                        value={this.state.singleSelect}
                        onChange={value =>
                          this.setState({ singleSelect: value })
                        }
                        options={[
                          {
                            value: "",
                            label: "Single Option",
                            isDisabled: true
                          },
                          { value: "2", label: "Foobar" },
                          { value: "3", label: "Is great" }
                        ]}
                        placeholder="Single Select"
                      />
                    </Col>
                    <Col lg="6" md="8" sm="5">
                      <Select
                        className="react-select react-select-info mb-2"
                        classNamePrefix="react-select"
                        name="multipleSelect"
                        closeMenuOnSelect={false}
                        isMulti
                        value={this.state.multipleSelect}
                        onChange={value =>
                          this.setState({ multipleSelect: value })
                        }
                        options={[
                          {
                            value: "",
                            label: " Multiple Options",
                            isDisabled: true
                          },
                          { value: "2", label: "Paris " },
                          { value: "3", label: "Bucharest" },
                          { value: "4", label: "Rome" },
                          { value: "5", label: "New York" },
                          { value: "6", label: "Miami " },
                          { value: "7", label: "Piatra Neamt" },
                          { value: "8", label: "Paris " },
                          { value: "9", label: "Bucharest" },
                          { value: "10", label: "Rome" },
                          { value: "11", label: "New York" },
                          { value: "12", label: "Miami " },
                          { value: "13", label: "Piatra Neamt" },
                          { value: "14", label: "Paris " },
                          { value: "15", label: "Bucharest" },
                          { value: "16", label: "Rome" },
                          { value: "17", label: "New York" },
                          { value: "18", label: "Miami " },
                          { value: "19", label: "Piatra Neamt" }
                        ]}
                        placeholder="Choose City"
                      />
                    </Col>
                  </Row>
                </Col>
                <Col md="6">
                  <div className="title">
                    <h4>Dropdown &amp; Dropup</h4>
                  </div>
                  <Row>
                    <Col lg="4" md="6" sm="3">
                      <UncontrolledDropdown>
                        <DropdownToggle
                          caret
                          className="btn-block"
                          color="primary"
                        >
                          Dropdown
                        </DropdownToggle>
                        <DropdownMenu>
                          <DropdownItem
                            href="#pablo"
                            onClick={e => e.preventDefault()}
                          >
                            Action
                          </DropdownItem>
                          <DropdownItem
                            href="#pablo"
                            onClick={e => e.preventDefault()}
                          >
                            Another action
                          </DropdownItem>
                          <DropdownItem
                            href="#pablo"
                            onClick={e => e.preventDefault()}
                          >
                            Something else here
                          </DropdownItem>
                        </DropdownMenu>
                      </UncontrolledDropdown>
                    </Col>
                    <Col lg="4" md="6" sm="3">
                      <UncontrolledDropdown direction="up">
                        <DropdownToggle
                          caret
                          className="btn-block"
                          color="primary"
                        >
                          Dropup
                        </DropdownToggle>
                        <DropdownMenu>
                          <DropdownItem
                            href="#pablo"
                            onClick={e => e.preventDefault()}
                          >
                            Action
                          </DropdownItem>
                          <DropdownItem
                            href="#pablo"
                            onClick={e => e.preventDefault()}
                          >
                            Another action
                          </DropdownItem>
                          <DropdownItem
                            href="#pablo"
                            onClick={e => e.preventDefault()}
                          >
                            Something else here
                          </DropdownItem>
                        </DropdownMenu>
                      </UncontrolledDropdown>
                    </Col>
                  </Row>
                </Col>
              </Row>
            </div>
            {/* end select */}
            <div className="space-70" />
            {/* textarea/tags */}
            <div id="textareaTags">
              <Row>
                <Col md="6">
                  <div className="title">
                    <h4>Textarea</h4>
                  </div>
                  <Input
                    cols="80"
                    name="name"
                    placeholder="You can write your text here..."
                    rows="4"
                    type="textarea"
                  />
                </Col>
                <Col md="6">
                  <div className="title">
                    <h4>Tags</h4>
                  </div>
                  <TagsInput
                    tagProps={{ className: "react-tagsinput-tag bg-danger" }}
                    value={this.state.tags}
                    onChange={this.handleTags}
                  />
                </Col>
              </Row>
            </div>
            <div className="space-70" />
            <Row id="checkRadios">
              <Col lg="3" sm="6">
                <p className="category">Checkboxes</p>
                <FormGroup check>
                  <Label check>
                    <Input type="checkbox" />
                    <span className="form-check-sign" />
                    Unchecked
                  </Label>
                </FormGroup>
                <FormGroup check>
                  <Label check>
                    <Input defaultChecked type="checkbox" />
                    <span className="form-check-sign" />
                    Checked
                  </Label>
                </FormGroup>
                <FormGroup check disabled>
                  <Label check>
                    <Input disabled type="checkbox" />
                    <span className="form-check-sign" />
                    Disabled Unchecked
                  </Label>
                </FormGroup>
                <FormGroup check disabled>
                  <Label check>
                    <Input defaultChecked disabled type="checkbox" />
                    <span className="form-check-sign" />
                    Disabled Checked
                  </Label>
                </FormGroup>
              </Col>
              <Col lg="3" sm="6">
                <p className="category">Radios</p>
                <FormGroup check className="form-check-radio">
                  <Label check>
                    <Input
                      defaultValue="option1"
                      id="exampleRadios1"
                      name="exampleRadios"
                      type="radio"
                    />
                    <span className="form-check-sign" />
                    Radio is off
                  </Label>
                </FormGroup>
                <FormGroup check className="form-check-radio">
                  <Label check>
                    <Input
                      defaultChecked
                      defaultValue="option2"
                      id="exampleRadios1"
                      name="exampleRadios"
                      type="radio"
                    />
                    <span className="form-check-sign" />
                    Radio is on
                  </Label>
                </FormGroup>
                <FormGroup check className="form-check-radio" disabled>
                  <Label check>
                    <Input
                      defaultValue="option3"
                      disabled
                      id="exampleRadios2"
                      name="exampleRadios1"
                      type="radio"
                    />
                    <span className="form-check-sign" />
                    Disabled radio is off
                  </Label>
                </FormGroup>
                <FormGroup check className="form-check-radio" disabled>
                  <Label check>
                    <Input
                      defaultChecked
                      defaultValue="option4"
                      disabled
                      id="exampleRadios2"
                      name="exampleRadios1"
                      type="radio"
                    />
                    <span className="form-check-sign" />
                    Disabled radio is on
                  </Label>
                </FormGroup>
              </Col>
              <Col lg="3" sm="6">
                <p className="category">Toggle Buttons</p>
                <Switch offColor="" offText="" onColor="" onText="" />
                <br />
                <Switch defaultValue={false} offColor="" onColor="" />
              </Col>
              <Col lg="3" sm="6">
                <p className="category">Sliders</p>
                <div className="slider" ref="slider1" />
                <br />
                <div className="slider slider-primary" ref="slider2" />
              </Col>
            </Row>
          </Container>
        </div>
      </>
    );
  }
}

export default Basic;
