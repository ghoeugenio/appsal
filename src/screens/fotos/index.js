import React from 'react';
import { Text, ScrollView, StyleSheet, View, Image } from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        paddingTop: 40,
        borderWidth: 5,
        borderColor: 'black'
    },
    pic: {
        width: 300,
        height: 500,
        borderRadius: 5
    },
    fonte: {
        paddingTop: 20,
        fontSize: 15,
        paddingBottom: 5,
    }
});

export default function Fotos() {
    return <ScrollView>

        <View style={styles.container}>
            <Image
                style={styles.pic}
                source={require('./imgs/1.jpg')}
            />

            <Text
                style={styles.fonte}
            >
                Rolê aleatório
            </Text>

        </View>

        <View style={styles.container}>
            <Image
                style={styles.pic}
                source={require('./imgs/2.jpg')}
            />

            <Text
                style={styles.fonte}
            >
                Barzinho
            </Text>

        </View>

        <View style={styles.container}>
            <Image
                style={styles.pic}
                source={require('./imgs/3.jpg')}
            />

            <Text
                style={styles.fonte}
            >
                Primeiro rolê de namorados
            </Text>

        </View>

        <View style={styles.container}>
            <Image
                style={styles.pic}
                source={require('./imgs/4.jpg')}
            />

            <Text
                style={styles.fonte}
            >
                Réveillon(1/2)
            </Text>

        </View>

        <View style={styles.container}>
            <Image
                style={styles.pic}
                source={require('./imgs/5.jpg')}
            />

            <Text
                style={styles.fonte}
            >
                Filmezinho
            </Text>

        </View>

        <View style={styles.container}>
            <Image
                style={styles.pic}
                source={require('./imgs/6.jpg')}
            />

            <Text
                style={styles.fonte}
            >
                Um domingo qualquer
            </Text>

        </View>

        <View style={styles.container}>
            <Image
                style={styles.pic}
                source={require('./imgs/7.jpg')}
            />

            <Text
                style={styles.fonte}
            >
                Carnaval
            </Text>

        </View>

        <View style={styles.container}>
            <Image
                style={styles.pic}
                source={require('./imgs/8.jpg')}
            />

            <Text
                style={styles.fonte}
            >
                18tão
            </Text>

        </View>

        <View style={styles.container}>
            <Image
                style={styles.pic}
                source={require('./imgs/9.jpg')}
            />

            <Text
                style={styles.fonte}
            >
                Réveillon(2/2)
            </Text>

        </View>

        <View style={styles.container}>
            <Image
                style={styles.pic}
                source={require('./imgs/10.jpg')}
            />

            <Text
                style={styles.fonte}
            >
                Open in Vegas
            </Text>

        </View>

        <View style={styles.container}>
            <Image
                style={styles.pic}
                source={require('./imgs/11.jpg')}
            />

            <Text
                style={styles.fonte}
            >
                Qualquer dia
            </Text>

        </View>

        <View style={styles.container}>
            <Image
                style={styles.pic}
                source={require('./imgs/12.jpg')}
            />

            <Text
                style={styles.fonte}
            >
                Som ao vivo
            </Text>

        </View>

    </ScrollView>;
}