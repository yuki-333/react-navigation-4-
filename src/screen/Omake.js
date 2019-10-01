import React, { Component } from "react";

import { Text, View, TouchableHighlight} from "react-native";

import styles from "../../styles/styleCardDefault"





export default class Omake extends Component {
    
render () {
    return (
      <View>
        <TouchableHighlight onPress={() => {this.props.navigation.navigate('Home')}}>
            <Text style={styles.lastCard}>(Omake Go Home /)</Text>
        </TouchableHighlight>
      </View>
    );
  }
}
