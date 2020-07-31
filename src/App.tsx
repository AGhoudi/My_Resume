import * as React from 'react';
import './App.scss';
import TopResume from './components/TopResume/TopResume';
import Main from './components/Main/Main';
import Competences from './components/Competences/Competences';
import Formations from './components/Formations/Formations';
import Experiences from './components/Experiences/Experiences';

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
                        <div 
                            className="change_color--one" 
                            onClick={this.handleClick} 
                            data-appcolor="#ffbe4a" 
                            data-maincolor="#fef5e6"
                        >
                        
                        </div>
                        <div 
                            className="change_color--two" 
                            onClick={this.handleClick} 
                            data-appcolor="#174545" 
                            data-maincolor="#6d9190"
                        >

                        </div>
                        <div 
                            className="change_color--three" 
                            onClick={this.handleClick} 
                            data-appcolor="#de4b4c" 
                            data-maincolor="#dd7381"
                        >

                        </div>
                        <div 
                            className="change_color--four" 
                            onClick={this.handleClick} 
                            data-appcolor="#2056ac" 
                            data-maincolor="#e3f0f8"
                        >

                        </div>
                    </div> 
                    <TopResume />           
                    <hr/>
                    <Competences color={this.state.appColor}/>
                    <hr/>
                    <Formations />
                    <hr />
                    <Experiences />
                </Main>
            </div>
        );
    }
  
}

export default App;