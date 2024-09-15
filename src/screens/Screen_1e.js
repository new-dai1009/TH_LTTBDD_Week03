import { SafeAreaView, StyleSheet, TextInput, Text, View, TouchableOpacity } from "react-native";
import { Ionicons } from '@expo/vector-icons';

export default Screen_1e = () => {
    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.inputContainer}>
                <Text style={styles.title}>REGISTER</Text>
                <TextInput 
                    style={styles.input} 
                    placeholder="Name"
                    placeholderTextColor="#888"
                />
                                <TextInput 
                    style={styles.input} 
                    placeholder="Phone"
                    placeholderTextColor="#888"
                />
                <TextInput 
                    style={styles.input} 
                    placeholder="Email"
                    placeholderTextColor="#888"
                />
                <View style={styles.inputPassword}>
                    <TextInput 
                        style={styles.passwordInput} 
                        placeholder="Password"
                        secureTextEntry 
                        placeholderTextColor="#888"
                    />
                    <Ionicons 
                        name="eye" 
                        size={20} 
                        color={'#888'} 
                        style={styles.eyeIcon}
                    />
                </View>
                <TextInput 
                    style={styles.input} 
                    placeholder="Birthday"
                    placeholderTextColor="#888"
                />
                <View style={styles.selected}>
                    <TouchableOpacity style={styles.iconButtonSelect}>
                        <Ionicons name="checkmark-circle" size={10} style={{color:'white'}}/>
                    </TouchableOpacity>
                        <Text style={{fontSize:18}}>Male</Text>
                    <TouchableOpacity style={styles.iconButtonSelect}>
                        <Ionicons name="checkmark-circle" size={10} style={{color:'white'}}/>
                    </TouchableOpacity>
                        <Text style={{fontSize:18}}>FeMale</Text>

                </View>
                <TouchableOpacity style={styles.button}>
                    <Text style={styles.buttonText}>REGISTER</Text>
                </TouchableOpacity>
                <Text style={styles.forgotPassword}>Sign in </Text>
                <View style={styles.contact}>
                    <TouchableOpacity style={styles.iconButton}>
                        <Ionicons name="logo-facebook" size={24} color={'#3b5998'} />
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.iconButton}>
                        <Ionicons name="logo-twitter" size={24} color={'#1DA1F2'} />
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.iconButton}>
                        <Ionicons name="logo-google" size={24} color={'#DB4437'} />
                    </TouchableOpacity>
                </View>
            </View>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#d8efdf',
        alignItems: 'center',
        justifyContent: 'center'
    },
    inputContainer: {
        width: '80%',
        alignItems: "center",
        borderRadius: 20,
        backgroundColor: '#f3f9f6',
        padding: 20,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.1,
        shadowRadius: 10,
        elevation: 5
    },
    title: {
        fontSize: 30,
        marginBottom: 20,
        fontWeight: 'bold',
        color: '#333'
    },
    input: {
        width: '100%',
        height: 45,
        backgroundColor: 'white',
        borderRadius: 10,
        marginBottom: 20,
        paddingLeft: 20,
        borderColor: '#ddd',
        borderWidth: 1
    },
    inputPassword: {
        flexDirection: 'row',
        alignItems: 'center',
        width: '100%',
        marginBottom: 20
    },
    passwordInput: {
        flex: 1,
        height: 45,
        backgroundColor: 'white',
        borderRadius: 10,
        paddingLeft: 20,
        paddingRight: 40,
        borderColor: '#ddd',
        borderWidth: 1
    },
    eyeIcon: {
        position: 'absolute',
        right: 10,
        top: '50%',
        transform: [{ translateY: -10 }]
    },
    button: {
        width: '60%',
        height: 45,
        backgroundColor: '#388E3C',
        borderRadius: 25,
        justifyContent: 'center',
        alignItems: 'center',
        marginVertical: 20,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.2,
        shadowRadius: 10,
        elevation: 5
    },
    buttonText: {
        color: 'white',
        fontSize: 18,
        fontWeight: 'bold'
    },
    forgotPassword: {
        marginVertical: 10,
        color: '#CC66FF',
        fontSize: 16
    },
    contact: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        width: '60%',
        marginTop: 20
    },
    iconButton: {
        padding: 10,
        borderRadius: 50,
        backgroundColor: '#f3f9f6',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 4,
        elevation: 2
    },
    selected:{
        flexDirection:'row',
        width:'80%',
        justifyContent:'space-between',
        alignItems:'center'
    },
    iconButtonSelect:{
        borderBlockColor:'black',
        borderWidth:1,
        borderRadius:'100%'
    }
});
