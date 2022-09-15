import React from 'react';
import { useRoute, useNavigation } from '@react-navigation/native';
import { View, Text, StyleSheet, Button } from 'react-native';

type ParamsProps = {
    name: string;
}

export default function ScreenB() {
    const navigation = useNavigation();
    const route = useRoute();
    const { name } = route.params as ParamsProps;
   
    return (
        <View style={styles.container}>
            <Text style={styles.text}>Olá, {name}</Text>
            <Button 
                title='Voltar' 
                onPress={() => navigation.goBack()} 
            />
        </View>
    );
}

const styles = StyleSheet.create({  
    container: { 
        flex: 1,
        backgroundColor: '#4a0669',
        justifyContent: 'center',
        alignItems: 'center',
    },
    text: {
        color: '#fff',
        fontSize: 20,
    },
    button: {
        borderRadius: 20,
    },
});
