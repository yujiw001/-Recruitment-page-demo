import React, { Component } from 'react';
import {Link} from 'react-router-dom';

import './newscard.component.style.css';

class NewsCard extends Component {
    render() {
        return (
            <div>
                <Link to={`/News/details/${this.props.id}`} key={this.props.id}>
                    <div className="card" style={{"max-width": "339px", 'min-height':'404px'}}>
                        <img key={this.props.id} src={this.props.cover} className="card_img" />
                        <div className="card_body">
                            <h1 className="card_title" key={this.props.id}>
                                {this.props.title}
                            </h1>
                            <h2 className='card_timestamp' key={this.props.id}>
                                {this.props.date}
                            </h2>
                            <p className="card_text" key={this.props.id}>
                                {this.props.content}
                            </p>
                        </div>
                    </div>
                    <div style={{padding:'45px 0'}} />
                </Link>
            </div>
        );
    } 
}

export default NewsCard;
