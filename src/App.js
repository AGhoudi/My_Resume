import React from 'react';
import './App.css';
import TopResume from './components/TopResume';

function App() {
  return (
    <div className="App">
        <div className="main_content">
            <TopResume />           
            <hr/>
            <section className="competences">
              <div className="mesAttouts">
                  <h2><span role="img" aria-label="mes atouts">&#10024;</span>MES ATOUTS</h2>
                  <ul>
                    <li><span className="letter">F</span>iable</li>
                    <li><span className="letter">O</span>rganisé</li>
                    <li><span className="letter">R</span>igoureux</li>
                    <li><span className="letter">C</span>réatif</li>
                    <li><span className="letter">E</span>mpathique</li>
                  </ul>
                  <hr/>
                  <h2><span role="img" aria-label="mes atouts">&#10024;</span>MES ATOUTS</h2>
                  <ul>
                    <li><span className="letter">F</span>iable</li>
                    <li><span className="letter">O</span>rganisé</li>
                    <li><span className="letter">R</span>igoureux</li>
                    <li><span className="letter">C</span>réatif</li>
                    <li><span className="letter">E</span>mpathique</li>
                  </ul>
              </div>
              <div className="mesCompetences">
                      <h2><span role="img" aria-label="mes compétences">&#127919;</span>MES COMPÉTENCES</h2>
                        <p>Réaliser l'intégration d 'une maquette graphique</p>
                        <p>Mettre en place le responsive et l'utilisation des médias queries</p>
                        <p>Réaliser un site web à l'aide de React et Node</p>
                        <p>Optimiser un site afin de le rendre plus rapide</p>
                        <p>Créer des sites intéractifs</p>
                        <p>Concevoir un blog en PHP</p>           
                        <p>Sécuriser des pages contre les failles</p>           
                        <p>Gérer une base de données</p>           
                        <p>Versionner un code source</p>           
                        <p>Créer un projet sur le framework symfony</p>           
              </div>
            </section>
        </div>
        
      {/* <div className="main_content">
          <div class="picture">
                <img width="100%" height="260px"  src={logo} alt="cv_picture"/>
           </div>
           <div class="work" width="100%" height="200px">
                <h1>ALI GHOUDI</h1>
                <p class="description">Développeur Web Fullstack</p>
            </div>
           
      </div>         */}
    </div>
  );
}

export default App;
