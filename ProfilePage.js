import React from 'react';
import Background from './components/Background';
import Logo from './components/Logo';
import Header from './components/Header';
import Button from './components/Button';
import Paragraph from './components/Paragraph';


export default function ProfilePage({ navigation }) {
  return (
    <Background>
      <Logo />
      <Header>Your Profile</Header>
      <Paragraph>
        The easiest way to start saving.
      </Paragraph>
      <Button
        mode="contained"
        onPress={() => navigation.navigate('LoginPage')}
      >
        Login
      </Button>
      <Button
        mode="outlined"
        onPress={() => navigation.navigate('RegisterPage')}
      >
        Sign Up
      </Button>
    </Background>
  )
}
