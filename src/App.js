import React, { Component } from 'react';
import './App.css';
import heroImage from './images/heroImage.jpg'
import codeImage from './images/code.jpeg'
import girlImage from './images/girl.jpeg'
import meetingImage from './images/meeting.jpeg'
import pupilsImage from './images/pupils.jpeg'
import Header from './components/Header/header.js';
import Article from './components/Article/article.js';
import Footer from './components/Footer/footer.js';
import Typist from 'react-typist';
import "./components/Typist/typist.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <img src={heroImage} alt="Hero Image" style={{ height: '80vh'}}/>
        <div className="typist-container">
                <Typist avgTypingDelay={30}>
                    <span className="typist-span-1" style={{zIndex: '10000', color: 'white'}}>Hallo, mein Name ist Leonie!</span><br />
                    <span className="typist-span-2" style={{color: 'white'}}>Ich bin ein digitaler Spracherkennungs-Avatar <br/>und wurde von den Schülern<br/>der 
                     HTL Leonding entwickelt.</span>
                </Typist>
        </div>
        <div class="container">
          <div class="mt-5 d-flex flex-row flex-wrap justify-content-around">
            <Article title={"Blick in technologische Zukunft"}
                    summary={"Die Besucher lernen Leonie kennen - eine Sprachassistentin, die neben einer Stimme auch einen digitalen Körper hat."}
                    excerptHeader={"Schlossmuseum: Blick in technologische Zukunft"}
                    excerpt={"Die Besucher lernen Leonie kennen - eine Sprachassistentin, die neben einer Stimme auch einen digitalen Körper hat. Leonie kann nicht nur auf Kommando tanzen, sondern auch Fragen beantworten, etwa über die technologischen Innovationen, die auf uns zukommen, erklärt der Maturant Karsten Köhne. In der HTL Leonding wurde Leonie von Schülern entwickelt."}
                    link={"https://ooe.orf.at/news/stories/2957975/?fbclid=IwAR1woeeBFuToOVibSdHlwoRkSXZEZcKXG6wphbcmq9WR9W-F9zebeUEeqo4"}
                    img={codeImage}>
            </Article>
            <Article title={"Neues aus der Zukunft"}
                    summary={"Alexa und Siri kennen Sie vermutlich. Aber kennen Sie auch Leonie?"}
                    excerptHeader={"Neues aus der Zukunft"}
                    excerpt={"Alexa und Siri kennen Sie vermutlich. Aber kennen Sie auch Leonie? Die Oö. Zukunftsakademie, ein Think Tank der Oö. Landesregierung, blickt in die Zukunft und stellt im Innovationseck der Dauerausstellung „Technik Oberösterreich“ technologische Entwicklungen der nächsten Jahre, Jahrzehnte, vielleicht auch Jahrhunderte vor."}
                    link={"http://www.landesmuseum.at/de/ausstellungen/detail/techvisionen-neues-aus-der-zukunft.html"}
                    img={girlImage}>
            </Article>
            <Article title={"Schlossmuseum wirft einen Blick in die Welt der Zukunft"}
                    summary={"Die neue Sonderausstellung Tech Visionen - Neues aus der Zukunft ist bis 31. März im Innovationseck zu sehen"}
                    excerptHeader={"Welt der Zukunft"}
                    excerpt={"3D-Avatare, ein Gehirn-Computer-Interface, humanoide Roboter, Ganzkörperscanner – die Sonderschau Tech Visionen – Neues aus der Zukunf gibt seit Mittwoch im Linzer Schlossmuseum einen Ausblick auf künftige technologische Entwicklungen. Die in Kooperation mit der Zukunftsakademie – dem Thinktank der Landesregierung – entstandene Schau läuft bis 31. März. Zu sehen ist sie im Innovationseck der Dauerausstellung Technik Oberösterreich."}
                    link={"https://www.nachrichten.at/nachrichten/kultur/das-schlossmuseum-wirft-einen-blick-in-die-welt-der-zukunft;art16,3090778"}
                    img={meetingImage}>
            </Article>
            <Article title={"TechVisionen – Neues aus der Zukunft"}
                    summary={"Eine Sonderschau TechVisionen – Neues aus der Zukunft"}
                    excerptHeader={"TechVisionen – Neues aus der Zukunft"}
                    excerpt={"Der Avatar Leonie als 3D-Hologramm der HTL Leonding wurde für die Ausstellung trainiert, Fragen zu aktuellen Studien der Zukunftsakademie zu beantworten. Eine Sonderschau TechVisionen – Neues aus der Zukunft gibt seit Mittwoch im Bereich der Technik-Dauerausstellung im Linzer Schlossmuseum einen Ausblick auf künftige Technologien."}
                    link={"https://derstandard.at/2000095788518/Neues-aus-der-Zukunft-im-Linzer-Schlossmuseum"}
                    img={pupilsImage}>
            </Article>
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}

export default App;
