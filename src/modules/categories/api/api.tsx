import { BASE_URL } from '@store/config';
import axios from 'axios';

export const fetchCategoriesData = async () => {
    try {
        const responce = await axios.get(`${BASE_URL}/categories`);
        return responce.data?.categories;
    } catch (error) {
        console.log('Login Error', error);
    }
};
