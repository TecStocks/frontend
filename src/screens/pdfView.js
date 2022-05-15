import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { WebView } from 'react-native-webview';

const pdfView= ({route}) => {
    //const pdf = route.params.paramKey;

    //caminho do pdf
    const url = 'https://drive.google.com/file/d/1b4lI_kdoZRoyTUo6SuMBLEqt3DFjiUyV/view';

    return <WebView source={{ uri: url }} />
}
export default pdfView;