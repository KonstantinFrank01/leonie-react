import React, { Component } from 'react';
import './header.css'

class Header extends Component {
    render() {
        return (
            <div>
                <nav class="navbar navbar-light bg-white" style={{ display: 'flex', justifyContent: 'flex-end'}}>
                    <a class="navbar-item mr-5" href="#" >Articles</a>
                    <a class="navbar-item mr-4" href="#">Contact</a>
                </nav>
            </div>
        );
    }
}

export default Header;