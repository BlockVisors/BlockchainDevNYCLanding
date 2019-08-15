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
// react plugin used to create charts
import { Line } from "react-chartjs-2";

// reactstrap components
import {
  Button,
  UncontrolledCollapse,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  UncontrolledDropdown,
  NavbarBrand,
  Navbar,
  NavItem,
  Nav,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  CardTitle,
  ListGroupItem,
  ListGroup,
  Container,
  Row,
  Col
} from "reactstrap";

// core components
import ColorNavbar from "components/Navbars/ColorNavbar.jsx";
import MeetupNavbar from "components/Navbars/MeetupNavbar.jsx";

import DemoFooter from "components/Footers/DemoFooter.jsx";
import MeetupFooter from "components/Footers/MeetupFooter.jsx";


import { chartExample1 } from "variables/charts.js";
import MeetupHeader from "views/SectionsSections/MeetupHeader.jsx";
import MeetupEvents from "views/SectionsSections/MeetupEvents.jsx";
import MeetupContact from "views/SectionsSections/MeetupContact.jsx";



class MeetupHome extends React.Component {
  componentDidMount() {
    document.documentElement.scrollTop = 0;
    document.scrollingElement.scrollTop = 0;
    this.refs.wrapper.scrollTop = 0;
    document.body.classList.add("landing-page");
  }
  componentWillUnmount() {
    document.body.classList.remove("landing-page");
  }
  render() {
    return (
      <>
    {/* <ColorNavbar />  */}
    <MeetupNavbar />
        <div className="wrapper" ref="wrapper">
         {/*} <div className="page-header">
            <img
              alt="..."
              className="path"
              src={require("assets/img/blob.png")}
            />
            <img
              alt="..."
              className="path2"
              src={require("assets/img/path2.png")}
            />
            <img
              alt="..."
              className="shapes triangle"
              src={require("assets/img/triunghiuri.png")}
            />
            <img
              alt="..."
              className="shapes wave"
              src={require("assets/img/waves.png")}
            />
            <img
              alt="..."
              className="shapes squares"
              src={require("assets/img/patrat.png")}
            />
            <img
              alt="..."
              className="shapes circle"
              src={require("assets/img/cercuri.png")}
            />
        
             <Container>
              <Row className="row-grid justify-content-between align-items-center text-left">
                <Col lg="6" md="6">
                  <h1 className="text-white">
                    We keep your coin <br />
                    <span className="text-white">secured</span>
                  </h1>
                  <p className="text-white mb-3">
                    A wonderful serenity has taken possession of my entire soul,
                    like these sweet mornings of spring which I enjoy with my
                    whole heart. I am alone, and feel...
                  </p>
                  <div className="btn-wrapper mb-3">
                    <p className="category text-success d-inline">
                      From 9.99%/mo
                    </p>
                    <Button
                      className="btn-link"
                      color="success"
                      href="#pablo"
                      onClick={e => e.preventDefault()}
                      size="sm"
                    >
                      <i className="tim-icons icon-minimal-right" />
                    </Button>
                  </div>
                  <div className="btn-wrapper">
                    <div className="button-container">
                      <Button
                        className="btn-icon btn-simple btn-round mr-1"
                        color="neutral"
                        href="#pablo"
                        onClick={e => e.preventDefault()}
                      >
                        <i className="fab fa-twitter" />
                      </Button>
                      <Button
                        className="btn-icon btn-simple btn-round mr-1"
                        color="neutral"
                        href="#pablo"
                        onClick={e => e.preventDefault()}
                      >
                        <i className="fab fa-dribbble" />
                      </Button>
                      <Button
                        className="btn-icon btn-simple btn-round"
                        color="neutral"
                        href="#pablo"
                        onClick={e => e.preventDefault()}
                      >
                        <i className="fab fa-facebook" />
                      </Button>
                    </div>
                  </div>
                </Col>
                <Col lg="4" md="5">
                  <img
                    alt="..."
                    className="img-fluid"
                    src={require("assets/img/etherum.png")}
                  />
                </Col>
              </Row>
            </Container>
          </div> */}

 
          <section className="section section-lg">
            <MeetupHeader />
            <div></div>
            <MeetupEvents />
            <MeetupContact />
          </section>


          {/* <section className="section section-lg">
            <img
              alt="..."
              className="path"
              src={require("assets/img/path4.png")}
            />
            <img
              alt="..."
              className="path2"
              src={require("assets/img/path5.png")}
            />
            <img
              alt="..."
              className="path3"
              src={require("assets/img/path2.png")}
            />
            
          </section>  */}
         
         
     
          <MeetupFooter />
        </div>
      </>
    );
  }
}

export default MeetupHome;
