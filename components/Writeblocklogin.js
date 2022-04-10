import { View} from 'react-native';
import mainStyle from '../style/mainStyle';
import { useState} from 'react';
import { Input } from 'react-native-elements/dist/input/Input';

export default function Write(){
        const [user, setUser] = useState(null);
        const [pass, setPass] = useState(null);
return (

<View style={mainStyle.input}>
        <Input
        value={user}
        placeholder="User"
        leftIcon={{ type: 'font-awesome', name: 'user' }}
        onChange={(user)=> setUser(user.target.value)}
        />
        <Input
        value={pass}
        placeholder="Pass"
        leftIcon={{ type: 'font-awesome', name: 'key' }}
        onChange={(pass)=> setPass(pass.target.value)}

        />
        
</View>)
}