import { View} from 'react-native';
import {Button} from 'react-native-elements';
import  Icon  from 'react-native-vector-icons/FontAwesome';
import mainStyle from '../style/mainStyle';
import axios from 'axios';

export default function button(){
    const envioFormulario= e =>{e.preventDefault()
    axios.post(
        //URL'', 
        {"email": email, "PASSOWORD": passoword}    
    )
    .then()
}
    return(
    <View style={mainStyle.button}>
                            
        <Button 
            icon={<Icon 
            name="check"
            size={15} 
            color='white'/>}
            title='Login'
            onPress={envioFormulario}
        />
    </View>
        )
}