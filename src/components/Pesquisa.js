import { Button, Input } from 'react-native-elements';
import { StyleSheet, View } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import React, {useState, setState} from 'react';
import DailyFOLs from './DailyFOLs';
import axios from 'axios';
import { NavigationContext, StackActions } from '@react-navigation/native';
import Header from './Header';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Pesquisa = ({navigation}) => 
{
  const [car, setCar] = useState('');
  const [fols, setFols] = useState([]);
  const [keyword, setKeyword] = useState('');

  let carros = []
  const handleSubmit = e => {
    e.preventDefault()
    axios
      .post('http://localhost:3100/fols', {
        car:car,
      })

      .then(function (response) {
        if (response){  
          AsyncStorage.getItem('equip', (err, result) => {
            carros = JSON.parse(result)
            setCar(carros)
            console.log(carros)
          });

          for(let i = 0; i <= response.data.length; i++){
            if(response.data[i] == null){break}
            else if(response.data.Status == "CANCELLED"){continue}
            let resp = response.data[i].Equipment
            let keyw = []
            let e = 0
            let key = response.data[i].Keywords
            keyw.push('')
            for(let a=0; a<=30; a++){
              if(key[a] == null){break;}
              else if(key[a] != ','){
                  if(key[a] == ' ' || key[a] == ''){continue}
                  else{
 
                    keyw[e]  += key[a]
                  }
  
              }else{
                e++
                keyw.push('')
              }
              console.log(keyw)
            }

            for(let a = 0; a <= carros.length; a++){
              if(carros[a] == resp){
                for(let y=0; y<=keyw.length; y++){
                  if(keyword == keyw[y] || keyword == ''){
                    fols.push(response.data[i])
                  }
                }          
              }
            }
          }

          if(fols.length <= 0){fols.push({Title: 'Nenhuma FOL encontrada'})}
          setFols(fols)
          console.log('fols: '+ fols)  
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
      <Input placeholder='keyword:' value={keyword} onChange={(keyword)=> setKeyword(keyword.target.value)}/>
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

