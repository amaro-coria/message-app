import axios from 'axios';

const BASE_URL = 'http://localhost:8080'; // Replace with your actual API base URL

export const getMessages = async () => {
    const response = await axios.get(`${BASE_URL}/api/v1/message`);
    return response.data.messages;
};

export const sendMessage = async (messageContent, channels) => {
    const payload = {
        message: {
            messageContent,
        },
        channels,
    };
    const response = await axios.post(`${BASE_URL}/api/v1/message`, payload);
    return response.data;
};
