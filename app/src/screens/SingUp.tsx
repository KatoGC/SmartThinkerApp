import React from 'react';
import {
  View,
  Text,
  Button,
  StyleSheet,
  TouchableOpacity,
  Image,
} from 'react-native';
import {StackNavigationProp} from '@react-navigation/stack';
import {RootStackParamList} from '../../../App';
import {useNavigation} from '@react-navigation/native';
import CustomTextInput from '../components/CustomTextInput';

type SingUpScreenNavigationProp = StackNavigationProp<
  RootStackParamList,
  'SingUp'
>;

const SingUp = () => {
  const navigation = useNavigation<SingUpScreenNavigationProp>();

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => navigation.navigate('Login')}>
        <Text style={styles.goback}>Atras</Text>
      </TouchableOpacity>
      <Image
        source={require('../assets/Logo-no-background.png')}
        style={styles.logoBackground}
      />
      <Text style={styles.title}>Registro</Text>
      <CustomTextInput iconName="user" placeholder="Nombre Completo" />
      <CustomTextInput iconName="envelope-o" placeholder="Correo" />
      <CustomTextInput
        iconName="lock"
        placeholder="Contraseña"
        secureTextEntry
      />
      <CustomTextInput
        iconName="lock"
        placeholder="Confirmar Contraseña"
        secureTextEntry
      />
      <Button title="Registrarse" onPress={() => {}} />
      <TouchableOpacity onPress={() => navigation.navigate('Login')}>
        <Text style={styles.signInText}>
          ¿Ya tienes cuenta?{' '}
          <Text style={styles.singInTextBold}> Inicia Sesión </Text>
        </Text>
      </TouchableOpacity>
    </View>
  );
};
const styles = StyleSheet.create({
  goback: {
    fontSize: 16,
    color: 'orange',
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 20,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 24,
    color: 'blue',
    fontWeight: 'bold',
    marginBottom: 30,
    textAlign: 'left',
  },
  signInText: {
    color: 'blue',
    textAlign: 'center',
    marginTop: 50,
  },
  singInTextBold: {
    fontWeight: 'bold',
  },
  logoBackground: {
    width: null,
    resizeMode: 'contain',
    height: 40,
    marginBottom: 30,
  },
});
export default SingUp;
