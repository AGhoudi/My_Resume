import React from 'react';
import './Experiences.scss';


const Experiences: React.FC = (props:any) => {   

    return (
        <React.Fragment>
            <section className="experiences">
                <div className="realisations">
                    <h2><span role="img" aria-label="réalisations">&#127913;</span>MES RÉALISATIONS</h2>
                    <p><a className="mes__atouts--link" href="https://serene-island-83111.herokuapp.com/" target="_blank" rel="noopener noreferrer">Voir mon profil github</a></p>
                    <p><a className="mes__atouts--link" href="https://link1986.github.io/Random-quote-machine/" target="_blank" rel="noopener noreferrer">Voir mon profil Codepen</a></p>
                    <hr/>
                    <h2><span role="img" aria-label="mes projets">&#128083;</span>CENTRES D'INTÉRÊTS</h2>
                    
                    <p><a className="mes__atouts--link" href="https://serene-island-83111.herokuapp.com/" target="_blank" rel="noopener noreferrer">Smartbrain</a></p>
                    <p><a className="mes__atouts--link" href="https://link1986.github.io/Random-quote-machine/" target="_blank" rel="noopener noreferrer">Random Quote Machine</a></p>
                    <p><a className="mes__atouts--link" href="https://link1986.github.io/My-Todo-App/" target="_blank" rel="noopener noreferrer">My Todo App</a></p>
                    <p><a className="mes__atouts--link" href="https://stark-fjord-91177.herokuapp.com/" target="_blank" rel="noopener noreferrer">CRWN Clothing</a></p>
                    <p><a className="mes__atouts--link" href="https://link1986.github.io/Markdown-Previewer/" target="_blank" rel="noopener noreferrer">Markdown Previewer</a></p>
                    
                </div>
                <div className="mes__experiences">
                        <h2><span role="img" aria-label="mes expériences">&#128302;</span>MES EXPÉRIENCES</h2>
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
        </React.Fragment>
    );
        
}

export default Experiences;