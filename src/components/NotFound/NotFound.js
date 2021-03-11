import React from 'react';
import oops from './opps.png';
import { useHistory } from 'react-router';


const NotFound = () => {

    const history = useHistory();

    return (
        <div className='text-center pt-5'>
            <img src={oops} alt=""/>
            <h2>404-PAGE NOT FOUND</h2>
            <p>The page you are looking for might removed <br/> had it's name changed or it temporary unavailable</p>
            <button className='btn btn-primary' onClick={() => history.push(`/`)}>GO TO HOMEPAGE</button>
        </div>
    );
};

export default NotFound;