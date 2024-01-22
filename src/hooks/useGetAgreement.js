import { useState, useEffect } from 'react';
import axios from 'axios';

export default function AgreementHook () {
    const [error,setError] = useState(true);
    const [loading,setLoading] = useState(false);
    const [agreementData, setAgreementData] = useState([]);
    const apiUrl = '//35.174.107.106:3000/agreement';

    useEffect(() => {
        const fetchData = async () => {
            try {
                setError(false);
                setLoading(true);
                const response = await axios.get(apiUrl);
                setAgreementData(response.data);
                console.log(response.data);
            } catch (error) {
                setError(true);
                setLoading(false);
                console.error('Error fetching agreement data:', error);
            }
        };

        fetchData();

    }, []);
    return {
        loading,
        error,
        agreementData,
    };

}


