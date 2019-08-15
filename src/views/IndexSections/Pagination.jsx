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
  Pagination,
  PaginationItem,
  PaginationLink,
  Progress,
  Container,
  Row,
  Col
} from "reactstrap";

class PaginationSection extends React.Component {
  render() {
    return (
      <>
        <div className="section section-pagination">
          <img
            alt="..."
            className="path"
            src={require("assets/img/path4.png")}
          />
          <img
            alt="..."
            className="path path1"
            src={require("assets/img/path5.png")}
          />
          <Container>
            <Row>
              <Col md="6">
                <h3 className="mb-4">Progress Bars</h3>
                <div className="progress-container">
                  <span className="progress-badge">Default</span>
                  <Progress max="100" value="25">
                    <span className="progress-value">25%</span>
                  </Progress>
                </div>
                <div className="progress-container progress-primary">
                  <span className="progress-badge">Primary</span>
                  <Progress max="100" value="60">
                    <span className="progress-value">60%</span>
                  </Progress>
                </div>
                <div className="progress-container progress-danger">
                  <span className="progress-badge">Danger</span>
                  <Progress max="100" value="60">
                    <span className="progress-value">60%</span>
                  </Progress>
                </div>
                <div className="progress-container progress-warning">
                  <span className="progress-badge">Warning</span>
                  <Progress max="100" value="60">
                    <span className="progress-value">60%</span>
                  </Progress>
                </div>
                <div className="progress-container progress-success">
                  <span className="progress-badge">Success</span>
                  <Progress max="100" value="60">
                    <span className="progress-value">60%</span>
                  </Progress>
                </div>
                <div className="progress-container progress-info">
                  <span className="progress-badge">Info</span>
                  <Progress max="100" value="60">
                    <span className="progress-value">60%</span>
                  </Progress>
                </div>
              </Col>
              <Col className="offset-md-1" md="5">
                <h3 className="mb-5">Pagination</h3>
                <Pagination
                  className="pagination pagination-primary"
                  listClassName="pagination-primary"
                >
                  <PaginationItem className="active">
                    <PaginationLink
                      href="#pablo"
                      onClick={e => e.preventDefault()}
                    >
                      1
                    </PaginationLink>
                  </PaginationItem>
                  <PaginationItem>
                    <PaginationLink
                      href="#pablo"
                      onClick={e => e.preventDefault()}
                    >
                      2
                    </PaginationLink>
                  </PaginationItem>
                  <PaginationItem>
                    <PaginationLink
                      href="#pablo"
                      onClick={e => e.preventDefault()}
                    >
                      3
                    </PaginationLink>
                  </PaginationItem>
                  <PaginationItem>
                    <PaginationLink
                      href="#pablo"
                      onClick={e => e.preventDefault()}
                    >
                      4
                    </PaginationLink>
                  </PaginationItem>
                  <PaginationItem>
                    <PaginationLink
                      href="#pablo"
                      onClick={e => e.preventDefault()}
                    >
                      5
                    </PaginationLink>
                  </PaginationItem>
                </Pagination>
                <Pagination>
                  <PaginationItem>
                    <PaginationLink
                      aria-label="Previous"
                      href="#pablo"
                      onClick={e => e.preventDefault()}
                    >
                      <span aria-hidden={true}>
                        <i
                          aria-hidden={true}
                          className="tim-icons icon-double-left"
                        />
                      </span>
                    </PaginationLink>
                  </PaginationItem>
                  <PaginationItem>
                    <PaginationLink
                      href="#pablo"
                      onClick={e => e.preventDefault()}
                    >
                      1
                    </PaginationLink>
                  </PaginationItem>
                  <PaginationItem className="active">
                    <PaginationLink
                      href="#pablo"
                      onClick={e => e.preventDefault()}
                    >
                      2
                    </PaginationLink>
                  </PaginationItem>
                  <PaginationItem>
                    <PaginationLink
                      href="#pablo"
                      onClick={e => e.preventDefault()}
                    >
                      3
                    </PaginationLink>
                  </PaginationItem>
                  <PaginationItem>
                    <PaginationLink
                      aria-label="Next"
                      href="#pablo"
                      onClick={e => e.preventDefault()}
                    >
                      <span aria-hidden={true}>
                        <i
                          aria-hidden={true}
                          className="tim-icons icon-double-right"
                        />
                      </span>
                    </PaginationLink>
                  </PaginationItem>
                </Pagination>
                <div className="pagination-container justify-content-center">
                  <Pagination
                    className="pagination pagination-primary"
                    listClassName="pagination-primary"
                  >
                    <PaginationItem>
                      <PaginationLink
                        aria-label="Previous"
                        href="#pablo"
                        onClick={e => e.preventDefault()}
                      >
                        <span aria-hidden={true}>
                          <i
                            aria-hidden={true}
                            className="fa fa-angle-double-left"
                          />
                        </span>
                      </PaginationLink>
                    </PaginationItem>
                    <PaginationItem>
                      <PaginationLink
                        href="#pablo"
                        onClick={e => e.preventDefault()}
                      >
                        1
                      </PaginationLink>
                    </PaginationItem>
                    <PaginationItem>
                      <PaginationLink
                        href="#pablo"
                        onClick={e => e.preventDefault()}
                      >
                        2
                      </PaginationLink>
                    </PaginationItem>
                    <PaginationItem className="active">
                      <PaginationLink
                        href="#pablo"
                        onClick={e => e.preventDefault()}
                      >
                        3
                      </PaginationLink>
                    </PaginationItem>
                    <PaginationItem>
                      <PaginationLink
                        href="#pablo"
                        onClick={e => e.preventDefault()}
                      >
                        4
                      </PaginationLink>
                    </PaginationItem>
                    <PaginationItem>
                      <PaginationLink
                        href="#pablo"
                        onClick={e => e.preventDefault()}
                      >
                        5
                      </PaginationLink>
                    </PaginationItem>
                    <PaginationItem>
                      <PaginationLink
                        aria-label="Next"
                        href="#pablo"
                        onClick={e => e.preventDefault()}
                      >
                        <span aria-hidden={true}>
                          <i
                            aria-hidden={true}
                            className="fa fa-angle-double-right"
                          />
                        </span>
                      </PaginationLink>
                    </PaginationItem>
                  </Pagination>
                </div>
                <br />
                <h3 className="mb-5">Labels</h3>
                <Badge color="default">Default</Badge>
                <Badge color="primary" className="ml-1">
                  Primary
                </Badge>
                <Badge color="success" className="ml-1">
                  Success
                </Badge>
                <Badge color="info" className="ml-1">
                  Info
                </Badge>
                <Badge color="warning" className="ml-1">
                  Warning
                </Badge>
                <Badge color="danger" className="ml-1">
                  Danger
                </Badge>
                <Badge color="neutral" className="ml-1">
                  Neutral
                </Badge>
              </Col>
            </Row>
            <br />
          </Container>
        </div>
      </>
    );
  }
}

export default PaginationSection;
