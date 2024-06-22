import React, { useState } from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity, ScrollView, ImageBackground } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import Animated, { Easing, interpolate, useAnimatedStyle, useSharedValue, withTiming } from 'react-native-reanimated';

interface Personaje {
    id: string;
    name: string;
    details: string;
    image: string;
}

const personajes: Personaje[] = [
    {
        id: '1',
        name: 'Thomas Shelby',
        details: 'Thomas Shelby es el icónico líder de la banda criminal "Peaky Blinders" en la serie homónima, interpretado magistralmente por Cillian Murphy. Con una astucia y determinación implacables, Thomas es conocido por su inteligencia estratégica y su capacidad para navegar hábilmente por el submundo criminal de Birmingham durante la década de 1920. Proveniente de una familia de clase trabajadora y veterano de la Primera Guerra Mundial, su carácter está moldeado por sus experiencias de guerra y su ambición por expandir el imperio de los Peaky Blinders. Su estilo distintivo, su presencia imponente y sus complejas relaciones familiares y políticas agregan capas de profundidad a un personaje cuyo desarrollo a lo largo de la serie lo convierte en una figura fascinante y central en la trama.',
        image: 'https://i.pinimg.com/564x/1b/1d/52/1b1d52b0dd058ddeb1981fcb96cd3639.jpg',
    },
    {
        id: '2',
        name: 'Arthur Shelby',
        details: 'Arthur Shelby es el hermano mayor de Thomas Shelby y uno de los miembros más destacados de los Peaky Blinders. Interpretado por Paul Anderson, Arthur es conocido por su temperamento volátil y su lealtad feroz a la familia Shelby. Aunque a menudo lucha con sus propios demonios internos, Arthur demuestra una fortaleza y valentía inquebrantables.',
        image: 'https://i.pinimg.com/564x/62/7b/36/627b3685c0fbd226303ca2abf0f2d7d1.jpg',
    },
    {
        id: '3',
        name: 'Polly Gray',
        details: 'Polly Gray, interpretada por Helen McCrory, es la tía de los hermanos Shelby y la matriarca de los Peaky Blinders. Polly es una figura poderosa y sagaz que maneja las finanzas de la familia y brinda consejos estratégicos. Su influencia y perspicacia la convierten en una figura clave en el funcionamiento del imperio Shelby.',
        image: 'https://i.pinimg.com/564x/05/40/ba/0540ba136f501a42bc767bae57e87444.jpg',
    },
    {
        id: '4',
        name: 'John Shelby',
        details: 'John Shelby es el hermano menor de Thomas y Arthur Shelby. Interpretado por Joe Cole, John es conocido por su lealtad y coraje en el campo de batalla y en los negocios. Aunque a menudo actúa de manera impulsiva, su dedicación a la familia y a los Peaky Blinders es incuestionable.',
        image: 'https://i.pinimg.com/564x/e6/0e/68/e60e68ede200d6b37fe50faae7e2e339.jpg',
    },
    {
        id: '5',
        name: 'Ada Shelby',
        details: 'Ada Shelby, interpretada por Sophie Rundle, es la única hermana de los hermanos Shelby. Ada inicialmente se mantiene al margen de las actividades criminales de su familia, pero a lo largo de la serie, su papel y su participación en los negocios familiares evolucionan de manera significativa.',
        image: 'https://i.pinimg.com/564x/39/80/cb/3980cb0b86b52e01456678a55833d6be.jpg',
    },
    {
        id: '6',
        name: 'Finn Shelby',
        details: 'Finn Shelby es el hermano menor de la familia Shelby. Interpretado por Harry Kirton, Finn crece a lo largo de la serie, pasando de ser un niño a involucrarse cada vez más en los negocios de la familia y en las actividades de los Peaky Blinders.',
        image: 'https://i.pinimg.com/564x/f7/d1/69/f7d169e9f72e098544de85c06a90ba84.jpg',
    },
];

const Personajes = () => {
    const [selectedPersonaje, setSelectedPersonaje] = useState<Personaje | null>(null);
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

    const handleSelectPersonaje = (personaje: Personaje) => {
        setSelectedPersonaje(personaje);
    };

    const handleBackToList = () => {
        setSelectedPersonaje(null);
    };

    const backgroundImage = selectedPersonaje ? { uri: selectedPersonaje.image } : { uri: 'https://i.pinimg.com/564x/11/83/db/1183db424b40a4cdf7878265babc0d47.jpg' };

    return (
        <ImageBackground source={backgroundImage} style={styles.background}>
            <LinearGradient colors={['rgba(0,0,0,0.8)', 'rgba(0,0,0,0.6)']} style={styles.overlay}>
                {selectedPersonaje ? (
                    <ScrollView contentContainerStyle={styles.detailsContainer}>
                        <TouchableOpacity onPress={handleBackToList} style={styles.backButton}>
                            <Text style={styles.backButtonText}>Volver</Text>
                        </TouchableOpacity>
                        <Animated.Image source={{ uri: selectedPersonaje.image }} style={[styles.detailsImage, animatedStyle]} />
                        <Animated.Text style={[styles.detailsName, animatedStyle]}>{selectedPersonaje.name}</Animated.Text>
                        <Animated.Text style={[styles.detailsText, animatedStyle]}>{selectedPersonaje.details}</Animated.Text>
                    </ScrollView>
                ) : (
                    <ScrollView contentContainerStyle={styles.listContainer}>
                        {personajes.map((personaje) => (
                            <TouchableOpacity
                                key={personaje.id}
                                style={styles.card}
                                onPress={() => handleSelectPersonaje(personaje)}
                            >
                                <Animated.Image source={{ uri: personaje.image }} style={[styles.image, animatedStyle]} />
                                <Animated.Text style={[styles.name, animatedStyle]}>{personaje.name}</Animated.Text>
                            </TouchableOpacity>
                        ))}
                    </ScrollView>
                )}
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
        justifyContent: 'center',
    },
    listContainer: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'center',
        padding: 10,
    },
    card: {
        width: 150,
        height: 220,
        margin: 10,
        borderRadius: 10,
        backgroundColor: 'rgba(255, 255, 255, 0.8)',
        alignItems: 'center',
        justifyContent: 'center',
        elevation: 3,
    },
    image: {
        width: 120,
        height: 120,
        borderRadius: 60,
        marginBottom: 10,
    },
    name: {
        fontSize: 16,
        fontWeight: 'bold',
        textAlign: 'center',
        color: '#333',
    },
    detailsContainer: {
        alignItems: 'center',
        padding: 20,
    },
    detailsImage: {
        width: 200,
        height: 200,
        borderRadius: 100,
        marginBottom: 20,
    },
    detailsName: {
        fontSize: 24,
        fontWeight: 'bold',
        textAlign: 'center',
        color: '#fff',
        marginBottom: 10,
    },
    detailsText: {
        fontSize: 16,
        textAlign: 'center',
        color: '#d3d3d3',
        paddingHorizontal: 20,
    },
    backButton: {
        marginBottom: 20,
    },
    backButtonText: {
        fontSize: 18,
        color: '#007bff',
    },
});

export default Personajes;
