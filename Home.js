import React from 'react';
import MapView, { PROVIDER_GOOGLE } from 'react-native-maps'
import { Button, StatusBar, StyleSheet, Text, View, TextInput, Alert } from "react-native";
import { Marker, Callout, Circle } from 'react-native-maps';
import * as Location from 'expo-location';
import { useState, useEffect, useRef } from "react";
import {
  PriceModal1,
  PriceModal2,
  PriceModal3,
  PriceModal4,
  PriceModal5,
  PriceModal6,
  PriceModal7,
  PriceModal8,
  PriceModal9,
  PriceModal10,
  PriceModal11,
  PriceModal12,
  PriceModal13,
  PriceModal14,
  PriceModal15,
  PriceModal16
} from './components/PriceModals';
import haversine from 'haversine';





export default function Home() {
  const [pin, setPin] = useState({
    latitude: 53.2745,
    longitude: -9.049,
  });

  const [region, setRegion] = useState({
    latitude: 53.2745,
    longitude: -9.049,
    latitudeDelta: 0.005,
    longitudeDelta: 0.0005,
  });

const mapRef = useRef(null);

  // get the current location from user by using GPS

    useEffect(() => {
    (async () => {

      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== 'granted') {
        setErrorMsg('Permission to access location was denied');
        return;
      }

      let location = await Location.getCurrentPositionAsync({});

      setPin({
        latitude: location.coords.latitude,
        longitude: location.coords.longitude,
      });

      if (mapRef.current) {
        mapRef.current.animateToRegion({
          latitude: location.coords.latitude,
          longitude: location.coords.longitude,
          latitudeDelta: 0.005,
          longitudeDelta: 0.0005,
        }, 1000);
      }
    })();
  }, []);

  // Modal sheet 1 
  const [priceModal1Visible, setPriceModal1Visible] = useState(false);
  const openPriceModal1 = () => {
    setPriceModal1Visible(true);
  };

  const closePriceModal1 = () => {
    setPriceModal1Visible(false);
  };

  // Modal sheet 2
  const [priceModal2Visible, setPriceModal2Visible] = useState(false);
  const openPriceModal2 = () => {
    setPriceModal2Visible(true);
  };

  const closePriceModal2 = () => {
    setPriceModal2Visible(false);
  };

  // Modal sheet 3
  const [priceModal3Visible, setPriceModal3Visible] = useState(false);
  const openPriceModal3 = () => {
    setPriceModal3Visible(true);
  };

  const closePriceModal3 = () => {
    setPriceModal3Visible(false);
  };

  // Modal sheet 4
  const [priceModal4Visible, setPriceModal4Visible] = useState(false);
  const openPriceModal4 = () => {
    setPriceModal4Visible(true);
  };

  const closePriceModal4 = () => {
    setPriceModal4Visible(false);
  };

  // Modal sheet 5
  const [priceModal5Visible, setPriceModal5Visible] = useState(false);
  const openPriceModal5 = () => {
    setPriceModal5Visible(true);
  };

  const closePriceModal5 = () => {
    setPriceModal5Visible(false);
  };

  // Modal sheet 6
  const [priceModal6Visible, setPriceModal6Visible] = useState(false);
  const openPriceModal6 = () => {
    setPriceModal6Visible(true);
  };

  const closePriceModal6 = () => {
    setPriceModal6Visible(false);
  };

  // Modal sheet 7
  const [priceModal7Visible, setPriceModal7Visible] = useState(false);
  const openPriceModal7 = () => {
    setPriceModal7Visible(true);
  };

  const closePriceModal7 = () => {
    setPriceModal7Visible(false);
  };

  // Modal sheet 8
  const [priceModal8Visible, setPriceModal8Visible] = useState(false);
  const openPriceModal8 = () => {
    setPriceModal8Visible(true);
  };

  const closePriceModal8 = () => {
    setPriceModal8Visible(false);
  };

  // Modal sheet 9
  const [priceModal9Visible, setPriceModal9Visible] = useState(false);
  const openPriceModal9 = () => {
    setPriceModal9Visible(true);
  };

  const closePriceModal9 = () => {
    setPriceModal9Visible(false);
  };

  // Modal sheet 10
  const [priceModal10Visible, setPriceModal10Visible] = useState(false);
  const openPriceModal10 = () => {
    setPriceModal10Visible(true);
  };

  const closePriceModal10 = () => {
    setPriceModal10Visible(false);
  };

  // Modal sheet 11
  const [priceModal11Visible, setPriceModal11Visible] = useState(false);
  const openPriceModal11 = () => {
    setPriceModal11Visible(true);
  };

  const closePriceModal11 = () => {
    setPriceModal11Visible(false);
  };

  // Modal sheet 12
  const [priceModal12Visible, setPriceModal12Visible] = useState(false);
  const openPriceModal12 = () => {
    setPriceModal12Visible(true);
  };

  const closePriceModal12 = () => {
    setPriceModal12Visible(false);
  };



  // Modal sheet 13
  const [priceModal13Visible, setPriceModal13Visible] = useState(false);
  const openPriceModal13 = () => {
    setPriceModal13Visible(true);
  };

  const closePriceModal13 = () => {
    setPriceModal13Visible(false);
  };

  // Modal sheet 14
  const [priceModal14Visible, setPriceModal14Visible] = useState(false);
  const openPriceModal14 = () => {
    setPriceModal14Visible(true);
  };

  const closePriceModal14 = () => {
    setPriceModal14Visible(false);
  };

  // Modal sheet 15
  const [priceModal15Visible, setPriceModal15Visible] = useState(false);
  const openPriceModal15 = () => {
    setPriceModal15Visible(true);
  };

  const closePriceModal15 = () => {
    setPriceModal15Visible(false);
  };

  // Modal sheet 16
  const [priceModal16Visible, setPriceModal16Visible] = useState(false);
  const openPriceModal16 = () => {
    setPriceModal16Visible(true);
  };

  const closePriceModal16 = () => {
    setPriceModal16Visible(false);
  };

  // Calculate the distance between two coordinate.
  function calculateDistance(coord1, coord2) {
    const distance = haversine(coord1, coord2, { unit: 'meter' });
    return distance;
  }

  // Check if the marker is within the 1.5km range.
  function isMarkerInRange(userCoord, markerCoord, range = 1500) {
    const distance = calculateDistance(userCoord, markerCoord);
    return distance <= range;
  }
  
  
  return (
    <View style={styles.container}>
      <MapView
      ref={mapRef}
        provider={PROVIDER_GOOGLE}
        style={styles.map}
        initialRegion={region}
        showsUserLocation={true}
      >


        {/* Reading your current location */}
        <Marker
          coordinate={pin}
          title="You are here"
          draggable={true}
          onDragStart={(e) => {
            console.log("Drag Start", e.nativeEvent.coordinate);
          }}
          onDragEnd={(e) => {
            console.log("Drag End", e.nativeEvent.coordinate);

            setPin({
              latitude: e.nativeEvent.coordinate.latitude,
              longitude: e.nativeEvent.coordinate.longitude,
            });
            setRegion({
              latitude: e.nativeEvent.coordinate.latitude,
              longitude: e.nativeEvent.coordinate.longitude,
              latitudeDelta: 0.005,
              longitudeDelta: 0.0005,
            });
          }}
        >
        </Marker>
        {/* Reading your current location */}

        {/* All the petrol stations location in Galway */}

        {/* Circle K Petrol station */}

        {
        isMarkerInRange(pin, { latitude: 53.29006252755299, longitude: -9.006691917024554 }) && (
        <Marker
          coordinate={{
            latitude: 53.29006252755299,
            longitude: -9.006691917024554,
          }}
          image={require('./assets/1station.png')}
          title="Circle K"
        >
          <Callout tooltip onPress={openPriceModal1}>
            <View>
              <View style={styles.bubble}>
                <Text style={styles.name}>Circle K</Text>
                <Text style={styles.info}>Open 24 hours</Text>
                <Text></Text>
                <Text style={styles.tapDetails}>Tap for more details</Text>
              </View>
              <View style={styles.arrowBorder}>
                <View style={styles.arrow}>
                </View>
              </View>
              <PriceModal1 visible={priceModal1Visible} onClose={closePriceModal1} />
            </View>
          </Callout>
        </Marker>
        )
      }

{
        isMarkerInRange(pin, { latitude: 53.282121, longitude: -9.038721 }) && (
        <Marker
          coordinate={{
            latitude: 53.282121,
            longitude: -9.038721,
          }}
          image={require('./assets/1station.png')}
          title="Circle K Express"
        >
          <Callout tooltip onPress={openPriceModal8}>
            <View>
              <View style={styles.bubble}>
                <Text style={styles.name}>Circle K</Text>
                <Text style={styles.info}>Open 24 hours</Text>
                <Text></Text>
                <Text style={styles.tapDetails}>Tap for more details</Text>
              </View>
              <View style={styles.arrowBorder}>
                <View style={styles.arrow}>
                </View>
              </View>
              <PriceModal8 visible={priceModal8Visible} onClose={closePriceModal8} />
            </View>
          </Callout>
        </Marker>
                )
              }

{
        isMarkerInRange(pin, { latitude: 53.277263, longitude: -9.072086 }) && (
        <Marker
          coordinate={{
            latitude: 53.277263,
            longitude: -9.072086,
          }}
          image={require('./assets/1station.png')}
          title="Circle K Express"
        >
          <Callout tooltip onPress={openPriceModal9}>
            <View>
              <View style={styles.bubble}>
                <Text style={styles.name}>Circle K</Text>
                <Text style={styles.info}>Open: 7AM - 23PM</Text>
                <Text style={styles.tapDetails}>Tap for more details</Text>
              </View>
              <View style={styles.arrowBorder}>
                <View style={styles.arrow}>
                </View>
              </View>
              <PriceModal9 visible={priceModal9Visible} onClose={closePriceModal9} />
            </View>
          </Callout>
        </Marker>
               )
              }

{
        isMarkerInRange(pin, { latitude: 53.281436, longitude: -9.034798 }) && (
        <Marker
          coordinate={{
            latitude: 53.281436,
            longitude: -9.034798,
          }}
          image={require('./assets/1station.png')}
          title="Circle K Express"
        >
          <Callout tooltip onPress={openPriceModal10}>
            <View>
              <View style={styles.bubble}>
                <Text style={styles.name}>Circle K College Rd</Text>
                <Text style={styles.info}>Open: 7AM - 23PM</Text>
                <Text style={styles.tapDetails}>Tap for more details</Text>
              </View>
              <View style={styles.arrowBorder}>
                <View style={styles.arrow}>
                </View>
              </View>
              <PriceModal10 visible={priceModal10Visible} onClose={closePriceModal10} />
            </View>
          </Callout>
        </Marker>
                       )
                      }

{
        isMarkerInRange(pin, { latitude: 53.281846, longitude: -9.064977 }) && (
        <Marker
          coordinate={{
            latitude: 53.281846,
            longitude: -9.064977,
          }}
          image={require('./assets/1station.png')}
          title="Circle K Express"
        >
          <Callout tooltip onPress={openPriceModal11}>
            <View>
              <View style={styles.bubble}>
                <Text style={styles.name}>Circle K Newcastle Rd</Text>
                <Text style={styles.info}>Open: 7AM - 23PM</Text>
                <Text style={styles.tapDetails}>Tap for more details</Text>
              </View>
              <View style={styles.arrowBorder}>
                <View style={styles.arrow}>
                </View>
              </View>
              <PriceModal11 visible={priceModal11Visible} onClose={closePriceModal11} />
            </View>
          </Callout>
        </Marker>
                               )
                              }

        {/* Circle K Petrol station */}

        {/* Topaz Petrol station */}
        {
        isMarkerInRange(pin, { latitude: 53.29214920867234, longitude: -9.018907699375454 }) && (
        <Marker
          coordinate={{
            latitude: 53.29214920867234,
            longitude: -9.018907699375454,
          }}
          image={require('./assets/1station.png')}
          title="Topaz"
        >
          <Callout tooltip onPress={openPriceModal2}>
            <View>
              <View style={styles.bubble}>
                <Text style={styles.name}>Topaz</Text>
                <Text style={styles.info}>Open 24 hours</Text>
                <Text></Text>
                <Text style={styles.tapDetails}>Tap for more details</Text>
              </View>
              <View style={styles.arrowBorder}>
                <View style={styles.arrow}>
                </View>
              </View>
              <PriceModal2 visible={priceModal2Visible} onClose={closePriceModal2} />
            </View>
          </Callout>
        </Marker>
                                       )
                                      }
        

        {/* Topaz Petrol station */}

        {/* Applegreen Petrol station */}
        {
        isMarkerInRange(pin, { latitude: 53.287045472896565, longitude: -9.030814413286762 }) && (
        <Marker
          coordinate={{
            latitude: 53.287045472896565,
            longitude: -9.030814413286762,
          }}
          image={require('./assets/1station.png')}
          title="Applegreen"
        >
          <Callout tooltip onPress={openPriceModal3}>
            <View>
              <View style={styles.bubble}>
                <Text style={styles.name}>Applegreen</Text>
                <Text style={styles.info}>Open 24 hours</Text>
                <Text></Text>
                <Text style={styles.tapDetails}>Tap for more details</Text>
              </View>
              <View style={styles.arrowBorder}>
                <View style={styles.arrow}>
                </View>
              </View>
              <PriceModal3 visible={priceModal3Visible} onClose={closePriceModal3} />
            </View>
          </Callout>
        </Marker>
                   )
                  }

        {/* Applegreen Petrol station */}

        {/* Top Oil Petrol station */}
        {
        isMarkerInRange(pin, { latitude: 53.29015418980305, longitude: -9.020806677417307 }) && (
        <Marker
          coordinate={{
            latitude: 53.29015418980305,
            longitude: -9.020806677417307,
          }}
          image={require('./assets/1station.png')}
          title="Top Oil"
        >
          <Callout tooltip onPress={openPriceModal4}>
            <View>
              <View style={styles.bubble}>
                <Text style={styles.name}>Top Oil</Text>
                <Text style={styles.info}>Open: 6am - 9pm</Text>
                <Text></Text>
                <Text style={styles.tapDetails}>Tap for more details</Text>
              </View>
              <View style={styles.arrowBorder}>
                <View style={styles.arrow}>
                </View>
              </View>
              <PriceModal4 visible={priceModal4Visible} onClose={closePriceModal4} />
            </View>
          </Callout>
        </Marker>
             )
            }

{
        isMarkerInRange(pin, { latitude: 53.258506, longitude: -9.103267 }) && (
        <Marker
          coordinate={{
            latitude: 53.258506,
            longitude: -9.103267,
          }}
          image={require('./assets/1station.png')}
          title="Circle K Express"
        >
          <Callout tooltip onPress={openPriceModal13}>
            <View>
              <View style={styles.bubble}>
                <Text style={styles.name}>Top Oil Knocknacarra</Text>
                <Text style={styles.info}>Open: 7:30AM - 22PM</Text>
                <Text style={styles.tapDetails}>Tap for more details</Text>
              </View>
              <View style={styles.arrowBorder}>
                <View style={styles.arrow}>
                </View>
              </View>
              <PriceModal13 visible={priceModal13Visible} onClose={closePriceModal13} />
            </View>
          </Callout>
        </Marker>
             )
            }

        {/* Top Oil Petrol station */}

        {/* Texaco Petrol station */}
        {
        isMarkerInRange(pin, { latitude: 53.271367, longitude: -9.045233 }) && (
        <Marker
          coordinate={{
            latitude: 53.271367,
            longitude: -9.045233,
          }}
          image={require('./assets/1station.png')}
          title="Circle K Express"
        >
          <Callout tooltip onPress={openPriceModal5}>
            <View>
              <View style={styles.bubble}>
                <Text style={styles.name}>Texaco</Text>
                <Text style={styles.info}>Open 24 Hours</Text>
                <Text style={styles.tapDetails}>Tap for more details</Text>
              </View>
              <View style={styles.arrowBorder}>
                <View style={styles.arrow}>
                </View>
              </View>
              <PriceModal5 visible={priceModal5Visible} onClose={closePriceModal5} />
            </View>
          </Callout>
        </Marker>
                     )
                    }

{
        isMarkerInRange(pin, { latitude: 53.263221, longitude: -9.072033 }) && (
        <Marker
          coordinate={{
            latitude: 53.263221,
            longitude: -9.072033,
          }}
          image={require('./assets/1station.png')}
          title="Circle K Express"
        >
          <Callout tooltip onPress={openPriceModal14}>
            <View>
              <View style={styles.bubble}>
                <Text style={styles.name}>Texaco xl</Text>
                <Text style={styles.info}>Open:7AM - 22PM</Text>
                <Text style={styles.tapDetails}>Tap for more details</Text>
              </View>
              <View style={styles.arrowBorder}>
                <View style={styles.arrow}>
                </View>
              </View>
              <PriceModal14 visible={priceModal14Visible} onClose={closePriceModal14} />
            </View>
          </Callout>
        </Marker>
           )
          }

{
        isMarkerInRange(pin, { latitude: 53.258925, longitude: -9.129652 }) && (
        <Marker
          coordinate={{
            latitude: 53.258925,
            longitude: -9.129652,
          }}
          image={require('./assets/1station.png')}
          title="Circle K Express"
        >
          <Callout tooltip onPress={openPriceModal15}>
            <View>
              <View style={styles.bubble}>
                <Text style={styles.name}>Texaco Service Station</Text>
                <Text style={styles.info}>Open 24 Hours</Text>
                <Text style={styles.tapDetails}>Tap for more details</Text>
              </View>
              <View style={styles.arrowBorder}>
                <View style={styles.arrow}>
                </View>
              </View>
              <PriceModal15 visible={priceModal15Visible} onClose={closePriceModal15} />
            </View>
          </Callout>
        </Marker>
          )
        }

{
        isMarkerInRange(pin, { latitude: 53.268086, longitude: -8.929925 }) && (
        <Marker
          coordinate={{
            latitude: 53.268086,
            longitude: -8.929925,
          }}
          image={require('./assets/1station.png')}
          title="Applegreen"
        >
          <Callout tooltip onPress={openPriceModal12}>
            <View>
              <View style={styles.bubble}>
                <Text style={styles.name}>Texaco</Text>
                <Text style={styles.info}>Open 24 hours</Text>
                <Text></Text>
                <Text style={styles.tapDetails}>Tap for more details</Text>
              </View>
              <View style={styles.arrowBorder}>
                <View style={styles.arrow}>
                </View>
              </View>
              <PriceModal12 visible={priceModal12Visible} onClose={closePriceModal12} />
            </View>
          </Callout>
        </Marker>
             )
            }

        {/* Texaco Petrol station */}

        {/* Maxol Petrol station */}

        {
        isMarkerInRange(pin, { latitude: 53.275577, longitude: -9.076668 }) && (
        <Marker
          coordinate={{
            latitude: 53.275577,
            longitude: -9.076668,
          }}
          image={require('./assets/1station.png')}
          title="Circle K Express"
        >
          <Callout tooltip onPress={openPriceModal6}>
            <View>
              <View style={styles.bubble}>
                <Text style={styles.name}>Maxol Auto24</Text>
                <Text style={styles.info}>Open 24 Hours</Text>
                <Text style={styles.tapDetails}>Tap for more details</Text>
              </View>
              <View style={styles.arrowBorder}>
                <View style={styles.arrow}>
                </View>
              </View>
              <PriceModal6 visible={priceModal6Visible} onClose={closePriceModal6} />
            </View>
          </Callout>
        </Marker>
           )
          }

{
        isMarkerInRange(pin, { latitude: 53.267414, longitude: -9.066638 }) && (
        <Marker
          coordinate={{
            latitude: 53.267414,
            longitude: -9.066638,
          }}
          image={require('./assets/1station.png')}
          title="Circle K Express"
        >
          <Callout tooltip onPress={openPriceModal16}>
            <View>
              <View style={styles.bubble}>
                <Text style={styles.name}>Maxol Service Station</Text>
                <Text style={styles.info}>Open:7AM - 21PM</Text>
                <Text style={styles.tapDetails}>Tap for more details</Text>
              </View>
              <View style={styles.arrowBorder}>
                <View style={styles.arrow}>
                </View>
              </View>
              <PriceModal16 visible={priceModal16Visible} onClose={closePriceModal16} />
            </View>
          </Callout>
        </Marker>
           )
          }

        {/* Inver Petrol station */}

        {
        isMarkerInRange(pin, { latitude: 53.258328, longitude: -9.101043 }) && (
        <Marker
          coordinate={{
            latitude: 53.258328,
            longitude: -9.101043,
          }}
          image={require('./assets/1station.png')}
          title="Circle K Express"
        >
          <Callout tooltip onPress={openPriceModal7}>
            <View>
              <View style={styles.bubble}>
                <Text style={styles.name}>Inver Petrol Station</Text>
                <Text style={styles.info}>Open: 8AM - 22PM</Text>
                <Text style={styles.tapDetails}>Tap for more details</Text>
              </View>
              <View style={styles.arrowBorder}>
                <View style={styles.arrow}>
                </View>
              </View>
              <PriceModal7 visible={priceModal7Visible} onClose={closePriceModal7} />
            </View>
          </Callout>
        </Marker>
           )
          }

        {/* All the petrol stations location in Galway */}

        <MapView.Circle
          center={pin}
          radius={1500}
          fillColor={'rgba(102, 179, 255, 0.5)'}
          strokeWidth={.6}
        />

      </MapView>

    </View>
  );
}




const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  map: {
    width: '100%',
    height: '100%',
  },
  //Callout bubble
  bubble: {
    backgroundColor: '#ffffff',
    borderRadius: 8,
    padding: 12,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.3,
    shadowRadius: 3,
    elevation: 2,
  },
  //Station name
  name: {
    fontFamily: 'Roboto',
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333333',
    marginBottom: 4,
  },
  //Station image
  image: {
    width: 120,
    height: 80,
  },
  //Arrow below the bubble
  arrowBorder: {
    borderTopWidth: 8,
    borderTopColor: 'transparent',
    borderRightWidth: 8,
    borderRightColor: 'transparent',
    borderLeftWidth: 8,
    borderLeftColor: 'transparent',
    borderBottomColor: '#ffffff',
    borderBottomWidth: 8,
    alignSelf: 'center',
    marginTop: -1,
  },
  arrow: {
    borderTopWidth: 6,
    borderTopColor: 'transparent',
    borderRightWidth: 6,
    borderRightColor: 'transparent',
    borderLeftWidth: 6,
    borderLeftColor: 'transparent',
    borderBottomColor: 'rgba(0,0,0,0.15)',
    borderBottomWidth: 6,
    alignSelf: 'center',
    marginTop: -7,
  },
  info: {
    fontFamily: 'Roboto',
    fontSize: 14,
    color: '#666666',
    marginBottom: 4,
  },
  tapDetails: {
    fontFamily: 'Roboto',
    fontSize: 14,
    fontWeight: 'bold',
    color: '#3498db',
  },
  // Style for Circle
  circle: {

  },
});

