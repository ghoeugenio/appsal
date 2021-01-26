import React, { useState } from 'react';
import { Text, SafeAreaView, StyleSheet, View, Button, Modal, ScrollView, Alert, Image } from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        paddingTop: 25,
        backgroundColor: '#50c878'
    },
    boxradio: {
        alignItems: 'center',
        justifyContent: 'space-between',
        flex: 1,
        width: 350,
        maxWidth: 350,
        height: 60,
        maxHeight: 60,
        backgroundColor: '#fff',
        marginBottom: 10,
        flexDirection: 'row',
        paddingStart: 30,
        paddingEnd: 30,
        borderRadius: 15
    },
    scrouviu: {
        alignItems: 'center',
        justifyContent: 'center',
        flex: 1
    },
    titlebox: {
        width: 350,
        maxWidth: 350,
        justifyContent: 'space-between',
        alignItems: 'center',
        flex: 1,
        backgroundColor: '#054f77',
        flexDirection: 'row',
        paddingHorizontal: 20,
        borderRadius: 15,
    },
    fonte: {
        fontSize: 17,
        fontWeight: 'bold',
        color: '#fff'
    },
    moldaus: {
        backgroundColor: '#fff',
        justifyContent: 'center',
        alignItems: 'center',
        flex: 1,
        borderRadius: 25,
        marginTop: 50,
        marginHorizontal: 10,
        marginBottom: 100,
        borderWidth: 3,
        borderColor: '#ff8c00',
    },
    ibage: {
        width: 300,
        height: 300,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 30,
    },
    botsend: {
        alignItems: 'center',
        justifyContent: 'space-between',
        flex: 1,
        width: 350,
        maxWidth: 350,
        height: 60,
        maxHeight: 60,
        backgroundColor: 'transparent',
        marginBottom: 10,
        flexDirection: 'row',
        paddingStart: 30,
        paddingEnd: 30,
        borderRadius: 15,
    }
});

export default function Buzz() {

    const [bia, setBia] = useState(0);
    const [guga, setGuga] = useState(0);

    const [flag1, setflag1] = useState(false);
    const [flag2, setflag2] = useState(false);
    const [flag3, setflag3] = useState(false);
    const [flag4, setflag4] = useState(false);
    const [flag5, setflag5] = useState(false);
    const [flag6, setflag6] = useState(false);
    const [flag7, setflag7] = useState(false);
    const [flag8, setflag8] = useState(false);
    const [flag9, setflag9] = useState(false);

    const [c1, setc1] = useState('#a9a9a9');
    const [c2, setc2] = useState('#a9a9a9');
    const [c3, setc3] = useState('#a9a9a9');
    const [c4, setc4] = useState('#a9a9a9');
    const [c5, setc5] = useState('#a9a9a9');
    const [c6, setc6] = useState('#a9a9a9');
    const [c7, setc7] = useState('#a9a9a9');
    const [c8, setc8] = useState('#a9a9a9');
    const [c9, setc9] = useState('#a9a9a9');

    const [n1, setn1] = useState('#a9a9a9');
    const [n2, setn2] = useState('#a9a9a9');
    const [n3, setn3] = useState('#a9a9a9');
    const [n4, setn4] = useState('#a9a9a9');
    const [n5, setn5] = useState('#a9a9a9');
    const [n6, setn6] = useState('#a9a9a9');
    const [n7, setn7] = useState('#a9a9a9');
    const [n8, setn8] = useState('#a9a9a9');
    const [n9, setn9] = useState('#a9a9a9');

    const [modalBia, setModalBia] = useState(false);
    const [modalGuga, setModalGuga] = useState(false);


    function reset() {

        setBia(0);
        setGuga(0);

        setflag1(false);
        setflag2(false);
        setflag3(false);
        setflag4(false);
        setflag5(false);
        setflag6(false);
        setflag7(false);
        setflag8(false);
        setflag9(false);

        setc1('#a9a9a9');
        setc2('#a9a9a9');
        setc3('#a9a9a9');
        setc4('#a9a9a9');
        setc5('#a9a9a9');
        setc6('#a9a9a9');
        setc7('#a9a9a9');
        setc8('#a9a9a9');
        setc9('#a9a9a9');

        setn1('#a9a9a9');
        setn2('#a9a9a9');
        setn3('#a9a9a9');
        setn4('#a9a9a9');
        setn5('#a9a9a9');
        setn6('#a9a9a9');
        setn7('#a9a9a9');
        setn8('#a9a9a9');
        setn9('#a9a9a9');
    }

    function pressed(x) {
        if (x === 1 && !flag1) {
            setBia(bia + 1);
            setflag1(true);
            setc1('#008000');
        }
        if (x === 2 && !flag1) {
            setGuga(guga + 1);
            setflag1(true);
            setn1('#008000');
        }
        if (x === 3 && !flag2) {
            setBia(bia + 1);
            setflag2(true);
            setc2('#008000');
        }
        if (x === 4 && !flag2) {
            setGuga(guga + 1);
            setflag2(true);
            setn2('#008000');
        }
        if (x === 5 && !flag3) {
            setBia(bia + 1);
            setflag3(true);
            setc3('#008000');
        }
        if (x === 6 && !flag3) {
            setGuga(guga + 1);
            setflag3(true);
            setn3('#008000');
        }
        if (x === 7 && !flag4) {
            setBia(bia + 1);
            setflag4(true);
            setc4('#008000');
        }
        if (x === 8 && !flag4) {
            setGuga(guga + 1);
            setflag4(true);
            setn4('#008000');
        }
        if (x === 9 && !flag5) {
            setBia(bia + 1);
            setflag5(true);
            setc5('#008000');
        }
        if (x === 10 && !flag5) {
            setGuga(guga + 1);
            setflag5(true);
            setn5('#008000');
        }
        if (x === 11 && !flag6) {
            setBia(bia + 1);
            setflag6(true);
            setc6('#008000');
        }
        if (x === 12 && !flag6) {
            setGuga(guga + 1);
            setflag6(true);
            setn6('#008000');
        }
        if (x === 13 && !flag7) {
            setBia(bia + 1);
            setflag7(true);
            setc7('#008000');
        }
        if (x === 14 && !flag7) {
            setGuga(guga + 1);
            setflag7(true);
            setn7('#008000');
        }
        if (x === 15 && !flag8) {
            setBia(bia + 1);
            setflag8(true);
            setc8('#008000');
        }
        if (x === 16 && !flag8) {
            setGuga(guga + 1);
            setflag8(true);
            setn8('#008000');
        }
        if (x === 17 && !flag9) {
            setBia(bia + 1);
            setflag9(true);
            setc9('#008000');
        }
        if (x === 18 && !flag9) {
            setGuga(guga + 1);
            setflag9(true);
            setn9('#008000');
        }
    }

    function dal() {
        if ((guga + bia) === 9) {
            if (guga > bia) {
                setModalGuga(true)
            }
            else {
                setModalBia(true)
            }
        }
        else {
            Alert.alert('Responda todas as perguntas!');
        }
    }

    return (<SafeAreaView style={styles.container}>
        <ScrollView>
            <View style={styles.scrouviu}>

                <Text style={{ fontWeight: 'bold', fontSize: 25 }}>
                    Descubra quem voce é no casal!
                 </Text>

                <Text style={{ fontSize: 17 }}>
                    Você prefere?
                 </Text>

                <View style={styles.boxradio}>
                    <Button
                        title='     Humanas     '
                        onPress={() => pressed(1)}
                        color={c1}
                    />

                    <Button
                        title='       Exatas     '
                        onPress={() => pressed(2)}
                        color={n1}
                    />
                </View>

                <View style={styles.boxradio}>
                    <Button
                        title='Séries e filmes'
                        onPress={() => pressed(3)}
                        color={c2}
                    />

                    <Button
                        title='   Video Game    '
                        onPress={() => pressed(4)}
                        color={n2}
                    />
                </View>

                <View style={styles.boxradio}>
                    <Button
                        title='Musica Gringa'
                        onPress={() => pressed(5)}
                        color={c3}
                    />

                    <Button
                        title='    Musica BR    '
                        onPress={() => pressed(6)}
                        color={n3}
                    />
                </View>

                <View style={styles.boxradio}>
                    <Button
                        title='Ficar em casa'
                        onPress={() => pressed(7)}
                        color={c4}
                    />

                    <Button
                        title='Dar um role'
                        onPress={() => pressed(8)}
                        color={n4}
                    />
                </View>

                <View style={styles.boxradio}>
                    <Button
                        title='  Ler um livro  '
                        onPress={() => pressed(9)}
                        color={c5}
                    />

                    <Button
                        title='Se exercitar'
                        onPress={() => pressed(10)}
                        color={n5}
                    />
                </View>

                <View style={styles.boxradio}>
                    <Button
                        title='          Pop          '
                        onPress={() => pressed(11)}
                        color={c6}
                    />

                    <Button
                        title='          Rap          '
                        onPress={() => pressed(12)}
                        color={n6}
                    />
                </View>

                <View style={styles.boxradio}>
                    <Button
                        title='     Risole     '
                        onPress={() => pressed(13)}
                        color={c7}
                    />

                    <Button
                        title='     Coxinha     '
                        onPress={() => pressed(14)}
                        color={n7}
                    />
                </View>

                <View style={styles.boxradio}>
                    <Button
                        title='    Cachorro    '
                        onPress={() => pressed(15)}
                        color={c8}
                    />

                    <Button
                        title='       Gato       '
                        onPress={() => pressed(16)}
                        color={n8}
                    />
                </View>

                <View style={styles.boxradio}>
                    <Button
                        title='       Twitter      '
                        onPress={() => pressed(17)}
                        color={c9}
                    />

                    <Button
                        title='  Instagram   '
                        onPress={() => pressed(18)}
                        color={n9}
                    />
                </View>

                <View style={styles.botsend}>
                    <Button
                        title='Resultado'
                        onPress={() => dal()}
                        color='#4169e1'
                    />

                    <Button
                        title='Refazer teste'
                        onPress={() => reset()}
                        color='#ff6961'
                    />
                </View>

                <View >
                    <Modal
                        animationType='fade'
                        visible={modalGuga}
                        transparent={true}

                    >
                        <View style={styles.moldaus}>
                            <Image
                                style={styles.ibage}
                                source={require('./guga.png')}
                            />
                            <View style={styles.botsend}>
                                <Button
                                    title='Fechar'
                                    onPress={() => setModalGuga(false)}
                                    color='#d8222f'
                                />
                            </View>
                        </View>
                    </Modal>
                </View>


                <View >
                    <Modal
                        animationType='fade'
                        visible={modalBia}
                        transparent={true}
                    >
                        <View style={styles.moldaus}>
                            <Image
                                style={styles.ibage}
                                source={require('./bia.png')}
                            />
                            <View style={styles.botsend}>
                                <Button
                                    title='Fechar'
                                    onPress={() => setModalBia(false)}
                                    color='#d8222f'
                                />
                            </View>
                        </View>
                    </Modal>
                </View>

            </View>
        </ScrollView>
    </SafeAreaView>
    );
}