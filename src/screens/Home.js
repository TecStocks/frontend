import React from 'react'
import { SafeAreaView } from 'react-native-web';
import Header from '../components/Header.js';
import { Avatar, Button, Input } from 'react-native-elements';
import  Icon  from 'react-native-vector-icons/FontAwesome'
import mainStyle from '../style/mainStyle.js';
import { StyleSheet, Text, View } from 'react-native';


export default function Home({navigation}){
    return(

        <SafeAreaView>
        <View style={styles.row}>
        <View style={styles.user}>
         <Avatar rounded
         size={'medium'}  
         source={{
             uri:
             'https://upload.wikimedia.org/wikipedia/commons/9/99/Sample_User_Icon.png',
         }}
         >
         <Avatar.Accessory  type='Button' onPress={ ()=>{navigation.navigate('Usuario');}}/>
         </Avatar>
         </View>
        
 
         <View style={styles.logout}>
         <Button icon={<Icon name="sign-out" size={30} color="black" />} type="clear" onPress={()=>{navigation.navigate('Login');}}/>
         </View>
 
        </View>
            <Button 
                icon={<Icon 
                name="file"
                size={20} 
                color='white'/>}
                buttonStyle={{
                    borderRadius: 30,
                    backgroundColor: '#0D0D0D',
                }}
                title='  Search Fols' 
                onPress={ ()=>{navigation.navigate('Search');} }
            />
        </SafeAreaView>
        
    )
}

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