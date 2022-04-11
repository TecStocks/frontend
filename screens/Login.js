import React from 'react'
import {
  SafeAreaView,
  StyleSheet,
} from 'react-native'
import { CheckBox, Image,Button,Input} from 'react-native-elements';
import style from '../style/mainStyle.js';
import  Icon  from 'react-native-vector-icons/FontAwesome';
import axios from 'axios'

const Login = ({navigation}) => {
  const [email, setEmail] = React.useState('')
  const [password, setPassword] = React.useState('')
  const handleSubmit = e => {
    e.preventDefault()
    axios
      .post('http://localhost:3100/user/login', {
        email: email,
        password: password
      })

      .then(function (response) {
        if (response.data.auth){
            console.log('entrou')
            navigation.navigate('Search')

        }
      })
      .then(() => {})
      .catch(function (error) {
        console.log(error)
      })
  }
  return (
  <SafeAreaView style={style.container}>
      <SafeAreaView style={style.img}>

      </SafeAreaView>
      <SafeAreaView style={style.input}>
      <Input
        leftIcon={{ type: 'font-awesome', name: 'user' }}
        style={styles.input}
        value={email}
        onChange={e => {
          setEmail(e.target.value)
        }}
        placeholder="email"
        keyboardType="email-address"
      />

      <Input
        leftIcon={{ type: 'font-awesome', name: 'envelope' }}
        style={styles.input}
        secureTextEntry
        value={password}
        onChange={e => {
          setPassword(e.target.value)
        }}
        placeholder="password"
        keyboardType="visible-password"
      />
      </SafeAreaView>
      <SafeAreaView style={style.button}>
      <Button 
          icon={<Icon 
          name="check"
          size={20} 
          color='white'/>}
          title=' Login' 
          onPress={handleSubmit}
      />
      </SafeAreaView>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10
  }
})

export default Login
