import React, { Component, PropTypes } from 'react';
import { Text, View, StyleSheet, TextInput} from 'react-native';
import Button from './Button';
import { stylesObj } from '../styles';
import MiniProfile from './MiniProfile';

const styles = StyleSheet.create(stylesObj);

export default class RestaurantList extends Component { 
  constructor() {
    super();
  }
  componentDidMount() {
   
  }
  render() {
    return (
      <View>
        <Text>RESTAURANT</Text>
      </View>
    )
  }
  _events () {

    let defaultImgUrl = "https://crunchbase-production-res.cloudinary.com/image/upload/c_pad,h_140,w_140/v1456158852/wmdzu9admd7p9y2n2b6z.png";
    if (this.state.events.length) {
      return this.state.events.map((event, idx) => { 
        console.log("_________", event)
        return (
          <MiniProfile key={idx}
            title={event.title} 
            venue={event.venue.name} 
            address={event.venue.city} 
            date={event.datetime_local}
            photoUrl={event.performers[0].image || defaultImgUrl} >
          </MiniProfile>) 
      })
    } else {
      return <Text>loading</Text>
    }
  }
}
