import { StyleSheet, Text, View } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Avatar, Button, Input } from 'react-native-elements';

export default function Header() {
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
        <Avatar.Accessory icon={{}} />
        </Avatar>
        </View>
       
        <View style={styles.home}>
            <Button icon={<Icon name="home" size={30} color="black" />} type="clear" />
        </View>

        <View style={styles.logout}>
        <Button icon={<Icon name="sign-out" size={30} color="black" />} type="clear" />
        </View>

       </View>
    </View>
  );
}

const styles = StyleSheet.create({
    row:{
        flexDirection: 'row',
        margin: '2%',
        flex: 1,
        justifyContent: 'center',
    },
    logout:{
        flex: 1,
    },
    home:{
        marginLeft: '30%',
        flex: 1,
        marginRight: '30%',
    },
    user:{
        flex: 1,
    }
});