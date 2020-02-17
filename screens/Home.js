import _ from 'lodash';
import React from 'react';
import gql from 'graphql-tag';
import { View, ImageBackground, TouchableHighlight } from 'react-native';
import City from '../components/City';
import Filters from '../components/Filters';
import CardItem from '../components/CardItem';
import styles from '../assets/styles';
import Demo from '../assets/data/demo.js';
import CardStack, { Card } from 'react-native-card-stack-swiper';
import { useQuery } from '@apollo/react-hooks';

const ALL_HOUSES = gql`{
  allHouses{
    id
    name
    price
    currency
    broker
    description
    latitude
    longitude
    address
  }
}`;

const Home = (props) => {
    const { loading, error, data } = useQuery(ALL_HOUSES);

    if (loading) console.log('Loading...');
    if (error) console.log(`Error! ${error.message}`);

    let propiedades = _.defaultTo(data, {allHouses: []});
    
    return (
        <View style={styles.containerHome}>
          <CardStack
              loop={true}
              verticalSwipe={false}
              renderNoMoreCards={() => null}
              ref={swiper => (this.swiper = swiper)}
          >
            {propiedades.allHouses.map((item, index) => {
                console.log(item.price)
                return(
                <Card key={index} >
                  <TouchableHighlight onLongPress={() => props.navigation.navigate('Details', item)}>
                  <CardItem
                      actions
                      name={item.name}
                      image={Demo[5].image}
                      matches={item.price ? item.price : 1}
                      description={item.description}
                      onPressLeft={() => this.swiper.swipeLeft()}
                      onPressRight={() => this.swiper.swipeRight()}
                  />
                  </TouchableHighlight>
                </Card>
            )})}
          </CardStack>
        </View>
  );
};

export default Home;
