import React, { Component, PropTypes } from 'react';
import { Text, View} from 'react-native';
import Button from './Button'
import OptionList from './OptionList'

export default class Test extends Component {
  render() {
    return (
      <View>
        <OptionList />
      </View>
    )
  }
}