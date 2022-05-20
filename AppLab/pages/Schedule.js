import React from "react";
import { View, Text, StyleSheet, SafeAreaView} from 'react-native';



export default () => {
    return(
        <SafeAreaView style={styles.container}>
            
        <View style={styles.tittle}>
            <Text style={styles.text}>
                AGENDAR
            </Text>
        </View>
        </SafeAreaView>
    )
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'flex-start'
    },
    tittle: {
        marginTop: 40,
        width: '100%',
        height: 50,
        backgroundColor: '#0D4B81',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row',
    },
    text: {
        color: '#FFFFFF',
        fontSize: 20,
    }
})