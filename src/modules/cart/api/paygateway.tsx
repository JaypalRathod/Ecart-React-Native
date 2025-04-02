import { navigate } from "@navigation/NavigationUtils";
import { BASE_URL } from "@store/config";
import axios from "axios";
import RazorpayCheckout from 'react-native-razorpay';


export const createTransaction = async (amount: number, userId: string) => {
    try {
        const responce = await axios.post(`${BASE_URL}/order/transaction`, {
            userId,
            amount: amount * 100,
        });
        return responce.data;
    } catch (error) {
        console.log('createTransaction Error', error);
        return null;
    }
};

export const createOrder = async (key: string, amount: number, order_id: string, userId: string, cart: any, address: string) => {
    try {
        let options = {
            description: 'Ecommerce Shopping',
            image: 'https://i.imgur.com/3g7nmJC.png',
            currency: 'INR',
            key: key,
            amount: amount,
            order_id: order_id,
            name: 'Kart',
            theme: { color: '#53a20e' },
        }

        RazorpayCheckout.open(options).then(async (data) => {
            const today = new Date();
            const sevenDaysFromNow = new Date();
            sevenDaysFromNow.setDate(today.getDate() + 7);

            const res = await axios.post(`${BASE_URL}/order`, {
                razorpay_order_id: order_id,
                razorpay_payment_id: data?.razorpay_payment_id,
                razorpay_signature: data?.razorpay_signature,
                user_id: userId,
                cartItems: cart,
                deliveryDate: sevenDaysFromNow,
                address: address,
            })

            navigate("PaymentSuccess", { price: amount / 100, address: address })

        }).catch((error) => {
            console.log(error);
            return { type: 'error', message: error?.message }
        });
    } catch (error) {
        console.error('createOrder Error', error);
        return { type: 'error', message: 'Error' };
    }
};