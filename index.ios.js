import React, { Component, PropTypes } from 'react';
import { Navigator, Text, View, StyleSheet, AppRegistry } from 'react-native';
import HomeScene from './components/HomeScene';
import RestaurantList from './components/RestaurantList';
import GetHelp from "./components/GetHelp";
import OptionList from "./components/OptionList";
import SignIn from "./components/SignIn";
import Input from "./components/Input";
import ProfileDetail from "./components/ProfileDetail";
import TextArea from "./components/TextArea";
import { stylesObj } from './styles'
const styles = StyleSheet.create(stylesObj);


export default class NavigationApp extends Component {
  _renderScene(route, navigator){
    var globalNavigatorProps = {navigator}

    switch(route.ident) {
      case "Home":
        return ( <View style={styles.body}>
            <HomeScene {...globalNavigatorProps}
            />
            </View>
          )
      case "ProvideHelp":
        return (
          <SignIn {...globalNavigatorProps}/>
          )
      case "RestaurantList":
        return (
          <RestaurantList {...globalNavigatorProps}/>
        )
      case "Insurance":
        return (
          <OptionList cat="insurance" {...globalNavigatorProps}/>
        )
      case "Location":
        return (
          <OptionList cat="locations" {...globalNavigatorProps}/>
        )
      case "Problems":
        return (
          <OptionList cat="problems" {...globalNavigatorProps}/>
        )
      case "SignIn":
        return (
            <Input btnType="Sign In" {...globalNavigatorProps}/>
        )
        case "SignUp":
          return (
              <Input btnType="Sign Up" {...globalNavigatorProps}/>
          )
      case "SingleProfile":
        return (
            <ProfileDetail {...globalNavigatorProps}/>
        )
        case "Message":
          return (
              <TextArea {...globalNavigatorProps}/>
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