import { useState } from 'react';
import axios from 'axios';

const API_URL = 'https://codexauth.onrender.com/api/';

// Custom hook for authentication
const useAuth = () => {
    const [user, setUser] = useState(localStorage.getItem('user'));
    const [error, setError] = useState(null);
    const [token, setToken] = useState(localStorage.getItem('authToken'));
    const [loading,setLoading] = useState(false);

    // Function to log in and set user data
    const login = async (username, password) => {
        try {
            const response =  await axios.post(`${API_URL}login/`, { username, password },
                { withCredentials: true }).then(response=>{
                const authToken = localStorage.getItem('authToken') || response.data.user.id;

                // Store the token in localStorage and update the state
                localStorage.setItem('authToken', authToken);
                localStorage.setItem('user', response.data.user.username);

                setLoading(true);

                return response.data;
            })

        } catch (error) {
            setError('Invalid credentials');
            throw error;
        }
    };

    // Function to check if the user is logged in
    const isAuthenticated = () => {
        console.log("token is "+token)
        return token !== null;
    };
    const getUser = () => {
        console.log("user is "+user)
        return user
    };

    return {
        getUser,
        login,
        isAuthenticated,
        error,
        loading
    };
};

export default useAuth;
