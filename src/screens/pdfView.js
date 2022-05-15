import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { WebView } from 'react-native-webview';

const pdfView= ({route}) => {
    const pdf = route.params.paramKey;

    return <WebView source={{ uri: pdf }} />
}
export default pdfView;