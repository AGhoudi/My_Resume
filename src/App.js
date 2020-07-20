import React from 'react';
import './App.css';
import TopResume from './components/TopResume/TopResume';
import Main from './components/Main/Main';

class App extends React.Component {

    constructor() {
        super();
        this.state = {
            appColor: '#2056ac',
            mainColor: '#e3f0f8'
        }
    }

    yellow = () => {
        this.setState({
            appColor: '#ffbe4a',
            mainColor: '#fef5e6'
        })
    }

    green = () => {
        this.setState({
            appColor: '#174545',
            mainColor: '#6d9190'
        })
    }

    red = () => {
        this.setState({
            appColor: '#de4b4c',
            mainColor: '#dd7381'
        })
    }

    render() {
        return (
            <div className="app" style={{backgroundColor: this.state.appColor}}>
                <Main  color={this.state.mainColor}>
                    <div className="change_color">
                        <div className="color_one" onClick={this.yellow}></div>
                        <div className="color_two" onClick={this.green}></div>
                        <div className="color_three" onClick={this.red}></div>
                    </div> 
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
                </Main>
            </div>
        );
    }
  
}

export default App;
