import React from 'react';
import './Main.css';

const Main = (props) => {
    
    return (
        <div  className="main_content" style={{backgroundColor: props.color}}>
            {props.children}
        </div>
    );    
    
}

export default Main;