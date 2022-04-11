import React from 'react'
import {
  SafeAreaView,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Button
} from 'react-native'
import { CheckBox,Input} from 'react-native-elements';
import style from '../style/mainStyle.js';
import  Icon  from 'react-native-vector-icons/FontAwesome';
import axios from 'axios'

const Login = () => {
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
        }
      })
      .then(() => {})
      .catch(function (error) {
        console.log(error)
      })
  }

  return (
    <SafeAreaView style={style.container}>
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
        value={password}
        onChange={e => {
          setPassword(e.target.value)
        }}
        placeholder="password"
        keyboardType="visible-password"
      />
      </SafeAreaView>
      <Button type="submit" onPress={handleSubmit} title="Login"></Button>
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
