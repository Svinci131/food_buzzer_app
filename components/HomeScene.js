import React, { Component, PropTypes } from 'react';
import { Text, View, StyleSheet, TextInput} from 'react-native';
import Button from './Button';
import { stylesObj } from '../styles';
// import * as moment from 'moment';
var moment = require('moment');

const styles = StyleSheet.create(stylesObj);

export default class HomeScene extends Component {
  render() {
    return (
      <View>
        <Text style={styles.logo}>Food Buzz</Text>
          <TextInput placeholder="Find Event"
             onChangeText={this._findEvents.bind(this)}>
          </TextInput>
          <Button text={'Find By Location'} press={this._findEventsNearUser.bind(this)}/>
          <Text style={styles.tagline}>Got insurance problems?</Text>
          <Text style={styles.tagline}>Connect with someone for help!</Text>
      </View>
    )
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