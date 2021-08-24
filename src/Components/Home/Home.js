import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Spinner } from 'react-bootstrap';
import Banner from '../Banner/Banner';
import League from '../League/League';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleNotch } from '@fortawesome/free-solid-svg-icons';
const Home = () => {
    const [allleagues, setAllLeagues] = useState([]);
    const [showLeague, setShowLeague] = useState(15);
    const leaguesToShow = allleagues.slice(0, showLeague);
    const [spinner, setSpinner] = useState(false);


    useEffect(() => {

        const url = 'https://www.thesportsdb.com/api/v1/json/1/all_leagues.php';
        setSpinner(true);
        axios(url).then(data => setAllLeagues(data.data.leagues)
        ).then(() => setSpinner(false));

    }, [])

    const handleLoadMore = () => {
        setShowLeague(showLeague + 15)
    }


    return (
        <>

            <Banner>
                <div className="col-md-12 banner-bg d-flex justify-content-center align-items-center">
                    <h1 className="text-white font-weight-bold">Sports Castle</h1>
                </div>
            </Banner>
            <div className="d-flex justify-content-center align-items-center mt-5">

                {
                    spinner &&

                    <Spinner animation="grow" />
                }
            </div>
            <League
                leaguesToShow={leaguesToShow}
            >


                <button className="btn btn-danger" onClick={handleLoadMore}>

                    Show More &nbsp;
                      <FontAwesomeIcon icon={faCircleNotch} /></button>
            </League>
        </>
    );
};

export default Home;