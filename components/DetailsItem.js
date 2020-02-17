import React from 'react';
import Icon from './Icon';
import styles from '../assets/styles';
import { Text, View } from 'react-native';
import MapView, {Marker} from "react-native-maps";

const COORDINATE = {latitude: -38.9496126, longitude: -68.0606574};
const INITIAL_COORDINATE = {
    latitude: -38.9496126,
    longitude: -68.0606574
};


const DetailsItem = ({
                         info1,
                         info2,
                         info3,
                         info4,
                         location,
                         matches,
                         name,
    price
                     }) => {
    return (
        <View style={styles.containerDetailsItem}>
            <View style={styles.headerDetailsItem}>
                <Text style={styles.detailsPrice}>{`$ ${price}`}</Text>
                <Text style={styles.detailsType}>Alquiler</Text>
            </View>

            <View style={styles.info}>
                <Text style={styles.iconDetails}>
                    <Icon name="user" />
                </Text>
                <Text style={styles.infoContent}>{name}</Text>
            </View>

            <View style={styles.info}>
                <Text style={styles.iconDetails}>
                    <Icon name="circle" />
                </Text>
                <Text style={styles.infoContent}>{info2}</Text>
            </View>

            <View style={styles.info}>
                <Text style={styles.iconDetails}>
                    <Icon name="hashtag" />
                </Text>
                <Text style={styles.infoContent}>{info3}</Text>
            </View>

            <View style={styles.info}>
                <Text style={styles.iconDetails}>
                    <Icon name="calendar" />
                </Text>
                <Text style={styles.infoContent}>{info4}</Text>
            </View>

            <MapView
                style={styles.mapStyle}
                initialRegion={INITIAL_COORDINATE}
                minZoomLevel={5}
            >
                <Marker
                    coordinate={location}
                    title={'Nombre Propiedad'}
                    description={'Propiedad'}
                />
            </MapView>
        </View>
    );
};

export default DetailsItem;
