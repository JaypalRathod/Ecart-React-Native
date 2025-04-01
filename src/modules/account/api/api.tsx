import { BASE_URL } from "@store/config";
import axios from "axios";


export const loginOrSignup = async (phone: string, address: string) => {
    try {
        const responce = await axios.post(`${BASE_URL}/user/login`, {
            phone,
            address
        });
        return responce.data.user;
    } catch (error) {
        console.log('Login Error', error);
        return null;
    }
};

export const getOrderByUserId = async (userId: string) => {
    try {
        const responce = await axios.post(`${BASE_URL}/order/${userId}`);
        return responce.data.order;
    } catch (error) {
        console.log('getOrderByUserId Error', error);
        return [];
    }
};