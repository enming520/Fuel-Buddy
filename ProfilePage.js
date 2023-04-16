import React from 'react';
import Background from './components/Background';
import Logo from './components/Logo';
import Header from './components/Header';
import Button from './components/Button';
import Paragraph from './components/Paragraph';
import { StyleSheet } from 'react-native';

export default function ProfilePage({ navigation }) {
  return (
    <Background style={styles.background}>
      <Logo/>
      <Header style={styles.header}>Welcome to FuelBuddy!</Header>
      <Paragraph style={styles.paragraph}>
        Unlock the best fuel deals! Log in now and steer your way to savings!
      </Paragraph>
      <Button
        style={styles.button}
        mode="contained"
        onPress={() => navigation.navigate('LoginPage')}
      >
        Login
      </Button>
      <Button
        mode="contained"
        onPress={() => navigation.navigate('RegisterPage')}
      >
        Sign Up
      </Button>
    </Background>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f0f0f0',

  },
  header: {
    fontSize: 23,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#fec619',
    marginBottom: 10,
    marginTop: 1,
  },
  paragraph: {
    fontSize: 16,
    textAlign: 'center',
    color: '#555',
    marginBottom: 15,
    maxWidth: '80%',
  },
  button: {
    marginTop: 15,
    width: '100%',
  },
});
