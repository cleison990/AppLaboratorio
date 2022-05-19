import React from "react";
import { SafeAreaView ,Text, View, StyleSheet, TouchableOpacity, TextInput} from "react-native";
import Logo from "../assets/Logo";



export default ({ navigation }) => {
    return(
        <SafeAreaView style={styles.container}>
            <View style={styles.logoContainer}>
                <Logo/>
            </View>

           <View style={styles.loginContainer}>
            <View style={styles.login}>
                <Text style={styles.text}>
                    FAÇA SEU CADASTRO
                </Text>
            </View>
                <TextInput  
                    placeholder={"Informe seu nome"}
                    placeholderTextColor='#000000'
                    style={styles.loginInput}
                />
                <TextInput  
                    placeholder={"Informe seu login de acesso"}
                    placeholderTextColor='#000000'
                    style={styles.loginInput}
                />
                <TextInput  
                    placeholder={"Informe sua senha"}
                    placeholderTextColor='#000000'
                    style={styles.loginInput}
                />
                <TextInput  
                    placeholder={"Informe seu curso"}
                    placeholderTextColor='#000000'
                    style={styles.loginInput}
                />
                <TextInput  
                    placeholder={"Informe seu período"}
                    placeholderTextColor='#000000'
                    style={styles.loginInput}
                />
                <View style={styles.buttonContainer}>
                <TouchableOpacity style={styles.buttonLogin}
                    onPress={() => navigation.navigate('Login')}
                >
                    <Text style={styles.text}>
                        CANCELAR
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.buttonLogin}>
                    <Text style={styles.text}>
                        CONCLUIR
                    </Text>
                </TouchableOpacity>
                </View>
            </View> 
        </SafeAreaView>
    )
}


const styles = StyleSheet.creat=(
    {
        container: {
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
            
        },
        logoContainer: {
            alignItems: 'center',
            marginLeft: 10,
            marginTop: 150,
            marginBottom: 5,
        },
        loginContainer: {
            backgroundColor: '#E2DDDD',
            width: 300,
            height: 440,
            borderRadius: 10,
            justifyContent: 'center',
            alignItems: 'center',
            padding: 10,
            marginBottom: 200,

        },
        login: {
            backgroundColor: "#0D4B81",
            justifyContent: "center",
            width: 200,
            height: 32,
            borderRadius: 10,
            marginBottom: 20,
        },
        text: {
            color: "#FFFFFF",
            justifyContent: 'center',
            textAlign: 'center',
        },
        loginInput: {
            backgroundColor: '#FFFFFF',
            width: 250,
            height: 33,
            borderRadius: 10,
            textAlign: 'center',
            marginTop: 10,
            marginBottom: 10,
        },
        buttonContainer: {
            flexDirection: 'row',
        },
        buttonLogin: {
            backgroundColor: "#0D4B81",
            justifyContent: "center",
            width: 120,
            height: 32,
            marginLeft: 5,
            marginRight: 5,
            borderRadius: 10,
            marginTop: 10,
        },
    }
)