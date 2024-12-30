import { Stack } from "expo-router";
import { StatusBar } from "react-native";

export default function RootLayout() {
  return (
    <>
    <StatusBar barStyle="light-content" />
      <Stack>
        <Stack.Screen name="login" options={{ headerTitle: "Login" }}/>
        <Stack.Screen name="signup" options={{ headerTitle: "Sign Up" }}/>
        <Stack.Screen name="(tabs)" options={{ headerTitle: "Olum", headerLeft: () => null, headerShown: false }} />
        <Stack.Screen name="not-found" options={{}}/>
      </Stack>
    </>
  )
}
