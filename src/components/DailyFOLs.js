import { Button, Input,ListItem, Avatar } from 'react-native-elements';
import { StyleSheet, View,Text } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { color } from 'react-native-elements/dist/helpers';

  
export default function DailyFOLs(List){
    {/*Carregar a list com as FOLs do BD*/}
    const list = List;

    return (
        <View style={styles.container}>
            
            <View style={styles.row}>
                <Text style={styles.textA}>FOL</Text>
                <Text style={styles.textB}>Description</Text>
            </View>
            
            <View>
                {
                list.map((l, i) => (
                <ListItem key={i} bottomDivider>
                    <ListItem.Content style={styles.row}>
                    <ListItem.Title style={{marginRight:'50%'}}><Button type='clear' title={l.name} onPress={''}/></ListItem.Title>
                    <ListItem.Subtitle style={{}}><Button type='clear' title={l.subtitle} onPress={''}/></ListItem.Subtitle>
                    </ListItem.Content>
                </ListItem>
                ))
                }
            </View>         
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        marginTop: '15%',
        backgroundColor: '#c5eaf6',
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
    }
});