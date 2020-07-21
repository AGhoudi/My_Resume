import React from 'react';
import './App.css';
import TopResume from './components/TopResume/TopResume';
import Main from './components/Main/Main';
import Competences from './components/Competences/Competences';

class App extends React.Component {

    constructor() {
        super();
        this.state = {
            appColor: localStorage.getItem("appColor"),
            mainColor: localStorage.getItem("mainColor")
        }
    }

    blue = () => {
        this.setState({
            appColor: '#2056ac',
            mainColor: '#e3f0f8'
        })
        localStorage.setItem("appColor", "#2056ac");
        localStorage.setItem("mainColor", "#e3f0f8");
    }

    yellow = () => {
        this.setState({
            appColor: '#ffbe4a',
            mainColor: '#fef5e6'
        })
        localStorage.setItem("appColor", "#ffbe4a");
        localStorage.setItem("mainColor", "#fef5e6");
    }

    green = () => {
        this.setState({
            appColor: '#174545',
            mainColor: '#6d9190'
        })
        localStorage.setItem("appColor", "#174545");
        localStorage.setItem("mainColor", "#6d9190");
    }

    red = () => {
        this.setState({
            appColor: '#de4b4c',
            mainColor: '#dd7381'
        })
        localStorage.setItem("appColor", "#de4b4c");
        localStorage.setItem("mainColor", "#dd7381");
    }

    render() {
        return (
            <div className="app" style={{backgroundColor: this.state.appColor}}>
                <Main  color={this.state.mainColor}>
                    <div className="change_color">
                        <div className="color_one" onClick={this.yellow}></div>
                        <div className="color_two" onClick={this.green}></div>
                        <div className="color_three" onClick={this.red}></div>
                        <div className="color_four" onClick={this.blue}></div>
                    </div> 
                    <TopResume />           
                    <hr/>
                    <Competences color={this.state.appColor}/>
                    <hr/>
                    <section className="formations">
                        <div className="langage">
                            <h2><span role="img" aria-label="outils favoris">&#128150;</span>MES OUTILS FAVORIS</h2>
                        </div>
                        <div className="ma_formation">
                            <h2><span role="img" aria-label="formation">&#127891;</span>MA FORMATION</h2>
                        </div>
                    </section>
                </Main>
            </div>
        );
    }
  
}

export default App;
