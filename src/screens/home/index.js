import React, { useState } from 'react';
import { Image, StyleSheet, View, Text, SafeAreaView, Modal } from 'react-native';
import { IconButton } from 'react-native-paper';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#4169e1',
    },
    helper: {
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 30,
        borderColor: 'black',
        backgroundColor: '#416af9',
        marginLeft: 300,
    },
    moldaus: {
        backgroundColor: '#deb877',
        justifyContent: 'center',
        alignItems: 'center',
        flex: 1,
        borderRadius: 25,
        marginTop: 200,
        marginHorizontal: 50,
        marginBottom: 200,
        borderWidth: 3,
        borderColor: '#e9e3ce',
    },
});

export default function Home() {

    const [abaut, setAbaut] = useState(false);

    return (
        <SafeAreaView style={styles.container}>

            <View >
                <Modal
                    animationType='fade'
                    visible={abaut}
                    transparent={true}
                >
                    <View style={styles.moldaus}>
                        <View style={{ marginBottom: 200, marginLeft: 250 }}>
                            <IconButton
                                icon='close'
                                size={30}
                                color={'#353839'}
                                animated={true}
                                onPress={() => setAbaut(false)}
                            />
                        </View>

                        <View style={{ alignItems: 'center', justifyContent: 'center', flex: 1, position: 'absolute' }}>
                            <Text style={{ fontSize: 17, paddingVertical: 20 }}>
                                Insta:@beea.triix e @guga.eugenio
                            </Text>
                            <Text style={{ fontSize: 17 }}>
                                Desenvolvido por Gustavo Eugênio
                            </Text>
                        </View>
                    </View>
                </Modal>
            </View>

            <View style={styles.helper}>
                <IconButton
                    icon='help'
                    size={20}
                    color={'#353839'}
                    animated={true}
                    onPress={() => setAbaut(true)}
                />
            </View>

            <Image
                style={{
                    marginBottom: 40
                }}
                source={require('./logo.png')} />

            <Image
                style={{
                    width: 300,
                    height: 300,
                    borderRadius: 150,
                    paddingTop: 50,
                    borderColor: '#fff',
                    borderWidth: 2

                }}
                source={require('./image.png')}
            />

            <Text
                style={{ paddingTop: 20, fontSize: 17, fontFamily: 'serif', fontWeight: 'bold' }}
            >
                Juntos há {Contador()} dias.
            </Text>

            <Text
                style={{ fontSize: 12, fontFamily: 'serif', fontStyle: 'italic' }}
            >
                Desde 01/08/2019.
            </Text>

        </SafeAreaView>
    );
}

function Contador() {

    var DataDesde = new Date("2019-08-01");

    var date = new Date();
    //data atual formatada para MM/DD/AAAA
    var DataHoje = new Date(((date.getMonth() + 1) + '/' + date.getDate() + '/' + date.getFullYear()));

    var difTempo = Math.abs(DataHoje.getTime() - DataDesde.getTime());
    var difDias = Math.ceil(difTempo / (1000 * 3600 * 24));

    return difDias;
}