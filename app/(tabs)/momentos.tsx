import React, { useState, useRef } from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import { Video } from 'expo-av';

interface Momento {
    id: string;
    title: string;
    image: string;
    details: string;
    videoUri: any;
}

const momentos: Momento[] = [
    {
        id: '1',
        title: 'El Ascenso de los Shelby',
        image: 'https://i.pinimg.com/564x/f2/46/0f/f2460f738af03309f1323c4f0697da39.jpg',
        details: 'El Ascenso de los Shelby es un tema central en la serie Peaky Blinders que captura la evolución de la familia Shelby desde una banda callejera local hasta convertirse en una potencia criminal formidable en Birmingham y más allá.',
        videoUri: require('../../assets/videos/ascenso_shelby.mp4'),
    },
    {
        id: '2',
        title: 'El Enfrentamiento de los Peaky Blinders con sus enemigos',
        image: 'https://i.pinimg.com/564x/7e/7c/69/7e7c69d9a975fe184fd9badfc96fb5c4.jpg',
        details: 'Los Shelby enfrentan constantes amenazas de bandas rivales, políticos corruptos y fuerzas policiales en su ascenso desde una banda callejera a un poderoso imperio criminal en Birmingham. Los conflictos están llenos de violencia, traiciones y estrategias astutas que desafían su supervivencia y dominio, creando una trama emocionante y llena de suspenso.',
        videoUri: require('../../assets/videos/enfrentamiento_enemigos.mp4'), 
    },
    {
        id: '3',
        title: 'La Traición de Alfie',
        image: 'https://i.pinimg.com/564x/7c/d8/24/7cd824e03550ff5eb219c43b6e39887c.jpg',
        details: 'Un giro inesperado en la trama con la traición de un aliado cercano.',
        videoUri: require('../../assets/videos/traicion_alfie.mp4'), 
    },
    {
        id: '4',
        title: 'La muerte de John',
        image: 'https://i.pinimg.com/564x/8f/66/9e/8f669ef70beb3da8516f653e5eb67c23.jpg',
        details: 'Un giro inesperado en la trama con la muerte de uno de los personajes principales, John Shelby.',
        videoUri: require('../../assets/videos/muerte_john.mp4'), 
    },
];

const Momentos = () => {
    const [selectedMomento, setSelectedMomento] = useState<Momento | null>(null);
    const videoRef = useRef<Video>(null);

    const handleBack = async () => {
        if (videoRef.current) {
            await videoRef.current.unloadAsync();
        }
        setSelectedMomento(null);
    };

    const renderMomentoList = () => (
        <ScrollView contentContainerStyle={styles.scrollContainer}>
            {momentos.map((momento) => (
                <TouchableOpacity key={momento.id} onPress={() => setSelectedMomento(momento)}>
                    <View style={styles.momentoContainer}>
                        <Image source={{ uri: momento.image }} style={styles.image} />
                        <Text style={styles.title}>{momento.title}</Text>
                    </View>
                </TouchableOpacity>
            ))}
        </ScrollView>
    );

    const renderMomentoDetails = (momento: Momento) => (
        <ScrollView contentContainerStyle={styles.detailsScrollContainer}>
            <Image source={{ uri: momento.image }} style={styles.detailsImage} />
            <Text style={styles.detailsTitle}>{momento.title}</Text>
            <Text style={styles.detailsText}>{momento.details}</Text>
            <Video
                ref={videoRef}
                source={momento.videoUri}
                rate={1.0}
                volume={1.0}
                isMuted={false}
                shouldPlay
                style={styles.video}
            />
            <TouchableOpacity onPress={handleBack} style={styles.backButton}>
                <Text style={styles.backButtonText}>Volver</Text>
            </TouchableOpacity>
        </ScrollView>
    );

    return (
        <View style={styles.container}>
            {selectedMomento ? renderMomentoDetails(selectedMomento) : renderMomentoList()}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f5f5f5',
    },
    scrollContainer: {
        flexGrow: 1,
        padding: 16,
    },
    momentoContainer: {
        marginBottom: 16,
        backgroundColor: '#fff',
        borderRadius: 10,
        overflow: 'hidden',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
        shadowRadius: 4,
        elevation: 5,
    },
    image: {
        width: '100%',
        height: 200,
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
        padding: 12,
        color: '#333',
    },
    detailsScrollContainer: {
        flexGrow: 1,
        padding: 16,
    },
    detailsImage: {
        width: '100%',
        height: 300,
        borderRadius: 10,
        marginBottom: 16,
    },
    detailsTitle: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 8,
        color: '#333',
    },
    detailsText: {
        fontSize: 18,
        lineHeight: 24,
        color: '#666',
        marginBottom: 16,
    },
    video: {
        width: '100%',
        height: 300,
        borderRadius: 10,
        marginBottom: 16,
    },
    backButton: {
        marginTop: 16,
        paddingVertical: 12,
        paddingHorizontal: 24,
        backgroundColor: '#333',
        borderRadius: 10,
        alignItems: 'center',
    },
    backButtonText: {
        color: '#fff',
        fontSize: 18,
        fontWeight: 'bold',
    },
});

export default Momentos;
