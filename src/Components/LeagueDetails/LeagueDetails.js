import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import './LeagueDetails.css'

import Details from '../Details/Details';

const LeagueDetails = () => {

    const { idLeague } = useParams();
    const [league, setLeague] = useState([]);

    useEffect(() => {
        const url = `https://www.thesportsdb.com/api/v1/json/1/lookupleague.php?id=${idLeague}`;
        axios(url).then(
            response => setLeague(response.data.leagues[0])
        )
    }, [idLeague])


   
    return (
        <>
           <Details league={league}></Details>
        </>
    );
};

export default LeagueDetails;