import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Platform, SafeAreaView, StyleSheet, Text, View } from 'react-native';


const isAndroid = Platform.OS === 'android';
export default function App() {
  return (
    <>
      <SafeAreaView style={{ flex: 1, marginTop: isAndroid ? 0 : 5 }}>
        <View style={styles.searchDecoration}>
          <Text>Open up App.js to start working on your app!</Text>

        </View>

        <View
          style={styles.listDecoration}>
          <Text>Open up App.js to start working on your app!</Text>

        </View>

      </SafeAreaView>
    </>



  );
}

const styles = StyleSheet.create({
  searchDecoration: {
    backgroundColor: 'green',
    padding: 16,

  },

  listDecoration: {
    flex: 1,
    backgroundColor: "blue"
  }

});




