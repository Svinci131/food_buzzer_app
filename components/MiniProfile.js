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
    goToProfile(user){
        console.log(user)
    }
  render () {
    console.log('in mini profile', this.props)
    return (
      <View style={styles.profileComp} onPress={this.goToProfile.bind(this, this.props)}>
        <View style={styles.imgView}>
          <Image style={{width: 90, height: 90}} source={{uri:this.props.photoUrl}}></Image>
        </View>
        <View style={styles.userDetails}>
          <Text style={styles.listTitle}>{this.props.title}</Text>
          <Text style={styles.listText}>{this.props.venue}</Text>
          <Text style={styles.listText}>{this.props.address}</Text>
          <Text style={styles.listText}>{this.props.date}</Text>
      
        </View>
      </View>
    )
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
