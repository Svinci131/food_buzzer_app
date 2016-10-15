import React, { Component, PropTypes } from 'react';
import { Text, View, StyleSheet, TextInput} from 'react-native';
import Button from './Button';
import { stylesObj } from '../styles';
import MiniProfile from './MiniProfile';

// import * as moment from 'moment';
var moment = require('moment');

function findEventsNearMe () {

}
const styles = StyleSheet.create(stylesObj);

export default class HomeScene extends Component {
  
  constructor() {
    super();
    this.state = {
      events: []
    };
  }

  componentDidMount() {

    var start = moment().format();
    var end = start.slice(0,11) + "23:59:59";
    let url = "https://api.seatgeek.com/2/events?geoip=true&range=50mi&datetime_local.gte=" + start + "&datetime_local.lte=" + end;
    fetch(url)
    .then(response => response.text())
    .then(response => {
      
      let events = JSON.parse(response).events;
      if (events.length > 0) {
        this.setState({
          events: events
        });
      } else {
        this.setState({
          events: ["no events in your location"]
        });
      }
    }).catch(err => console.log(err));
  }
  render() {
    return (
      <View>
        <Text style={styles.logo}>Food Buzz</Text>
          <TextInput placeholder="Find Event"
             onChangeText={this._findEvents.bind(this)}>
          </TextInput>
           <View>{ this._events() }</View>
          <Text style={styles.tagline}>Got insurance problems?</Text>
          <Text style={styles.tagline}>Connect with someone for help!</Text>
      </View>
    )
  }
  _events () {

    let defaultImgUrl = "https://crunchbase-production-res.cloudinary.com/image/upload/c_pad,h_140,w_140/v1456158852/wmdzu9admd7p9y2n2b6z.png";
    if (this.state.events.length) {
      return this.state.events.map((event, idx) => { 
        return (
          <MiniProfile 
            navigator={this.props.navigator}
            key={idx}
            title={event.title} 
            venue={event.venue.name} 
            address={event.venue.city} 
            date={event.datetime_local}
            next={"RestaurantList"}
            photoUrl={event.performers[0].image || defaultImgUrl} 
            event={event}>
          </MiniProfile>) 
      })
    } 
    else {
      return <Text>loading</Text>
    }
  }
  _findEvents () {

  }
  _findEventsNearUser () {
    var start = moment().format();
    var end = start.slice(0,11) + "23:59:59";
    let url = "https://api.seatgeek.com/2/events?geoip=true&range=50mi&datetime_local.gte=" + start + "&datetime_local.lte=" + end;
    fetch(url)
    .then(response => response.text())
    .then(response => {
      console.log(response)
      this.props.navigator.push({
      ident: "ResultList"
      })
    }).catch(err => console.log(err));
  } 
  _navigateToHelp(){
    this.props.navigator.push({
      ident: "ProvideHelp"
    })
  }

  _navigateToGetHelp(){
    this.props.navigator.push({
      ident: "GetHelp"
    })
  }

}


HomeScene.propTypes = {
  title: PropTypes.string,
  onForward: PropTypes.func,
  onBack: PropTypes.func
}