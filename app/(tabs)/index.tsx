import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import Swiper from 'react-native-swiper';

const Portada = () => {
    return (
        <Swiper
            style={styles.wrapper}
            showsButtons={true}
            autoplay={true}
            autoplayTimeout={3}
            buttonWrapperStyle={styles.buttonWrapper}
            nextButton={<Text style={styles.buttonText}>›</Text>}
            prevButton={<Text style={styles.buttonText}>‹</Text>}
        >
            <View style={styles.slide}>
                <Image source={{ uri: 'https://i.pinimg.com/736x/43/b1/5c/43b15ce5ebc19b3112ea4aa3c9053a74.jpg' }} style={styles.image} />
                <Text style={styles.text}>Astucia</Text>
            </View>
            <View style={styles.slide}>
                <Image source={{ uri: 'https://i.pinimg.com/564x/55/7e/bc/557ebcf3b86e7e4e9610da0e4411863f.jpg' }} style={styles.image} />
                <Text style={styles.text}>Imparable</Text>
            </View>
            <View style={styles.slide}>
                <Image source={{ uri: 'https://i.pinimg.com/736x/02/b3/cc/02b3ccb0f1269d96a1a8170fc8b1f8c1.jpg' }} style={styles.image} />
                <Text style={styles.text}>Carisma</Text>
            </View>
        </Swiper>
    );
};

const styles = StyleSheet.create({
    wrapper: {},
    slide: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#1C1C1C',
    },
    text: {
        color: '#FFC107',
        fontSize: 24,
        fontWeight: 'bold',
        position: 'absolute',
        bottom: 20,
    },
    image: {
        width: '100%',
        height: '100%',
        opacity: 0.8,
    },
    buttonWrapper: {
        backgroundColor: 'transparent',
        flexDirection: 'row',
        position: 'absolute',
        top: 0,
        left: 0,
        flex: 1,
        paddingHorizontal: 10,
        paddingVertical: 10,
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    buttonText: {
        color: '#FFC107',
        fontSize: 50,
        fontWeight: 'bold',
    },
});

export default Portada;
