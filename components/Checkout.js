import React, { Component, PropTypes } from 'react';
import {TouchableOpacity, Text, StyleSheet, View, TextInput, ScrollView} from 'react-native';
import {stylesObj} from '../styles';
import Button from './Button';

const styles = StyleSheet.create(stylesObj);

export default class Checkout extends Component {
    //if card begins with 3-AmEx, 4-Visa, 5-MC, 6-Disc
    constructor(props) {
       super(props)
       this.state = {
           orderName: '',
           cardName: '',
           cardNum: '',
           expMonth: '',
           expYear: ''
       }
   }
   updateText = (text) => {
       this.setState((state) => {
         return {
           curText: text
         };
   });
 };
 _navigateToOptions(cat){
   this.props.navigator.push({
     ident: cat
   })
 }

 // _navigateToResults () {
 //   updateUsers(Store.insurance, Store.location, Store.problems)
 //   .then(()=>this._navigateToOptions('Results'))
 // }

    render() {
        return (
            <View style={styles.billing}>
                <View style={styles.invoice}>
                    <Text style={{fontSize: 28}}>Checkout</Text>
                </View>
                <View style={styles.userInfo}>
                    <Text>Order Name</Text>
                    <View style={styles.userInfo2}>
                        <TextInput onChangeText={(orderName) => this.setState({orderName})} value={this.state.orderName} onFocus={() => this.updateText('onFocus')} style={styles.inputName}/>
                    </View>
                </View>
                <View style={styles.cardInfo}>
                    <Text>Name on Card</Text>
                    <View>
                        <TextInput onChangeText={(cardName) => this.setState({cardName})} value={this.state.cardName} onFocus={() => this.updateText('onFocus')} style={styles.inputName}/>
                    </View>
                    <Text style={styles.cardInfo}>Card Number</Text>
                    <View>
                        <TextInput onChangeText={(cardNum) => this.setState({cardNum})} value={this.state.cardNum} onFocus={() => this.updateText('onFocus')} style={styles.inputName} keyboardType="numeric"/>
                    </View>
                    <Text style={{marginTop: 5}}>Expires</Text>
                    <View style={styles.expiration}>
                        <View>
                            <TextInput onChangeText={(expMonth) => this.setState({expMonth})} value={this.state.expMonth} onFocus={() => this.updateText('onFocus')} style={styles.inputNum} keyboardType="numeric"/>
                        </View>
                        <View>
                            <TextInput onChangeText={(expYear) => this.setState({expYear})} value={this.state.expYear} onFocus={() => this.updateText('onFocus')} style={styles.inputNum} keyboardType="numeric"/>
                        </View>
                    </View>
                </View>
                <Button text="Pay" press={this._navigateToOptions.bind(this, 'Success')} />
            </View>
        )
    }
}