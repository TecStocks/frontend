
import React, {useState, useEffect} from 'react';
import { View, Image, TextInput } from 'react-native';
import style from '../style/mainStyle.js';
import { CheckBox,Text, Input, Button} from 'react-native-elements';
import  Icon  from 'react-native-vector-icons/FontAwesome';
import axios from 'axios';



export default function Login() {
    const EnviarFormulario = async(mail,pass) =>{
        try{
            const response = await axios.post('http://localhost:3100/user/login',{"email":mail, "password":pass })
            const data = await response.json()
            console.log(data)
        }
        catch(err){
            console.log(err)
        }
    
    }
    const [mail, setMail] = useState('')
    const [user, setUser] = useState('')
    const [pass, setPass] = useState('')
    const [checkvalue, setcheckvalue]= useState(false);
    
  return(
        <View style={style.container}>
            <View style={style.img}>
                <Image source={require('../assets/logo.png')}/></View>

            <Text style={style.Title}>e-FOL</Text>
            
            <View style={style.input}>
                    <Input
                    value={user}
                    placeholder="User"
                    leftIcon={{ type: 'font-awesome', name: 'user' }}
                    onChange={(user)=> setUser(user.target.value)}
                    />
                    <Input
                    value={mail}
                    placeholder="mail"
                    leftIcon={{ type: 'font-awesome', name: 'envelope' }}
                    onChange={(mail)=> setMail(mail.target.value)}/>                    
                    <Input
                    value={pass}
                    placeholder="Password"
                    secureTextEntry
                    leftIcon={{ type: 'font-awesome', name: 'key' }}
                    onChange={(pass)=> setPass(pass.target.value)}/>
            </View>

            <View style={style.button}>           
                <Button 
                    icon={<Icon 
                    name="check"
                    size={15} 
                    color='white'/>}
                    title='Login'
                    onPress={EnviarFormulario(mail,pass)}/>
            </View>

            <View style={style.checkbox}>
                <CheckBox
                title='Eu aceito os termos de politica de uso de dados'
                checkedIcon='dot-circle-o'
                uncheckedIcon='circle-o'
                checkedColor='green'
                uncheckedColor='red'
                checked= {checkvalue}
                onPress={()=>setcheckvalue(!checkvalue)}/>
            </View> 
        </View>

  );
}

