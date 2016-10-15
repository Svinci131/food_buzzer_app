import React, { Component, PropTypes } from 'react';
import {
    StyleSheet,
    Text,
    View,
    Image,
    ListView
} from 'react-native';

class ResultList extends Component {
    constructor(props){
        super(props)
        this.renderRow = this.renderRow.bind(this)

        // TODO: need to hook it up with real data from firebase
        const fakeData = [{img: 'https://facebook.github.io/react/img/logo_og.png', name:"Taffy", sum:"something"},{img: 'https://facebook.github.io/react/img/logo_og.png', name:"Taffy", sum:"something"},{img: 'https://facebook.github.io/react/img/logo_og.png', name:"Taffy", sum:"something"},{img: 'https://facebook.github.io/react/img/logo_og.png', name:"Taffy", sum:"something"}];

        const dataSource = new ListView.DataSource({
            rowHasChanged: (r1, r2) => r1 !== r2
        })

        this.state = {
          data: dataSource.cloneWithRows(fakeData)
        }
    }

    renderRow(profile) {
        return (
            <View style={styles.list}>
                <Image
                style={styles.thumbnail}
                source={{uri: profile.img}}
                />
                <View style={styles.summary}>
                    <Text style={styles.name}>{profile.name}</Text>
                    <Text style={styles.short_description}>{profile.sum}</Text>
                </View>
            </View>
        )
    }

    render() {
        return (
            <ListView dataSource={this.state.data} renderRow={this.renderRow}/>
        );
    }
}

const styles = StyleSheet.create({
    list:{
        flexDirection:"row",
    },
    thumbnail:{
        width: 50,
        height: 50,
    },
    name:{
        fontWeight: 'bold',
        fontSize: 12,
    },
    short_description:{
        fontSize: 10,
    },
});

export default ResultList;
