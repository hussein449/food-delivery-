import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHouse, faUtensils, faPlus, faInbox, fa7,faUser } from '@fortawesome/free-solid-svg-icons';
//import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';

function BottomNavbar() {

  //const navigate = useNavigate();
  return (
      <div className="bottom-navbar">
        <Link to="/" className="nav-item">
          <FontAwesomeIcon icon={faHouse} className="icon active" />
          <span className="item-name active">Home</span>
        </Link>
        
        < Link to="/categories" className="nav-item">
          <FontAwesomeIcon icon={faUtensils} className="icon" />
          <span className="item-name">Restaurants</span>
          </Link>
        {/* </div> */}
        <div className="nav-item">
          <FontAwesomeIcon icon={faPlus} className="icon plus" />
          <span className="item-name">Create</span>
        </div>
        <div className="nav-item">
          <FontAwesomeIcon icon={fa7} className="notification" />
          <FontAwesomeIcon icon={faInbox} className="icon" />
          <span className="item-name">Inbox</span>
        </div>
        <div className="nav-item">
          <FontAwesomeIcon icon={faUser} className="icon" />
          <span className="item-name">Profile</span>
        </div>
      </div>
  );
}

export default BottomNavbar;
