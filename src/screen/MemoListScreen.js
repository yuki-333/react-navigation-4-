import React, { Component } from "react";

import { Text, View, TouchableHighlight} from "react-native";

import styles from "../../styles/styleCardDefault"



export default class MemoListScreen extends Component {

render () {
    return (
      <View style={styles.container}>
        <View style={[styles.cardBase, styles.cbbc0]}>
          <View style={styles.photoFlame}>
            <Text style={[styles.lastCard, {color: 'orange'}]}>Memotto</Text>

            <TouchableHighlight onPress={() => {this.props.navigation.navigate('MemoDetail'); }} underlayColor='transparent'>
            <Text style={[styles.lastCard, {color: 'blue'}]}>MemoDetail</Text>
            </TouchableHighlight>

            <TouchableHighlight onPress={() => {this.props.navigation.navigate('MemoEdit'); }} underlayColor='yellow'>
            <Text style={[styles.lastCard, {color: 'green'}]}>MemoEdit</Text>
            </TouchableHighlight>

            <TouchableHighlight onPress={() => {this.props.navigation.navigate('Login'); }}>
            <Text style={[styles.lastCard, {color: 'pink'}]}>Login</Text>
            </TouchableHighlight>

            <TouchableHighlight onPress={() => {this.props.navigation.navigate('Signup'); }}>
            <Text style={[styles.lastCard, {color: 'purple'}]}>Signup</Text>
            </TouchableHighlight>

          </View>
          <View style={[styles.cardButtonBase]}>
            <Text>2019 nara</Text>
          </View>
        </View>    
      </View>
    );
  }
}
