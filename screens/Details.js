import React from 'react';
import styles from '../assets/styles';
import Demo from '../assets/data/demo.js';
import MapView, {Marker} from 'react-native-maps';
import {View, ImageBackground, Text, ScrollView, TouchableOpacity} from 'react-native';
import Icon from "../components/Icon";
import DetailsItem from "../components/DetailsItem";

const COORDINATE = {latitude: -38.9496126, longitude: -68.0606574};

const {
    image,
    location,
    name
} = Demo[5];

export default function Links({route, navigation}) {
    const { params } = route;
    return (
        <View>
            <View style={styles.containerDetails}>
                <ScrollView>
                    <ImageBackground source={image} style={styles.photo}>
                        <View style={styles.top}>
                            <TouchableOpacity>
                                <Text style={styles.topIconLeft}>
                                    <Icon name="chevronLeft" onPress={()=> navigation.navigate('Home')} />
                                </Text>
                            </TouchableOpacity>

                            <TouchableOpacity style={styles.roundedButton}>
                                <Text style={styles.iconButton}>
                                    <Icon name="chat" />
                                </Text>
                                <Text style={styles.textButton}>Contact</Text>
                            </TouchableOpacity>
                        </View>
                    </ImageBackground>

                    <DetailsItem
                        name={params.name}
                        price={params.price}
                        location={{latitude: params.latitude, longitude: params.longitude}}
                        description={params.description}
                    />
                </ScrollView>
            </View>
        </View>
    );
}
