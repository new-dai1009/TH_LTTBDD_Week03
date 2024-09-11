import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

export default Screen_1a = () => {
    return (
        <LinearGradient
            colors={['#C7F4F6', '#00CCF9']}
            style={styles.container}
        >
            <StatusBar style="auto" />
            <View style={styles.circle}></View>
            <Text style={styles.text}>         GROW{"\n"}YOUR BUSINESS</Text>
            <Text style={styles.texttow}>We will help to grow your business using {"\n"}                      online server</Text>
            <View style={styles.buttonContainer}>
                <TouchableOpacity style={styles.buttonText}>LOGIN</TouchableOpacity>
                <TouchableOpacity style={styles.buttonText}>SIGNUP</TouchableOpacity>
            </View>
            <View style={{justifyContent:'center', marginTop:20}}>
                <Text style={{fontSize:20}}>
                    HOW WE WORK?
                </Text>
            </View>
        </LinearGradient>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    circle: {
        width: 200,
        height: 200,
        borderRadius: 100,
        backgroundColor: '#93e9f6', 
        borderColor: 'black',
        borderWidth: 8,
        
    },
    text: {
        marginTop: 50,
        justifyContent: 'center',
        fontSize: 30,
        fontWeight: 'bold',
    },
    texttow: {
        fontSize: 20,
        marginTop: 30,
    },
    buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'space-around', 
        width: '80%',
        marginTop: 50,
    },
    buttonText: {
        height: 50,
        width: 100,
        backgroundColor: '#CCCC33',
        justifyContent: 'center',
        textAlign: 'center',
        borderRadius: 20,
        fontSize: 20,
    },
});
