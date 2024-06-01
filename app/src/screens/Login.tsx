import {
  View,
  Text,
  Button,
  StyleSheet,
  TouchableOpacity,
  Image,
  Alert,
} from 'react-native';
import {StackNavigationProp} from '@react-navigation/stack';
import React, {useState} from 'react';
import CustomTextInput from '../components/CustomTextInput';
import Icon from 'react-native-vector-icons/FontAwesome';
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';

type RootStackParamList = {
  HomeScreen: undefined;
  SignUp: undefined;
};

type LoginNavigationProp = {
  navigation: StackNavigationProp<RootStackParamList, 'HomeScreen'>;
};

function Login({navigation}: LoginNavigationProp): React.JSX.Element {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async () => {
    if (!email || !password) {
      Alert.alert('Error', 'Por favor, llena todos los campos');
      return;
    }
    try {
      const response = await axios.post('http://10.0.2.2:1337/api/auth/local', {
        identifier: email,
        password: password,
      });

      const {user, jwt} = response.data;
      console.log('Login successful:', response.data);
      // Guardar el token JWT en AsyncStorage
      await AsyncStorage.setItem('jwt', jwt);
      // Redirigir a la pantalla principal
      navigation.navigate('HomeScreen');
    } catch (error: any) {
      console.error(
        'Error logging in:',
        error.response ? error.response.data : error.message,
      );
      Alert.alert(
        'Error',
        'Credenciales incorrectas. Por favor, inténtalo de nuevo.',
      );
    }
  };
  return (
    <View style={styles.container}>
      <Image
        source={require('../assets/Logo-no-background.png')}
        style={styles.logoBackground}
      />
      <Text style={styles.title}>Iniciar Sesión</Text>
      <CustomTextInput
        iconName="user"
        placeholder="Correo o Nombre de usuario"
        value={email} // Vincula el valor del campo con el estado email
        onChangeText={setEmail} // Actualiza el estado email cuando el valor del campo cambia
      />
      <CustomTextInput
        iconName="lock"
        placeholder="Contraseña"
        value={password} // Vincula el valor del campo con el estado password
        onChangeText={setPassword} // Actualiza el estado password cuando el valor del campo cambia
        secureTextEntry
      />
      <TouchableOpacity onPress={() => {}}>
        <Text style={styles.forgotPassword}>¿Olvidaste tu contraseña?</Text>
      </TouchableOpacity>
      <Button title="Ingresar" onPress={handleLogin} />
      <Text style={styles.singWith}>O ingresa con:</Text>
      <View style={styles.socialLoginContainer}>
        <View style={styles.iconContainer}>
          <TouchableOpacity style={styles.iconLogos}>
            <Icon name="google" size={40} color="#EA4335" />
          </TouchableOpacity>
          <TouchableOpacity style={styles.iconLogos}>
            <Icon name="facebook-square" size={40} color="#3b5998" />
          </TouchableOpacity>
          <TouchableOpacity style={styles.iconLogos}>
            <Icon name="twitter-square" size={40} color="#1DA1F2" />
          </TouchableOpacity>
          <TouchableOpacity style={styles.iconLogos}>
            <Icon name="linkedin-square" size={40} color="#0077B5" />
          </TouchableOpacity>
        </View>
      </View>
      <TouchableOpacity onPress={() => navigation.navigate('SignUp')}>
        <Text style={styles.signUpText}>
          ¿No tienes cuenta?{' '}
          <Text style={styles.signUpTextBold}>Regístrate</Text>
        </Text>
      </TouchableOpacity>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 20,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 26,
    fontWeight: 'bold',
    marginBottom: 30,
    textAlign: 'left',
    color: 'blue',
  },
  forgotPassword: {
    color: 'blue',
    marginBottom: 20,
    textAlign: 'right',
  },
  singWith: {
    textAlign: 'center',
    color: 'blue',
    marginTop: 20,
  },
  socialLoginContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginVertical: 20,
  },
  iconContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '60%',
  },
  signUpText: {
    color: 'blue',
    textAlign: 'center',
  },
  logoBackground: {
    width: null,
    resizeMode: 'contain',
    height: 40,
    marginBottom: 30,
  },
  signUpTextBold: {
    fontWeight: 'bold',
  },
  iconLogos: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 2.5,
    borderRadius: 10,
  },
});

export default Login;
