import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const RestaurantSignUp = () => {
    const [formData, setFormData] = useState({
        name: "",
        location: "",
        cuisine: ""
    });
    const navigate = useNavigate(); // React Router navigate hook

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Form Submitted", formData);
        // Navigate to the profile page after form submission
        navigate('/profile', { state: { ...formData } });
    };

    return (
        <div style={styles.container}>
            <h2>Restaurant Sign-Up</h2>
            <form onSubmit={handleSubmit}>
                <input 
                    type="text" 
                    name="name" 
                    placeholder="Restaurant Name" 
                    value={formData.name} 
                    onChange={handleChange} 
                    required 
                    style={styles.input} 
                />
                <input 
                    type="text" 
                    name="location" 
                    placeholder="Location" 
                    value={formData.location} 
                    onChange={handleChange} 
                    required 
                    style={styles.input} 
                />
                <input 
                    type="text" 
                    name="cuisine" 
                    placeholder="Cuisine Type" 
                    value={formData.cuisine} 
                    onChange={handleChange} 
                    required 
                    style={styles.input} 
                />
                <button type="submit" style={styles.button}>Sign Up</button>
            </form>
        </div>
    );
};

const styles = {
    container: {
        fontFamily: "Arial, sans-serif",
        backgroundColor: "#f4f4f4",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        margin: 0,
        flexDirection: "column",
        padding: "20px",
        borderRadius: "8px",
        boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)",
        width: "300px",
        textAlign: "center",
        background: "white"
    },
    input: {
        width: "100%",
        padding: "10px",
        margin: "10px 0",
        border: "1px solid #ccc",
        borderRadius: "4px"
    },
    button: {
        width: "100%",
        padding: "10px",
        background: "#28a745",
        color: "white",
        border: "none",
        borderRadius: "4px",
        cursor: "pointer",
        fontSize: "16px"
    }
};

export default RestaurantSignUp;
