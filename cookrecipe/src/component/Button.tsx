import Colors from '@/services/Colors';
import Ionicons from '@expo/vector-icons/Ionicons';
import { ActivityIndicator, StyleSheet, Text, TouchableOpacity } from 'react-native';
const Button = ({label,onPress, icon='', loading= false}:any) => {
  return (

      <TouchableOpacity
              onPress={onPress} 
              disabled={loading}
              style={styles.button}>
                {loading ? <ActivityIndicator color={Colors.WHITE}/> : <Ionicons name={icon} size={20} color="white" />}
                
               <Text
                 style={{
                   textAlign: "center",
                   color: Colors.WHITE,
                   fontFamily: "outfit",
                   fontSize: 17,
                 }}
               >
                 {label}
               </Text>
             </TouchableOpacity>

  )
}

export default Button

const styles = StyleSheet.create({
     button: {
        backgroundColor: Colors.PRIMARY,
        padding: 15,
        borderRadius: 15,
        marginTop: 20,
        width:"100%",
        display:'flex',
        flexDirection:'row',
        gap:10,
        alignItems:'center',
        justifyContent:'center'
      },
})