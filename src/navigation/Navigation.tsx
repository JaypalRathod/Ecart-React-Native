import React, { FC } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Splash from '@modules/onboard';
import { navigationRef } from './NavigationUtils';
import MainNavigator from './MainNavigator';
import Products from '@modules/products';
import Cart from '@modules/cart';
import PaymentSuccess from '@modules/payment_success';
import ARViewr from '@modules/ar_viewer';

const Stack = createNativeStackNavigator();

const Navigation: FC = () => {
    return (
        <NavigationContainer ref={navigationRef}>
            <Stack.Navigator
                initialRouteName="Splash"
                screenOptions={{
                    headerShown: false,
                }}
            >
                <Stack.Screen name="Splash" component={Splash} />
                <Stack.Screen name="MainNavigator" component={MainNavigator} />
                <Stack.Screen name="Products" component={Products} />
                <Stack.Screen name="Cart" component={Cart} />
                <Stack.Screen name="ARViewr" component={ARViewr} />
                <Stack.Screen name="PaymentSuccess" component={PaymentSuccess} />
            </Stack.Navigator>
        </NavigationContainer>
    );
};

export default Navigation;
