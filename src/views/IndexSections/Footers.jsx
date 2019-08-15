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
  FormGroup,
  Form,
  Input,
  NavItem,
  NavLink,
  Nav,
  Container,
  Row,
  Col,
  UncontrolledTooltip
} from "reactstrap";

class Footers extends React.Component {
  render() {
    return (
      <>
        <div className="section section-footers" data-background-color="gray">
          <Container>
            <div className="title">
              <h3>Footer Areas</h3>
            </div>
          </Container>
          <div id="footer-areas">
            {/* ********* SIMPLE FOOTER WITH SOCIAL AND BRAND ********* */}
            <footer className="footer">
              <Container>
                <Row>
                  <Col md="3">
                    <h1 className="title">BLK• React</h1>
                  </Col>
                  <Col md="3">
                    <Nav>
                      <NavItem>
                        <NavLink to="/index" tag={Link}>
                          Home
                        </NavLink>
                      </NavItem>
                      <NavItem>
                        <NavLink to="/landing-page" tag={Link}>
                          Landing
                        </NavLink>
                      </NavItem>
                      <NavItem>
                        <NavLink to="register-page" tag={Link}>
                          Register
                        </NavLink>
                      </NavItem>
                      <NavItem>
                        <NavLink to="/profile-page" tag={Link}>
                          Profile
                        </NavLink>
                      </NavItem>
                    </Nav>
                  </Col>
                  <Col md="3">
                    <Nav>
                      <NavItem>
                        <NavLink
                          href="https://creative-tim.com/contact-us?ref=blkdspr-index"
                          target="_blank"
                        >
                          Contact Us
                        </NavLink>
                      </NavItem>
                      <NavItem>
                        <NavLink
                          href="https://creative-tim.com/about-us?ref=blkdspr-index"
                          target="_blank"
                        >
                          About Us
                        </NavLink>
                      </NavItem>
                      <NavItem>
                        <NavLink
                          href="https://creative-tim.com/blog?ref=blkdspr-index"
                          target="_blank"
                        >
                          Blog
                        </NavLink>
                      </NavItem>
                      <NavItem>
                        <NavLink
                          href="https://opensource.org/licenses/MIT"
                          target="_blank"
                        >
                          License
                        </NavLink>
                      </NavItem>
                    </Nav>
                  </Col>
                  <Col md="3">
                    <h3 className="title">Follow us:</h3>
                    <div className="btn-wrapper profile text-left">
                      <Button
                        className="btn-icon btn-neutral btn-round btn-simple"
                        color="default"
                        href="https://twitter.com/creativetim"
                        id="tooltip985801800"
                        target="_blank"
                      >
                        <i className="fab fa-twitter" />
                      </Button>
                      <UncontrolledTooltip delay={0} target="tooltip985801800">
                        Follow us
                      </UncontrolledTooltip>
                      <Button
                        className="btn-icon btn-neutral btn-round btn-simple ml-1"
                        color="default"
                        href="https://www.facebook.com/creativetim"
                        id="tooltip260428517"
                        target="_blank"
                      >
                        <i className="fab fa-facebook-square" />
                      </Button>
                      <UncontrolledTooltip delay={0} target="tooltip260428517">
                        Like us
                      </UncontrolledTooltip>
                      <Button
                        className="btn-icon btn-neutral btn-round btn-simple ml-1"
                        color="default"
                        href="https://dribbble.com/creativetim"
                        id="tooltip483040321"
                        target="_blank"
                      >
                        <i className="fab fa-dribbble" />
                      </Button>
                      <UncontrolledTooltip delay={0} target="tooltip483040321">
                        Follow us
                      </UncontrolledTooltip>
                    </div>
                  </Col>
                </Row>
              </Container>
            </footer>
            {/* ********* END SIMPLE FOOTER WITH SOCIAL AND BRAND ********* */}
            {/* ********* SIMPLE FOOTER ********* */}
            <footer className="footer footer-simple">
              <Container>
                <nav>
                  <ul>
                    <li>
                      <NavLink
                        href="https://www.creative-tim.com?ref=blkdspr-index"
                        target="_blank"
                      >
                        Creative Tim
                      </NavLink>
                    </li>
                    <li>
                      <NavLink
                        href="http://presentation.creative-tim.com?ref=blkdspr-index"
                        target="_blank"
                        className="ml-1"
                      >
                        About Us
                      </NavLink>
                    </li>
                    <li>
                      <NavLink
                        href="http://blog.creative-tim.com?ref=blkdspr-index"
                        target="_blank"
                        className="ml-1"
                      >
                        Blog
                      </NavLink>
                    </li>
                    <li>
                      <NavLink
                        href="https://www.creative-tim.com/license?ref=blkdspr-index"
                        target="_blank"
                        className="ml-1"
                      >
                        License
                      </NavLink>
                    </li>
                  </ul>
                </nav>
                <div className="copyright">
                  © {new Date().getFullYear()}, Designed by{" "}
                  <a
                    className="copyright-link"
                    href="http://www.invisionapp.com"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Invision
                  </a>
                  . Coded by{" "}
                  <a
                    className="copyright-link"
                    href="https://www.creative-tim.com?ref=blkdspr-index"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Creative Tim
                  </a>
                  .
                </div>
              </Container>
            </footer>
            {/* ********* END SIMPLE FOOTER ********* */}
            {/* ********* BLACK SIMPLE FOOTER WITH SOCIAL AND BRAND ********* */}
            <footer className="footer" data-background-color="black">
              <Container>
                <a
                  className="footer-brand"
                  href="#pablo"
                  onClick={e => e.preventDefault()}
                >
                  BLK• Design System PRO React
                </a>
                <ul className="pull-center">
                  <li>
                    <a href="#pablo" onClick={e => e.preventDefault()}>
                      Blog
                    </a>
                  </li>
                  <li>
                    <a
                      href="#pablo"
                      onClick={e => e.preventDefault()}
                      className="ml-1"
                    >
                      Presentation
                    </a>
                  </li>
                  <li>
                    <a
                      href="#pablo"
                      onClick={e => e.preventDefault()}
                      className="ml-1"
                    >
                      Discover
                    </a>
                  </li>
                  <li>
                    <a
                      href="#pablo"
                      onClick={e => e.preventDefault()}
                      className="ml-1"
                    >
                      Payment
                    </a>
                  </li>
                  <li>
                    <a
                      href="#pablo"
                      onClick={e => e.preventDefault()}
                      className="ml-1"
                    >
                      Contact Us
                    </a>
                  </li>
                </ul>
                <ul className="social-buttons pull-right">
                  <li>
                    <Button
                      className="btn-icon btn-neutral"
                      color="link"
                      href="https://twitter.com/CreativeTim"
                      target="_blank"
                    >
                      <i className="fab fa-twitter" />
                    </Button>
                  </li>
                  <li>
                    <Button
                      className="btn-icon btn-neutral ml-1"
                      color="link"
                      href="https://www.facebook.com/CreativeTim"
                      target="_blank"
                    >
                      <i className="fab fa-facebook-square" />
                    </Button>
                  </li>
                  <li>
                    <Button
                      className="btn-icon btn-neutral ml-1"
                      color="link"
                      href="https://www.instagram.com/CreativeTimOfficial"
                      target="_blank"
                    >
                      <i className="fab fa-instagram" />
                    </Button>
                  </li>
                </ul>
              </Container>
            </footer>
            {/* ********* END BLACK SIMPLE FOOTER WITH SOCIAL AND BRAND ********* */}
            {/* ********* BIG FOOTER ********* */}
            <footer className="footer footer-big footer-white">
              <Container>
                <div className="content">
                  <Row>
                    <Col md="4">
                      <h4>About Us</h4>
                      <p>
                        Creative Tim is a startup that creates design tools that
                        make the web development process faster and easier.
                      </p>
                      <p>
                        We love the web and care deeply for how users interact
                        with a digital product. We power businesses and
                        individuals to create better looking web projects around
                        the world.
                      </p>
                    </Col>
                    <Col md="4">
                      <h4>Social Feed</h4>
                      <div className="social-feed">
                        <div className="feed-line">
                          <i className="fab fa-instagram" />
                          <p>
                            How to handle ethical disagreements with your
                            clients.
                          </p>
                        </div>
                        <div className="feed-line">
                          <i className="fab fa-twitter" />
                          <p>
                            The tangible benefits of designing at 1x pixel
                            density.
                          </p>
                        </div>
                        <div className="feed-line">
                          <i className="fab fa-facebook-square" />
                          <p>
                            A collection of 25 stunning sites that you can use
                            for inspiration.
                          </p>
                        </div>
                      </div>
                    </Col>
                    <Col md="4">
                      <h4>Instagram Feed</h4>
                      <div className="gallery-feed">
                        <img
                          alt="..."
                          className="img img-raised rounded"
                          src={require("assets/img/olivia.jpg")}
                        />
                        <img
                          alt="..."
                          className="img img-raised rounded"
                          src={require("assets/img/johana.jpg")}
                        />
                        <img
                          alt="..."
                          className="img img-raised rounded"
                          src={require("assets/img/michael.jpg")}
                        />
                        <img
                          alt="..."
                          className="img img-raised rounded"
                          src={require("assets/img/emily.jpg")}
                        />
                        <img
                          alt="..."
                          className="img img-raised rounded"
                          src={require("assets/img/marie.jpg")}
                        />
                        <img
                          alt="..."
                          className="img img-raised rounded"
                          src={require("assets/img/usher.jpg")}
                        />
                        <img
                          alt="..."
                          className="img img-raised rounded"
                          src={require("assets/img/mike.jpeg")}
                        />
                        <img
                          alt="..."
                          className="img img-raised rounded"
                          src={require("assets/img/julie.jpg")}
                        />
                      </div>
                    </Col>
                  </Row>
                </div>
                <hr />
                <ul className="pull-left">
                  <li>
                    <a href="#pablo" onClick={e => e.preventDefault()}>
                      Blog
                    </a>
                  </li>
                  <li>
                    <a
                      href="#pablo"
                      onClick={e => e.preventDefault()}
                      className="ml-1"
                    >
                      Presentation
                    </a>
                  </li>
                  <li>
                    <a
                      href="#pablo"
                      onClick={e => e.preventDefault()}
                      className="ml-1"
                    >
                      Discover
                    </a>
                  </li>
                  <li>
                    <a
                      href="#pablo"
                      onClick={e => e.preventDefault()}
                      className="ml-1"
                    >
                      Payment
                    </a>
                  </li>
                  <li>
                    <a
                      href="#pablo"
                      onClick={e => e.preventDefault()}
                      className="ml-1"
                    >
                      Contact Us
                    </a>
                  </li>
                </ul>
                <div className="copyright pull-right">
                  Copyright © {new Date().getFullYear()} Creative Tim All Rights
                  Reserved.
                </div>
              </Container>
            </footer>
            {/* ********* END BIG FOOTER ********* */}
            {/* ********* BIG FOOTER ********* */}
            <footer className="footer footer-big" data-background-color="black">
              <Container>
                <div className="content">
                  <Row>
                    <Col md="2">
                      <h5>About Us</h5>
                      <ul className="links-vertical">
                        <li>
                          <a href="#pablo" onClick={e => e.preventDefault()}>
                            Blog
                          </a>
                        </li>
                        <li>
                          <a href="#pablo" onClick={e => e.preventDefault()}>
                            About Us
                          </a>
                        </li>
                        <li>
                          <a href="#pablo" onClick={e => e.preventDefault()}>
                            Presentation
                          </a>
                        </li>
                        <li>
                          <a href="#pablo" onClick={e => e.preventDefault()}>
                            Contact Us
                          </a>
                        </li>
                      </ul>
                    </Col>
                    <Col md="2">
                      <h5>Market</h5>
                      <ul className="links-vertical">
                        <li>
                          <a href="#pablo" onClick={e => e.preventDefault()}>
                            Sales FAQ
                          </a>
                        </li>
                        <li>
                          <a href="#pablo" onClick={e => e.preventDefault()}>
                            How to Register
                          </a>
                        </li>
                        <li>
                          <a href="#pablo" onClick={e => e.preventDefault()}>
                            Sell Goods
                          </a>
                        </li>
                        <li>
                          <a href="#pablo" onClick={e => e.preventDefault()}>
                            Receive Payment
                          </a>
                        </li>
                        <li>
                          <a href="#pablo" onClick={e => e.preventDefault()}>
                            Transactions Issues
                          </a>
                        </li>
                        <li>
                          <a href="#pablo" onClick={e => e.preventDefault()}>
                            Affiliates Program
                          </a>
                        </li>
                      </ul>
                    </Col>
                    <Col md="4">
                      <h5>Social Feed</h5>
                      <div className="social-feed">
                        <div className="feed-line">
                          <i className="fab fa-twitter" />
                          <p>
                            How to handle ethical disagreements with your
                            clients.
                          </p>
                        </div>
                        <div className="feed-line">
                          <i className="fab fa-twitter" />
                          <p>
                            The tangible benefits of designing at 1x pixel
                            density.
                          </p>
                        </div>
                        <div className="feed-line">
                          <i className="fab fa-facebook-square" />
                          <p>
                            A collection of 25 stunning sites that you can use
                            for inspiration.
                          </p>
                        </div>
                      </div>
                    </Col>
                    <Col md="4">
                      <h5>Follow Us</h5>
                      <ul className="social-buttons">
                        <li>
                          <Button
                            className="btn-icon btn-round"
                            color="twitter"
                            href="#pablo"
                            onClick={e => e.preventDefault()}
                          >
                            <i className="fab fa-twitter" />
                          </Button>
                        </li>
                        <li>
                          <Button
                            className="btn-icon btn-round ml-1"
                            color="facebook"
                            href="#pablo"
                            onClick={e => e.preventDefault()}
                          >
                            <i className="fab fa-facebook-square" />
                          </Button>
                        </li>
                        <li>
                          <Button
                            className="btn-icon btn-round ml-1"
                            color="dribbble"
                            href="#pablo"
                            onClick={e => e.preventDefault()}
                          >
                            <i className="fab fa-dribbble" />
                          </Button>
                        </li>
                        <li>
                          <Button
                            className="btn-icon btn-round ml-1"
                            color="google"
                            href="#pablo"
                            onClick={e => e.preventDefault()}
                          >
                            <i className="fab fa-google-plus" />
                          </Button>
                        </li>
                        <li>
                          <Button
                            className="btn-icon btn-instagram btn-round ml-1"
                            color="default"
                            href="#pablo"
                            onClick={e => e.preventDefault()}
                          >
                            <i className="fab fa-instagram" />
                          </Button>
                        </li>
                      </ul>
                      <h5 className="mt-4">Numbers Don't Lie</h5>
                      <h5>
                        14.521 <small className="text-muted">Freelancers</small>
                      </h5>
                      <h5>
                        1.423.183{" "}
                        <small className="text-muted">Transactions</small>
                      </h5>
                    </Col>
                  </Row>
                </div>
                <hr />
                <div className="copyright">
                  Copyright © {new Date().getFullYear()} Creative Tim All Rights
                  Reserved.
                </div>
              </Container>
            </footer>
            {/* ********* END BIG FOOTER ********* */}
            {/* ********* BIG WHITE FOOTER V2 ********* */}
            <footer className="footer footer-white footer-big">
              <Container>
                <div className="content">
                  <Row>
                    <Col md="3">
                      <a href="#pablo" onClick={e => e.preventDefault()}>
                        <h5>BLK• Design System PRO React</h5>
                      </a>
                      <p>
                        Probably the best Design System in the world! We know
                        you've been waiting for it, so don't be shy!
                      </p>
                    </Col>
                    <Col md="2">
                      <h5>About</h5>
                      <ul className="links-vertical">
                        <li>
                          <a href="#pablo" onClick={e => e.preventDefault()}>
                            Blog
                          </a>
                        </li>
                        <li>
                          <a href="#pablo" onClick={e => e.preventDefault()}>
                            About Us
                          </a>
                        </li>
                        <li>
                          <a href="#pablo" onClick={e => e.preventDefault()}>
                            Presentation
                          </a>
                        </li>
                        <li>
                          <a href="#pablo" onClick={e => e.preventDefault()}>
                            Contact Us
                          </a>
                        </li>
                      </ul>
                    </Col>
                    <Col md="2">
                      <h5>Market</h5>
                      <ul className="links-vertical">
                        <li>
                          <a href="#pablo" onClick={e => e.preventDefault()}>
                            Sales FAQ
                          </a>
                        </li>
                        <li>
                          <a href="#pablo" onClick={e => e.preventDefault()}>
                            How to Register
                          </a>
                        </li>
                        <li>
                          <a href="#pablo" onClick={e => e.preventDefault()}>
                            Sell Goods
                          </a>
                        </li>
                        <li>
                          <a href="#pablo" onClick={e => e.preventDefault()}>
                            Receive Payment
                          </a>
                        </li>
                        <li>
                          <a href="#pablo" onClick={e => e.preventDefault()}>
                            Transactions Issues
                          </a>
                        </li>
                      </ul>
                    </Col>
                    <Col md="2">
                      <h5>Legal</h5>
                      <ul className="links-vertical">
                        <li>
                          <a href="#pablo" onClick={e => e.preventDefault()}>
                            Transactions FAQ
                          </a>
                        </li>
                        <li>
                          <a href="#pablo" onClick={e => e.preventDefault()}>
                            Terms &amp; Conditions
                          </a>
                        </li>
                        <li>
                          <a href="#pablo" onClick={e => e.preventDefault()}>
                            Licenses
                          </a>
                        </li>
                      </ul>
                    </Col>
                    <Col md="3">
                      <h5>Subscribe to Newsletter</h5>
                      <p>
                        Join our newsletter and get news in your inbox every
                        week! We hate spam too, so no worries about this.
                      </p>
                      <Form
                        action=""
                        className="form form-newsletter"
                        method=""
                      >
                        <FormGroup>
                          <Input placeholder="Your Email..." type="email" />
                        </FormGroup>
                        <Button
                          className="btn-icon btn-round"
                          color="primary"
                          name="button"
                          type="button"
                        >
                          <i className="tim-icons icon-email-85" />
                        </Button>
                      </Form>
                    </Col>
                  </Row>
                </div>
                <hr />
                <ul className="social-buttons">
                  <li>
                    <Button
                      className="btn-icon"
                      color="twitter"
                      href="#pablo"
                      onClick={e => e.preventDefault()}
                      size="lg"
                    >
                      <i className="fab fa-twitter" />
                    </Button>
                  </li>
                  <li>
                    <Button
                      className="btn-icon ml-1"
                      color="facebook"
                      href="#pablo"
                      onClick={e => e.preventDefault()}
                      size="lg"
                    >
                      <i className="fab fa-facebook-square" />
                    </Button>
                  </li>
                  <li>
                    <Button
                      className="btn-icon ml-1"
                      color="dribbble"
                      href="#pablo"
                      onClick={e => e.preventDefault()}
                      size="lg"
                    >
                      <i className="fab fa-dribbble" />
                    </Button>
                  </li>
                  <li>
                    <Button
                      className="btn-icon ml-1"
                      color="google"
                      href="#pablo"
                      onClick={e => e.preventDefault()}
                      size="lg"
                    >
                      <i className="fab fa-google-plus" />
                    </Button>
                  </li>
                  <li>
                    <Button
                      className="btn-icon ml-1"
                      color="youtube"
                      href="#pablo"
                      onClick={e => e.preventDefault()}
                      size="lg"
                    >
                      <i className="fab fa-youtube" />
                    </Button>
                  </li>
                </ul>
                <div className="copyright pull-center">
                  Copyright © {new Date().getFullYear()} Creative Tim All Rights
                  Reserved.
                </div>
              </Container>
            </footer>
            {/* ********* END BIG WHITE FOOTER v2 ********* */}
          </div>
        </div>
      </>
    );
  }
}

export default Footers;
