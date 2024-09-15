import { LinearGradient } from "expo-linear-gradient";
import { SafeAreaView, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";
import { Ionicons } from '@expo/vector-icons';
import { useState } from "react";

export default Screen_2a = () => {
    const [passwordVisible, setPasswordVisible] = useState(false);

    return (
        <LinearGradient
            colors={['#FBCB00', '#BF9A00']}
            style={styles.gradientContainer}
        >
            <SafeAreaView style={styles.container}>
                <Text style={styles.titleText}>
                    LOGIN
                </Text>
                <View style={styles.formLogin}>
                    <View style={styles.inputContainer}>
                        <Ionicons name="person" size={20} />
                        <TextInput 
                            style={styles.inputForm}
                            placeholder="Name"
                        />
                    </View>
                   
                    <View style={styles.inputContainer}>
                        <Ionicons name="lock-closed" size={20} />
                        <TextInput 
                            style={styles.inputForm}
                            placeholder="Password"
                            secureTextEntry={!passwordVisible}  // Toggle password visibility
                        />
                        <TouchableOpacity 
                            onPress={() => setPasswordVisible(!passwordVisible)} 
                            style={styles.eyeIcon}
                        >
                            <Ionicons name={passwordVisible ? "eye-off" : "eye"} size={20} />
                        </TouchableOpacity>
                    </View>
                    <TouchableOpacity style={styles.buttonLogin}>
                         LOGIN
                    </TouchableOpacity>
                    <Text style={{fontSize:16, marginTop:25}}>
                        CREATE ACCOUNT
                    </Text>
                </View>
            </SafeAreaView>
        </LinearGradient>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: '80%',
        height: 500,
        justifyContent: 'center',
        alignItems: 'center',
    },
    gradientContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    titleText: {
        fontSize: 30,
        fontWeight: 'bold',
        marginTop: 50,
        marginBottom: 30,
        color: '#FFF'
    },
    formLogin: {
        width: '80%',
        height: 300,
        borderRadius: 20,
        alignItems: 'center',
        shadowColor: 'white',
        shadowOffset: { width: 0, height: 5 },
        shadowOpacity: 1,
        shadowRadius: 10,
        elevation: 2
    },
    inputContainer: {
        flexDirection: 'row',
        width: '90%',
        height: 40,
        backgroundColor: 'white',
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'center',
        marginVertical: 20,
        paddingHorizontal: 10,
    },
    inputForm: {
        flex: 1,
        paddingLeft: 10,
        
    },
    eyeIcon: {
        paddingRight: 10,
    },
    buttonLogin:{
        width:'60%',
        height:40,
        borderRadius:20,
        alignItems:'center',
        backgroundColor:'black',
        color:'white',
        justifyContent:'center',
        marginTop:20

    }
});
