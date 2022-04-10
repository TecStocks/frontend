import { View } from "react-native";
import { CheckBox} from 'react-native-elements';
import mainStyle from "../style/mainStyle";
import { useState } from "react";
import axios from "axios";

export default function Check(){
  const [checkvalue, setcheckvalue]= useState(false);
  return  (
    <View style={mainStyle.checkbox}>
        <CheckBox
        title='Eu aceito os termos de politica de uso de dados'
        checkedIcon='dot-circle-o'
        uncheckedIcon='circle-o'
        checkedColor='green'
        uncheckedColor='red'
        checked= {checkvalue}
        onPress={()=>setcheckvalue(!checkvalue)}
        />

    </View>)

}