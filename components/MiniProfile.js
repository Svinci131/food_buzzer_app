import React, { Component, PropTypes } from 'react';
import {
  StyleSheet,
  Text,
  Image,
  View,
  TouchableOpacity
} from 'react-native';
import {stylesObj} from '../styles'; 
import Store from '../store';

const styles = StyleSheet.create(stylesObj);


class MiniProfile extends Component {
    constructor(props){
        super(props)
    }

  render () {
    return (
      <View style={styles.profileComp}>
        <View style={styles.imgView} >
          <Image style={{width: 90, height: 90}} source={{uri:this.props.photoUrl}}></Image>
        </View>
        <TouchableOpacity onPress={this.goToNext.bind(this)}>
        <View style={styles.userDetails}>
          <Text style={styles.listTitle}>{this.props.title}</Text>
          <Text style={styles.listText}>{this.props.venue}</Text>
          <Text style={styles.listText}>{this.props.city}</Text>
          <Text style={styles.listText}>{this.props.date}</Text>
        </View>
        </TouchableOpacity>
      </View>
    )
  }
  goToNext(){
    if (this.props.next === "RestaurantList") {
      Store.event = this.props.event;
    }
    this.props.navigator.push({
      ident: this.props.next
    })
  }
}

MiniProfile.propTypes = {
  title : PropTypes.string.isRequired,
  venue: PropTypes.string,
  city : PropTypes.string,
  date: PropTypes.string,
  photoUrl : PropTypes.string
}

// var styles =  StyleSheet.create({

// })


export default MiniProfile
