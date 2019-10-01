import React, { Component } from "react";

import { Text, View, TouchableHighlight} from "react-native";

import styles from "../../styles/styleCardDefault"

import Omake from "../screen/Omake"



export default class LoginScreen extends Component {
  //this.props.navigation というオブジェクトにアクセスできる
render () {
    return (
      <View style={styles.container}>
        <View style={[styles.cardBase, styles.cbbc0]}>
          <View style={styles.photoFlame}>
            <Text style={styles.lastCard}>Login</Text>
            
            <TouchableHighlight onPress={() => {this.props.navigation.navigate('Home')}}>
              <Text style={styles.lastCard}>Home</Text>
            </TouchableHighlight>
            {/* this.props.navigation、下記の様に記しオブジェクトを受け渡し 
            App.js で記載されていないページでもしようできる様にする */}
            <Omake navigation={this.props.navigation}/>

          </View>
          <View style={[styles.cardButtonBase]}>
            <Text>2019 nara</Text>
          </View>
        </View>    
      </View>
    );
  }
}
