import React from 'react';
import { StyleSheet, FlatList, Text, View, Button } from 'react-native';
import { Region } from '../config/Responses/dataCountries';

const allContinents = Object.values(Region).map(region => ({ label: region }));

export default function ContinentListScreen({ navigation }: any) {
  const goToCountries = (continentName: string) => {
    navigation.navigate('Countries', { continentName });
  };

  const displayItem = ({ item }: { item: { label: string } }) => (
    <View style={styles.itemWrapper}>
      <Button
        title={item.label}
        onPress={() => goToCountries(item.label)}
        color="#3498db"
      />
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Select Your Continent</Text>
      <FlatList
        data={allContinents}
        renderItem={displayItem}
        keyExtractor={(item) => item.label}
        contentContainerStyle={styles.listContainer}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#f2f2f2',
    justifyContent: 'center',
    alignItems: 'center',
  },
  header: {
    fontSize: 26,
    fontWeight: '600',
    color: '#333',
    marginBottom: 20,
  },
  listContainer: {
    width: '100%',
    alignItems: 'center',
  },
  itemWrapper: {
    marginVertical: 12,
    width: '75%',
    borderRadius: 8,
    overflow: 'hidden',
  },
});
