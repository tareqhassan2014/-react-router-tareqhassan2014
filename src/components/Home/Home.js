import React, { useEffect, useState } from 'react';
import Leagues from '../Clubs/Clubs';
import './Home.css'

const Home = () => {
    const [leagues, setLeagues] = useState([]);

    useEffect(() => {
        fetch('https://www.thesportsdb.com/api/v1/json/1/search_all_teams.php?l=English%20Premier%20League')
            .then(response => response.json())
            .then(data => setLeagues(data.teams))
    }, []);

    const shuffle = a => {
        for (let i = a.length; i; i--) {
            let j = Math.floor(Math.random() * i);
            [a[i - 1], a[j]] = [a[j], a[i - 1]];
        }
    }

    shuffle(leagues);

    const topImage = leagues[0] && leagues[0].strStadiumThumb;

    return (
        <div className='home-container'>
            <div className='topimage' style={{ backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),url(${topImage})` }}>
                <h1>English Clubs</h1>
            </div>

            <div className="container mt-5">
                <div className="row justify-content-center">
                    {
                        leagues.map(le => <Leagues leagues={le} key={le.idAPIfootball}></Leagues>)
                    }
                </div>
            </div>
        </div>
    );
};

export default Home;