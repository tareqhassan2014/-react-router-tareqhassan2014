import './LookupClub.css';
import male from "../../Photo/male.png";
import female from "../../Photo/female.png";
import { useParams } from 'react-router';
import React, { useEffect, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMars, faFutbol, faMapMarkerAlt, faFlag } from '@fortawesome/free-solid-svg-icons'
import { faFacebook, faYoutube, faTwitter } from '@fortawesome/free-brands-svg-icons'
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css';


const faFacebookIcon = <FontAwesomeIcon icon={faFacebook} size='3x' />
const faYoutubeIcon = <FontAwesomeIcon icon={faYoutube} size='3x' />
const faTwitterIcon = <FontAwesomeIcon icon={faTwitter} size='3x' />
const faGenderIcon = <FontAwesomeIcon icon={faMars} />
const faFootballIcon = <FontAwesomeIcon icon={faFutbol} />
const faflagIcon = <FontAwesomeIcon icon={faFlag} />
const faFondedIcon = <FontAwesomeIcon icon={faMapMarkerAlt} />


const LookupClub = () => {

    const { idTeam } = useParams();

    const [club, setClub] = useState([])

    const { strGender, intFormedYear, strCountry, strSport, strTwitter, strFacebook, strYoutube,
        strStadiumThumb, strDescriptionEN, strStadiumDescription, strTeamBadge, strTeam } = club;


    useEffect(() => {
        fetch(`https://www.thesportsdb.com/api/v1/json/1/lookupteam.php?id=${idTeam}`)
            .then(response => response.json())
            .then(data => setClub(data.teams[0]))
    }, [idTeam]);


    return (
        <div className="bg-dark text-white">
            <div className="lookupclubImg" style={{ backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),url(${strStadiumThumb})` }}>
                <img src={strTeamBadge} alt="" />
            </div>

            <div className="container pt-5">

                <div className="card mb-3 bg-primary text-white" style={{ maxWidth: "1200px" }}>
                    <div className="row no-gutters">
                        <div className="col-md-8">
                            <div className="card-body">
                                <h1 className="card-title">{strTeam}</h1>
                                <p>{faFondedIcon} Founded: {intFormedYear}</p>
                                <p>{faflagIcon} Country: {strCountry}</p>
                                <p>{faFootballIcon} Sports Type: {strSport}</p>
                                <p>{faGenderIcon} Gender: {strGender}</p>
                            </div>
                        </div>
                        <div className="col-md-4 lookupclubimg">
                            {strGender && ((strGender === "Male") ? <img src={male} alt="" /> : <img src={female} alt="" />)}
                        </div>
                    </div>
                </div>

                <p>{strDescriptionEN}</p>
                <br />
                <p>{strStadiumDescription}</p>
                <div className="d-flex justify-content-center py-5">
                    <div className="px-3">
                        <a href={`https://${strFacebook}`}>{faFacebookIcon}</a>
                    </div>
                    <div className="px-3">
                        <a className="socialLogo" href={`https://${strYoutube}`}>{faYoutubeIcon}</a>
                    </div>
                    <div className="px-3">
                        <a href={`https://${strTwitter}`}>{faTwitterIcon}</a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LookupClub;