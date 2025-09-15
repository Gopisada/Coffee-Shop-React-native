import { View, Text,StyleSheet, ImageBackground,Pressable } from 'react-native';
import coffeeimg from "@/assets/images/coffeeimg.jpg"
import { Link } from 'expo-router';

const app = () => {
  return (
    <View style={styles.container}>
      <ImageBackground source={coffeeimg} style= {styles.image} >
        <Text style={styles.title}>Coffee Shop</Text>
        <Link href="/contact" style={{marginHorizontal:'auto'}} asChild >
        <Pressable style={styles.button}>
          <Text style={styles.buttonText}>Contact Us</Text>
        </Pressable></Link>
      </ImageBackground>
      
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex:1,
    flexDirection:'column',
  },
  image: {
    width:'100%',
    height:'100%',
    flex:1,
    resizeMode:'cover',
    justifyContent:'center'
  },
  title: {
    color:'white',
    fontSize: 42,
    fontWeight:'bold',
    textAlign:'center',
    backgroundColor:'rgba(0,0,0,0.5)',
    marginBottom:120
  },
  link: {
    color:'white',
    fontSize: 42,
    fontWeight:'bold',
    textAlign:'center',
    textDecorationLine:'underline',
    padding:4,
    backgroundColor:'rgba(0,0,0,0.5)'
  },
  button: {
    height:60,
    borderRadius:20,
    padding:6,
    backgroundColor:'rgba(0,0,0,0.75)',
    justifyContent:'center'
  },

  buttonText: {
    color:'white',
    fontSize: 16,
    fontWeight:'bold',
    textAlign:'center',
    padding:4,
  }
})

export default app