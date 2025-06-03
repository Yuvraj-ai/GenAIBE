import axios from 'axios';

const API_URL = '/api/proxy'; // Adjust this if your proxy path changes

export const askTutor = async (query) => {
    try {
        const response = await axios.post(API_URL, { query });
        return response.data.response;
    } catch (error) {
        console.error('Error asking tutor:', error);
        throw error;
    }
};