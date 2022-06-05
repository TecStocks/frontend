import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { WebView } from 'react-native-webview';
import PDFReader from 'rn-pdf-reader-js';
import { Constants } from 'expo';

const PdfView= ({route}) => {

    const pdf = route.params.paramKey;

    return(
        <PDFReader
          source={{ uri: 'file://../assets/fols.pdf' }}
        />
    )
}
export default PdfView;