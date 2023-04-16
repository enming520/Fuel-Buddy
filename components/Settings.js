import React, { useState, useEffect, useContext  } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, SafeAreaView, StatusBar, FlatList } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import AsyncStorage from '@react-native-async-storage/async-storage';
import DistanceContext from '../DistanceContext';




function DistanceOptions({ selectedOption, onSelect }) {
    const options = [
        { id: '1500', label: '1.5 km' },
        { id: '2500', label: '2.5 km' },
        { id: '5000', label: '5 km' },
    ];

    return (
        <View style={styles.distanceOptionsContainer}>
            <Text style={styles.distanceOptionsTitle}>Distance:</Text>
            <FlatList
                data={options}
                horizontal
                renderItem={({ item }) => (
                    <TouchableOpacity
                        style={[
                            styles.distanceOption,
                            item.id === selectedOption ? styles.selectedOption : {},
                        ]}
                        onPress={() => onSelect(item.id)}
                    >
                        <Text style={styles.distanceOptionText}>{item.label}</Text>
                    </TouchableOpacity>
                )}
                keyExtractor={(item) => item.id}
                showsHorizontalScrollIndicator={false}
            />
        </View>
    );
}

function Settings({ navigation }) {
    const [selectedDistance, setSelectedDistance] = useState('1500');
    const { range, setRange } = useContext(DistanceContext);

    const updateRange = () => {
        setRange(selectedDistance);
      };

    //Store the selection to async storage.
    useEffect(() => {
        const loadSelectedDistance = async () => {
            const storedDistance = await AsyncStorage.getItem('selectedDistance');
            if (storedDistance) {
                setSelectedDistance(parseFloat(storedDistance));
            }
        };
        loadSelectedDistance();
    }, []);

    const handleSelectedDistanceChange = async (distance) => {
        setSelectedDistance(distance);
        await AsyncStorage.setItem('selectedDistance', distance);
    };

     // Fetch stored distance from AsyncStorage and update selectedDistance state
     useEffect(() => {
        const fetchStoredDistance = async () => {
            const storedDistance = await AsyncStorage.getItem('selectedDistance');
            if (storedDistance) {
                setSelectedDistance(storedDistance);
            }
        };
        fetchStoredDistance();
    }, []);

    const goBack = () => {
        updateRange();
        navigation.navigate('NestedList', { selectedDistance });
      };

    return (
        <SafeAreaView style={styles.container}>
            <StatusBar backgroundColor="#fec619" barStyle="dark-content" />
            <View style={styles.header}>
            <TouchableOpacity onPress={goBack}>
                    <Ionicons name="arrow-back" size={24} color="#000" />
                </TouchableOpacity>
                <Text style={styles.headerTitle}>Settings</Text>
                <View style={{ width: 24 }} />
            </View>
            <DistanceOptions selectedOption={selectedDistance} onSelect={handleSelectedDistanceChange} />
            {/* Add more settings components here */}
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
    distanceOptionsContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        alignSelf: 'center',
        paddingHorizontal: 15,
        marginTop: 15,
    },
    distanceOptionsTitle: {
        fontSize: 18,
        fontWeight: 'bold',
        marginRight: 15,
    },
    distanceOption: {
        paddingHorizontal: 12,
        paddingVertical: 6,
        borderRadius: 20,
        backgroundColor: '#f0f0f0',
        marginRight: 10,
    },
    selectedOption: {
        backgroundColor: '#fec619',
    },
    distanceOptionText: {
        fontSize: 16,
    },
});

export default Settings;
