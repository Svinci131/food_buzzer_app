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
        <Text style={styles.logo}>Food But</Text>

          <TextInput placeholder="Type performance name here"
            placeholderTextColor="#90A4AE"
            style={styles.inputBox} onChangeText={this._findEvents.bind(this)}>
          </TextInput>

          <Button text={'I need help'} press={this._navigateToGetHelp.bind(this)}/>
          <Button text={'Find By Location'} press={this._getLocation.bind(this)}/>
          <Text style={styles.tagline}>Got insurance problems?</Text>
          <Text style={styles.tagline}>Connect with someone for help!</Text>
      </View>
    )
  }
  _findEvents () {
    //get events that match name
  }
  _getLocation () {
    fetch("https://api.seatgeek.com/2/events?geoip=true&range=25mi")
    .then(response => response.text())
    .then(response => {
      console.log(Date.now(), moment().format());
      // console.log(response)
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