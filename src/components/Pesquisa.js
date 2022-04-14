import { Button, Input } from 'react-native-elements';
import { StyleSheet, View } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import React, {useState, setState} from 'react';
import DailyFOLs from './DailyFOLs';
import axios from 'axios';
import { NavigationContext, StackActions } from '@react-navigation/native';
import Header from './Header';

const Pesquisa = ({navigation}) => 
{
  const [car, setCar] = useState('');
  const [fols, setFols] = useState([]);

  const handleSubmit = e => {
    e.preventDefault()
    axios
      .post('http://localhost:3100/fols', {
        car:car,
      })
  
      .then(function (response) {
        if (response){  
          let i =0
          while(i <= 100){
            if(response.data[i] == null){break}
            fols.push(response.data[i])
            i++
          }         
          setFols(fols)
          console.log(fols)  
          navigation.navigate('FOLs', {
            paramKey: fols,
          })
        }
      })
      .then(() => {})
      .catch(function (error) {
        console.log(error)
      })
  }

  return (
    <View style={styles.container}>
      <Header/>
      <Input placeholder='Car:' value={car} onChange={(car)=> setCar(car.target.value)}/>
      {/* <Input placeholder='Model:'value={model} onChange={(model)=> setModel(model.target.value)}/> */}
      <Button icon={<Icon name="search" size={30} color="black"/>} type="clear" title='Search' titleStyle={{color: 'black'}}
      onPress={handleSubmit}/>

    </View>

  );
  
}
 
export default Pesquisa;

const styles = StyleSheet.create({
  container: {
    marginTop: '5%',
  },
});

