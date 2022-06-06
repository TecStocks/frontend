import { Button } from 'react-native-elements'
import mainStyle from '../style/mainStyle'
import Icon from 'react-native-vector-icons/FontAwesome'
import AsyncStorage from '@react-native-async-storage/async-storage'
import axios from 'axios'
import { StyleSheet, View,Text } from 'react-native';
let id

const handleSubmit = e => {
  AsyncStorage.getItem('id', (err, result) => {
    id = JSON.parse(result)

    e.preventDefault()
    axios
      .post('http://34.230.86.67:3100/user/remove/', {
        chave: id
      })

      .then(function (response) {
        if (response) {
          console.log(response)
          navigation.navigate('Login')
        }
      })
      .then(() => {})
      .catch(function (error) {
        console.log(error)
      })
  })
}

export default function User({navigation}) {
  return (
    <View style={styles.container}>
    <View>
 <View style={styles.row}>
  <View style={styles.logout}>
  <Button 
    icon={<Icon 
    name="sign-out"
    size={40} 
    color='black'/>}
    buttonStyle={{
      borderRadius: 10,
      backgroundColor: '#F2F2F2',
    }}
  onPress={ ()=>{navigation.navigate('Search')}}
/>
</View>

 </View>
</View>
<Button
      style={mainStyle.buttonDel}
      icon={<Icon size={20} color="Red" name="user" />}
      buttonStyle={{
        borderRadius: 30,
        backgroundColor: '#0D0D0D'
      }}
      title="Delete Account"
      onPress={handleSubmit}
    />
</View>
  )


}
const styles = StyleSheet.create({
row:{
  flexDirection: 'row',
  margin: '5%',
  justifyContent: 'center',},

logout:{marginLeft:'50%'},
  
})