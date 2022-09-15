import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function ScreenA() {
    const navigation = useNavigation();
    
    function openScreen(){       
        navigation.navigate('ScreenB', {name: 'Gilson Fábio'});
    }
    
    return (
        <View style={styles.container}>
            <Button 
                title='Ir para tela B' 
                onPress={() => openScreen()}
            />

        </View>
    );
}

const styles = StyleSheet.create({  
    container: { 
        flex: 1,
        backgroundColor: '#0f4da8',
        justifyContent: 'center',
    },
});

  