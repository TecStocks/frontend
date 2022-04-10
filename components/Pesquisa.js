import { Button, Input } from 'react-native-elements';
import { StyleSheet, View } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

export default function Pesquisa() 
{
  return (
    <View style={styles.container}>
      <Input placeholder='Carro:'/>
      <Input placeholder='Modelo:'/>
      <Button icon={<Icon name="search" size={30} color="black"/>} type="clear" title='Procurar' titleStyle={{color: 'black'}}/>
    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: '20%',
  },
});

