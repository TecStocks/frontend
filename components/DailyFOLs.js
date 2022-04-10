import { Button, Input,ListItem, Avatar } from 'react-native-elements';
import { StyleSheet, View,Text } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

  
export default function DailyFOLs(){
    const list = [
        {
          name: 'FOL1',
          subtitle: 'Descricao1'
        },
        {
          name: 'FOL2',
          subtitle: 'Descricao1'
        },
        
        {
            name: 'FOL3',
            subtitle: 'Descricao1'
          },
        
          {
            name: 'FOL4',
            subtitle: 'Descricao1'
          },
          
        {
            name: 'FOL5',
            subtitle: 'Descricao1'
          },
        
          {
            name: 'FOL6',
            subtitle: 'Descricao1'
          },
      ]

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
                    <ListItem.Title style={{marginRight:'50%'}}>{l.name}</ListItem.Title>
                    <ListItem.Subtitle style={{}}>{l.subtitle}</ListItem.Subtitle>
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
        flex: 1,
        marginTop: '50%',
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