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
// ReactJS plugin for a nice carousel
import Slick from "react-slick";
// reactstrap components
import {
  Button,
  UncontrolledCollapse,
  Label,
  FormGroup,
  Input,
  InputGroupAddon,
  InputGroupText,
  InputGroup,
  NavbarBrand,
  Navbar,
  NavItem,
  NavLink,
  Nav,
  Container,
  Row,
  Col
} from "reactstrap";

// core components
let slickHeader2Settings = {
  slidesToShow: 6,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 2500,
  arrows: false,
  dots: false,
  pauseOnHover: false,
  className: "customer-logos",
  responsive: [
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 4
      }
    },
    {
      breakpoint: 520,
      settings: {
        slidesToShow: 3
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
  ]
};

// custom previous button for the slick component
const PrevButton = props => {
  return (
    <Button
      className="btn-round btn-icon btn-simple slick-prev slick-arrow"
      color="primary"
      aria-label="Previous"
      type="button"
      onClick={props.onClick}
    >
      <i className="tim-icons icon-minimal-left" />
    </Button>
  );
};
// custom next button for the slick component
const NextButton = props => {
  return (
    <Button
      className="btn-round btn-icon btn-simple slick-next slick-arrow"
      color="primary"
      aria-label="Next"
      type="button"
    >
      <i className="tim-icons icon-minimal-right" onClick={props.onClick} />
    </Button>
  );
};

let slickHeader3Settings = {
  dots: false,
  infinite: true,
  centerMode: true,
  slidesToShow: 4,
  slidesToScroll: 1,
  prevArrow: <PrevButton />,
  nextArrow: <NextButton />,
  className: "center slider slick-buttons-under",
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
        infinite: true
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ]
};

class MeetupHeader extends React.Component {
  state = {};
  render() {
    return (
      <>
        <div className="cd-section" id="headers">
   
          {/* ********* HEADER 6 ********* */}
          <div className="header header-6">
          
            <div className="page-header">
              <div className="content-center">
                <Container>
                  <Row className="align-items-center text-left">
                    <Col lg="6" xs="12">
                      <h1 className="title">
                        New York City's Finest <br />
                        <strong className="text-info">Blockchain Development Community</strong>
                      </h1>
                      <p className="description">
                        Our group aims to foster on open discussion on Blockchain Development. We arrange
                        presentations from cutting-edge startups as well as hands-on workshops. Our group 
                        meets weekly at WeWork Dumbo Hieghts at 81 Prospect. We invite new members to come 
                        out and join the movement. 
                      </p>
                      <Row className="row-input">
                        <Col className="mt-1" sm="8" xs="12">
                          <Input
                            aria-label="Your email"
                            id="signupSrEmail"
                            name="email"
                            placeholder="Your email"
                            type="email"
                          />
                        </Col>
                        <Col sm="4" xs="12">
                          <Button block color="info">
                           Join Us!
                          </Button>
                        </Col>
                      </Row>
                    </Col>
                    <Col lg="6" xs="12">
                      <img
                        alt="..."
                        className="path path3"
                        src={require("assets/img/shape-s.png")}
                      />
                      {/* SVG Illustration */}
                      <figure className=" header-shape">
                        <svg
                          className=" injected-svg js-svg-injector"
                          style={{ enableBackground: "new 10 12 878.9 907" }}
                          viewBox="10 12 878.9 907"
                          x="0px"
                          y="0px"
                          xmlSpace="preserve"
                        >
                          <g>
                            <defs>
                              <path
                                d="M300.34,75.35C379.42-7.43,305.86,185.78,540.87,98.95,647.68,46,677,219,674.65,258.55c-11,185-132.32,65-13.89,317.66,56.86,121.32-94.88,256-155.89,151.41-55.11-94.48-151.56-85.1-189-90.54-311-45.27-9.33-148.52-125.21-256.78C9.7,211.2,190.5,100.86,306.34,70.35Z"
                                id="shape1"
                              />
                            </defs>
                            <clipPath id="shape2">
                              <use
                                style={{ overflow: "visible" }}
                                xlinkHref="#shape1"
                              />
                            </clipPath>
                            <g clipPath="url(#shape2)">
                              <image
                                height="900"
                                id="imageShape1"
                                style={{ overflow: "visible" }}
                                transform="matrix(0.9488 0 0 0.9488 25 53.1187)"
                                width="800"
                                xlinkHref={require("assets/img/img_352.png")}
                              />
                            </g>
                          </g>
                          <g>
                            <defs>
                              <path
                                d="M186.26,647.36c7,1,14,1.87,21.11,2.4,42.73,3.24,173.84,9.32,234.51,60.15,72.83,61,105.38,80.19,37.4,96.45C388.73,828,438.49,724,312,749.28c-167.3,33.46-210.61-70.86-181.08-90.54C151.8,644.8,174.69,645.67,186.26,647.36Z"
                                id="shape3"
                              />
                            </defs>
                            <clipPath id="shape4">
                              <use
                                style={{ overflow: "visible" }}
                                xlinkHref="#shape3"
                              />
                            </clipPath>
                            <g
                              clipPath="url(#shape4)"
                              transform="matrix(1 0 0 1 0 0)"
                            >
                              <image
                                height="900"
                                id="imageShape2"
                                style={{ overflow: "visible" }}
                                transform="matrix(0.9488 0 0 0.9488 25 53.1187)"
                                width="900"
                                xlinkHref={require("assets/img/img_352.png")}
                              />
                            </g>
                          </g>
                        </svg>
                      </figure>
                    </Col>
                  </Row>
                </Container>
              </div>
            </div>
          </div>
          {/* ********* END HEADER 6 ********* */}
        </div>{" "}
      </>
    );
  }
}

export default MeetupHeader;
