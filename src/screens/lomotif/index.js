import React from 'react';
import { WebView } from 'react-native-webview';

export default function Lomotif() {
    return <WebView
        javaScriptEnabled={true}
        domStorageEnabled={true}
        source={{ uri: "https://www.youtube.com/watch?v=MVEfNbpV9VM" }}
    />
}