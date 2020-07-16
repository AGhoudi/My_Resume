import React from 'react';
import logo from '../src/assets/cv.jpg'
import './App.css';

function App() {
  return (
    <div className="App">
        <div className="main_content">
            <section className="presentation">
              <div className="picture">
                  <img  src={logo} alt="cv_picture"/>
              </div>
              <div className="work">
                  <h1><span>&#9646;</span> ALI GHOUDI</h1>
                  <p className="description">Développeur Web Fullstack</p>
                  <p><span className="phone">&#9743;</span> 07 - 82 - 18 - 10 -34</p>
                  <p><span className="mail">&#9993;</span> ali.ghoudi@gmail.com</p>
                  <p><span className="home" role="img" aria-label="house">&#127969;</span> SAINT-ÉTIENNE, FRANCE</p>                
              </div>
            </section>            
            <hr/>
            <section className="competences">
              <div className="mesAttouts">
                  <h2><span>&#10024;</span>MES ATOUTS</h2>
                  <ul>
                    <li>Fiable</li>
                    <li>Organisé</li>
                    <li>Rigoureux</li>
                    <li>Créatif</li>
                    <li>Empathique</li>
                  </ul>
              </div>
              <div className="mesCompetences">
                      <h2><span>&#127919;</span>MES COMPÉTENCES</h2>
                        <p>Réaliser l'intégration d 'une maquette graphique</p>
                        <p>Organisé</p>
                        <p>Rigoureux</p>
                        <p>Créatif</p>
                        <p>Empathique</p>           
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
