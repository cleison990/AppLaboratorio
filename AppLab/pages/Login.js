import React from "react";
import { Text, View, StyleSheet} from "react-native";


export default () => {
    return(
        <View style={styles.container}>
            <Text style={styles.text}>
                TESTE
            </Text>
        </View>

    )
}

const styles = StyleSheet.creat=(
    {
        container: {
            flex: 1,
            justifyContent: "center",
            alignItens: "center",
            padding: 24,
        },
        text: {
            alignItens: 'center',
        }
    }
)