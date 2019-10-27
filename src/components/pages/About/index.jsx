//> React
// Contains all the functionality necessary to define React components
import React from 'react';
// Links (replaces <a> tags)
import { Link } from 'react-router-dom'

//> MDB
// "Material Design for Bootstrap" is a great UI design framework
import {
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBBtn,
  MDBIcon,
  MDBTooltip,
} from 'mdbreact';

//> CSS
import './about.scss';

//> Images
import aboutIMG from '../../../assets/content/about/portrait.jpg';

class AboutPage extends React.Component {

  componentDidMount = () => {
    // Set page title
    document.title = "Wo Du uns findest";
  }

  render() {

    const { globalStore } = this.props;
  
    return (
      <div id="about">
      <MDBContainer className="py-5 text-center">
        <h2>Impressum</h2>
        <small>Informationspflicht laut §5 E-Commerce Gesetz, §14 Unternehmensgesetzbuch, 
        §63 Gewerbeordnung und Offenlegungspflicht laut §25 Mediengesetz.</small>
        <hr />
        <MDBRow className="my-4">
          <MDBCol md="4" className="pl-5 pr-5">
            <img src={aboutIMG} className="img-fluid rounded-circle" alt=""/>
          </MDBCol>
          <MDBCol md="4" className="text-sm-left">
            <p className="lead">Kontakt</p>
            <p className="font-weight-bold mb-1">Werbeagentur Christian Aichner</p>
            <p>
            Christian Aichner<br/>
            Emailwerkstraße 29<br/>
            9523 Villach
            </p>
            <p>
            <strong>Unternehmensgegenstand:</strong> Werbeagentur
            </p>
            <p>
            <strong>Tel:</strong> +43 681 205 027 54<br/>
            <strong>E-Mail:</strong> contact@aichner-christian.com
            </p>
            <p>
            <strong>UID-Nummer:</strong> ATU72504738
            <MDBTooltip
              placement="bottom"
              domElement
            >
              <span>
              <MDBIcon far icon="check-circle" className="pl-2 green-text" />
              </span>
              <span>
                Echtheit garantiert
              </span>
            </MDBTooltip>
            </p>
          </MDBCol>
        </MDBRow>
        <div className="text-sm-left">
          <h3>Haftungsausschluss</h3>
          <p>Dieser Haftungsausschluss ist als Teil des Internetangebotes zu betrachten, von dem aus auf 
          diese Webseite verwiesen wurde. Sofern Teile oder einzelne Formulierungen dieses Textes der 
          geltenden Rechtslage nicht, nicht mehr oder nicht vollständig entsprechen sollten, bleiben die 
          übrigen Teile des Dokumentes in ihrem Inhalt und ihrer Gültigkeit davon unberührt.</p>

          <h3>Haftung für Inhalte dieser Webseite</h3>
          <p>Die Inhalte unserer Seiten wurden mit größter Sorgfalt erstellt. Für die Richtigkeit, 
          Vollständigkeit und Aktualität der Inhalte können wir jedoch keine Gewähr übernehmen. Als 
          Diensteanbieter sind wir für eigene Inhalte auf diesen Seiten nach den allgemeinen Gesetzen 
          verantwortlich. Wir sind jedoch nicht verpflichtet, übermittelte oder gespeicherte fremde 
          Informationen zu überwachen oder nach Umständen zu forschen, die auf eine rechtswidrige 
          Tätigkeit hinweisen. Verpflichtungen zur Entfernung oder Sperrung der Nutzung von Informationen 
          nach den allgemeinen Gesetzen bleiben hiervon unberührt. Eine diesbezügliche Haftung ist jedoch 
          erst ab dem Zeitpunkt der Kenntnis einer konkreten Rechtsverletzung möglich. Bei Bekanntwerden 
          von entsprechenden Rechtsverletzungen werden wir diese Inhalte umgehend entfernen.</p>

          <h3>Haftung für Links auf Webseiten Dritter</h3>
          <p>Unser Angebot enthält Links zu externen Websites. Auf den Inhalt dieser externen Webseiten 
          haben wir keinerlei Einfluss. Deshalb können wir für diese fremden Inhalte auch keine Gewähr 
          übernehmen. Für die Inhalte der verlinkten Seiten ist stets der jeweilige Anbieter oder Betreiber 
          der Seiten verantwortlich. Die verlinkten Seiten wurden zum Zeitpunkt der Verlinkung auf mögliche 
          Rechtsverstöße überprüft. Rechtswidrige Inhalte waren zum Zeitpunkt der Verlinkung nicht erkennbar. 
          Eine permanente inhaltliche Kontrolle der verlinkten Seiten ist jedoch ohne konkrete Anhaltspunkte 
          einer Rechtsverletzung nicht zumutbar. Bei Bekanntwerden von Rechtsverletzungen werden wir 
          derartige Links umgehend entfernen.</p>
          <p>Sie können uns jederzeit einen Link <a href="mailto:legal@aichner-christian.com">melden</a>.</p>

          <h3>Urheberrecht</h3>
          <p>Die Betreiber dieser Webseite sind bemüht, stets die Urheberrechte anderer zu beachten bzw. 
          auf selbst erstellte sowie lizenzfreie Werke zurückzugreifen. Die durch die Seitenbetreiber 
          erstellten Inhalte und Werke auf dieser Webseite unterliegen dem Urheberrecht. Beiträge Dritter 
          sind als solche gekennzeichnet. Die Vervielfältigung, Bearbeitung, Verbreitung und jede Art der 
          Verwertung außerhalb der Grenzen des Urheberrechtes bedürfen der schriftlichen Zustimmung des 
          jeweiligen Autors bzw. Erstellers. Downloads und Kopien dieser Seite sind nur für den privaten, 
          nicht kommerziellen Gebrauch gestattet.</p>

          <Link to="/privacy">
            <MDBBtn
            rounded
            color="blue"
            >
            Datenschutzerklärung
            </MDBBtn>
          </Link>
          <Link to ="/privacy/me">
            <MDBBtn
            rounded
            color="green"
            >
            <MDBIcon far icon="user-circle" className="pr-2" />
            Meine Daten
            </MDBBtn>
          </Link>
        </div>
      </MDBContainer>
      </div>
    );
  }
}

export default AboutPage;

/** 
 * SPDX-License-Identifier: (EUPL-1.2)
 * Copyright © 2019 Werbeagentur Christian Aichner
 */
