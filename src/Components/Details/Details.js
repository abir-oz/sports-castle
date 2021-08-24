import Banner from '../Banner/Banner';
import MaleImg from '../../images/male.ebe85950.png';
import FemaleImg from '../../images/female.04e09a6c.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faYoutube, faTwitter, faFontAwesomeFlag } from '@fortawesome/free-brands-svg-icons';
import { faCalendarAlt } from '@fortawesome/free-regular-svg-icons';
import { faVolleyballBall, faMars, faBackward} from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

//free-solid-svg-icons
const Details = (props) => {
    const flag = <FontAwesomeIcon icon={faFontAwesomeFlag} />;
    const gender = <FontAwesomeIcon icon={faMars} />;
    const sType = <FontAwesomeIcon icon={faVolleyballBall} />;
    const calendar = <FontAwesomeIcon icon={faCalendarAlt} />;
    const fbIcon = <FontAwesomeIcon icon={faFacebook} />
    const tIcon = <FontAwesomeIcon icon={faTwitter} />
    const yIcon = <FontAwesomeIcon icon={faYoutube} />


    const { strLeague, strBadge, intFormedYear, strCountry, strSport, strGender, strDescriptionEN, strTwitter, strFacebook, strYoutube } = props.league;

    console.log(props.league);

    let img;
    if (strGender === 'Male') {
        img = MaleImg;
    }
    else if (strGender === 'Female') {
        img = FemaleImg;
    }

    return (
        <>
            <Banner>

                <div className="col-md-12 banner-bg text-center p-3">
                    <div><img className="league-logo" src={strBadge} alt="" /></div><br />
                    <Link to="/"><button className="btn btn-warning"><FontAwesomeIcon icon={faBackward} />  Back To Home</button></Link>
                </div>

            </Banner>
            <div className="container">
                <div className="row mt-5 mx-2 d-flex justify-content-center align-items-center px-2 py-4 bg-primary  br-rounded">


                    <div className="col-md-5 text-white">
                        <h4 className="league-title mb-4">{strLeague}</h4>
                        <p className="other-details">
                            {calendar} Founded: {intFormedYear}
                            <br />
                            {flag} Country: {strCountry}
                            <br />
                            {sType} Sports Type: {strSport}
                            <br />
                            {gender} Gender: {strGender}
                        </p>
                    </div>
                    <div className="col-md-5">
                        <img className="img-fluid" src={img} alt="" />
                    </div>

                </div>
                <div className="row">
                    <div className="col-md-10 mx-auto my-5">
                        <p>{strDescriptionEN}</p>
                    </div>
                    <div className="col-md-10 mx-auto my-5 d-flex justify-content-center align-items-center">
                        <a className="mx-3 text-white" href={strFacebook}> {fbIcon}</a>
                        <a className="mx-3 text-white" href={strTwitter}> {tIcon}</a>
                        <a className="mx-3 text-white" href={strYoutube}> {yIcon}</a>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Details;