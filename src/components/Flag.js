import React from "react";
import { StyleSheet, View } from 'react-native';

export default props => {
    return(
        <View style={styles.container}>
            <View style={[styles.flagpole, props.bigger ? styles.flagpoleBigger : null]}></View>
            <View style={[styles.flag, props.bigger ? styles.flagBigger : null]}></View>
            <View style={[styles.base1, props.bigger ? styles.base1Bigger : null]}></View>
            <View style={[styles.base2, props.bigger ? styles.base2Bigger : null]}></View>
        </View>
    )
}

const styles = StyleSheet.create({
        container: {
            marginTop: 2,
        },
        flagpole: {
            position: 'absolute',
            height: 14,
            width: 2,
            backgroundColor: '#222',
            marginLeft: 9,
        },
        flag: {
            position:'absolute',
            height: 5,
            width: 6,
            backgroundColor: '#F22',
            marginLeft: 3,
        },
        base1:{
            position: 'absolute',
            height: 2,
            width: 6,
            backgroundColor: '#222',
            marginLeft: 7,
            marginTop: 10,
        },
        base2: {
            position: 'absolute',
            height: 2,
            width: 10,
            backgroundColor: '#222',
            marginLeft: 5,
            marginTop: 12, 
        },
        flagpoleBigger:{
            width:4,
            height:28,
            marginLeft:16,
        },
        flagBigger:{
            width:10,
            height:14,
            marginLeft:3,
        },
        base1Bigger:{
            width: 12,
            height: 4,
            marginTop: 20,
            marginLeft:12,
        },
        base2Bigger:{
            width:20,
            height: 4,
            marginLeft: 8,
            marginTop: 24,
        }
})