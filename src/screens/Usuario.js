import { Button } from 'react-native-elements'
import mainStyle from '../style/mainStyle'
import Icon from 'react-native-vector-icons/FontAwesome'
import AsyncStorage from '@react-native-async-storage/async-storage'
import axios from 'axios'

let id

const handleSubmit = e => {
  AsyncStorage.getItem('id', (err, result) => {
    id = JSON.parse(result)

    e.preventDefault()
    axios
      .post('http://localhost:3100/user/remove', {
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

export default function User() {
  return (
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
  )
}
