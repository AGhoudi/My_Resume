import React from 'react';
import './TopResume.scss';
import logo from '../../assets/cv.jpg';

const TopResume: React.FC = () => {
    return (
        <React.Fragment>
            <section className="presentation">
                <div className="presentation__picture">
                    <img  src={logo} alt="cv_picture"/>
                </div>
                <div className="presentation__work">
                    <h1><span role="img" aria-label="name">&#11088;</span> ALI GHOUDI</h1>
                    <p className="presentation__work--description">Développeur Web Fullstack</p>
                    <p><span className="presentation__work--mail">&#9993;</span> ali.ghoudi@gmail.com</p>
                    <p><span className="presentation__work--home" role="img" aria-label="house">&#127969;</span> SAINT-ÉTIENNE, FRANCE</p>                
                </div>
            </section> 
        </React.Fragment>
    );
}

export default TopResume;