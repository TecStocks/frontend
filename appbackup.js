
import {useState} from 'react';
import { View, Image, TextInput,TouchableOpacity } from 'react-native';
import style from '../style/mainStyle.js';
import { CheckBox,Text, Input, Button} from 'react-native-elements';
import  Icon  from 'react-native-vector-icons/FontAwesome';




export default function Login() {

  const [user, setUser] = useState('');
  const [pass, setPass] = useState('');
  const [checkvalue, setcheckvalue]= useState(false);

  return(
        <View style={style.container}>
            <Image 
          style={style.img}
        source={require('../assets/logo.png')}/>
        <Text style={style.Title}>e-FOL</Text>
        <Input
        value={user}
        placeholder="User"
        leftIcon={{ type: 'font-awesome', name: 'user' }}
        style={style.Title2}      
        onChange={(user)=> setUser(user)}
        />
        <Input
        value={pass}
        placeholder="User"
        leftIcon={{ type: 'font-awesome', name: 'key' }}
        style={style.Title2}
        onChange={(pass)=> setPass(pass)}

        />
      <View style={style.checkbox}>
      <Button 
        icon={<Icon 
          name="check"
          size={30} 
          color='white'
          />}
        title='Login'
        /*onPress={()=>}*/
      />
      </View>
      <CheckBox
      style={style.checkbox}
      title='Eu aceito os termos de politica de uso de dados'
      checkedIcon='dot-circle-o'
      uncheckedIcon='circle-o'
      checkedColor='green'
      uncheckedColor='red'
      checked= {checkvalue}
      onPress={()=>setcheckvalue(!checkvalue)}
      />
            </View>

  );
}

