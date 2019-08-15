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
// reactstrap components
import {
  NavItem,
  NavLink,
  Nav,
  TabContent,
  TabPane,
  Container,
  Row,
  Col
} from "reactstrap";

class Pills extends React.Component {
  state = {
    hTabs: 1,
    vTabs: 1,
    hiTabs: 1,
    viTabs: 1,
    ihTabs: 1,
    ivTabs: 1
  };
  toggleTabs = (e, stateName, index) => {
    e.preventDefault();
    this.setState({
      [stateName]: index
    });
  };
  render() {
    return (
      <>
        <div className="section section-pills">
          <Container>
            <div id="navigation-pills">
              <div className="title">
                <h4>Navigation Pills</h4>
              </div>
              <Row>
                <Col md="6">
                  <p className="category">Horizontal tabs</p>
                  <Nav className="nav-pills-primary" pills role="tablist">
                    <NavItem>
                      <NavLink
                        className={classnames({
                          active: this.state.hTabs === 1
                        })}
                        onClick={e => this.toggleTabs(e, "hTabs", 1)}
                        href="#pablo"
                      >
                        Profile
                      </NavLink>
                    </NavItem>
                    <NavItem>
                      <NavLink
                        className={classnames({
                          active: this.state.hTabs === 2
                        })}
                        onClick={e => this.toggleTabs(e, "hTabs", 2)}
                        href="#pablo"
                      >
                        Settings
                      </NavLink>
                    </NavItem>
                    <NavItem>
                      <NavLink
                        className={classnames({
                          active: this.state.hTabs === 3
                        })}
                        onClick={e => this.toggleTabs(e, "hTabs", 3)}
                        href="#pablo"
                      >
                        Options
                      </NavLink>
                    </NavItem>
                  </Nav>
                  <TabContent
                    className="tab-space"
                    activeTab={"hTabs" + this.state.hTabs}
                  >
                    <TabPane tabId="hTabs1">
                      Collaboratively administrate empowered markets via
                      plug-and-play networks. Dynamically procrastinate B2C
                      users after installed base benefits. <br />
                      <br />
                      Dramatically visualize customer directed convergence
                      without revolutionary ROI.
                    </TabPane>
                    <TabPane tabId="hTabs2">
                      Efficiently unleash cross-media information without
                      cross-media value. Quickly maximize timely deliverables
                      for real-time schemas. <br />
                      <br />
                      Dramatically maintain clicks-and-mortar solutions without
                      functional solutions.
                    </TabPane>
                    <TabPane tabId="hTabs3">
                      Completely synergize resource taxing relationships via
                      premier niche markets. Professionally cultivate one-to-one
                      customer service with robust ideas. <br />
                      <br />
                      Dynamically innovate resource-leveling customer service
                      for state of the art customer service.
                    </TabPane>
                  </TabContent>
                </Col>
                <Col md="6">
                  <p className="category">Vertical tabs</p>
                  <Row>
                    <Col md="4">
                      <Nav
                        className="nav-pills-primary flex-column"
                        pills
                        role="tablist"
                      >
                        <NavItem>
                          <NavLink
                            className={classnames({
                              active: this.state.vTabs === 1
                            })}
                            onClick={e => this.toggleTabs(e, "vTabs", 1)}
                            href="#pablo"
                          >
                            Profile
                          </NavLink>
                        </NavItem>
                        <NavItem>
                          <NavLink
                            className={classnames({
                              active: this.state.vTabs === 2
                            })}
                            onClick={e => this.toggleTabs(e, "vTabs", 2)}
                            href="#pablo"
                          >
                            Settings
                          </NavLink>
                        </NavItem>
                        <NavItem>
                          <NavLink
                            className={classnames({
                              active: this.state.vTabs === 3
                            })}
                            onClick={e => this.toggleTabs(e, "vTabs", 3)}
                            href="#pablo"
                          >
                            Options
                          </NavLink>
                        </NavItem>
                      </Nav>
                    </Col>
                    <Col md="8">
                      <TabContent activeTab={"vTabs" + this.state.vTabs}>
                        <TabPane tabId="vTabs1">
                          Collaboratively administrate empowered markets via
                          plug-and-play networks. Dynamically procrastinate B2C
                          users after installed base benefits. <br />
                          <br />
                          Dramatically visualize customer directed convergence
                          without revolutionary ROI.
                        </TabPane>
                        <TabPane tabId="vTabs2">
                          Efficiently unleash cross-media information without
                          cross-media value. Quickly maximize timely
                          deliverables for real-time schemas. <br />
                          <br />
                          Dramatically maintain clicks-and-mortar solutions
                          without functional solutions.
                        </TabPane>
                        <TabPane tabId="vTabs3">
                          Completely synergize resource taxing relationships via
                          premier niche markets. Professionally cultivate
                          one-to-one customer service with robust ideas. <br />
                          <br />
                          Dynamically innovate resource-leveling customer
                          service for state of the art customer service.
                        </TabPane>
                      </TabContent>
                    </Col>
                  </Row>
                </Col>
              </Row>
              <div className="title">
                <p className="category">With Icons</p>
              </div>
              <Row>
                <Col md="6">
                  {/*color-classes: "nav-pills-primary", "nav-pills-info", "nav-pills-success", "nav-pills-warning","nav-pills-danger"*/}
                  <Nav
                    className="nav-pills-primary nav-pills-icons"
                    pills
                    role="tablist"
                  >
                    <NavItem>
                      <NavLink
                        className={classnames({
                          active: this.state.hiTabs === 1
                        })}
                        onClick={e => this.toggleTabs(e, "hiTabs", 1)}
                        href="#pablo"
                      >
                        <i className="tim-icons icon-spaceship" />
                        Home
                      </NavLink>
                    </NavItem>
                    <NavItem>
                      <NavLink
                        className={classnames({
                          active: this.state.hiTabs === 2
                        })}
                        onClick={e => this.toggleTabs(e, "hiTabs", 2)}
                        href="#pablo"
                      >
                        <i className="tim-icons icon-bag-16" />
                        Messages
                      </NavLink>
                    </NavItem>
                    <NavItem>
                      <NavLink
                        className={classnames({
                          active: this.state.hiTabs === 3
                        })}
                        onClick={e => this.toggleTabs(e, "hiTabs", 3)}
                        href="#pablo"
                      >
                        <i className="tim-icons icon-settings" />
                        Settings
                      </NavLink>
                    </NavItem>
                  </Nav>
                  <TabContent
                    className="tab-space"
                    activeTab={"hiTabs" + this.state.hiTabs}
                  >
                    <TabPane tabId="hiTabs1">
                      Collaboratively administrate empowered markets via
                      plug-and-play networks. Dynamically procrastinate B2C
                      users after installed base benefits. <br />
                      <br />
                      Dramatically visualize customer directed convergence
                      without revolutionary ROI.
                    </TabPane>
                    <TabPane tabId="hiTabs2">
                      Efficiently unleash cross-media information without
                      cross-media value. Quickly maximize timely deliverables
                      for real-time schemas. <br />
                      <br />
                      Dramatically maintain clicks-and-mortar solutions without
                      functional solutions.
                    </TabPane>
                    <TabPane tabId="hiTabs3">
                      Completely synergize resource taxing relationships via
                      premier niche markets. Professionally cultivate one-to-one
                      customer service with robust ideas. <br />
                      <br />
                      Dynamically innovate resource-leveling customer service
                      for state of the art customer service.
                    </TabPane>
                  </TabContent>
                </Col>
                <Col md="6">
                  <Row>
                    <Col lg="3" md="6">
                      {/*color-classes: "nav-pills-primary", "nav-pills-info", "nav-pills-success", "nav-pills-warning","nav-pills-danger"*/}
                      <Nav
                        className="nav-pills-primary nav-pills-icons flex-column"
                        pills
                        role="tablist"
                      >
                        <NavItem>
                          <NavLink
                            className={classnames({
                              active: this.state.viTabs === 1
                            })}
                            onClick={e => this.toggleTabs(e, "viTabs", 1)}
                            href="#pablo"
                          >
                            <i className="tim-icons icon-spaceship" />
                            Home
                          </NavLink>
                        </NavItem>
                        <NavItem>
                          <NavLink
                            className={classnames({
                              active: this.state.viTabs === 2
                            })}
                            onClick={e => this.toggleTabs(e, "viTabs", 2)}
                            href="#pablo"
                          >
                            <i className="tim-icons icon-settings" />
                            Settings
                          </NavLink>
                        </NavItem>
                      </Nav>
                    </Col>
                    <Col md="8">
                      <TabContent activeTab={"viTabs" + this.state.viTabs}>
                        <TabPane tabId="viTabs1">
                          Collaboratively administrate empowered markets via
                          plug-and-play networks. Dynamically procrastinate B2C
                          users after installed base benefits. <br />
                          <br />
                          Dramatically visualize customer directed convergence
                          without revolutionary ROI.
                        </TabPane>
                        <TabPane tabId="viTabs2">
                          Efficiently unleash cross-media information without
                          cross-media value. Quickly maximize timely
                          deliverables for real-time schemas. <br />
                          <br />
                          Dramatically maintain clicks-and-mortar solutions
                          without functional solutions.
                        </TabPane>
                      </TabContent>
                    </Col>
                  </Row>
                </Col>
              </Row>
              <div className="title">
                <p className="category">Just Icons</p>
              </div>
              <Row>
                <Col className="mb-5" md="6">
                  <Row>
                    <Col md="3">
                      {/*color-classes: "nav-pills-primary", "nav-pills-info", "nav-pills-success", "nav-pills-warning","nav-pills-danger"*/}
                      <Nav
                        className="nav-pills-info nav-pills-just-icons"
                        pills
                        role="tablist"
                      >
                        <NavItem>
                          <NavLink
                            className={classnames({
                              active: this.state.ihTabs === 1
                            })}
                            onClick={e => this.toggleTabs(e, "ihTabs", 1)}
                            href="#pablo"
                          >
                            <i className="tim-icons icon-spaceship" />
                          </NavLink>
                        </NavItem>
                        <NavItem>
                          <NavLink
                            className={classnames({
                              active: this.state.ihTabs === 2
                            })}
                            onClick={e => this.toggleTabs(e, "ihTabs", 2)}
                            href="#pablo"
                          >
                            <i className="tim-icons icon-settings" />
                          </NavLink>
                        </NavItem>
                      </Nav>
                    </Col>
                    <Col md="8">
                      <TabContent activeTab={"ihTabs" + this.state.ihTabs}>
                        <TabPane tabId="ihTabs1">
                          Collaboratively administrate empowered markets via
                          plug-and-play networks. Dynamically procrastinate B2C
                          users after installed base benefits. <br />
                          <br />
                          Dramatically visualize customer directed convergence
                          without revolutionary ROI.
                        </TabPane>
                        <TabPane tabId="ihTabs2">
                          Efficiently unleash cross-media information without
                          cross-media value. Quickly maximize timely
                          deliverables for real-time schemas. <br />
                          <br />
                          Dramatically maintain clicks-and-mortar solutions
                          without functional solutions.
                        </TabPane>
                      </TabContent>
                    </Col>
                  </Row>
                </Col>
                <Col md="6">
                  {/*color-classes: "nav-pills-primary", "nav-pills-info", "nav-pills-success", "nav-pills-warning","nav-pills-danger"*/}
                  <Nav
                    className="nav-pills-info nav-pills-just-icons"
                    pills
                    role="tablist"
                  >
                    <NavItem>
                      <NavLink
                        className={classnames({
                          active: this.state.ivTabs === 1
                        })}
                        onClick={e => this.toggleTabs(e, "ivTabs", 1)}
                        href="#pablo"
                      >
                        <i className="tim-icons icon-spaceship" />
                      </NavLink>
                    </NavItem>
                    <NavItem>
                      <NavLink
                        className={classnames({
                          active: this.state.ivTabs === 2
                        })}
                        onClick={e => this.toggleTabs(e, "ivTabs", 2)}
                        href="#pablo"
                      >
                        <i className="tim-icons icon-bag-16" />
                      </NavLink>
                    </NavItem>
                    <NavItem>
                      <NavLink
                        className={classnames({
                          active: this.state.ivTabs === 3
                        })}
                        onClick={e => this.toggleTabs(e, "ivTabs", 3)}
                        href="#pablo"
                      >
                        <i className="tim-icons icon-settings" />
                      </NavLink>
                    </NavItem>
                  </Nav>
                  <TabContent
                    className="tab-space"
                    activeTab={"ivTabs" + this.state.ivTabs}
                  >
                    <TabPane tabId="ivTabs1">
                      Collaboratively administrate empowered markets via
                      plug-and-play networks. Dynamically procrastinate B2C
                      users after installed base benefits. <br />
                      <br />
                      Dramatically visualize customer directed convergence
                      without revolutionary ROI.
                    </TabPane>
                    <TabPane tabId="ivTabs2">
                      Efficiently unleash cross-media information without
                      cross-media value. Quickly maximize timely deliverables
                      for real-time schemas. <br />
                      <br />
                      Dramatically maintain clicks-and-mortar solutions without
                      functional solutions.
                    </TabPane>
                    <TabPane tabId="ivTabs3">
                      Completely synergize resource taxing relationships via
                      premier niche markets. Professionally cultivate one-to-one
                      customer service with robust ideas. <br />
                      <br />
                      Dynamically innovate resource-leveling customer service
                      for state of the art customer service.
                    </TabPane>
                  </TabContent>
                </Col>
              </Row>
              {/* end nav pills */}
            </div>
          </Container>
        </div>
      </>
    );
  }
}

export default Pills;
