import React, { Component, PropTypes } from 'react';
import {
  StyleSheet,
  Text,
  Image,
  View,
  TouchableOpacity
} from 'react-native';
import {stylesObj} from '../styles'
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
        <TouchableOpacity onPress={this.goToRestaurantList.bind(this, "je")}>
        <View style={styles.userDetails}>
          <Text style={styles.listTitle}>{this.props.title}</Text>
          <Text style={styles.listText}>{this.props.venue}</Text>
          <Text style={styles.listText}>{this.props.address}</Text>
          <Text style={styles.listText}>{this.props.date}</Text>
      
        </View>
        </TouchableOpacity>
      </View>
    )
  }
  goToRestaurantList(user){
    console.log("yo", user)
    this.props.navigator.push({
      ident: "RestaurantList"
    })
  }
}

MiniProfile.propTypes = {
  title : PropTypes.string.isRequired,
  venue: PropTypes.string.isRequired,
  address : PropTypes.string,
  date: PropTypes.string.isRequired,
  photoUrl : PropTypes.string
}

// var styles =  StyleSheet.create({

// })


export default MiniProfile
