import { StyleSheet, Text, View } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Avatar, Button, Input } from 'react-native-elements';
import {useState} from 'react';
import { CommonActions, CommonNavigationAction } from '@react-navigation/native';

const Nav = path =>{
    CommonActions.navigate('Home');
}

const Header= ({navigation}) =>  {
    const [user, editUser] = useState('');

  return (
    <View>
       <View style={styles.row}>
        
       <View style={styles.user}>
        <Avatar rounded
        size={'medium'}  
        source={{
            uri:
            'https://upload.wikimedia.org/wikipedia/commons/9/99/Sample_User_Icon.png',
        }}
        >
        <Avatar.Accessory icon={{}} type='Button' onPress={(user)=> editUser(user)}/>
        </Avatar>
        </View>
       
        <View style={styles.home}>
            <Button icon={<Icon name="home" size={30} color="black" />} type="clear" onPress={Nav}/>
        </View>

        <View style={styles.logout}>
        <Button icon={<Icon name="sign-out" size={30} color="black" />} type="clear" onPress={() => ''}/>
        </View>

       </View>
    </View>
  );
}
export default Header

const styles = StyleSheet.create({
    row:{
        flexDirection: 'row',
        margin: '5%',
        justifyContent: 'center',
    },
    logout:{
    },
    home:{
        marginLeft: '30%',
        marginRight: '30%',
    },
    user:{
    }
});