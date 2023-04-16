import React from 'react';
import { SafeAreaView } from 'react-native';
import Background from './components/Background';
import { View, StyleSheet, Image } from 'react-native';
import Header from './components/Header';
import Paragraph from './components/Paragraph';
import Button from './components/Button';
import { useRoute } from '@react-navigation/native';
import UserContext from './UserContext';

export default function Dashboard({ navigation }) {

  const profileIcon = require('./assets/profileIcon.png');
  const route = useRoute();
  const { user } = route.params;

  const handleLogout = (setUser) => {
    setUser(null);
    navigation.reset({
      index: 0,
      routes: [{ name: 'LoginPage' }],
    });
  };

  return (
    <UserContext.Consumer>
      {({ setUser }) => (
        <Background style={styles.background}>
          <SafeAreaView style={styles.safeArea}>
            <View style={styles.container}>
              <Image
                source={profileIcon}
                style={styles.profileImage}
              />
              <Header style={styles.headerText}>Welcome back {user.name}!</Header>
              <View style={styles.buttonsContainer}>
              <View style={styles.column}>
                <Button
                  style={styles.button}
                  labelStyle={styles.buttonLabel}
                  onPress={() => navigation.navigate('SubscriptionPage')}
                >
                  Subscribe
                </Button>
                <Button
                  style={styles.button}
                  labelStyle={styles.buttonLabel}
                  onPress={() => navigation.navigate('Home')}
                >
                  Update Prices
                </Button>
              </View>
              {/* Add your extra buttons here */}
              <View style={styles.column}>
                <Button
                  style={styles.button}
                  labelStyle={styles.buttonLabel}
                  onPress={() => navigation.navigate('List')}
                >
                  List of stations
                </Button>
                <Button
                  style={styles.button}
                  labelStyle={styles.buttonLabel}
                  disabled
                >
                  History
                </Button>
              </View>
            </View>
            <Button
              mode="outlined"
              style={[styles.button, styles.logoutButton]}
              labelStyle={styles.buttonLabel}
              onPress={() => handleLogout(setUser)}
            >
              Logout
            </Button>
            </View>
          </SafeAreaView>
        </Background>
      )}
    </UserContext.Consumer>
  )
}

const styles = StyleSheet.create({
  background: {
    backgroundColor: '#fff8e1',
  },
  safeArea: {
    flex: 1,
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  profileImage: {
    width: 150,
    height: 150,
    borderRadius: 75,
    marginBottom: 20,
  },
  headerText: {
    color: '#333333',
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 70,
  },
  paragraphText: {
    color: '#555555',
    fontSize: 18,
    marginBottom: 30,
  },
  buttonsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
  },
  column: {
    flexDirection: 'column',
  },
  button: {
    borderColor: '#fec619',
    borderWidth: 2,
    backgroundColor: '#fec619',
    width: '100%',
  },
  buttonLabel: {
    color: '#333333',
    fontWeight: 'bold',
  },
  logoutButton: {
    backgroundColor: '#f0f0f0',
    width: '100%',
    marginTop: 10,
  },
});
