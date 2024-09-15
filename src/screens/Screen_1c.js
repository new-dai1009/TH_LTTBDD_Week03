import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { Ionicons } from '@expo/vector-icons'; 

export default Screen_1c = () => {
    return (
        <LinearGradient
            colors={['#C7F4F6', '#00CCF9']}
            style={styles.container}
        >
            <StatusBar style="auto" />
            <SafeAreaView style={styles.container}>
                <View style={styles.codeContainer}>
                    <Text style={{fontSize:70, fontWeight:'bold'}}>CODE</Text>
                </View>
                
                <View style={styles.theRest}>
                    <Text style={{fontSize:40, marginTop:40}}>VERIFICATION</Text>
                    
                    <View style={styles.inputCodeContainer}>
                        {/* Mã xác minh 6 ô vuông */}
                        {Array(6).fill().map((_, index) => (
                            <View key={index} style={styles.codeBox}></View>
                        ))}
                    </View>

                    <TouchableOpacity style={styles.button}>
                        <Text style={styles.buttonText}>VERIFY CODE</Text>
                    </TouchableOpacity>
                </View>
            </SafeAreaView>
        </LinearGradient>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    codeContainer: {
        marginBottom: 50,
        justifyContent: 'center',
        alignItems: 'center',
    },
    theRest: {
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
    },
    inputCodeContainer: {
        flexDirection: 'row',
        marginTop: 30,
        justifyContent: 'space-between',
    },
    codeBox: {
        width: 40,
        height: 40,
        borderColor: 'black',
        borderWidth: 1,
        marginHorizontal: 5,
        alignItems: 'center',
        justifyContent: 'center',
    },
    button: {
        width: 150,
        height: 50,
        borderRadius: 20,
        marginTop: 40,
        backgroundColor: '#E3C000',
        justifyContent: 'center',
        alignItems: 'center',
    },
    buttonText: {
        fontSize: 20,
        fontWeight: 'bold',
    },
});
