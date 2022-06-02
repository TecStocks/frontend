import { Button, Input,ListItem, Avatar } from 'react-native-elements';
import { StyleSheet, View,Text, FlatList } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { color } from 'react-native-elements/dist/helpers';
import Header from './Header';

let pdfV = 'https://drive.google.com/file/d/1b4lI_kdoZRoyTUo6SuMBLEqt3DFjiUyV/view'

const pdf = e => {
    navigation.navigate('pdfView', {
        paramKey: pdfV,
      })
}
const DailyFOLs= ({route,navigation}) => {
    const list = route.params.paramKey;

    return (     
        <View style={styles.container}>
         <View style={styles.container}>
         
       <View style={styles.row}>
        
       <View style={styles.user}>
        <Avatar rounded
        size={'medium'}  
        source={{
            uri:
            'https://upload.wikimedia.org/wikipedia/commons/9/99/Sample_User_Icon.png',
        }}
        >
        <Avatar.Accessory icon={{}} type='Button' onPress={ ()=>{navigation.navigate('User');}}/>
        </Avatar>
        </View>
       

        <View style={styles.logout}>
        <Button 
          icon={<Icon 
          name="sign-out"
          size={40} 
          color='black'/>}
          buttonStyle={{
            borderRadius: 10,
            backgroundColor: '#F2F2F2',
          }}
        onPress={ ()=>{navigation.navigate('Search')}}
      />
       </View> </View> 

       </View>
            <View style={styles.row}>
                <Text style={styles.textA}>FOL</Text>
                <Text style={styles.textB}>Category</Text>
            </View>
             {
                list.map((l, i) => (
                <ListItem key={i} bottomDivider>
                    <ListItem.Content style={styles.row}>
                    <ListItem.Title style={styles.title}><Button type='clear' title={l.Title} onPress={pdf}/></ListItem.Title>
                    <ListItem.Subtitle style={styles.category}><Button type='clear' title={l.Category} onPress={''}/></ListItem.Subtitle>
                    </ListItem.Content>
                </ListItem>
                ))
                }      
        </View>
    );
}
export default DailyFOLs

const styles = StyleSheet.create({
    container: {
        justifyContent: 'space-between',
        flex: 1,

    },
    row:{
        flexDirection: 'row',
    },
    textA:{
        fontSize: 20,
        marginLeft: '10%',
    },
    textB:{
        fontSize: 20,
        marginLeft: '50%',
    },
    title:{
        width: '50%',
    },
    category:{
        width: '50%',
        textAlign: 'right',
    },

        row:{
          flexDirection: 'row',
          margin: '5%',
          justifyContent: 'center',},
      logout:{marginLeft:'50%'
      },  
      
});