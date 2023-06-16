import React, { useState } from 'react';
import { StyleSheet, View, Text, Image, Pressable, TouchableOpacity, Modal } from 'react-native';
import { NavigationContainer, useNavigation } from '@react-navigation/native';





export function NavTab() {
  const navigation = useNavigation();


  return (
    <View style={styles.menu}>
      {/* HOME */}
      <View
        style={[
          styles.leftView,
        ]}
      >
        <Pressable style={[styles.iconHome, styles.iconPosition]} onPress={() => navigation.navigate("TelaPrincipal")}>
          <Image
            style={styles.vectorIcon1}
            contentFit="cover"
            source={require("../Image/vector10.png")}
          />
        </Pressable>
        <View style={[styles.incioWrapper, styles.wrapperPosition]}>
          <Text style={[styles.devedores, styles.devedoresTypo]}>Início</Text>
        </View>
      </View>




      {/* DOLLAR */}
      <Pressable style={styles.centerView} onPress={() => navigation.navigate("CadastrandoDevedor")} >
        <View style={[styles.iconDollarAlt, styles.iconPosition1]}>
          <View
            style={[styles.iconDollarAlt1, styles.iconDollarAlt1SpaceBlock]}
          >
            <Image
              style={styles.vectorIcon2}
              contentFit="cover"
              source={require("../Image/vector6.png")}
            />
          </View>
        </View>
        <View style={styles.emprestarWrapper}>
          <Text style={[styles.emprestar2, styles.devedoresTypo]}>
            Emprestar
          </Text>
        </View>

      </Pressable>





      {/* DEVEDORES */}
      <Pressable
        style={[
          styles.rightView
        ]}
        onPress={() => navigation.navigate("Devedores")}
      >
        <View style={[styles.iconUsers, styles.iconPosition]}>
          <Image
            style={styles.vectorIcon1}
            contentFit="cover"
            source={require("../Image/vector7.png")}
          />
        </View>
        <View style={[styles.devedoresWrapper, styles.wrapperPosition]}>
          <Text style={[styles.devedores, styles.devedoresTypo]}>
            Devedores
          </Text>
        </View>
      </Pressable>


    </View>
  )
}

const styles = StyleSheet.create({
  menu: {
    left: 5,
    width: '100%',
    height: "8%",
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 10,
  },

  // Xx
  leftView: {
    justifyContent: "center",
    alignItems: "center",
    width: "15%",
    height: "90%",
  },
  centerView: {
    justifyContent: "center",
    alignItems: "center",
    width: 60,
    height: 50,
  },
  rightView: {
    width: "22%",
    height: "90%",
    justifyContent: "center",
    alignItems: "center"
  },
  menubottomEmprestardefault: {
    height: "100%",
    width: "15.66%",
    right: "43.07%",
    left: "41.27%",
    bottom: "0%",
    top: "0%",
    position: "absolute",
  },
  iconPosition1: {
    left: "0%",
    right: "0%",
    width: "100%",
  },
  iconDollarAlt1: {
    borderRadius: 100,
    backgroundColor: "#FF8A01",
    paddingHorizontal: 19,
    marginBottom: 15
  },
  iconDollarAlt1SpaceBlock: {
    paddingVertical: 12,
    flexDirection: "row",

  },
  vectorIcon2: {
    width: 22,
    height: 35,
  },
  emprestarWrapper: {
    height: "25%",
    top: "75%",
    paddingVertical: 5,
    left: "0%",
    right: "0%",
    bottom: "0%",
    flexDirection: "row",
    paddingHorizontal: 0,
    position: "absolute",
    width: "100%",
  },
  emprestar2: {
    color: "#ccc",
  },
  devedoresTypo: {
    // fontFamily: FontFamily.h7,
    fontSize: 12,
    textAlign: "left",
  },
  menubottomDevedoresdefault: {
    width: "16.27%",
    right: "6.93%",
    left: "76.81%",
  },
  menubottonInciodefaultPosition: {
    top: "34.21%",
    height: "65.79%",
    bottom: "0%",
    position: "absolute",
  },
  iconUsers: {
    width: "100%",
    // right: "12.96%",
    height: "80%",
    marginLeft: "75%"
  },
  iconPosition: {
    height: "80%",
    top: "0%",
    padding: 5,
    position: "absolute",
  },
  vectorIcon1: {
    width: 20,
    height: 20,
  },
  // incioWrapper: {
  //     width: "67.5%",
  //     right: "17.5%",
  //     left: "15%",
  // },  
  wrapperPosition: {
    top: "62%",
    height: "38%",
    // paddingVertical: 10,
    bottom: "0%",
    flexDirection: "row",
    paddingHorizontal: 0,
    position: "absolute",
    marginRight: 12
  },
  devedores: {
    color: "B6B6B6",
  },
  devedoresTypo: {
    // fontFamily: FontFamily.h7,
    fontSize: 12,
    textAlign: "left",
  },

});