import React from "react";
import { SafeAreaView ,Text, View, StyleSheet, TouchableOpacity, TextInput} from "react-native";
import Logo from "../assets/Logo";



export default () => {
    return(
        <SafeAreaView style={styles.container}>
            <View style={styles.logoContainer}>
                <Logo/>
            </View>

           <View style={styles.loginContainer}>
            <View style={styles.login}>
                <Text style={styles.text}>
                    LOGIN
                </Text>
            </View>
                <TextInput  
                    placeholder={"Informe Seu Login"}
                    placeholderTextColor='#000000'
                    style={styles.loginInput}
                />
                <TextInput  
                    placeholder={"Informe Sua Senha"}
                    placeholderTextColor='#000000'
                    style={styles.loginInput}
                    secureTextEntry={true}
                />
                <TouchableOpacity style={styles.buttonLogin}>
                    <Text style={styles.text}>
                        ENTRAR
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.buttonLogin}>
                    <Text style={styles.text}>
                        CADASTRAR
                    </Text>
                </TouchableOpacity>
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
            marginBottom: 5,
        },
        loginContainer: {
            backgroundColor: '#E2DDDD',
            width: 300,
            height: 300,
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
        buttonLogin: {
            backgroundColor: "#0D4B81",
            justifyContent: "center",
            width: 200,
            height: 32,
            borderRadius: 10,
            marginTop: 10,
        },
    }
)