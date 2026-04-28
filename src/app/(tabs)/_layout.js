import { Tabs } from "expo-router";

export default function RootLayout() {
  return (
    <Tabs>
      <Tabs.Screen name="home" options={{ headerShown: true }} />
      <Tabs.Screen name="contact" options={{ headerShown: false }} />
    </Tabs>
  );
}