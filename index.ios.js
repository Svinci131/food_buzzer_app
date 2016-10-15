import React, { Component, PropTypes } from 'react';
import { Navigator, Text, View, StyleSheet, AppRegistry } from 'react-native';
import HomeScene from './components/HomeScene';
import RestaurantList from './components/RestaurantList';
import SignIn from "./components/SignIn";
import Input from "./components/Input";
import TextArea from "./components/TextArea";
import Checkout from "./components/Checkout";
import Success from './components/Success';
import OrderSummary from "./components/OrderSummary";
import { stylesObj } from './styles';

const styles = StyleSheet.create(stylesObj);


export default class NavigationApp extends Component {
  _renderScene(route, navigator){
    var globalNavigatorProps = {navigator}

    switch(route.ident) {
      case "Home":
        return ( 
            <HomeScene {...globalNavigatorProps}
            />
        
          )
      case "RestaurantList":
        return (
        <View style={styles.body}>
          <RestaurantList {...globalNavigatorProps}/>
          </View>
        )
      case "OrderSummary":
        return (
            <OrderSummary {...globalNavigatorProps}/>
          )

      case "Checkout":
        return (
            <Checkout {...globalNavigatorProps}/>
          )
          
      case "Success":
        return (
            <Success {...globalNavigatorProps}/>
          )

      default:
        return <Text>'!!Route Error!!'</Text>
    }

  }

  render() {
    return (
      <Navigator
        initialRoute={{ ident: 'Home' }}
        renderScene={this._renderScene}
        configureScene={(route) => ({
          ...route.sceneConfig || Navigator.SceneConfigs.FloatFromRight })}
      />
    )
  }
}
AppRegistry.registerComponent('ReactApp', () => NavigationApp);