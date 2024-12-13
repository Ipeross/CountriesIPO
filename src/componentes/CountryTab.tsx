import React from "react";
import { View, Text, Image, TouchableOpacity, StyleSheet } from "react-native";

export default function CountryTab({ name, capital, flag, onPress }: any) {
  return (
    <TouchableOpacity onPress={onPress} style={styles.tab}>
      <View style={styles.imageWrapper}>
        <Image 
        source={{ uri: flag }} 
        style={styles.image} 
        />
      </View>
      <View style={styles.infoWrapper}>
        <Text 
        style={styles.title}>
        {name}
        </Text>
        <Text style={styles.subtitle}>
          Capital: {capital}
          </Text>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  tab: {
    backgroundColor: '#1c1c1e',
    borderRadius: 8,
    padding: 12,
    margin: 8,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 4,
  },
  imageWrapper: {
    alignItems: 'center',
    marginBottom: 12,
  },
  image: {
    width: 80,
    height: 50,
    resizeMode: 'cover',
    borderRadius: 4,
  },
  infoWrapper: {
    alignItems: 'center',
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#ffffff',
  },
  subtitle: {
    fontSize: 14,
    color: '#a9a9a9',
  },
});
