import React from 'react';
import { View, StyleSheet, ScrollView, ImageBackground, Text, Image } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import Animated, { Easing, interpolate, useAnimatedStyle, useSharedValue, withTiming } from 'react-native-reanimated';

const Acerca = () => {
    const fadeIn = useSharedValue(0);

    React.useEffect(() => {
        fadeIn.value = withTiming(1, {
            duration: 2000,
            easing: Easing.out(Easing.exp),
        });
    }, [fadeIn]);

    const animatedStyle = useAnimatedStyle(() => {
        return {
            opacity: fadeIn.value,
            transform: [
                {
                    translateY: interpolate(fadeIn.value, [0, 1], [20, 0]),
                },
            ],
        };
    });

    return (
        <ImageBackground source={{ uri: 'https://i.pinimg.com/564x/69/a6/aa/69a6aaaf4f8108b4264a07ffa90e6fc4.jpg' }} style={styles.background}>
            <LinearGradient colors={['rgba(0,0,0,0.8)', 'rgba(0,0,0,0.6)']} style={styles.overlay}>
                <ScrollView contentContainerStyle={styles.container}>
                    <View style={styles.innerContainer}>
                        <Animated.Text style={[styles.title, animatedStyle]}>Peaky Blinders</Animated.Text>
                        <Animated.Text style={[styles.details, animatedStyle]}>
                            Peaky Blinders es una serie de televisión británica creada por Steven Knight. La serie sigue a la familia criminal Shelby en Birmingham, Inglaterra, justo después de la Primera Guerra Mundial. Con seis temporadas llenas de intriga, violencia y estrategia, Peaky Blinders ha capturado la atención de audiencias en todo el mundo.
                        </Animated.Text>
                        <View style={styles.iconContainer}>
                            {['https://static-00.iconduck.com/assets.00/netflix-icon-icon-2048x2048-yj41gpvr.png', 'https://preview.redd.it/4be1no8cw92b1.jpg?auto=webp&s=32ba5a9e2907766783d011fa7cf587754c1cd7c2', 'https://static.vecteezy.com/system/resources/previews/019/766/188/large_2x/prime-video-logo-prime-video-icon-transparent-logo-free-png.png', 'https://play-lh.googleusercontent.com/4whGAVjZGrrlNxzheKAfBXrxggtyAb4euWLeQI8fDfVfdnFEZjE0DZTJ8DKoh64pqcIa', 'https://www.flatpanelshd.com/pictures/vudufandango.jpg', 'https://play-lh.googleusercontent.com/-jCY-l3RicXFIAJCfNNeJmuRiebUbZNSyYfk3jUYqq1n6mMoqNSM6dJjIOuHs8HjbA'].map((icon, index) => (
                                <Animated.Image key={index} source={{ uri: icon }} style={[styles.icon, animatedStyle]} />
                            ))}
                        </View>
                    </View>
                </ScrollView>
            </LinearGradient>
        </ImageBackground>
    );
};

const styles = StyleSheet.create({
    background: {
        flex: 1,
        justifyContent: 'center',
    },
    overlay: {
        ...StyleSheet.absoluteFillObject,
        backgroundColor: 'rgba(0,0,0,0.6)',
    },
    container: {
        flexGrow: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 16,
    },
    innerContainer: {
        backgroundColor: 'rgba(0, 0, 0, 0.7)',
        borderRadius: 20,
        padding: 20,
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.3,
        shadowRadius: 4,
        elevation: 8,
    },
    title: {
        fontSize: 28,
        fontWeight: 'bold',
        marginBottom: 16,
        textAlign: 'center',
        color: '#fff',
    },
    details: {
        fontSize: 18,
        textAlign: 'center',
        color: '#d3d3d3',
        lineHeight: 24,
    },
    iconContainer: {
        flexDirection: 'row',
        marginTop: 20,
        justifyContent: 'center',
        flexWrap: 'wrap',
    },
    icon: {
        width: 50,
        height: 50,
        margin: 10,
        borderRadius: 25,
        borderWidth: 1,
        borderColor: '#fff',
    },
});

export default Acerca;
