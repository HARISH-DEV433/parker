import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.contai}>
      <Text>Park Resource Club</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  contai: {
    flex: 1,
    backgroundColor: '#fff',
    fontWeight: 'bold',
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center',
  },
});
