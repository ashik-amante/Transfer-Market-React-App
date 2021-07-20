import React from 'react';
import './profileCard.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoffee,faFileSignature} from '@fortawesome/free-solid-svg-icons';

const ProfileCard = (props) => {
   const player = props.info;
   const sign = props.sign;
   
   console.log(player.name);
  //  function purch () {
  //    console.log("playerd purchased");
  //  }
    return (
        <div>
     <div className="container">
      <div className="cover-photo">
        <img src={player.countryImage} alt="country" className="country" />
        <img src={player.image} alt="player" className="profile"/>
        
      </div>
      <div className="profile-name">{player.name}</div>
      <p className="about"><strong>Position:</strong>{player.position}</p>
      <p className="about"><strong>Current Club:</strong>{player.currentClub}</p>
      <p className="about"><strong>Salary:</strong>{player.salary}</p>
      <p className="about"><strong>Transfer Value:</strong>{player.transferValue}</p>
      <button onClick={()=>sign(player)}   className="purchase-btn"> Purchase <FontAwesomeIcon icon={faFileSignature} /></button>
      <button className="details-btn">Details</button>
      
      </div>
        </div>
    );
};

export default ProfileCard;