import { Text, View, StyleSheet } from "react-native";
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'expo-router';

export default function Index() {
  const [message, setMessage] = useState('');

  useEffect(() => {
    axios.get('http://192.168.50.206:8000/api/hello/')
      .then(response => {
        setMessage(response.data.message);
      })
      .catch(error => {
        console.log(error);
        setMessage('Error fetching data');
      });
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.text}>{message}</Text>
      <Link href="../login" style={styles.button}>
        Login!
      </Link>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#25292E',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    color: '#fff',
  },
  button: {
    fontSize: 20,
    textDecorationLine: 'underline',
    color: '#fff',
  },
});
