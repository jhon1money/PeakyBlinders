import React from 'react';
import { View, Text, StyleSheet, ImageBackground } from 'react-native';
import { Video } from 'expo-av';

const Vida = () => {
    const videoRef = React.useRef(null);

    return (
        <ImageBackground 
            source={{ uri: 'https://i.pinimg.com/564x/62/71/43/62714336fdbee91ae9f011201d6b32c7.jpg' }} 
            style={styles.background}
        >
            <View style={styles.overlay}>
                <View style={styles.container}>
                    <Text style={styles.title}>No te la puedes perder</Text>
                    <Text style={styles.subtitle}>
                    "Peaky Blinders" es una serie imprescindible por su trama envolvente, personajes carismáticos y una estética visual impresionante que te transporta al turbulento mundo de la Inglaterra de los años 20, todo acompañado por una banda sonora moderna y poderosa.
                    </Text>
                    <Video
                        ref={videoRef}
                        style={styles.video}
                        source={require('../../assets/videos/mi_video.mp4')}
                        useNativeControls
                        // resizeMode="contain"
                        isLooping
                    />
                </View>
            </View>
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
        backgroundColor: 'rgba(0,0,0,0.3)', 
    },
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20,
    },
    title: {
        fontSize: 32,
        fontWeight: 'bold',
        color: '#fff',
        marginBottom: 16,
        textAlign: 'center',
    },
    subtitle: {
        fontSize: 18,
        color: '#d3d3d3',
        textAlign: 'center',
        marginBottom: 20,
        paddingHorizontal: 20,
    },
    video: {
        width: '100%',
        height: 300,
        borderRadius: 10,
    },
});
export default Vida;
