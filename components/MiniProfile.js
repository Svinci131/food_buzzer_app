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
          <Image style={{width: 90, height: 90}} source={{uri:this.props.profile_picture}}></Image>
        </View>
        <View style={styles.userDetails}>
          <Text style={styles.name}>{this.props.username}</Text>
          <Text style={styles.headline}>{this.props.title}</Text>
          <Text style={styles.text}>{this.props.story.slice(0, 100)+"..."}</Text>
          <Text style={styles.text}>{this.props.problems}</Text>
          <TouchableOpacity onPress={()=>console.log('pressed')}>
          <Text style={{color: '#039BE5', backgroundColor: 'white', padding: 2, textAlign: 'center', marginTop: 1}}>
            MESSAGE
          </Text>
        </TouchableOpacity>
        </View>
      </View>
    )
  }
}

MiniProfile.propTypes = {
  username : PropTypes.string.isRequired,
  title : PropTypes.string.isRequired,
  story : PropTypes.string,
  problems : PropTypes.string,
}

// var styles =  StyleSheet.create({

// })


export default MiniProfile
