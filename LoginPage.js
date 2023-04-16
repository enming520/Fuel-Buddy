import React, { useState, useEffect } from 'react';
import { TouchableOpacity, StyleSheet, View, Alert, Platform, Image } from 'react-native';
import { Text } from 'react-native-paper';
import Background from './components/Background';
import Header from './components/Header';
import Button from './components/Button';
import TextInput from './components/TextInput';
import { theme } from './core/theme';
import { emailValidator } from './valids/emailValidator';
import { passwordValidator } from './valids/passwordValidator';
import axios from 'axios';
import config from './config';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { CheckBox } from 'react-native-elements';
import { useContext } from 'react';
import UserContext from './UserContext';



export default function LoginPage({ navigation }) {
  const [email, setEmail] = useState({ value: '', error: '' })
  const [password, setPassword] = useState({ value: '', error: '' })
  const [rememberMe, setRememberMe] = useState(false);
  const logo = require('./assets/LOGO.jpg');
  const { setUser } = useContext(UserContext);
  const { baseURL } = config;


  // Remember me check box 
  const onRememberMeChange = (checked) => {
    setRememberMe(checked);
  };

  // Login function that send the data to the backend server
  const authenticateUser = async (email, password) => {
    try {
      const response = await axios.post(`${baseURL}/login`, {
        email,
        password,
      });

      if (response.data.success) {
        // Authentication was successful
        return { success: true, token: response.data.token, user: response.data.user   };
      } else {
        // Handle server-side validation errors if any
        return { success: false, message: response.data.message };
      }
    } catch (error) {
      console.error('Error during authentication:', error);
      return { success: false, message: 'The Email or the password that you entered is wrong, please enter again.' };
    }
  };

  const onLoginPressed = async () => {
    const emailError = emailValidator(email.value);
    const passwordError = passwordValidator(password.value)
    if (emailError || passwordError) {
      setEmail({ ...email, error: emailError });
      setPassword({ ...password, error: passwordError });
      return;
    }

    const result = await authenticateUser(email.value, password.value);
    if (result.success) {
      // Authentication was successful, store the token, and navigate to the Dashboard
      setUser(result.user);
      navigation.reset({
        index: 0,
        routes: [{ name: 'Dashboard', params: { user: result.user } }],
      });
    } else {
      // Handle authentication error
      Alert.alert('Authentication Error', result.message);
    }

    // Remember me function
    if (rememberMe) {
      await AsyncStorage.setItem('email', email.value);
      await AsyncStorage.setItem('password', password.value);
    } else {
      await AsyncStorage.removeItem('email');
      await AsyncStorage.removeItem('password');
    }
  };

  // Auto filled when the app opened
  useEffect(() => {
    const fetchCredentials = async () => {
      const savedEmail = await AsyncStorage.getItem('email');
      const savedPassword = await AsyncStorage.getItem('password');
      if (savedEmail && savedPassword) {
        setEmail({ value: savedEmail, error: '' });
        setPassword({ value: savedPassword, error: '' });
        setRememberMe(true);
      }
    };
    fetchCredentials();
  }, []);

  return (
    <Background>
 
      <Image source={logo} style={styles.logo} />
      <Header style={styles.header}>Start Saving on Fuel with FuelBuddy!</Header>
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

      <View style={styles.actionsContainer}>
        <View style={styles.checkboxContainer}>
          <CheckBox
            title={<Text style={styles.checkboxTitle}>Remember me</Text>}
            checked={rememberMe}
            onPress={() => onRememberMeChange(!rememberMe)}
            containerStyle={styles.checkbox}
          />
        </View>
        <View>
          <TouchableOpacity
            style={styles.forgotPassword}
            onPress={() => navigation.navigate('ResetPasswordPage')}
          >
            <Text style={styles.forgot}>Forgot your password?</Text>
          </TouchableOpacity>
        </View>
      </View>
      <Button mode="contained" onPress={onLoginPressed}>
        Login
      </Button>
      <View style={styles.row}>
        <Text>Don’t have an account? </Text>
        <TouchableOpacity onPress={() => navigation.replace('RegisterPage')}>
          <Text style={styles.link}>Sign up</Text>
        </TouchableOpacity>
      </View>
    </Background>
  )
}

const styles = StyleSheet.create({
  logo: {
    width: 170,
    height: 170,
    resizeMode: 'contain',
    alignSelf: 'center',
    marginBottom: 10,
  },
  actionsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 25,
  },
  forgotPassword: {
    alignItems: 'flex-end',
    marginTop: 23,
  },
  row: {
    flexDirection: 'row',
    marginTop: 4,
  },
  forgot: {
    marginBottom: 25,
    fontSize: 13,
    color: theme.colors.secondary,
  },
  link: {
    fontWeight: 'bold',
    color: theme.colors.primary,
  },
  checkboxContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  checkbox: {
    backgroundColor: 'transparent',
    borderWidth: 0,
  },
  checkboxTitle: {
    color: theme.colors.text,
  },
  header: {
    fontSize: 22, // Reduce the font size to fit the header in one line
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#fec619',
    marginBottom: 10,
    paddingHorizontal: 20, // Add some horizontal padding
    maxWidth: '90%', // Limit the width of the header
  }
})
