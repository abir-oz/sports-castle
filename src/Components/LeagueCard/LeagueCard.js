import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowCircleRight } from '@fortawesome/free-solid-svg-icons'

import './LeagueCard.css'

const LeagueCard = (props) => {
    const { idLeague, strLeague, strSport } = props.league;

    const [logo, setLogo] = useState([]);
    const arrowIcon = <FontAwesomeIcon icon={faArrowCircleRight} />

    useEffect(() => {
        const url = `https://www.thesportsdb.com/api/v1/json/1/lookupleague.php?id=${idLeague}`;

        axios(url).then((response) => {
            const currentLeague = response.data.leagues[0];
            setLogo(currentLeague.strBadge);
        });
    }, [idLeague])


    return (
        <div className="col-lg-4 col-md-3 col-sm-6 my-5 ">
            <div className="card league-item d-flex justify-content-center align-items-center">
                <img src={logo} className="card-img-top league-logo mt-5" alt="..." />
                <div className="card-body text-center">
                    <h5 className="card-title league-title">{strLeague}</h5>
                    <p className="card-text">{strSport}</p>
                    <Link to={"/league/" + idLeague}><button className="btn btn-primary text bt-rad">Explore {arrowIcon}</button></Link>
                </div>
            </div>
        </div>
    );
};

export default LeagueCard;