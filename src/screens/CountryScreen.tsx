import React from "react";
import { View, Text, FlatList, StyleSheet } from "react-native";
import { useCountries } from "../hooks/useCountries";
import CountryTab from "../componentes/CountryTab";

export default function CountryScreen({ route, navigation }: any) {
    const { continentName } = route.params;
    const { countries, loading} = useCountries(continentName);

    if (loading) {
        return (
          <View style={styles.loadingWrapper}>
            <Text>Loading...</Text>
          </View>
        );
      }
    
      if (!countries 
        || countries.length === 0) {
        return (
          <View style={styles.noDataWrapper}>
            <Text style={styles.noDataText}>
              No countries found.
              </Text>
          </View>
        );
      }

    const goToDetails = (country: any) => {
        const { name, continent, capital, flag, population, latlng } = country;
        navigation.navigate("CountryInfoScreen", {
          name,
          continent,
          capital,
          flag,
          population,
          latlng,
        });
      };
    
      return (
        <View style={styles.mainContainer}>
          <Text style={styles.pageTitle}>
            Countries in {continentName}
          </Text>
          <FlatList
            data={countries}
            keyExtractor={(item) => item.name}
            renderItem={({ item }) => (
              <CountryTab
                name={item.name}
                onPress={() => goToDetails(item)}
                capital={item.capital}
                flag={item.flag}
                
              />
            )}
            contentContainerStyle={styles.listWrapper}
          />
        </View>
      );
    }
    
    const styles = StyleSheet.create({
      mainContainer: {
        flex: 1,
        paddingTop: 22,
        backgroundColor: "#f4f4f4",
        paddingHorizontal: 18,
      },
      pageTitle: {
        fontSize: 30,
        fontWeight: "bold",
        textAlign: "center",
        color: "#2c3e50",
        marginBottom: 25,
      },
      noDataWrapper: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#ffffff",
        paddingHorizontal: 18,
      },
      noDataText: {
        fontSize: 20,
        color: "#95a5a6",
        fontWeight: "400",
      },
      loadingWrapper: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      },
      listWrapper: {
        paddingBottom: 25,
      },
    });