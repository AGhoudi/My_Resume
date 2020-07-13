import React from 'react';
import logo from '../src/assets/cv.jpg'
import './App.css';

function App() {
  return (
    <div className="App">
        <div className="main_content">
            <div class="picture">
                <img  src={logo} alt="cv_picture"/>
            </div>
            <div class="work">
                <h1><span>&#9646;</span> ALI GHOUDI</h1>
                <p class="description">Développeur Web Fullstack</p>
            </div>
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
