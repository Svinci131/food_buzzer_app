import React, { Component, PropTypes } from 'react';
import { Text, View, ListView, StyleSheet} from 'react-native';
import MiniProfile from './MiniProfile';
import Store from '../store';
import {stylesObj} from '../styles'
const styles = StyleSheet.create(stylesObj);

export default class Results extends Component {

  constructor(props){
    super(props)
    const users = Store.users
    const dataSource = new ListView.DataSource({
        rowHasChanged: (r1, r2) => r1 !== r2
    })
    this.state = {
      data: dataSource.cloneWithRows(users)
    }
  }
  
  _renderUser(user){
    console.log(user)
    return (
        <View style={{margin: 50}}>
          <MiniProfile username={user.username} 
                      title={user.title} 
                      story={user.story} 
                      problems={user.problems} 
                      profile_picture={user.profile_picture}/>
        </View>
    )
  }

  render() {
    
    return (
      <ListView dataSource={this.state.data} renderRow={this._renderUser}/>
    )
  }

}