import React from 'react';
import { Link } from 'react-router-dom';
import notFoundImg from '../images/404.PNG'

const NotFound = () => {
    return (
        <div className="page-not-found">
            <img src={notFoundImg} draggable="false" alt="404_not_found" />
            <Link to="/">Back To Home <i className="fa fa-arrow-right"></i></Link>
        </div>
    )
}

export default NotFound