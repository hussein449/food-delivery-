import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHouse, faUtensils, faPlus, fa7, faCartShopping,faUser} from '@fortawesome/free-solid-svg-icons';
//import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
//import CartPage from '../CartPage';
//import { CartContext } from '../CartContext';
function BottomNavbar() {
 
  //const navigate = useNavigate();
  return (
      <div className="bottom-navbar">
        <Link to="/Home" className="nav-item">
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
        < Link to="/CartPage" className="nav-item">
        <FontAwesomeIcon icon={fa7}  className="notification" />
          <FontAwesomeIcon icon={faCartShopping} className="icon" />
          <span className="item-name">Cart</span>
          </Link>
        {/* </div> */}
        <Link to="/profile" className="nav-item">
          <FontAwesomeIcon icon={faUser} className="icon" />
          <span className="item-name">Profile</span>
        </Link>
        
      </div>
  );
}

export default BottomNavbar;
