import React from 'react';
import { View, Text, StyleSheet, Image, ImageBackground, TouchableOpacity } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';

const Contratame = () => {
    return (
        <ImageBackground 
            source={{ uri: 'https://i.pinimg.com/564x/07/e8/e7/07e8e7631eeb119ccee59863bfbb0345.jpg' }} 
            style={styles.background}
        >
            <View style={styles.overlay}>
                <View style={styles.container}>
                    <Image 
                        source={require('../../assets/images/mi_foto.png')} 
                        style={styles.profileImage}
                    />
                    <Text style={styles.name}>Jhon Anthony Jimenez</Text>
                    <Text style={styles.jobTitle}>Desarrollador Full Stack</Text>
                    <View style={styles.contactContainer}>
                        <TouchableOpacity style={styles.contactItem}>
                            <FontAwesome name="envelope" size={24} color="#fff" />
                            <Text style={styles.contactText}>jhonanthonyjimenez568@gmail.com</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.contactItem}>
                            <FontAwesome name="phone" size={24} color="#fff" />
                            <Text style={styles.contactText}>809-709-3803</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        </ImageBackground>
    );
};

const styles = StyleSheet.create({
    background: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    overlay: {
        ...StyleSheet.absoluteFillObject,
        backgroundColor: 'rgba(0,0,0,0.5)',
    },
    container: {
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20,
    },
    profileImage: {
        width: 150,
        height: 150,
        borderRadius: 75,
        borderWidth: 3,
        borderColor: '#fff',
        marginBottom: 20,
    },
    name: {
        fontSize: 32,
        fontWeight: 'bold',
        color: '#fff',
        marginBottom: 8,
    },
    jobTitle: {
        fontSize: 20,
        fontWeight: '600',
        color: '#d3d3d3',
        marginBottom: 20,
    },
    contactContainer: {
        marginTop: 20,
    },
    contactItem: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 10,
    },
    contactText: {
        fontSize: 18,
        color: '#fff',
        marginLeft: 10,
    },
});

export default Contratame;
