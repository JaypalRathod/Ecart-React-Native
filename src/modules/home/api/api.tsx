import { BASE_URL } from '@store/config';
import axios from 'axios';

export const fetchApiData = async () => {
    try {
        const responce = await axios.get(`${BASE_URL}/delivery/login`);
        return responce.data;
    } catch (error) {
        console.log('Login Error', error);
    }
};
