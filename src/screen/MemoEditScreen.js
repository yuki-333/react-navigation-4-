import React, { Component } from "react";

import { Text, View, } from "react-native";

import styles from "../../styles/styleCardDefault"



export default class MemoEditScreen extends Component {
render () {
    return (
      <View style={styles.container}>
        <View style={[styles.cardBase, styles.cbbc0]}>
          <View style={styles.photoFlame}>
            <Text style={styles.lastCard}>MemoEditScreen</Text>
          </View>
          <View style={[styles.cardButtonBase]}>
            <Text>2019 nara</Text>
          </View>
        </View>    
      </View>
    );
  }
}
