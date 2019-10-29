//> React
// Contains all the functionality necessary to define React components
import React from 'react';
//> MDB
// "Material Design for Bootstrap" is a great UI design framework
import {
  MDBContainer,
  MDBTable,
  MDBTableBody,
  MDBIcon,
} from 'mdbreact';

//> CSS
import './privacyme.scss';

class PrivacyMePage extends React.Component {

  // Init this.state
  state = {}

  componentDidMount = () => {
    // Set page title
    document.title = "Meine Daten";

    // Check states
    let cookies = localStorage.getItem('cookie');
    this.setState({
      cookies: cookies === "true" ? true : false,
    });
  }

  activateDarkMode = () => {
    localStorage.setItem('mode',true);
    this.props.handler();
  }

  render() {

    const { globalStore } = this.props;
  
    return (
      <div id="privacyme">
      <MDBContainer className="py-5 text-center">
        <h2>Meine Daten</h2>
        <MDBTable className={globalStore.mode ? "text-white my-4" : "text-dark my-4"}>
          <MDBTableBody>
            <tr className="d-flex align-items-center">
              <td>
              {globalStore.mode ? (
                <MDBIcon icon="check-circle" className="green-text" size="lg" />
              ) : (
                <MDBIcon icon="times-circle" className="red-text" size="lg" />
              )}
              </td>
              <td>
              {globalStore.mode ? (
                <p className="lead m-0">Der "Dark Mode" ist aktiviert.</p>
              ) : (
                <>
                <p className="lead m-0">Der "Dark Mode" ist nicht aktiviert.</p>
                <p className="blue-text text-link" onClick={this.activateDarkMode}>
                Jetzt ausprobieren
                </p>
                </>
              )}
              </td>
            </tr>
            <tr className="d-flex align-items-center">
              <td>
              {this.state.cookie ? (
                <MDBIcon icon="check-circle" className="green-text" size="lg" />
              ) : (
                <MDBIcon icon="times-circle" className="red-text" size="lg" />
              )}
              </td>
              <td>
              {this.state.cookie ? (
                <p className="lead m-0">Sie haben die Cookie Meldung akzeptiert.</p>
              ) : (
                <>
                <p className="lead m-0">Sie haben die Cookie Meldung nicht akzeptiert.</p>
                </>
              )}
              </td>
            </tr>
          </MDBTableBody>
        </MDBTable>
      </MDBContainer>
      </div>
    );
  }
}

export default PrivacyMePage;

/** 
 * SPDX-License-Identifier: (EUPL-1.2)
 * Copyright © 2019 Werbeagentur Christian Aichner
 */
