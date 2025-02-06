import React from "react";
import { useLocation } from "react-router-dom";

const ProfilePage = () => {
    const location = useLocation(); // Retrieve passed data from form submission
    const { name, location: restaurantLocation, cuisine } = location.state || {};

    // Mock data for followers and videos
    const followers = 1500;
    const videos = 5;

    return (
        <div style={profileStyles.container}>
            <div style={profileStyles.header}>
                <h2>{name}</h2>
                <p>{restaurantLocation}</p>
                <p>{cuisine}</p>
            </div>
            <div style={profileStyles.stats}>
                <div>
                    <strong>{followers}</strong> Followers
                </div>
                <div>
                    <strong>{videos}</strong> Videos Uploaded
                </div>
            </div>
            <div style={profileStyles.videos}>
                <h3>Videos</h3>
                {/* Mock videos, just add placeholders for now */}
                <div style={profileStyles.videoList}>
                    {Array.from({ length: videos }).map((_, index) => (
                        <div key={index} style={profileStyles.videoItem}>
                            <p>Video {index + 1}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

const profileStyles = {
    container: {
        fontFamily: "Arial, sans-serif",
        backgroundColor: "#f9f9f9",
        padding: "20px",
        maxWidth: "500px",
        margin: "20px auto",
        borderRadius: "8px",
        boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)"
    },
    header: {
        textAlign: "center",
        marginBottom: "20px"
    },
    stats: {
        display: "flex",
        justifyContent: "space-around",
        marginBottom: "20px",
        fontSize: "18px"
    },
    videos: {
        marginTop: "20px"
    },
    videoList: {
        display: "flex",
        flexWrap: "wrap",
        gap: "10px",
        justifyContent: "center"
    },
    videoItem: {
        width: "100px",
        height: "100px",
        backgroundColor: "#ccc",
        borderRadius: "8px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        color: "#fff",
    }
};

export default ProfilePage;
