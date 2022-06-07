import { StyleSheet, Text, View } from 'react-native';
import Header from '../components/Header.js';
import Pesquisa from '../components/Pesquisa.js';
import BackgroundFetchScreen from '../tasks/Notification.js';

export default function Search() {

  return (
    
    <View style={styles.container}>
      <Pesquisa/>     
    </View>
  );
}

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
    }
});