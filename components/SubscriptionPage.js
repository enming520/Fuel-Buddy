import React from 'react';
import { ScrollView, StyleSheet, View, Text, TouchableOpacity, SafeAreaView } from 'react-native';
import Background from './Background';

export default function SubscriptionPage() {
  return (
    <Background style={styles.background}>
      <SafeAreaView style={styles.safeArea}>
        <View style={styles.container}>
          <View style={[styles.card, styles.freeCard]}>
            <Text style={styles.title}>Free</Text>
            <Text style={styles.benefit}>Limited access to fuel deals</Text>
            <Text style={styles.benefit}>Basic map features</Text>
            <Text style={styles.benefit}>Standard support</Text>
            <TouchableOpacity style={[styles.button, styles.disabledButton]} disabled>
              <Text style={styles.buttonText}>Current Plan</Text>
            </TouchableOpacity>
          </View>

          <View style={[styles.card, styles.paidCard]}>
            <Text style={styles.title}>Premium</Text>
            <Text style={styles.price}>€9.99 / month</Text>
            <Text style={styles.benefit}>Unlimited access to fuel deals</Text>
            <Text style={styles.benefit}>Advanced map features</Text>
            <Text style={styles.benefit}>Priority support</Text>
            <TouchableOpacity style={styles.button}>
              <Text style={styles.buttonText}>Subscribe</Text>
            </TouchableOpacity>
          </View>
        </View>
      </SafeAreaView>
    </Background>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
  },
  safeArea: {
    flex: 1,
  },
  container: {
    flex: 1,
    margin: 10,
  },
  card: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingVertical: 40,
    marginVertical: 10,
    borderRadius: 10,
  },
  freeCard: {
    backgroundColor: '#f0f0f0',
  },
  paidCard: {
    backgroundColor: '#f7e9c1',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  price: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 20,
  },
  benefit: {
    fontSize: 16,
    textAlign: 'center',
    color: '#555',
    marginBottom: 10,
  },
  button: {
    backgroundColor: '#fec619',
    paddingHorizontal: 30,
    paddingVertical: 10,
    borderRadius: 5,
    marginTop: 20,
  },
  disabledButton: {
    backgroundColor: '#ccc',
  },
  buttonText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
  },
});
