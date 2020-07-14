import React from 'react';
import logo from '../src/assets/cv.jpg'
import './App.css';

function App() {
  return (
    <div className="App">
        <div className="main_content">
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
            <hr/>
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
