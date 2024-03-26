import { useState } from 'react';
import axios from 'axios';

const API_URL = 'https://codexauthv2.onrender.com/api/';

// Custom hook for authentication
const useAuth = () => {
    const [user, setUser] = useState(localStorage.getItem('user'));
    const [userNameRes, setUserName] = useState('');
    const [error, setError] = useState(null);
    const [token, setToken] = useState(localStorage.getItem('authToken'));
    const [loading, setLoading] = useState(false);

    // Function to log in and set user data
    const login = async (username, password) => {
        try {
            const response = await axios.post(`${API_URL}login/`, { username, password }, { withCredentials: true });

            // Check if the response has a 'user-account-details' property
            if (response.data && response.data["user-account-details"]) {
                // Extract the username from the API response
                const extractedUsername = response.data["user-account-details"].username;

                // Check if the extracted username is not null or undefined
                if (extractedUsername) {
                    // Update the state with the extracted username
                    setUserName(extractedUsername);
                    console.log("Username extracted successfully: ", extractedUsername);


                    localStorage.setItem('user', extractedUsername);
                    console.log("Username extracted  ", user);

                } else {
                    console.error('Username is null or undefined in the API response');
                }
            } else {
                // Handle the case where 'user-account-details' is undefined
                console.error('User details not found in the API response');
            }

            // Store the token in localStorage and update the state
            const authToken = localStorage.getItem('authToken');
            localStorage.setItem('authToken', authToken);

            setLoading(true);

            return response.data;
        } catch (error) {
            setError('Invalid credentials');
            console.error("Error during login:", error);
            throw error;
        }
    };

    // Function to check if the user is logged in
    const isAuthenticated = () => {
        console.log("token is " + token);
        return token !== null;
    };

    const getUser = () => {
        console.log("user is " + user);
        return user;
    };

    return {
        getUser,
        login,
        isAuthenticated,
        error,
        loading,
        userNameRes, // Ensure that you return the userNameRes state
    };
};

export default useAuth;
