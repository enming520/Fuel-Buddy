import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, FlatList, SafeAreaView, StatusBar, Image, RefreshControl, TouchableWithoutFeedback } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import haversine from 'haversine';
import * as Location from 'expo-location';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigation } from '@react-navigation/native';

const petrolStations = [
    { id: '1', name: 'Circle K', address: 'Ballybane Rd, Co. Galway', logo: require('./assets/circleK.png'), latitude: 53.29006252755299, longitude: -9.006691917024554 },
    { id: '2', name: 'Circle K', address: 'Bohermore, Co. Galway', logo: require('./assets/circleK.png'), latitude: 53.282121, longitude: -9.038721 },
    { id: '3', name: 'Circle K', address: '72 Seamus Quirke Rd, Co. Galway', logo: require('./assets/circleK.png'), latitude: 53.277263, longitude: -9.072086 },
    { id: '4', name: 'Circle K', address: 'College Rd, Co. Galway', logo: require('./assets/circleK.png'), latitude: 53.281436, longitude: -9.034798 },
    { id: '5', name: 'Circle K', address: 'Newcastle Rd, Co. Galway', logo: require('./assets/circleK.png'), latitude: 53.281846, longitude: -9.064977 },
    { id: '6', name: 'Topaz', address: 'Tuam Rd, Co. Galway', logo: require('./assets/topaz.jpg'), latitude: 53.29214920867234, longitude: -9.018907699375454 },
    { id: '7', name: 'Applegreen', address: 'Tuam Rd, Co. Galway', logo: require('./assets/Applegreen_Logo.png'), latitude: 53.287045472896565, longitude: -9.030814413286762 },
    { id: '8', name: 'Top Oil', address: 'Tuam Rd, Co. Galway', logo: require('./assets/topLogo.png'), latitude: 53.29015418980305, longitude: -9.020806677417307 },
    { id: '9', name: 'Top Oil', address: 'Knocknacarra Rd, Co. Galway', logo: require('./assets/topLogo.png'), latitude: 53.258506, longitude: -9.103267 },
    { id: '10', name: 'Texaco', address: 'Lough Atalia Rd, Co. Galway', logo: require('./assets/texaco.jpg'), latitude: 53.271367, longitude: -9.045233 },
    { id: '11', name: 'Texaco xl', address: '101 Lower Salthill, Co. Galway', logo: require('./assets/texaco.jpg'), latitude: 53.263221, longitude: -9.072033 },
    { id: '12', name: 'Texaco', address: 'Barna Rd, Co. Galway', logo: require('./assets/texaco.jpg'), latitude: 53.258925, longitude: -9.129652 },
    { id: '13', name: 'Texaco', address: 'Oranmore, Co. Galway', logo: require('./assets/texaco.jpg'), latitude: 53.268086, longitude: -8.929925 },
    { id: '14', name: 'Maxol Auto24', address: 'Westside, Co. Galway', logo: require('./assets/maxol.jpg'), latitude: 53.275577, longitude: -9.076668 },
    { id: '15', name: 'Maxol', address: 'Lower, Salthill, Co. Galway', logo: require('./assets/maxol.jpg'), latitude: 53.267414, longitude: -9.066638 },
    { id: '16', name: 'Inver', address: 'Salthill, Co. Galway', logo: require('./assets/inver.png'), latitude: 53.258328, longitude: -9.101043 },
];

function calculateDistance(coord1, coord2) {
    const distance = haversine(coord1, coord2, { unit: 'meter' });
    return distance;
}

async function getStoredDistance() {
    const storedDistance = await AsyncStorage.getItem('selectedDistance');
    return storedDistance ? parseFloat(storedDistance) : 1500; // Default to 1.5 km if not set
}

function isMarkerInRange(userCoord, markerCoord, range = 1500) {
    const distance = calculateDistance(userCoord, markerCoord);
    return distance <= range;
}



function List({ navigation, route }) {
    const [location, setLocation] = useState(null);
    const [filteredStations, setFilteredStations] = useState([]);
    const [refreshing, setRefreshing] = useState(false);
    

    const onRefresh = async () => {
        setRefreshing(true);

        // Refresh the stations data
        let location = await Location.getCurrentPositionAsync({});
        setLocation(location.coords);

        const selectedDistance = route.params?.selectedDistance || '1500';
        const inRangeStations = petrolStations.filter((station) =>
            isMarkerInRange(
                location.coords,
                station,
                parseFloat(selectedDistance)
            )
        );
        setFilteredStations(inRangeStations);

        setRefreshing(false);
    };

    useEffect(() => {
        (async () => {
            let { status } = await Location.requestForegroundPermissionsAsync();
            if (status !== 'granted') {
                setErrorMsg('Permission to access location was denied');
                return;
            }

            let location = await Location.getCurrentPositionAsync({});
            setLocation(location.coords);
        })();

        if (location) {
            const selectedDistance = route.params?.selectedDistance || '1500';
            const inRangeStations = petrolStations.filter((station) =>
                isMarkerInRange(location, { latitude: station.latitude, longitude: station.longitude },
                    parseFloat(selectedDistance)
                )
            );
            setFilteredStations(inRangeStations);
        }
    }, [location, route.params?.selectedDistance]);


    const goBack = () => {
        navigation.goBack();
    };

    // Use icon to navigate to the setting page.
    const goToSettings = () => {
        navigation.navigate('Settings');
    };

    // Select station on the list.
    const selectStation = (station) => {
        navigation.navigate('Home', { station });
    };

    const renderItem = ({ item }) => {
        return (
            <TouchableWithoutFeedback onPress={() => selectStation(item)}>
                <View style={styles.listItem}>
                    <View style={styles.station}>
                        <Image source={item.logo} style={styles.logo} />
                        <View style={styles.stationInfo}>
                            <Text style={styles.name}>{item.name}</Text>
                            <Text style={styles.address}>{item.address}</Text>
                        </View>
                    </View>
                </View>
            </TouchableWithoutFeedback>
        );
    };


    return (
        <SafeAreaView style={styles.container}>
            <StatusBar backgroundColor="#fec619" barStyle="dark-content" />
            <View style={styles.header}>
                <TouchableOpacity onPress={() => navigation.goBack()}>
                    <Ionicons name="arrow-back" size={24} color="black" />
                </TouchableOpacity>
                <Text style={styles.headerTitle}>Petrol Stations</Text>
                <TouchableOpacity onPress={() => navigation.navigate('Settings')}>
                    <Ionicons name="settings-outline" size={30} color="black" />
                </TouchableOpacity>
            </View>
            <FlatList
                data={filteredStations}
                renderItem={renderItem}
                keyExtractor={(item) => item.id}
                refreshControl={
                    <RefreshControl
                        refreshing={refreshing}
                        onRefresh={onRefresh}
                    />
                }
                ListEmptyComponent={() => (
                    <View style={styles.emptyList}>
                        <Text style={styles.emptyText}>No petrol stations within range</Text>
                    </View>
                )}
            />
        </SafeAreaView>
    );
    
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 15,
        backgroundColor: '#fec619',
        height: 60,
    },
    headerTitle: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#000',
    },
    listItem: {
        padding: 15,
        borderBottomWidth: 1,
        borderBottomColor: '#eee',
        backgroundColor: '#fff',
        borderRadius: 5,
        marginVertical: 5,
        elevation: 2,
    },
    address: {
        fontSize: 14,
        color: '#999',
    },
    emptyList: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    emptyText: {
        fontSize: 18,
        color: '#999',
    },
    station: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: 15,
        borderBottomWidth: 1,
        borderBottomColor: '#eee',
        backgroundColor: '#fff',
        borderRadius: 5,
        marginVertical: 5,
        elevation: 2,
    },
    logo: {
        width: 40,
        height: 40,
        marginRight: 10,
        borderRadius: 5,
        resizeMode: 'contain',
    },
    stationInfo: {
        flex: 1,
    },
    name: {
        fontSize: 16,
        fontWeight: 'bold',
    },
    address: {
        fontSize: 14,
        color: '#999',
    },
    listItem: {
        position: 'relative',
        overflow: 'hidden',
    },
});

export default List;


