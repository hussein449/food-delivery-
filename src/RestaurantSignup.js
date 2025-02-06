import { useState } from "react";
import "../src/RestaurantSignup.css";

export default function RestaurantSignup() {
  const [formData, setFormData] = useState({
    name: "",
    location: "",
    cuisine: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Restaurant Data:", formData);
  };

  return (
    <div className="container">
      <div className="form-box">
        <h2 className="title">Restaurant Signup</h2>
        <form onSubmit={handleSubmit} className="form">
          <div className="form-group">
            <label>Restaurant Name</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label>Location</label>
            <input
              type="text"
              name="location"
              value={formData.location}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label>Cuisine</label>
            <input
              type="text"
              name="cuisine"
              value={formData.cuisine}
              onChange={handleChange}
              required
            />
          </div>
          <button type="submit" className="submit-btn">Sign Up</button>
        </form>
      </div>
    </div>
  );
}
