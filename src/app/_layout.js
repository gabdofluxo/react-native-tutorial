import { Stack } from "expo-router";

export default function RootLayout() {
  return (
    <Stack>
      <Stack.Screen name="index" options={{ headerShown: true }} />
      <Stack.Screen name="signup" options={{ headerShown: true }} />
      <Stack.Screen name="home" options={{ headerShown: false }} />
      <Stack.Screen name="contact" options={{ headerShown: false }} />
    </Stack>
  );
}