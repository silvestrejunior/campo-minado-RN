import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import Flag from "./Flag";

export default props => {
    return(
        <View style={styles.container}>
            <View style={styles.flagContainer}>
                <TouchableOpacity onPress={props.onFlagPress} style={styles.flagButton}>
                    <Flag bigger></Flag>
                </TouchableOpacity>
                <Text style={styles.flagsLeft}>= {props.flagsLeft}</Text>
            </View>
        <TouchableOpacity style={styles.button} onPress={props.onNewGame}>
            <Text style={styles.buttonLabel}>Novo jogo</Text>
        </TouchableOpacity>
        </View>
    )
}
const styles = StyleSheet.create({
    button: {
        backgroundColor: "#999",
        padding: 5,
    },
    container: {
        flex: 1,
        flexDirection: "row",
        backgroundColor: "#eee",
        alignItems: "center",
        justifyContent: "space-around"
    },
    flagContainer:{
        flexDirection:"row"
    },
    flagButton:{
        marginTop:10,
        minWidth: 30
    },
    flagsLeft:{
        fontSize: 30,
        fontWeight: 'bold',
        paddingTop: 5,
        marginLeft: 20,
    },
    buttonLabel:{
        fontSize: 20,
        color: "#DDD",
        fontWeight: "bold"
    }
})