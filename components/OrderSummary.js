import React, { Component, PropTypes } from 'react';
import {
    StyleSheet,
    Text,
    View,
} from 'react-native';
import { stylesObj } from '../styles';
const styles = StyleSheet.create(stylesObj);

import Order from './Order';
import Button from './Button';
import Total from './OrderTotal';




export default class OrderSummary extends Component {
    constructor(props) {
        super(props);
    }
     _navigateToOptions(cat){
   this.props.navigator.push({
     ident: cat
   })
 }

    render() {
        return (
        <View style={styles.body}>
            <View>
                <Text style={styles.logo}>Order Summary</Text>
                <Order />
            </View>
            
            <View>
                <Total />
            </View>
            
            <Button text="Checkout" press={this._navigateToOptions.bind(this, 'Checkout')} />
         </View>
        )
    }
}