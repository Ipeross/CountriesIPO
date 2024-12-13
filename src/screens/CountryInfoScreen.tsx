import React from 'react';
import { View, Text, Image, Button, ScrollView, StyleSheet } from 'react-native';
import { WebView } from 'react-native-webview';

const CountryInfoScreen = ({ route, navigation }: any) => {
  const { name, continent, capital, flag, population, latlng } = route.params;

  if (!latlng || latlng.length < 2) {
    return (
      <View style={styles.noCoordinates}>
        <Text>No map aviable</Text>
        <Button title="Go Back" onPress={() => navigation.goBack()} />
      </View>
    );
  }

  const [lat, lon] = latlng;
  const mapURL = `https://www.openstreetmap.org/?mlat=${lat}&mlon=${lon}#map=5/${lat}/${lon}`;

  return (
    <ScrollView 
    style={styles.scrollView}>
      <View 
      style={styles.flagContainer}>
        <Image source={{ uri: flag }} style={styles.flag} />
      </View>
      <View 
      style={styles.detailsContainer}>
        <Text 
        style={styles.title}>{name}</Text>
        <Text>
          Continent: <Text style={styles.highlight}>{continent}</Text>
        </Text>
        <Text>
          Capital: <Text style={styles.highlight}>{capital}</Text>
        </Text>
        <Text>
          Population: <Text style={styles.highlight}>{population}</Text>
        </Text>
        <Text>
          Coordinates: {lat}, {lon}
          </Text>
      </View>
      <View 
      style={styles.mapContainer}>
        <WebView 
        originWhitelist={['*']} source={{ uri: mapURL }} style={styles.map} />
      </View>
      <Button title="Go back" onPress={() => navigation.goBack()} />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  scrollView: {
    flex: 1,
    padding: 16,
    backgroundColor: '#ecf0f1',
  },
  flagContainer: {
    alignItems: 'center',
    marginBottom: 20,
  },
  flag: {
    width: 100,
    height: 65,
    borderRadius: 5,
  },
  detailsContainer: {
    padding: 18,
    backgroundColor: '#ffffff',
    borderRadius: 8,
    marginBottom: 20,
    shadowOpacity: 0.2,
    shadowRadius: 4,
    shadowOffset: { width: 0, height: 3 },
  },
  title: {
    fontSize: 24,
    fontWeight: '700',
    marginBottom: 12,
  },
  highlight: {
    color: '#2980b9',
    fontWeight: '600',
  },
  mapContainer: {
    height: 320,
    marginBottom: 18,
    borderRadius: 8,
    overflow: 'hidden',
  },
  map: {
    flex: 1,
  },
  noCoordinates: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 24,
  },
});

export default CountryInfoScreen;