
import React from 'react';
import LeagueCard from '../LeagueCard/LeagueCard';



const League = (props) => {

    const { leaguesToShow } = props;




    return (
        <div className="container">

            <div className="row d-flex justify-content-center align-items-center">




                {
                    leaguesToShow.map(league => <LeagueCard league={league} key={league.idLeague}></LeagueCard>)
                }

            </div>
            <div className="row d-flex justify-content-center align-items-center my-5">
                {
                    props.children
                }
            </div>
        </div>
    );
};

export default League;