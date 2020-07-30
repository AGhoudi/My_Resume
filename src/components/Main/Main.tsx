import React from 'react';
import './Main.scss';

export interface Color {
    color: string
}

const Main: React.FC<Color> = (props: any) => {
    
    return (        
        <div  className="main__content" style={{backgroundColor: props.color}}>
            {props.children}
        </div>
    );    
    
}

export default Main;