import * as React from 'react';
import './App.scss';
import TopResume from './components/TopResume/TopResume';
import Main from './components/Main/Main';
import Competences from './components/Competences/Competences';
import javascript from './assets/javascript.jpg';
import php from './assets/php.png';
import mysql from './assets/mysql.png';
import symfony from './assets/symfony.jpg';
import react from './assets/react.png';
import node from './assets/node.png';


class App extends React.Component<any, any> {

    constructor(props : any) {
        super(props);
        this.state = {
            appColor: localStorage.getItem("appColor"),
            mainColor: localStorage.getItem("mainColor")
        }
    }

    handleClick = (event: any): void => {
        const appColor:string = event.target.getAttribute('data-appcolor');
        const mainColor:string = event.target.getAttribute('data-maincolor');
        this.setState({
            appColor: appColor,
            mainColor: mainColor
        });
        localStorage.setItem("appColor", appColor);
        localStorage.setItem("mainColor", mainColor);
    }

    render() {
        return (            
            <div className="app" style={{backgroundColor: this.state.appColor}}>
                <Main  color={this.state.mainColor}>
                    <div className="change_color">
                        <div className="color_one" onClick={this.handleClick} data-appcolor="#ffbe4a" data-maincolor="#fef5e6"></div>
                        <div className="color_two" onClick={this.handleClick} data-appcolor="#174545" data-maincolor="#6d9190"></div>
                        <div className="color_three" onClick={this.handleClick} data-appcolor="#de4b4c" data-maincolor="#dd7381"></div>
                        <div className="color_four" onClick={this.handleClick} data-appcolor="#2056ac" data-maincolor="#e3f0f8"></div>
                    </div> 
                    <TopResume />           
                    <hr/>
                    <Competences color={this.state.appColor}/>
                    <hr/>
                    <section className="formations">
                        <div className="langage">
                            <h2><span role="img" aria-label="outils favoris">&#128150;</span>MES OUTILS FAVORIS</h2>
                            <div className="item"><img className="item_img" src={javascript} alt=""/>JAVASCRIPT</div>
                            <div className="item"><img className="item_img" src={php} alt=""/>PHP</div>
                            <div className="item"><img className="item_img" src={mysql} alt=""/>MYSQL</div>
                            <div className="item"><img className="item_img" src={symfony} alt=""/>SYMFONY</div>
                            <div className="item"><img className="item_img" src={react} alt=""/>REACT</div>
                            <div className="item"><img className="item_img" src={node} alt=""/>NODE JS</div>
                        </div>
                        <div className="ma_formation">
                            <h2><span role="img" aria-label="formation">&#127891;</span>MA FORMATION</h2>
                            <div><span>Aujourd'hui - 2016</span> <p>Apprentissage autodidacte de l'informatique</p> UDEMY - YOUTUBE - W3SCHOOLS - FREECODECAMP</div>
                            <div><span>2019(En cours)</span> <p>PARCOURS DÉVELOPPEUR D'APPLICATIONS PHP/SYMFONY</p> Openclassrooms : Formation à distance, France</div>
                            <p>Formation 2</p>
                            <p>Formation 3</p>
                        </div>
                    </section>
                </Main>
            </div>
        );
    }
  
}

export default App;
