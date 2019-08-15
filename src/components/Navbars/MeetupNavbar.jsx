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
import { Link } from "react-router-dom";
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
  NavLink,
  Container,
  Row,
  Col,
  UncontrolledTooltip
} from "reactstrap";

class MeetupNavbar extends React.Component {
  state = {
    navbarColor: "navbar-transparent"
  };
  componentDidMount() {
    window.addEventListener("scroll", this.changeNavbarColor);
  }
  componentWillUnmount() {
    window.removeEventListener("scroll", this.changeNavbarColor);
  }
  changeNavbarColor = () => {
    if (
      document.documentElement.scrollTop > 299 ||
      document.body.scrollTop > 299
    ) {
      this.setState({
        navbarColor: "bg-info"
      });
    } else if (
      document.documentElement.scrollTop < 300 ||
      document.body.scrollTop < 300
    ) {
      this.setState({
        navbarColor: "navbar-transparent"
      });
    }
  };
  render() {
    return (
      <>
        {/* <Navbar className={"fixed-top " + this.state.navbarColor} expand="lg"> */}
        <Navbar className="navbar-transparent" expand="lg">
              <Container>
                <div className="navbar-translate">
                  <button className="navbar-toggler" id="example-header-6">
                    <span className="navbar-toggler-bar bar1" />
                    <span className="navbar-toggler-bar bar2" />
                    <span className="navbar-toggler-bar bar3" />
                  </button>
                  <NavbarBrand href="#pablo" onClick={e => e.preventDefault()}>
                    <strong>NYC Blockchain Devs</strong>
                  </NavbarBrand>
                </div>
                <UncontrolledCollapse navbar toggler="#example-header-6">
                  <div className="navbar-collapse-header">
                    <Row>
                      <Col className="collapse-brand" xs="6">
                        <a href="#pablo" onClick={e => e.preventDefault()}>
                          BLK• <span>PRO React</span>
                        </a>
                      </Col>
                      <Col className="collapse-close text-right" xs="6">
                        <button
                          className="navbar-toggler"
                          id="example-header-6"
                        >
                          <i className="tim-icons icon-simple-remove" />
                        </button>
                      </Col>
                    </Row>
                  </div>
                  <Nav className="mx-auto" navbar>
                    <NavItem className="active">
                      <NavLink href="#pablo" onClick={e => e.preventDefault()}>
                        Home
                      </NavLink>
                    </NavItem>
                    <NavItem>
                      <NavLink href="#pablo" onClick={e => e.preventDefault()}>
                        About Us
                      </NavLink>
                    </NavItem>
                    <NavItem>
                      <NavLink href="#pablo" onClick={e => e.preventDefault()}>
                        Events
                      </NavLink>
                    </NavItem>
                    <NavItem>
                      <NavLink href="#pablo" onClick={e => e.preventDefault()}>
                        Join Us
                      </NavLink>
                    </NavItem>
                    <NavItem>
                      <NavLink href="#pablo" onClick={e => e.preventDefault()}>
                        Partner
                      </NavLink>
                    </NavItem>
                    <NavItem>
                      <NavLink href="#pablo" onClick={e => e.preventDefault()}>
                        Message Board
                      </NavLink>
                    </NavItem>
                  </Nav>
                  <Nav className="nav navbar-right" navbar>
                    <NavItem>
                      <NavLink
                        href="https://twitter.com/CreativeTim"
                        target="_blank"
                      >
                        <i className="fab fa-twitter" />
                      </NavLink>
                    </NavItem>
                    <NavItem>
                      <NavLink
                        href="https://www.facebook.com/CreativeTim"
                        target="_blank"
                      >
                        <i className="fab fa-facebook-square" />
                      </NavLink>
                    </NavItem>
                    <NavItem>
                      <NavLink
                        href="https://www.instagram.com/CreativeTimOfficial"
                        target="_blank"
                      >
                        <i className="fab fa-instagram" />
                      </NavLink>
                    </NavItem>
                  </Nav>
                </UncontrolledCollapse>
              </Container>
            </Navbar>
      </>
    );
  }
}

export default MeetupNavbar;
