//> React
// Contains all the functionality necessary to define React components
import React from 'react';

//> Additional libraries
// Loadable
import loadableVisibility from "react-loadable-visibility/react-loadable";
import Loader from "../../atoms/Loader";
// Facebook messenger
import MessengerCustomerChat from 'react-messenger-customer-chat';

//> MDB
// "Material Design for Bootstrap" is a great UI design framework
/*
import {

} from 'mdbreact';
*/

//> Components
const Hero = loadableVisibility({
  loader: () => import("../../organisms/sections/Hero"),
  loading: Loader
});
const CallToAction = loadableVisibility({
  loader: () => import("../../organisms/sections/CallToAction"),
  loading: Loader
});
const Additional = loadableVisibility({
  loader: () => import("../../organisms/sections/Additional"),
  loading: Loader
});
const Services = loadableVisibility({
  loader: () => import("../../organisms/sections/Services"),
  loading: Loader
});

class HomePage extends React.Component {

  componentDidMount = () => {
    // Set page title
    document.title = "Ihr verlässlicher Allround-Partner";
  }

  render() {
    return (
      <>
        <Hero globalstore={this.props.globalStore} />
        <Services globalstore={this.props.globalStore} />
        <CallToAction globalstore={this.props.globalStore} />
        <Additional globalstore={this.props.globalStore} />
        <MessengerCustomerChat
        pageId={process.env.REACT_APP_PAGE_ID}
        appId={process.env.REACT_APP_APP_ID}
        />
      </>
    );
  }
}

export default HomePage;

/** 
 * SPDX-License-Identifier: (EUPL-1.2)
 * Copyright © 2019 Werbeagentur Christian Aichner
 */
