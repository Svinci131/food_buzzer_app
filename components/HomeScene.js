import React, { Component, PropTypes } from 'react';
import { Text, View, StyleSheet} from 'react-native';
import Button from './Button'
import { stylesObj } from '../styles'
const styles = StyleSheet.create(stylesObj);

export default class HomeScene extends Component {
  render() {
    return (
      <View>
        <Text style={styles.logo}>Insur-Aide</Text>
          <Button text={'I need help'} press={this._navigateToGetHelp.bind(this)}/>
          <Button text={'I can help'} press={this._navigateToHelp.bind(this)}/>
          <Text style={styles.tagline}>Got insurance problems?</Text>
          <Text style={styles.tagline}>Connect with someone for help!</Text>
      </View>
    )
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