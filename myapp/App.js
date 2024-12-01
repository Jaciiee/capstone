import { StyleSheet, Text, View } from 'react-native';
import axios from 'axios';
import React, { useEffect, useState } from 'react';

export default function App() {
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
      <Text>{message}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});