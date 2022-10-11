import { SafeAreaView, StyleSheet, View, TouchableOpacity, Text, Dimensions } from 'react-native';
import { NavigationProp } from "@react-navigation/native";
import LogoWithText from '../components/LogoWithText'
import FlowButton from '../components/FlowButton';
import React from 'react';

interface RouterProps {
    navigation: NavigationProp<any, any>;
}

export default function Splitka({ navigation }: RouterProps) {
    return (
        <SafeAreaView style={styles.container}>
        <View style={styles.logo}>
          <LogoWithText/>
        </View>
        <View style={styles.button}>
          <FlowButton title="Обновить" onPress={()=>{}}/>
        </View>
      </SafeAreaView>
    );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#fff',
  },
  logo: {
    flex: 2,
    justifyContent: 'center',
    alignItems: 'flex-start',
    marginHorizontal: '4%'
  },
  button: {
    flex: 7,
    justifyContent: 'center',
    fontFamily: 'Nunito-Bold'
  },
});