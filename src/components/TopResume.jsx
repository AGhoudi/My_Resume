import React from 'react';
import './TopResume.css';
import logo from '../assets/cv.jpg'

class TopResume extends React.Component {

    render() {
        return (
            <React.Fragment>
                <section className="presentation">
                    <div className="picture">
                        <img  src={logo} alt="cv_picture"/>
                    </div>
                    <div className="work">
                        <h1><span>&#9646;</span> ALI GHOUDI</h1>
                        <p className="description">Développeur Web Fullstack</p>
                        <p><span className="mail">&#9993;</span> ali.ghoudi@gmail.com</p>
                        <p><span className="home" role="img" aria-label="house">&#127969;</span> SAINT-ÉTIENNE, FRANCE</p>                
                    </div>
                </section> 
            </React.Fragment>
        );
    }
}

export default TopResume;