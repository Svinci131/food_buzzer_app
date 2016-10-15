import React, { Component, PropTypes } from 'react';
import { Text, View, StyleSheet, TextInput} from 'react-native';
import Button from './Button';
import { stylesObj } from '../styles';
import MiniProfile from './MiniProfile';
import Store from '../store';

const styles = StyleSheet.create(stylesObj);

export default class RestaurantList extends Component { 
  constructor() {
    super();
    this.state = {
      businesses: []
    };
  }
  componentDidMount() {
    const lat = Store.event.venue.location.lat;
    const lon = Store.event.venue.location.lon;
    const yelpUrl = 'http://localhost:1337/?ll=' + lat + ", " + lon;
     fetch(yelpUrl)
     .then(res => res.text())  
     .then(res => {
      let businesses = JSON.parse(res).businesses;
      console.log('businesses', businesses)
      if (businesses.length > 0) {
        this.setState({
          businesses: businesses
        });
      } else {
        this.setState({
          businesses: ["no businesses in your location"]
        });
      }
      })
     .catch(err => console.log("error ", err))
  }
  render() {
    return (
      <View>
        <Text>Food near your Venue/Area:</Text>
         <View>{ this._businesses() }</View>
      </View>
    )
  }
  _businesses () {
    if (this.state.businesses.length) {
      return this.state.businesses.map((businesses, idx) => { 
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
