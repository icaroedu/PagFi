import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import CardDevedoresRecentes from '../Components/CardDevedoresRecentes';
import CardDevedores from '../Components/CardDevedores';




export default props => (
    <View style={styles.container}>

        <View style={styles.linha} />

        <View style={{ paddingLeft: 20, width: "100%", marginBottom: 5, }} >
            <Text style={{ fontSize: 18 }}>Devedores recentes: </Text>
        </View>
        <CardDevedoresRecentes />
        <CardDevedores />
    </View>
)

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
        marginBottom: 30,
        marginTop: 30,
    },
});