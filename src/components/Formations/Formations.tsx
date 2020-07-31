import React from 'react';
import javascript from '../../assets/javascript.jpg';
import php from '../../assets/php.png';
import mysql from '../../assets/mysql.png';
import symfony from '../../assets/symfony.jpg';
import react from '../../assets/react.png';
import node from '../../assets/node.png';
import './Formations.scss';

const Formations: React.FC = () => {
    return (
        <React.Fragment>
            <section className="formations">
                <div className="langage">
                    <h2><span role="img" aria-label="outils favoris">&#128150;</span>MES OUTILS FAVORIS</h2>
                    <div className="langage__grid">
                        <div 
                            className="langage__grid--item"
                        >
                            <img className="langage__grid--item__img" src={javascript} alt=""/>
                            JAVASCRIPT
                        </div>
                        <div 
                            className="langage__grid--item"
                        >
                            <img className="langage__grid--item__img" src={php} alt=""/>
                            PHP
                        </div>
                        <div 
                            className="langage__grid--item"
                        >
                            <img className="langage__grid--item__img" src={mysql} alt=""/>
                            MYSQL
                        </div>
                        <div 
                            className="langage__grid--item"
                        >
                            <img className="langage__grid--item__img" src={symfony} alt=""/>
                            SYMFONY
                        </div>
                        <div 
                            className="langage__grid--item"
                        >
                            <img className="langage__grid--item__img" src={react} alt=""/>
                            REACT
                        </div>
                        <div 
                            className="langage__grid--item"
                        >
                            <img className="langage__grid--item__img" src={node} alt=""/>
                            NODE JS
                        </div>
                    </div>
                    
                </div>
                <div className="ma__formation">
                    <h2>
                        <span role="img" aria-label="formation">&#127891;</span>
                        MA FORMATION
                    </h2>
                    <div className="ma__formation__contenu">
                        <span  className="ma__formation__contenu--date">Aujourd'hui - 2016</span>
                        <p className="ma__formation__contenu--apprentissage">Apprentissage autodidacte de l'informatique</p>
                        <span  className="ma__formation__contenu--lieu">Udemy - Youtube - W3schools - Freecodecamp</span>
                    </div>
                    <div className="ma__formation__contenu">
                        <span  className="ma__formation__contenu--date">(En cours) - 2019</span> 
                        <p className="ma__formation__contenu--apprentissage">Parcours développeur d'applications PHP/SYMFONY</p>
                        <span  className="ma__formation__contenu--lieu">Openclassrooms : Formation à distance, France</span> 
                    </div>
                    <div className="ma__formation__contenu">
                        <span  className="ma__formation__contenu--date">2019 - 2018</span> 
                        <p className="ma__formation__contenu--apprentissage">Parcours développeur web junior</p>
                        <span  className="ma__formation__contenu--lieu">Openclassrooms : Formation à distance, France</span> 
                    </div>
                    <div className="ma__formation__contenu">
                        <span  className="ma__formation__contenu--date">2015 - 2014</span> 
                        <p className="ma__formation__contenu--apprentissage">DU droits des affaires appliqué aux établissements de santé</p>
                        <span  className="ma__formation__contenu--lieu">Université Jean Monnet : Saint-Étienne, France</span> 
                    </div>
                </div>
            </section>
        </React.Fragment>
    );
}

export default Formations;