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
  componentWillMount() {
    const lat = Store.event.venue.location.lat;
    const lon = Store.event.venue.location.lon;
    const yelpUrl = 'http://localhost:1337/?ll=' + lat + ", " + lon;
     fetch(yelpUrl)
     .then(res => res.text())  
     .then(res => {
      let businesses = JSON.parse(res).businesses;
      console.log('businesses', businesses)

      if (businesses.length > 0) {
        console.log('has businesses', Array.isArray(businesses))
        let hasMenuBis = businesses.filter((bis) => {
          return !!bis.menu_provider;
        })
        console.log('hasMenuBis', hasMenuBis)
        this.setState({
          businesses: hasMenuBis
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
        <Text style={styles.logo}>Food Near You:</Text>
         <View>{ this._businesses() }</View>
      </View>
    )
  }
  _businesses () {
    console.log(this.props);
    let defaultImgUrl = "https://www.iconexperience.com/_img/g_collection_png/standard/512x512/hamburger.png";
    if (this.state.businesses.length) {
      return this.state.businesses.map((business, idx) => { 
        return (
          <MiniProfile key={idx}
            navigator={this.props.navigator}
            title={business.name} 
            city={business.location.city} 
            photoUrl={business.image_url || defaultImgUrl} >
            next={"OrderSummary"}
          </MiniProfile>) 
      })
    } else {
      return <Text style={styles.loading}>loading...</Text>
    }
  }
}
