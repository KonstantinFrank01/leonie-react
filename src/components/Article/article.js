import React, { Component } from 'react';
import './article.css';

class Article extends Component {
    render() {
        return (
            <div class="wrapper">
                <div class="zoom-effect-container">
                    <div class="image-card">
                        <img src={ this.props.img } alt="Bild"/>
                    </div>
                </div>
                <div class="white-box-text">
                    <div class="text">
                        <span class="title">{ this.props.title }</span>
                        <br />
                        <span class="summary">{ this.props.summary }</span>
                    </div>
                </div>
                <div class="overlay">
                    <div class="excerptHeader">
                        <span>{ this.props.excerptHeader }</span><br/>
                    </div>
                    <div class="excerpt">
                        <span>{ this.props.excerpt }</span>
                    </div>
                    <div class="btn-container">
                        <a type="button" className="btn btn-primary" href={ this.props.link }>Artikel lesen</a>
                    </div>
                </div>
            </div>
        );
    }
}

export default Article;