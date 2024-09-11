import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, StyleSheet, Text, TextInput, View } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { Ionicons } from '@expo/vector-icons'; 
import { TouchableOpacity } from 'react-native-web';
export default Screen_1b = () => {
    return (
        <LinearGradient
            colors={['#C7F4F6', '#00CCF9']}
            style={styles.container}
        >
            <StatusBar style="auto" />
                <SafeAreaView style={styles.container}>
                    <View style={styles.iconContainer}>
                        <Ionicons  name='lock-closed'  size={100}  color={'back'}/>
                    </View>
                    <View style={styles.theRest}>
                        <Text style={{fontSize: 20, fontWeight:'bold'}}>    FORGET{"\n"}PASSWORD</Text>
                        <Text style={{fontSize:15, marginTop:20}}  >Provide your' account eamil for with you{'\n'}         want to reset your password
                        </Text>
                        <View style={styles.emailContainer}>
                            <Ionicons name='mail' size={20} color={'black'} style={{position:'absolute', marginLeft:10, marginTop:10}} />
                            <TextInput style={{backgroundColor:'white', width:300, height: 40,borderRadius:10, paddingLeft:40}}
                            
                            placeholder='Vui lòng nhập email...'
                            >
                                    
                            </TextInput>

                        </View>
                      <View style={styles.ButtonContainer}>
                      <TouchableOpacity style={{with:100, height:50, borderRadius:20, marginTop:40, backgroundColor:'#E3C000', justifyContent:'center', alignItems:'center', fontSize:20}}>
                                NEXT
                        </TouchableOpacity>
                      </View>
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
    iconContainer:{
        width:200,
        height:200,
        borderRadius:100,
        borderEndColor:'black',
        borderWidth:10,
        marginBottom:20,
        alignItems:'center',
        justifyContent:'center',
        marginBottom:20
    },
    theRest:{
        flexDirection:'column',
        justifyContent:'center',
        alignItems: 'center',
    
    },
     emailContainer:{
        flexDirection:'row',
        marginTop:30,
        position:'relative'

     },
     ButtonContainer:{
        width:'100%'
     }
});
