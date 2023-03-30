import React from 'react';
import Background from './components/Background';
import { View, StyleSheet, Image } from 'react-native';
import Header from './components/Header';
import Paragraph from './components/Paragraph';
import Button from './components/Button';
import { useRoute } from '@react-navigation/native';

export default function Dashboard({ navigation }) {

  const profileIcon = require('./assets/profileIcon.png');
  const route = useRoute();
const { user } = route.params;
  
  return (
    <Background style={styles.background}>
      <View style={styles.container}>
        <Image
          source={profileIcon}
          style={styles.profileImage}
        />
        <Header style={styles.headerText}>{user.name}</Header>
        <Paragraph style={styles.paragraphText}>G00379891@atu.ie</Paragraph>
        <Button
          mode="outlined"
          style={styles.button}
          labelStyle={styles.buttonLabel}
          onPress={() =>
            navigation.reset({
              index: 0,
              routes: [{ name: 'LoginPage' }],
            })
          }
        >
          Logout
        </Button>
        </View>
    </Background>
  )
}

const styles = StyleSheet.create({
  background: {
    backgroundColor: '#fff8e1',
    },
    container: {
    alignItems: 'center',
    },
    profileImage: {
    width: 150,
    height: 150,
    borderRadius: 75,
    marginBottom: 20,
    },
    headerText: {
    color: '#333333',
    margin: 30,
    fontSize: 20,
    },
    paragraphText: {
    color: '#555555',
    },
    button: {
    borderColor: '#fec619',
    borderWidth: 2,
    backgroundColor: '#fec619',
    width: '100%',
    marginTop: 40,
    },
    buttonLabel: {
    color: '#333333',
    fontWeight: 'bold',
    },
    extraInfo: {
    marginTop: 5,
    },
});
