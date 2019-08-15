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
  ButtonGroup,
  Card,
  CardHeader,
  CardBody,
  CardTitle,
  Label,
  FormGroup,
  Form,
  Input,
  Media,
  Pagination,
  PaginationItem,
  PaginationLink,
  Table,
  Container,
  Row,
  Col,
  UncontrolledTooltip
} from "reactstrap";

class ContentAreas extends React.Component {
  render() {
    return (
      <>
        <div className="section">
          <Container>
            <div className="space-70" />
            <div className="cd-section" id="contentAreas">
              <h3 className="title">Content Areas</h3>
              {/* tables */}
              <div id="tables">
                <div className="title">
                  <h3>
                    <small>Tables</small>
                  </h3>
                </div>
                <Row>
                  <Col md="12">
                    <h4>
                      <small>Simple Table</small>
                    </h4>
                  </Col>
                  <Col className="ml-auto mr-auto" md="8">
                    <h6>Simple With Actions</h6>
                    <Card className="card-plain">
                      <CardHeader>
                        <CardTitle tag="h4" />
                      </CardHeader>
                      <CardBody>
                        <Table className="tablesorter" responsive>
                          <thead>
                            <tr>
                              <th className="text-center">#</th>
                              <th>Name</th>
                              <th>Job Position</th>
                              <th className="text-center">Since</th>
                              <th className="text-right">Salary</th>
                              <th className="text-right">Actions</th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr>
                              <td className="text-center">1</td>
                              <td>Andrew Mike</td>
                              <td>Develop</td>
                              <td className="text-center">2013</td>
                              <td className="text-right">€ 99,225</td>
                              <td className="text-right">
                                <Button
                                  className="btn-icon"
                                  color="info"
                                  size="sm"
                                >
                                  <i className="tim-icons icon-single-02" />
                                </Button>
                                <Button
                                  className="btn-icon ml-1"
                                  color="success"
                                  size="sm"
                                >
                                  <i className="tim-icons icon-settings" />
                                </Button>
                                <Button
                                  className="btn-icon ml-1"
                                  color="danger"
                                  size="sm"
                                >
                                  <i className="tim-icons icon-simple-remove" />
                                </Button>
                              </td>
                            </tr>
                            <tr>
                              <td className="text-center">2</td>
                              <td>John Doe</td>
                              <td>Design</td>
                              <td className="text-center">2012</td>
                              <td className="text-right">€ 89,241</td>
                              <td className="text-right">
                                <Button
                                  className="btn-icon"
                                  color="info"
                                  size="sm"
                                >
                                  <i className="tim-icons icon-single-02" />
                                </Button>
                                <Button
                                  className="btn-icon ml-1"
                                  color="success"
                                  size="sm"
                                >
                                  <i className="tim-icons icon-settings" />
                                </Button>
                                <Button
                                  className="btn-icon ml-1"
                                  color="danger"
                                  size="sm"
                                >
                                  <i className="tim-icons icon-simple-remove" />
                                </Button>
                              </td>
                            </tr>
                            <tr>
                              <td className="text-center">3</td>
                              <td>Alex Mike</td>
                              <td>Design</td>
                              <td className="text-center">2010</td>
                              <td className="text-right">€ 92,144</td>
                              <td className="text-right">
                                <Button
                                  className="btn-icon"
                                  color="info"
                                  size="sm"
                                >
                                  <i className="tim-icons icon-single-02" />
                                </Button>
                                <Button
                                  className="btn-icon ml-1"
                                  color="success"
                                  size="sm"
                                >
                                  <i className="tim-icons icon-settings" />
                                </Button>
                                <Button
                                  className="btn-icon ml-1"
                                  color="danger"
                                  size="sm"
                                >
                                  <i className="tim-icons icon-simple-remove" />
                                </Button>
                              </td>
                            </tr>
                            <tr>
                              <td className="text-center">4</td>
                              <td>Mike Monday</td>
                              <td>Marketing</td>
                              <td className="text-center">2013</td>
                              <td className="text-right">€ 49,990</td>
                              <td className="text-right">
                                <Button
                                  className="btn-icon btn-simple"
                                  color="info"
                                  size="sm"
                                >
                                  <i className="tim-icons icon-single-02" />
                                </Button>
                                <Button
                                  className="btn-icon btn-simple ml-1"
                                  color="success"
                                  size="sm"
                                >
                                  <i className="tim-icons icon-settings" />
                                </Button>
                                <Button
                                  className="btn-icon btn-simple ml-1"
                                  color="danger"
                                  size="sm"
                                >
                                  <i className="tim-icons icon-simple-remove" />
                                </Button>
                              </td>
                            </tr>
                            <tr>
                              <td className="text-center">5</td>
                              <td>Paul Dickens</td>
                              <td>Communication</td>
                              <td className="text-center">2015</td>
                              <td className="text-right">€ 69,201</td>
                              <td className="text-right">
                                <Button
                                  className="btn-icon btn-simple"
                                  color="info"
                                  size="sm"
                                >
                                  <i className="tim-icons icon-single-02" />
                                </Button>
                                <Button
                                  className="btn-icon btn-simple ml-1"
                                  color="success"
                                  size="sm"
                                >
                                  <i className="tim-icons icon-settings" />
                                </Button>
                                <Button
                                  className="btn-icon btn-simple ml-1"
                                  color="danger"
                                  size="sm"
                                >
                                  <i className="tim-icons icon-simple-remove" />
                                </Button>
                              </td>
                            </tr>
                            <tr>
                              <td className="text-center">6</td>
                              <td>Manuel Rico</td>
                              <td>Manager</td>
                              <td className="text-center">2012</td>
                              <td className="text-right">€ 99,201</td>
                              <td className="text-right">
                                <Button
                                  className="btn-icon btn-simple"
                                  color="info"
                                  id="tooltip159859750"
                                  size="sm"
                                  type="button"
                                >
                                  <i className="tim-icons icon-single-02" />
                                </Button>
                                <Button
                                  className="btn-icon btn-simple ml-1"
                                  color="success"
                                  size="sm"
                                >
                                  <i className="tim-icons icon-settings" />
                                </Button>
                                <Button
                                  className="btn-icon btn-simple ml-1"
                                  color="danger"
                                  size="sm"
                                >
                                  <i className="tim-icons icon-simple-remove" />
                                </Button>
                              </td>
                            </tr>
                          </tbody>
                        </Table>
                      </CardBody>
                    </Card>
                    <h6>Striped With Checkboxes</h6>
                    <Card className="card-plain">
                      <CardHeader>
                        <CardTitle tag="h4" />
                      </CardHeader>
                      <CardBody>
                        <Table className="tablesorter" responsive striped>
                          <thead>
                            <tr>
                              <th className="text-center">#</th>
                              <th className="text-center" />
                              <th>Product Name</th>
                              <th>Type</th>
                              <th className="text-center">Qty</th>
                              <th className="text-right">Price</th>
                              <th className="text-right">Amount</th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr>
                              <td className="text-center">1</td>
                              <td className="text-center">
                                <FormGroup check>
                                  <Label check>
                                    <Input defaultChecked type="checkbox" />
                                    <span className="form-check-sign" />
                                  </Label>
                                </FormGroup>
                              </td>
                              <td>Moleskine Agenda</td>
                              <td>Office</td>
                              <td className="text-center">25</td>
                              <td className="text-right">€ 49</td>
                              <td className="text-right">€ 1,225</td>
                            </tr>
                            <tr>
                              <td className="text-center">2</td>
                              <td className="text-center">
                                <FormGroup check>
                                  <Label check>
                                    <Input type="checkbox" />
                                    <span className="form-check-sign" />
                                  </Label>
                                </FormGroup>
                              </td>
                              <td>Stabilo Pen</td>
                              <td>Office</td>
                              <td className="text-center">30</td>
                              <td className="text-right">€ 10</td>
                              <td className="text-right">€ 300</td>
                            </tr>
                            <tr>
                              <td className="text-center">3</td>
                              <td className="text-center">
                                <FormGroup check>
                                  <Label check>
                                    <Input defaultChecked type="checkbox" />
                                    <span className="form-check-sign" />
                                  </Label>
                                </FormGroup>
                              </td>
                              <td>A4 Paper Pack</td>
                              <td>Office</td>
                              <td className="text-center">50</td>
                              <td className="text-right">€ 10.99</td>
                              <td className="text-right">€ 109</td>
                            </tr>
                            <tr>
                              <td className="text-center">4</td>
                              <td className="text-center">
                                <FormGroup check>
                                  <Label check>
                                    <Input type="checkbox" />
                                    <span className="form-check-sign" />
                                  </Label>
                                </FormGroup>
                              </td>
                              <td>Apple iPad</td>
                              <td>Meeting</td>
                              <td className="text-center">10</td>
                              <td className="text-right">€ 499.00</td>
                              <td className="text-right">€ 4,990</td>
                            </tr>
                            <tr>
                              <td className="text-center">5</td>
                              <td className="text-center">
                                <FormGroup check>
                                  <Label check>
                                    <Input defaultChecked type="checkbox" />
                                    <span className="form-check-sign" />
                                  </Label>
                                </FormGroup>
                              </td>
                              <td>Apple iPhone</td>
                              <td>Communication</td>
                              <td className="text-center">10</td>
                              <td className="text-right">€ 599.00</td>
                              <td className="text-right">€ 5,999</td>
                            </tr>
                            <tr>
                              <td colSpan="5" />
                              <td className="td-total">Total</td>
                              <td className="td-price">€ 35,999</td>
                            </tr>
                          </tbody>
                        </Table>
                      </CardBody>
                    </Card>
                  </Col>
                </Row>
                <Row>
                  <Col md="12">
                    <h4>
                      <small>Shopping Cart Table</small>
                    </h4>
                  </Col>
                  <Col md="12">
                    <Card className="card-plain">
                      <CardHeader>
                        <CardTitle tag="h4">Shopping Cart Table</CardTitle>
                      </CardHeader>
                      <CardBody>
                        <Table
                          className="tablesorter table-shopping"
                          responsive
                        >
                          <thead>
                            <tr>
                              <th className="text-center" />
                              <th>Product</th>
                              <th>Color</th>
                              <th>Size</th>
                              <th className="text-right">Price</th>
                              <th className="text-right">Qty</th>
                              <th className="text-right">Amount</th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr>
                              <td>
                                <div className="img-container">
                                  <img
                                    alt="..."
                                    src={require("assets/img/jacket.png")}
                                  />
                                </div>
                              </td>
                              <td className="td-name">
                                <a
                                  href="#pablo"
                                  onClick={e => e.preventDefault()}
                                >
                                  Suede Biker Jacket
                                </a>
                                <br />
                                <small>by Saint Laurent</small>
                              </td>
                              <td>Black</td>
                              <td>M</td>
                              <td className="td-number">
                                <small>€</small>
                                3,390
                              </td>
                              <td className="td-number">
                                1{" "}
                                <ButtonGroup>
                                  <Button color="info" size="sm">
                                    <i className="tim-icons icon-simple-delete" />
                                  </Button>
                                  <Button color="info" size="sm">
                                    <i className="tim-icons icon-simple-add" />
                                  </Button>
                                </ButtonGroup>
                              </td>
                              <td className="td-number">
                                <small>€</small>
                                549
                              </td>
                              <td className="td-actions">
                                <Button
                                  className="btn-link"
                                  color="danger"
                                  id="tooltip653500052"
                                  type="button"
                                >
                                  <i className="tim-icons icon-simple-remove" />
                                </Button>
                                <UncontrolledTooltip
                                  delay={0}
                                  placement="left"
                                  target="tooltip653500052"
                                >
                                  Remove item
                                </UncontrolledTooltip>
                              </td>
                            </tr>
                            <tr>
                              <td>
                                <div className="img-container">
                                  <img
                                    alt="..."
                                    src={require("assets/img/t-shirt.png")}
                                  />
                                </div>
                              </td>
                              <td className="td-name">
                                <a
                                  href="#pablo"
                                  onClick={e => e.preventDefault()}
                                >
                                  Jersey T-Shirt
                                </a>
                                <br />
                                <small>by Balmain</small>
                              </td>
                              <td>Black</td>
                              <td>M</td>
                              <td className="td-number">
                                <small>€</small>
                                499
                              </td>
                              <td className="td-number">
                                2{" "}
                                <ButtonGroup>
                                  <Button color="info" size="sm">
                                    <i className="tim-icons icon-simple-delete" />
                                  </Button>
                                  <Button color="info" size="sm">
                                    <i className="tim-icons icon-simple-add" />
                                  </Button>
                                </ButtonGroup>
                              </td>
                              <td className="td-number">
                                <small>€</small>
                                998
                              </td>
                              <td className="td-actions">
                                <Button
                                  className="btn-link"
                                  color="danger"
                                  id="tooltip445034797"
                                  type="button"
                                >
                                  <i className="tim-icons icon-simple-remove" />
                                </Button>
                                <UncontrolledTooltip
                                  delay={0}
                                  placement="left"
                                  target="tooltip445034797"
                                >
                                  Remove item
                                </UncontrolledTooltip>
                              </td>
                            </tr>
                            <tr>
                              <td>
                                <div className="img-container">
                                  <img
                                    alt="..."
                                    src={require("assets/img/gucci.png")}
                                  />
                                </div>
                              </td>
                              <td className="td-name">
                                <a
                                  href="#pablo"
                                  onClick={e => e.preventDefault()}
                                >
                                  Slim-Fit Swim Short
                                </a>
                                <br />
                                <small>by Prada</small>
                              </td>
                              <td>Red</td>
                              <td>M</td>
                              <td className="td-number">
                                <small>€</small>
                                200
                              </td>
                              <td className="td-number">
                                1{" "}
                                <ButtonGroup>
                                  <Button color="info" size="sm">
                                    <i className="tim-icons icon-simple-delete" />
                                  </Button>
                                  <Button color="info" size="sm">
                                    <i className="tim-icons icon-simple-add" />
                                  </Button>
                                </ButtonGroup>
                              </td>
                              <td className="td-number">
                                <small>€</small>
                                799
                              </td>
                              <td className="td-actions">
                                <Button
                                  className="btn-link"
                                  color="danger"
                                  id="tooltip456987852"
                                  type="button"
                                >
                                  <i className="tim-icons icon-simple-remove" />
                                </Button>
                                <UncontrolledTooltip
                                  delay={0}
                                  placement="left"
                                  target="tooltip456987852"
                                >
                                  Remove item
                                </UncontrolledTooltip>
                              </td>
                            </tr>
                            <tr>
                              <td colSpan="3" />
                              <td className="td-total">Total</td>
                              <td className="td-price">
                                <small>€</small>
                                2,346
                              </td>
                              <td className="text-right" colSpan="3">
                                <Button className="btn-round" color="info">
                                  Complete Purchase{" "}
                                  <i className="tim-icons icon-minimal-right" />
                                </Button>
                              </td>
                            </tr>
                          </tbody>
                        </Table>
                      </CardBody>
                    </Card>
                  </Col>
                </Row>
              </div>
              {/* end tables */}
              <div className="space-50" />
              {/* comments */}
              <div id="comments">
                <div className="title">
                  <h3>
                    <small>Comments</small>
                  </h3>
                </div>
                <Row>
                  <Col className="ml-auto mr-auto" md="8">
                    <div className="media-area">
                      <h3 className="title text-center">
                        <small>10 Comments</small>
                      </h3>
                      <Media>
                        <a
                          className="pull-left"
                          href="#pablo"
                          onClick={e => e.preventDefault()}
                        >
                          <div className="avatar">
                            <Media
                              alt="..."
                              className="img-raised"
                              src={require("assets/img/marie.jpg")}
                            />
                          </div>
                        </a>
                        <Media body>
                          <Media heading tag="h5">
                            Tina Andrew{" "}
                            <small className="text-muted">
                              · 7 minutes ago
                            </small>
                          </Media>
                          <p>
                            Chance too good. God level bars. I'm so proud of
                            @LifeOfDesiigner #1 song in the country. Panda!
                            Don't be scared of the truth because we need to
                            restart the human foundation in truth I stand with
                            the most humility. We are so blessed!
                          </p>
                          <p>
                            All praises and blessings to the families of people
                            who never gave up on dreams. Don't forget, You're
                            Awesome!
                          </p>
                          <div className="media-footer">
                            <Button
                              className="btn-link pull-right"
                              color="primary"
                              href="#pablo"
                              onClick={e => e.preventDefault()}
                              id="tooltip889553588"
                            >
                              <i className="tim-icons icon-send mr-1" />
                              Reply
                            </Button>
                            <UncontrolledTooltip
                              delay={0}
                              target="tooltip889553588"
                            >
                              Reply to Comment
                            </UncontrolledTooltip>
                            <Button
                              className="btn-link pull-right"
                              color="danger"
                              href="#pablo"
                              onClick={e => e.preventDefault()}
                            >
                              <i className="tim-icons icon-heart-2 mr-1" />
                              243
                            </Button>
                          </div>
                          <Media className="media-post">
                            <a
                              className="pull-left author"
                              href="#pablo"
                              onClick={e => e.preventDefault()}
                            >
                              <div className="avatar">
                                <Media
                                  alt="..."
                                  className="img-raised"
                                  src={require("assets/img/michael.jpg")}
                                />
                              </div>
                            </a>
                            <Media body>
                              <Input
                                placeholder="Write a nice reply or go home..."
                                rows="4"
                                type="textarea"
                              />
                              <div className="media-footer">
                                <Button
                                  className="pull-right"
                                  color="primary"
                                  href="#pablo"
                                  onClick={e => e.preventDefault()}
                                >
                                  <i className="tim-icons icon-send mr-1" />
                                  Reply
                                </Button>
                              </div>
                            </Media>
                          </Media>
                        </Media>
                      </Media>
                      <Media>
                        <a
                          className="pull-left"
                          href="#pablo"
                          onClick={e => e.preventDefault()}
                        >
                          <div className="avatar">
                            <Media
                              alt="..."
                              className="img-raised"
                              src={require("assets/img/olivia.jpg")}
                            />
                          </div>
                        </a>
                        <Media body>
                          <Media heading tag="h5">
                            John Camber{" "}
                            <small className="text-muted">· Yesterday</small>
                          </Media>
                          <p>
                            Hello guys, nice to have you on the platform! There
                            will be a lot of great stuff coming soon. We will
                            keep you posted for the latest news.
                          </p>
                          <p>Don't forget, You're Awesome!</p>
                          <div className="media-footer">
                            <Button
                              className="btn-link pull-right"
                              color="primary"
                              href="#pablo"
                              onClick={e => e.preventDefault()}
                              id="tooltip768206895"
                            >
                              <i className="tim-icons icon-send mr-1" />
                              Reply
                            </Button>
                            <UncontrolledTooltip
                              delay={0}
                              target="tooltip768206895"
                            >
                              Reply to Comment
                            </UncontrolledTooltip>
                            <Button
                              className="btn-link pull-right"
                              color="default"
                              href="#pablo"
                              onClick={e => e.preventDefault()}
                            >
                              <i className="tim-icons icon-heart-2 mr-1" />
                              25
                            </Button>
                          </div>
                          <Media>
                            <a
                              className="pull-left"
                              href="#pablo"
                              onClick={e => e.preventDefault()}
                            >
                              <div className="avatar">
                                <Media
                                  alt="..."
                                  className="img-raised"
                                  src={require("assets/img/emily.jpg")}
                                />
                              </div>
                            </a>
                            <Media body>
                              <Media heading tag="h5">
                                Tina Andrew{" "}
                                <small className="text-muted">
                                  · 2 Days Ago
                                </small>
                              </Media>
                              <p>
                                Hello guys, nice to have you on the platform!
                                There will be a lot of great stuff coming soon.
                                We will keep you posted for the latest news.
                              </p>
                              <p>Don't forget, You're Awesome!</p>
                              <div className="media-footer">
                                <Button
                                  className="btn-link pull-right"
                                  color="primary"
                                  href="#pablo"
                                  onClick={e => e.preventDefault()}
                                  id="tooltip816398276"
                                >
                                  <i className="tim-icons icon-send mr-1" />
                                  Reply
                                </Button>
                                <UncontrolledTooltip
                                  delay={0}
                                  target="tooltip816398276"
                                >
                                  Reply to Comment
                                </UncontrolledTooltip>
                                <Button
                                  className="btn-link pull-right"
                                  color="danger"
                                  href="#pablo"
                                  onClick={e => e.preventDefault()}
                                >
                                  <i className="tim-icons icon-heart-2 mr-1" />
                                  243
                                </Button>
                              </div>
                            </Media>
                          </Media>
                        </Media>
                      </Media>
                      <Media>
                        <a
                          className="pull-left"
                          href="#pablo"
                          onClick={e => e.preventDefault()}
                        >
                          <div className="avatar">
                            <Media
                              alt="..."
                              className="img-raised"
                              src={require("assets/img/james.jpg")}
                            />
                          </div>
                        </a>
                        <Media body>
                          <Media heading tag="h5">
                            Rosa Thompson{" "}
                            <small className="text-muted">· 2 Days Ago</small>
                          </Media>
                          <p>
                            Hello guys, nice to have you on the platform! There
                            will be a lot of great stuff coming soon. We will
                            keep you posted for the latest news.
                          </p>
                          <p>Don't forget, You're Awesome!</p>
                          <div className="media-footer">
                            <Button
                              className="btn-link pull-right"
                              color="primary"
                              href="#pablo"
                              onClick={e => e.preventDefault()}
                              id="tooltip987969940"
                            >
                              <i className="tim-icons icon-send mr-1" />
                              Reply
                            </Button>
                            <UncontrolledTooltip
                              delay={0}
                              target="tooltip987969940"
                            >
                              Reply to Comment
                            </UncontrolledTooltip>
                            <Button
                              className="btn-link pull-right"
                              color="danger"
                              href="#pablo"
                              onClick={e => e.preventDefault()}
                            >
                              <i className="tim-icons icon-heart-2 mr-1" />
                              243
                            </Button>
                          </div>
                        </Media>
                      </Media>
                      <Pagination
                        className="pagination pagination-primary justify-content-center"
                        listClassName="pagination-primary justify-content-center"
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
                                className="fa fa-angle-double-right"
                              />
                            </span>
                          </PaginationLink>
                        </PaginationItem>
                      </Pagination>
                    </div>
                    <h4 className="text-center">
                      Post your comment <br />
                      <small className="text-muted">- Logged In User -</small>
                    </h4>
                    <Media className="media-post">
                      <a
                        className="pull-left author"
                        href="#pablo"
                        onClick={e => e.preventDefault()}
                      >
                        <div className="avatar">
                          <Media
                            alt="..."
                            className="img-raised"
                            src={require("assets/img/james.jpg")}
                          />
                        </div>
                      </a>
                      <Media body>
                        <Input
                          placeholder="Write some nice stuff or nothing..."
                          rows="6"
                          type="textarea"
                        />
                        <div className="media-footer">
                          <Button
                            className="btn-wd pull-right"
                            color="primary"
                            href="#pablo"
                            onClick={e => e.preventDefault()}
                          >
                            Post Comment
                          </Button>
                        </div>
                      </Media>
                    </Media>
                    {/* end media-post */}
                    <h4 className="text-center">
                      Post your comment <br />
                      <small className="text-muted">
                        - Not Logged In User -
                      </small>
                    </h4>
                    <Media className="media-post">
                      <a
                        className="pull-left author"
                        href="#pablo"
                        onClick={e => e.preventDefault()}
                      >
                        <div className="avatar">
                          <Media
                            alt="..."
                            className="img-raised"
                            src={require("assets/img/placeholder.jpg")}
                          />
                        </div>
                      </a>
                      <Media body>
                        <Form className="form">
                          <Row>
                            <Col md="6">
                              <FormGroup>
                                <Input placeholder="Your Name" type="text" />
                              </FormGroup>
                            </Col>
                            <Col md="6">
                              <FormGroup>
                                <Input placeholder="Your email" type="email" />
                              </FormGroup>
                            </Col>
                          </Row>
                          <Input
                            placeholder="Write some nice stuff or nothing..."
                            rows="6"
                            type="textarea"
                          />
                          <div className="media-footer">
                            <h6 className="text-muted">Sign in with</h6>
                            <Button
                              className="btn-icon btn-round"
                              color="twitter"
                              href=""
                            >
                              <i className="fab fa-twitter" />
                            </Button>
                            <Button
                              className="btn-icon btn-round ml-1"
                              color="facebook"
                              href=""
                            >
                              <i className="fab fa-facebook-square" />
                            </Button>
                            <Button
                              className="btn-icon btn-round ml-1"
                              color="google"
                              href=""
                            >
                              <i className="fab fa-google-plus-square" />
                            </Button>
                            <Button
                              className="pull-right"
                              color="primary"
                              href="#pablo"
                              onClick={e => e.preventDefault()}
                            >
                              Post Comment
                            </Button>
                          </div>
                        </Form>
                      </Media>
                      {/* end media-body */}
                    </Media>
                    {/* end media-post */}
                  </Col>
                </Row>
              </div>
              {/* end comments */}
            </div>
          </Container>
        </div>
      </>
    );
  }
}

export default ContentAreas;
