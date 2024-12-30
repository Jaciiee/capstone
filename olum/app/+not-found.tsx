import { View, StyleSheet } from "react-native";
import { Link, Stack} from 'expo-router';

export default function NotFoundScreen() {
  return (
    <>
    <Stack.Screen options={ { title: 'Oops! Not Found' }}></Stack.Screen>
    <View style={styles.container}>
        <Link href="/(tabs)/about" style={styles.button}>
          Go back to home screen!
        </Link>
    </View>
    </>
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
