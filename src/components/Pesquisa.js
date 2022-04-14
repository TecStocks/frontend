import { Button, Input } from 'react-native-elements';
import { StyleSheet, View } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import {useState} from 'react';
import DailyFOLs from './DailyFOLs';
import axios from 'axios';

export default function Pesquisa() 
{
  const [car, setCar] = useState('');
  const [model, setModel] = useState('');
 
const handleSubmit = e => {
  e.preventDefault()
  axios
    .post('http://localhost:3100/fols', {
      car:car,
    })

    .then(function (response) {
      if (response){
        DailyFOLs(response.data)
        console.log(response.data)

      }
    })
    .then(() => {})
    .catch(function (error) {
      console.log(error)
    })
}

  return (
    <View style={styles.container}>
      <Input placeholder='Car:' value={car} onChange={(car)=> setCar(car.target.value)}/>
      {/* <Input placeholder='Model:'value={model} onChange={(model)=> setModel(model.target.value)}/> */}
      <Button icon={<Icon name="search" size={30} color="black"/>} type="clear" title='Search' titleStyle={{color: 'black'}}
      onPress={handleSubmit}/>
    </View>
  );
}

const handleSubmit = e => {
  e.preventDefault()
  axios
    .post('http://localhost:3100/fols/search', {
      car:car,
    })

    .then(function (response) {
      if (response){
        console.log(response.data)

      }
    })
    .then(() => {})
    .catch(function (error) {
      console.log(error)
    })
}


const styles = StyleSheet.create({
  container: {
    marginTop: '5%',
  },
});

