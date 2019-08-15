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
import { Container } from "reactstrap";

class Index extends React.Component {
  componentDidMount() {
    document.body.classList.add("index-page");
  }
  componentWillUnmount() {
    document.body.classList.remove("index-page");
  }
  render() {
    return (
      <>
        <div className="page-header">
          <div className="squares square1" />
          <div className="squares square2" />
          <div className="squares square3" />
          <div className="squares square4" />
          <div className="squares square5" />
          <div className="squares square6" />
          <div className="squares square7" />
          <Container>
            <div className="content-center brand">
              <h1 className="h1-seo">BLK• PRO React</h1>
              <h3>All components</h3>
            </div>
          </Container>
        </div>
      </>
    );
  }
}

export default Index;
