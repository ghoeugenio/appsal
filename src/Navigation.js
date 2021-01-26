import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import React from 'react';
import { Entypo, AntDesign } from '@expo/vector-icons';

import HomeScreen from './screens/home';
import LomoScreen from './screens/lomotif';
import BuzzScreen from './screens/buzz';
import FotosScreen from './screens/fotos';

const Tab = createBottomTabNavigator();

const icons = {
    home: {
        lib: AntDesign,
        name: 'heart',
    },
    fotos: {
        lib: AntDesign,
        name: 'picture',
    },
    buzzfeed: {
        lib: Entypo,
        name: 'list',
    },
    lomotif: {
        lib: Entypo,
        name: 'folder-video',
    },
    sobre: {
        lib: Entypo,
        name: 'help-with-circle',
    },
};

export default function Navigation() {
    return (
        <Tab.Navigator
            screenOptions={({ route }) => ({
                tabBarIcon: ({ color, size }) => {
                    const { lib: Icon, name } = icons[route.name];
                    return <Icon name={name} size={size} color={color} />;
                },
            })}
            tabBarOptions={{
                activeTintColor: '#ff002b',
                adaptive: true,
            }}
        >
            <Tab.Screen
                name="home"
                component={HomeScreen}
                options={{
                    title: 'Inicio',
                }}
            />
            <Tab.Screen
                name="fotos"
                component={FotosScreen}
                options={{
                    title: 'Fotos',
                }}
            />
            <Tab.Screen
                name="buzzfeed"
                component={BuzzScreen}
                options={{
                    title: 'Quiz',
                }}
            />
            <Tab.Screen
                name="lomotif"
                component={LomoScreen}
                options={{
                    title: 'Lomotif',
                }}
            />
        </Tab.Navigator>
    );
}