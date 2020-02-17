import React from 'react';
import { View, Text } from 'react-native';
import { DrawerContentScrollView, DrawerItemList } from '@react-navigation/drawer';


const visibleItems = ['Home', 'Liked'];

const getVisible = item => contains(item.key, visibleItems);

const getFilteredAndStyledItems = ({ items, ...other }) => (
    <DrawerItemList
        items={filter(getVisible, items)}
        {...other}
    />
);

const CustomDrawerContentComponent = props => {
    return(
    <View style={{flex: 1, background: '#000000'}}>
        <DrawerContentScrollView {...props}>
            {/*TODO: Deberiamos renderizar solo las screens que sean visibles*/}
            <Text>SMPL APP</Text>
            <DrawerItemList {...props} />
        </DrawerContentScrollView>
    </View>
)};

export default CustomDrawerContentComponent;
