import {
  View,
  Text,
  TextInput,
  Button,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import {StackNavigationProp} from '@react-navigation/stack';
import {RootStackParamList} from '../../../App';
import {useNavigation} from '@react-navigation/native';
import React from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';

type LoginNavigationProp = StackNavigationProp<RootStackParamList, 'Login'>;

const Login = () => {
  const navigation = useNavigation<LoginNavigationProp>();

  return (
    <View style={styles.container}>
      <Icon name="user" size={50} color="#000" />
      <Text style={styles.title}>Iniciar Sesión</Text>
      <TextInput
        style={styles.input}
        placeholder="Correo o Nombre de Usuario"
      />
      <TextInput
        style={styles.input}
        placeholder="Contraseña"
        secureTextEntry
      />
      <TouchableOpacity onPress={() => {}}>
        <Text style={styles.forgotPassword}>¿Olvidaste tu contraseña?</Text>
      </TouchableOpacity>
      <Button title="Ingresar" onPress={() => {}} />
      <View style={styles.socialLoginContainer}>
        <Text>O ingresa con:</Text>
        <View style={styles.iconContainer}>
          <Icon name="google" size={40} color="#EA4335" />
          <Icon name="facebook" size={40} color="#3b5998" />
          <Icon name="twitter" size={40} color="#1DA1F2" />
          <Icon name="linkedin" size={40} color="#0077B5" />
        </View>
      </View>
      <TouchableOpacity onPress={() => navigation.navigate('Login')}>
        <Text style={styles.signUpText}>¿No tienes cuenta? Regístrate</Text>
      </TouchableOpacity>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 20,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 12,
    paddingLeft: 8,
  },
  forgotPassword: {
    color: 'blue',
    marginBottom: 20,
    textAlign: 'right',
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
    marginTop: 10,
  },
  signUpText: {
    color: 'blue',
    textAlign: 'center',
  },
});

export default Login;
