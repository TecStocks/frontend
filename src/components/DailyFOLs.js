import { Button, Input,ListItem, Avatar } from 'react-native-elements';
import { StyleSheet, View,Text, FlatList } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { color } from 'react-native-elements/dist/helpers';
import Header from './Header';

  
const DailyFOLs= ({route}) => {
    const list = route.params.paramKey;

    return (     
        <View style={styles.container}>
            <Header/>
            <View style={styles.row}>
                <Text style={styles.textA}>FOL</Text>
                <Text style={styles.textB}>Category</Text>
            </View>
             {
                list.map((l, i) => (
                <ListItem key={i} bottomDivider>
                    <ListItem.Content style={styles.row}>
                    <ListItem.Title style={styles.title}><Button type='clear' title={l.Title} onPress={''}/></ListItem.Title>
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
    }
});