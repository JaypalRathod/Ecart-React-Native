import { BASE_URL } from "@store/config";
import axios from "axios";

export const fetchProductByCategory = async (id: string) => {
    try {
        const responce = await axios.get(`${BASE_URL}/products/${id}`);
        return responce.data?.categories;
    } catch (error) {
        console.log('Login Error', error);
        return [];
    }
};
