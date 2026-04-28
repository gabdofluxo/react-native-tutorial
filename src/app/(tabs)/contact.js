import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';

export default function Home() {
  return (
      <View style={styles.container}>
        <Text>Contact Screen</Text>
        <StatusBar style="auto" />
      </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f7f7f7',
    justifyContent: 'center',
    alignItems: 'center'
  }
});
