import {
  View,
  Text,
  Button,
  StyleSheet,
  TouchableOpacity,
  Image,
} from 'react-native';
import {StackNavigationProp} from '@react-navigation/stack';
import React from 'react';
import CustomTextInput from '../components/CustomTextInput';
import Icon from 'react-native-vector-icons/FontAwesome';

type RootStackParamList = {
  HomeScreen: undefined;
  SingUp: undefined;
};

type LoginNavigationProp = {
  navigation: StackNavigationProp<RootStackParamList, 'HomeScreen'>;
};

function Login({navigation}: LoginNavigationProp): React.JSX.Element {
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
      />
      <CustomTextInput
        iconName="lock"
        placeholder="Contraseña"
        secureTextEntry
      />
      <TouchableOpacity onPress={() => {}}>
        <Text style={styles.forgotPassword}>¿Olvidaste tu contraseña?</Text>
      </TouchableOpacity>
      <Button
        title="Ingresar"
        onPress={() => navigation.navigate('HomeScreen')}
      />
      <Text style={styles.singWith}>O ingresa con:</Text>
      <View style={styles.socialLoginContainer}>
        <View style={styles.iconContainer}>
          <Icon name="google" size={40} color="#EA4335" />
          <Icon name="facebook-square" size={40} color="#3b5998" />
          <Icon name="twitter-square" size={40} color="#1DA1F2" />
          <Icon name="linkedin-square" size={40} color="#0077B5" />
        </View>
      </View>
      <TouchableOpacity onPress={() => navigation.navigate('SingUp')}>
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
});

export default Login;
