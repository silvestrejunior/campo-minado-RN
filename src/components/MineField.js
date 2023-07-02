import React from "react";
import { StyleSheet, View } from "react-native";
import Field from "./Field";


export default props =>{
    const rows = props.board.map((row, r)=>{
        const columns = row.map((field, c)=>{
            return <Field {...field} key={c} onOpen={()=> props.onOpenField(r,c)}
                onSelect={ e => props.onSelectField(r,c)}/>
        })
        return <View key={r} style={{flexDirection:'row'}}>{columns}</View>
    })
    return <View style={styles.conteiner}>{rows}</View>
}

const styles = StyleSheet.create({
    conteiner:{
        backgroundColor: '#eee',
    }
})