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
                    
                    <p><a className="mes__atouts--link" href="https://serene-island-83111.herokuapp.com/" target="_blank" rel="noopener noreferrer">Pratique du dessin</a></p>
                    <p><a className="mes__atouts--link" href="https://link1986.github.io/Random-quote-machine/" target="_blank" rel="noopener noreferrer">Associations et secteur social</a></p>
                    <p><a className="mes__atouts--link" href="https://link1986.github.io/My-Todo-App/" target="_blank" rel="noopener noreferrer">L'actualité juridique</a></p>
                    <p><a className="mes__atouts--link" href="https://stark-fjord-91177.herokuapp.com/" target="_blank" rel="noopener noreferrer">UX - Design - Graphisme</a></p>
                    <p><a className="mes__atouts--link" href="https://link1986.github.io/Markdown-Previewer/" target="_blank" rel="noopener noreferrer">L'informatique et la technologie</a></p>
                    
                </div>
                <div className="mes__experiences">
                        <h2><span role="img" aria-label="mes expériences">&#128302;</span>MES EXPÉRIENCES</h2>                               
                     
                </div>
            </section>
        </React.Fragment>
    );
        
}

export default Experiences;