import React from 'react';
import styles from '../assets/styles';
import MapView, {Marker} from 'react-native-maps';
import { View, ImageBackground, Text, ScrollView } from 'react-native';

const COORDINATE = {latitude: -38.9496126, longitude: -68.0606574};

export default function Links() {
    return (
        <ImageBackground
            source={require('../assets/images/bg.png')}
            style={styles.bg}
        >
            <View style={styles.containerDetails}>
                <ScrollView>
                    <View styles={styles.top}>
                        <MapView
                            style={styles.mapStyle}
                            initialRegion={COORDINATE}
                            minZoomLevel={5}
                            >
                            <Marker
                                coordinate={COORDINATE}
                                title={'Nombre Propiedad'}
                                description={'Propiedad'}
                            />
                        </MapView>
                        <Text>
                            CASA RESIDENCIAL EN UNA PLANTA
                            Se encuentra ubicado en Zona de Fincas, Barrio Elementos , acceso directo por asfalto a 300mtrs de Ruta Nacional 22. A minutos de Neuquén Capital.
                            Posee seguridad 24 hs Valor expensas $5.800 aproximadamente
                            El barrio cuenta con servicios ( LUZ, AGUA, GAS, CLOACAS, ASFALTO)
                        </Text>
                    </View>
                </ScrollView>
            </View>
        </ImageBackground>
    );
}

Links.navigationOptions = {
    title: 'HomeDetails',
};
