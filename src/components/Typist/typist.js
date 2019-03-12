import React, { Component } from 'react';
import { Typist } from 'react-typist';
import "./typist.css";

class typist extends Component {
    render() {
        return (
            <div className="typist-container">
                <Typist avgTypingDelay={30}>
                    <span className="typist-span-1" style={{zIndex: '10000', color: 'white'}}>Hallo, mein Name ist Leonie!</span><br />
                    <span className="typist-span-2" style={{color: 'white'}}>Ich bin ein digitaler Spracherkennungs-Avatar <br/>und wurde von den Schülern<br/>der 
                     HTL Leonding entwickelt.</span>
                </Typist>
            </div>
        );
    }
}

export default Typist;