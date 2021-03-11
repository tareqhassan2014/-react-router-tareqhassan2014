import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLongArrowAltRight } from '@fortawesome/free-solid-svg-icons'
import { useHistory } from 'react-router';

const arrayicon = <FontAwesomeIcon icon={faLongArrowAltRight} />

const Clubs = (props) => {

    const { strTeamBadge, idTeam, strSport, strTeam } = props.Club;

    const history = useHistory();

    return (
        <div className="col-md-3 col-sm-12 my-3 " style={{ width: "268px" }} >
            <div className="card text-center" style={{ width: "15rem" }}>
                <img src={strTeamBadge} className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">{strTeam}</h5>
                    <p className="card-text">Sports type: {strSport}</p>
                    <button onClick={() => history.push(`/club/${idTeam}`)} className="btn btn-secondary">Explore <span>{arrayicon}</span></button>
                </div>
            </div>
        </div >
    );
};

export default Clubs;