import React from 'react';
import { StyleSheet, View, Text, Pressable, TouchableOpacity } from 'react-native';
import CardDevedoresRecentes from '../Components/CardDevedoresRecentes';
import CardDevedores from '../Components/CardDevedores';


export function Devedores() {

    return (
        <View style={styles.container}>

            <View style={styles.linha} />

            <View style={{ paddingLeft: 20, width: "100%", marginBottom: 5, }} >
                <Text style={{ fontSize: 18 }}>Devedores recentes: </Text>
            </View>


            <CardDevedores />
            <CardDevedores />
            <CardDevedores />
            <CardDevedores />
            <CardDevedores />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        alignItems: 'center',
        padding: 5,
        paddingTop: 30,
    },
    linha: {
        width: "100%",
        height: 1,
        backgroundColor: "#8C8C8C",
        marginBottom: 20,
        marginTop: 10,
    },
    perfilBotao: {
        height: "100%",
        width: "15%",
        backgroundColor: "#F3F3F3",
        justifyContent: 'flex-start',
        borderRadius: 1000,
        marginLeft: "5%"
    },

    perfilView: {
        height: "7.5%",
        width: "100%",
        justifyContent: 'flex-start',
    }

});