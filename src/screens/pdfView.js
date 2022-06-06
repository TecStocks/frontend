import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Button } from 'react-native-elements';
import { WebView } from 'react-native-webview';
import Icon from 'react-native-vector-icons/FontAwesome';

const PdfView= ({route,navigation}) => {
    const pdfV = {
        'MUS-001/19': 'https://drive.google.com/file/d/1g320q3VaYpCFM4n7WvuL5VyHkhLlcHYD/view?usp=sharing',
        'MUS-002/19': 'https://drive.google.com/file/d/1zBUohJpQRLs_-5LzwZh0nl-mnGkIi_MM/view?usp=sharing',
        'MUS-003/19': 'https://drive.google.com/file/d/1tenIUrYsHICkXKZ1W5o9cWsAJ8cyUIpq/view?usp=sharing',
        'MUS-004/19': 'https://drive.google.com/file/d/1uJkYEQ-7x-Hpmh99WRZMIFaKPUZ0sxGM/view?usp=sharing',
        'MUS-001/20': 'https://drive.google.com/file/d/1d4jdK2Xolroy_RXkqwengkxqLngcdtQI/view?usp=sharing',
        'MUS-002/20': 'https://drive.google.com/file/d/1JqFaQQLSBuSiropUaAgYPS0npBHtiaM4/view?usp=sharing',
        'MUS-004/20': 'https://drive.google.com/file/d/1ZuhS-8k2KBo9A-VJFBMzFi27fm_EWpKR/view?usp=sharing',
        'MUS-005/20': 'https://drive.google.com/file/d/1CewNKsmKdP1zcbjTXhmmzEayF_cx089X/view?usp=sharing',
        'MUS-006/20': 'https://drive.google.com/file/d/1xZyw0CEKRnne7IKHfgC8F3Qx8G5dGQuI/view?usp=sharing',
        'MUS-007/20': 'https://drive.google.com/file/d/1nY60xXJk0dZEyxqg_0ESABc4-ao52n3s/view?usp=sharing',
        'MUS-009/20': 'https://drive.google.com/file/d/1OPNxRMdVYFOJw7w1XTNU2BV5xg4Q982z/view?usp=sharing',
        'MUS-001/21': 'https://drive.google.com/file/d/1s6x5sx4UsG_PC_XCHvlH0jrswf70pgbe/view?usp=sharing',
        'MUS-002/21': 'https://drive.google.com/file/d/1oTCARgY1M9pJqDGOKYEYBDRFhHke7jSX/view?usp=sharing',
        'MUS-003/21': 'https://drive.google.com/file/d/1QGeZUaXzQPw4tH1z7-_IFV8oqa7yIa9X/view?usp=sharing',
        'MUS-004/21': 'https://drive.google.com/file/d/1EeR-GTb6_WtdjloLvTYDzeVY7A33jRAD/view?usp=sharing',
        'MUS-005/21': 'https://drive.google.com/file/d/18lABOsZR7su0H5Mr_fUVTc-V-ByoYGbq/view?usp=sharing',
        'MUS-006/21': 'https://drive.google.com/file/d/14z1hTr3oLGkRgiLyjpyXpX5ohQFRL_OK/view?usp=sharing',
        'MUS-007/21': 'https://drive.google.com/file/d/1qqiWhdIikW6ZQsKDzCC1D-_PRzTVELzL/view?usp=sharing',
        'MUS-001/22': 'https://drive.google.com/file/d/1nLKJYcrPuF4TL9PTER8sACmR9TJ1xFl4/view?usp=sharing'
    }
    
    const pdf = route.params.paramKey
    const back = e =>{
        navigation.navigate('Search')
    }

    console.log(pdf)
    if(pdfV[pdf] != null){
        return(   
            <WebView 
                source={{ uri: pdfV[pdf] }} 
                style={Styles.pdf}
            />)
    }else{
        return(
            <View>
                <Text style={Styles.noPdf}>No PDF View</Text>
                <Button style={''} icon={<Icon name="close" size={50} color="black"/>} type="clear" title='Fechar' titleStyle={{color: 'black'}}
                onPress={back}/>
            </View>
        )
    }
    
}

const Styles = StyleSheet.create({
    pdf: {
        marginTop: 20
    },
    noPdf: {
        marginTop: '50%',
        marginLeft: '25%',
        fontSize: 50
    }
})
export default PdfView;