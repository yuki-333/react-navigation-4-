import {  StyleSheet } from "react-native"

import { scale, verticalScale } from 'react-native-size-matters';

const styles = StyleSheet.create({
    base: {
        flex: 1,
        backgroundColor: 'white',
        justifyContent: 'center',
        alignItems: 'center',
      },
    content: {
        flex: 6,
        alignItems: 'center',
        justifyContent: 'center',
    },
    cardBase: {
        width: scale(320),
        height: verticalScale(520),
        padding: scale(5),
        alignItems: 'center',
        justifyContent: 'center',
        overflow: 'hidden',
        borderWidth: 5,
        borderRadius: 10,
        borderColor: 'lightskyblue',
      },
      read: {
        flexDirection: 'row',
        flex: 1,
        margin: 7,
        width: scale(270),
        backgroundColor: 'white',
        justifyContent: 'center',
        alignItems: 'center',
      },
      readText: {
        fontSize: scale(30),
      },
      photoFlame: {
        flex: 6,
        backgroundColor: 'white',
        width: scale(280),
        justifyContent: 'center',
        alignItems: 'center',
        borderWidth: 5,
        borderRadius: 10,
        borderColor: 'white',
        marginTop: 15,
      },
      cardButtonBase: {
        flexDirection: 'row',
        flex: 1,
        width: scale(280),
        alignItems: 'center',
        justifyContent: 'space-around',
        marginTop: 10,
        backgroundColor: 'skyblue'
      },
      cbbc0: {
        backgroundColor: 'skyblue',
      },
      cbbc1: {
        backgroundColor: 'skyblue',
      },
      cardButton: {
        height: scale(35),
        width: scale(50),
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'skyblue',
        borderWidth: 2,
        borderRadius: 30,
        borderColor: 'white',
        flexDirection: 'row',
        
      },
      cardText: {
        fontSize: scale(20),
        color: 'white',
      },
  
     footer: {
         flex: 1,
         justifyContent: 'center',
         alignItems: 'center',
         backgroundColor: null,
    },
    buttonContainer: {
        width: 220,
        flexDirection: 'row',
        justifyContent: 'center',
    },
    button: {
        shadowColor: 'rgba(0,0,0,0.20)',
        shadowOffset: {
          width: 0,
          height: 1
        },
        shadowOpacity:0.5,
        backgroundColor: 'skyblue',
        alignItems:'center',
        justifyContent:'center',
        zIndex: 0,
    },
    orange:{
        width:55,
        height:55,
        borderWidth:6,
        borderColor:'lightskyblue',
        borderWidth:4,
        borderRadius: 30,
        marginTop: 0,
      },
      green:{
        width:75,
        height:75,
        backgroundColor:'#fff',
        borderRadius:75,
        borderWidth:6,
        borderColor:'lightskyblue',
      },
      red:{
        width:75,
        height:75,
        backgroundColor:'#fff',
        borderRadius:75,
        borderWidth:6,
        borderColor:'lightskyblue',
      },
      footerText: {
        fontSize: scale(14),
        color: 'black',
      },
      lastCard: {
        fontSize: scale(50),
        color: 'skyblue',
      },
      container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#FFFDF6',

      }
  });
  
  export default styles;