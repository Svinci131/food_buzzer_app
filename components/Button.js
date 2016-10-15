import React, { Component, PropTypes } from 'react';
import {TouchableOpacity, Text, StyleSheet, View} from 'react-native';
import {stylesObj} from '../styles'
const styles = StyleSheet.create(stylesObj);

export default class Button extends Component {
  
  constructor(props, context) {
    super(props, context);
  }

  render() {
    return (
      <View>
        <TouchableOpacity style={styles.button} onPress={this.props.press}>
          <Text style={styles.buttonText}>
            {this.props.text}
          </Text>
        </TouchableOpacity>
      </View>
    );
  }
};

Button.propTypes = {
  press : PropTypes.func.isRequired,
  text : PropTypes.string.isRequired,
} 

