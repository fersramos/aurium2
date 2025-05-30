import { Image, StyleSheet, Text, View } from 'react-native';

export default function Home() {
    return (
        <View style={styles.container}>
          <View style= {styles.lateral}>
            <Image 
                source={require('../../assets/images/perfil.png')} 
                style={styles.perfil} 
            />
            <Text style={styles.title}>Bem-vindo de volta!</Text>
             </View>  
            <Text style={styles.subtitle}>Continue aniquilando seus objetivos 💪</Text>
            <View style= {styles.box}>
                <Image style= {styles.img}
                source= {require ('../../assets/images/mod1.png')}
            />
            <Text style={styles.mod1}> Módulo 1</Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        padding: 20,
        justifyContent: 'flex-start', 
        alignItems: 'flex-start',
    },
    title: {
        fontSize: 24,
        color: '#000000',
        fontWeight: 'bold',
        marginTop: 45,

    },
    subtitle: {
        fontSize: 14,
        color: '#696969',
        marginTop: -15,
        marginLeft:60,
    },
    perfil: {
        width: 50,
        height: 50,
        borderRadius: 60,
        marginTop: 40,
        marginRight: 15,
    },
    lateral:{
        flexDirection: 'row',
    
    },
    box: {
backgroundColor: '#EDF4FE',
padding:5,
borderRadius: 20,
width:160,
height: 210,
marginTop: 50,
    },
    img:{
        padding: 5,
        width: 150,
        height: 200,
        alignItems: 'center',
        marginTop: -15,
    },
    mod1:{
        fontSize: 20,
        fontWeight: 'bold',
        marginTop: -15,
        alignItems: 'center',
    }
});
