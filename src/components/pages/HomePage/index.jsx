//> React
// Contains all the functionality necessary to define React components
import React from 'react';

//> MDB
// "Material Design for Bootstrap" is a great UI design framework
/*
import {

} from 'mdbreact';
*/

//> Components
import {
  Hero
} from '../../organisms/sections';

// This component shall not return any content
class HomePage extends React.Component {
  render() {
    return (
      <Hero globalStore={this.props.globalStore} />
    );
  }
}

export default HomePage;

/** 
 * SPDX-License-Identifier: (EUPL-1.2)
 * Copyright © 2019 Werbeagentur Christian Aichner
 */
