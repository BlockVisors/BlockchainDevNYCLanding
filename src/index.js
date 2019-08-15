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
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";

// styles
import "assets/css/nucleo-icons.css";
import "assets/scss/blk-design-system-pro-react.scss?v1.0.0";
import "assets/demo/demo.css";
import "assets/demo/react-demo.css";

// presentation pages
import Index from "views/Index.jsx";
import Presentation from "views/Presentation.jsx";
import Sections from "views/Sections.jsx";
// example pages
import AboutUs from "views/examples/AboutUs.jsx";
import BlogPost from "views/examples/BlogPost.jsx";
import BlogPosts from "views/examples/BlogPosts.jsx";
import ContactUs from "views/examples/ContactUs.jsx";
import LandingPage from "views/examples/LandingPage.jsx";
import Pricing from "views/examples/Pricing.jsx";
import Ecommerce from "views/examples/Ecommerce.jsx";
import ProductPage from "views/examples/ProductPage.jsx";
import ProfilePage from "views/examples/ProfilePage.jsx";
import Error404 from "views/examples/Error404.jsx";
import Error500 from "views/examples/Error500.jsx";
import AccountSettings from "views/examples/AccountSettings.jsx";
import LoginPage from "views/examples/LoginPage.jsx";
import RegisterPage from "views/examples/RegisterPage.jsx";
import ResetPage from "views/examples/ResetPage.jsx";
import InvoicePage from "views/examples/InvoicePage.jsx";
import CheckoutPage from "views/examples/CheckoutPage.jsx";
import ChatPage from "views/examples/ChatPage.jsx";
import MeetupHome from "views/examples/MeetupHome.jsx";


ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route path="/index" render={props => <MeetupHome {...props} />} />
      <Route
        path="/presentation"
        render={props => <Presentation {...props} />}
      />
      <Route path="/sections" render={props => <Sections {...props} />} />
      <Route path="/about-us" render={props => <AboutUs {...props} />} />
      <Route path="/blog-post" render={props => <BlogPost {...props} />} />
      <Route path="/blog-posts" render={props => <BlogPosts {...props} />} />
      <Route path="/contact-us" render={props => <ContactUs {...props} />} />
      <Route
        path="/landing-page"
        render={props => <LandingPage {...props} />}
      />
      <Route path="/pricing" render={props => <Pricing {...props} />} />
      <Route path="/ecommerce" render={props => <Ecommerce {...props} />} />
      <Route
        path="/product-page"
        render={props => <ProductPage {...props} />}
      />
      <Route
        path="/profile-page"
        render={props => <ProfilePage {...props} />}
      />
      <Route path="/404-error" render={props => <Error404 {...props} />} />
      <Route path="/500-error" render={props => <Error500 {...props} />} />
      <Route
        path="/account-settings"
        render={props => <AccountSettings {...props} />}
      />
      <Route path="/login-page" render={props => <LoginPage {...props} />} />
      <Route
        path="/register-page"
        render={props => <RegisterPage {...props} />}
      />
      <Route path="/reset-page" render={props => <ResetPage {...props} />} />
      <Route
        path="/invoice-page"
        render={props => <InvoicePage {...props} />}
      />
      <Route
        path="/checkout-page"
        render={props => <CheckoutPage {...props} />}
      />
      <Route path="/chat-page" render={props => <ChatPage {...props} />} />
      <Redirect from="/" to="/presentation" />
    </Switch>
  </BrowserRouter>,
  document.getElementById("root")
);
