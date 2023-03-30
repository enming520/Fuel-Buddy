import React, { useState } from 'react';
import { View, StyleSheet, TouchableOpacity, Alert, KeyboardAvoidingView, Platform, ToastAndroid } from 'react-native';
import { Text } from 'react-native-paper';
import Background from './components/Background';
import Logo from './components/Logo';
import Header from './components/Header';
import Button from './components/Button';
import TextInput from './components/TextInput';
import BackButton from './components/BackButton';
import { theme } from './core/theme';
import { emailValidator } from './valids/emailValidator';
import { passwordValidator } from './valids/passwordValidator';
import { nameValidator } from './valids/nameValidator';
import { confirmPasswordValidator } from './valids/confirmPasswordValidator';


import axios from 'axios';


export default function RegisterPage({ navigation }) {
  const [name, setName] = useState({ value: '', error: '' })
  const [email, setEmail] = useState({ value: '', error: '' })
  const [password, setPassword] = useState({ value: '', error: '' })
  const [confirmPassword, setConfirmPassword] = useState({ value: '', error: '' });


  const onSignUpPressed = async () => {
    const nameError = nameValidator(name.value);
    const emailError = emailValidator(email.value);
    const passwordError = passwordValidator(password.value);
    const confirmPasswordError = confirmPasswordValidator(password.value, confirmPassword.value);
    if (emailError || passwordError || nameError || confirmPasswordError) {
      setName({ ...name, error: nameError });
      setEmail({ ...email, error: emailError });
      setPassword({ ...password, error: passwordError });
      setConfirmPassword({ ...confirmPassword, error: confirmPasswordError });
      return;
    }

    const registrationError = await registerUser(name.value, email.value, password.value);
    if (registrationError) {
      // Handle registration error
      // show an error message to the user using an Alert.
      Alert.alert('Registration Error', registrationError);
    } else {
      // Registration was successful
      ToastAndroid.show('You have successfully registered.', ToastAndroid.SHORT);
      navigation.reset({
        index: 0,
        routes: [{ name: 'LoginPage' }],
      });
    }
};

// Link to back-end server.
const registerUser = async (name, email, password) => {
  try {
    const response = await axios.post('http://192.168.8.106:4000/register', {
      name,
      email,
      password,
    });

    if (response.data.success) {
      // Registration was successful
      return null;
    } else {
      // Handle server-side validation errors if any
      return response.data.message;
    }
  } catch (error) {
    console.error('Error during registration:', error);
    return 'This email address is already registered. Please use a different email address or log in..';
  }
};


return (
  <Background>
    <Header>Create Account</Header>
    <TextInput
      label="Name"
      returnKeyType="next"
      value={name.value}
      onChangeText={(text) => setName({ value: text, error: '' })}
      error={!!name.error}
      errorText={name.error}
    />
    <TextInput
      label="Email"
      returnKeyType="next"
      value={email.value}
      onChangeText={(text) => setEmail({ value: text, error: '' })}
      error={!!email.error}
      errorText={email.error}
      autoCapitalize="none"
      autoCompleteType="email"
      textContentType="emailAddress"
      keyboardType="email-address"
    />
    <TextInput
      label="Password"
      returnKeyType="done"
      value={password.value}
      onChangeText={(text) => setPassword({ value: text, error: '' })}
      error={!!password.error}
      errorText={password.error}
      secureTextEntry
    />
    <TextInput
      label="Confirm Password"
      returnKeyType="done"
      value={confirmPassword.value}
      onChangeText={(text) => setConfirmPassword({ value: text, error: '' })}
      error={!!confirmPassword.error}
      errorText={confirmPassword.error}
      secureTextEntry
    />
    <Button
      mode="contained"
      onPress={onSignUpPressed}
      style={{ marginTop: 24 }}
    >
      Sign Up
    </Button>
    <View style={styles.row}>
      <Text>Already have an account? </Text>
      <TouchableOpacity onPress={() => navigation.replace('LoginPage')}>
        <Text style={styles.link}>Login</Text>
      </TouchableOpacity>
    </View>
  </Background>
)
}

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    marginTop: 4,
  },
  link: {
    fontWeight: 'bold',
    color: theme.colors.primary,
  },
})
