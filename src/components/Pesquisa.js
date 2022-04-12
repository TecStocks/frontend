import { Button, Input } from 'react-native-elements';
import { StyleSheet, View } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import {useState} from 'react';

export default function Pesquisa() 
{
  const [car, setCar] = useState('');
  const [model, setModel] = useState('');
  const [Car, Model, setCarModel] = useState('');

  return (
    <View style={styles.container}>
      <Input placeholder='Car:' value={car} onChange={(car)=> setCar(car.target.value)}/>
      <Input placeholder='Model:'value={model} onChange={(model)=> setModel(model.target.value)}/>
      <Button icon={<Icon name="search" size={30} color="black"/>} type="clear" title='Search' titleStyle={{color: 'black'}}
      onPress={(Car,Model)=> setCarModel(Car, Model)}/>
    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    marginTop: '5%',
  },
});

