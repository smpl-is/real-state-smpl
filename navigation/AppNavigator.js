import * as React from 'react';
import { NavigationNativeContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';

// import TabBarIcon from '../components/TabBarIcon';
import Home from '../screens/Home';
import Liked from '../screens/Liked';
import Details from '../screens/Details';
import DrawerContent from './DrawerContent';

const Drawer = createDrawerNavigator();

function App() {
    return (
        <NavigationNativeContainer>
            <Drawer.Navigator drawerContent={DrawerContent}>
                <Drawer.Screen name="Home" component={Home} />
                <Drawer.Screen name="Details" component={Details} />
                <Drawer.Screen name="Liked" component={Liked}/>
            </Drawer.Navigator>
        </NavigationNativeContainer>
    );
}

export default App;
