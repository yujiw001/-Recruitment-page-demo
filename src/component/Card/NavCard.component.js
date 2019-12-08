import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import './NavCard.component.style.css';

class NavCard extends Component {
    render() {
        return (
            <Link to={this.props.link}>
            <div className="card ft_backend_navcard">
            <div className="row no-gutters ">

                <div className="col-md-8">
                <div className="ft_backend_navcard_card_body">
                    <p className="ft_backend_navcard_title">{this.props.title}</p>
                    <p className="ft_backend_navcard_content">{this.props.content}</p>
                </div>
                </div>

                <div className="col-md-4">
                    <img src={this.props.img} className='ft_backend_navcard_img' alt="..." />
                </div>

            </div>
            </div>
            </Link>
        )
    }
}

export default NavCard;