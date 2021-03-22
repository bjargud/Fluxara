import React from 'react';
import '../style components/AllSet.css';
import '../index.css';
import { Link } from 'react-router-dom';

function AllSet() {
    return (
        <div className="wrapper">
        <div className="container__main">
            <h2 className="welcomeMessage">You are all set!</h2>
            <Link className="textMessage" to="/pages/DashBoard.js"> Take me to my dashboard > </Link>
        </div>

    </div>
    )
}

export default AllSet
