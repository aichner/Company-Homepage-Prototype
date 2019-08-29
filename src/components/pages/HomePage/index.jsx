//> React
// Contains all the functionality necessary to define React components
import React from 'react';

//> Additional libraries
// Loadable
import LoadableVisibility from "react-loadable-visibility/react-loadable";
import Loader from "../../atoms/Loader";

//> MDB
// "Material Design for Bootstrap" is a great UI design framework
/*
import {

} from 'mdbreact';
*/

//> Components
const Hero = LoadableVisibility({
  loader: () => import("../../organisms/sections/Hero"),
  loading: Loader
});
const CallToAction = LoadableVisibility({
  loader: () => import("../../organisms/sections/CallToAction"),
  loading: Loader
});
const Additional = LoadableVisibility({
  loader: () => import("../../organisms/sections/Additional"),
  loading: Loader
});



// This component shall not return any content
class HomePage extends React.Component {
  render() {
    return (
      <>
        <Hero globalstore={this.props.globalStore} />
        <CallToAction globalstore={this.props.globalStore} />
        <Additional globalstore={this.props.globalStore} />
      </>
    );
  }
}

export default HomePage;

/** 
 * SPDX-License-Identifier: (EUPL-1.2)
 * Copyright © 2019 Werbeagentur Christian Aichner
 */
