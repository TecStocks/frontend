import { StyleSheet, Text, View } from 'react-native';
import DailyFOLs from '../components/DailyFOLs.js';
import Header from '../components/Header.js';
import Pesquisa from '../components/Pesquisa.js';

export default function Search() {
  return (
    
    <View style={styles.container}>
      <Header/>
      <Pesquisa/>
      <DailyFOLs/>
    </View>
  );
}

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
    }
});