import React, { FC } from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Splash from '@modules/onboard';
import { navigationRef } from './NavigationUtils';
import MainNavigator from './MainNavigator';

const Stack = createNativeStackNavigator();

const Navigation: FC = () => {
    return (
        <NavigationContainer ref={navigationRef}>
            <Stack.Navigator
                initialRouteName='Splash'
                screenOptions={{
                    headerShown: false,
                }}
            >
                <Stack.Screen name="Splash" component={Splash} />
                <Stack.Screen name="MainNavigator" component={MainNavigator} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default Navigation