import React, {useState} from 'react';
import {
  ScrollView,
  View,
  Text,
  Button,
  StyleSheet,
  TouchableOpacity,
  Image,
  Alert,
} from 'react-native';
import {StackNavigationProp} from '@react-navigation/stack';
import {RootStackParamList} from '../../../App';
import {useNavigation} from '@react-navigation/native';
import Spinner from 'react-native-loading-spinner-overlay';
import CustomTextInput from '../components/CustomTextInput';
import {Picker} from '@react-native-picker/picker';
import axios from 'axios';

type SingUpScreenNavigationProp = StackNavigationProp<
  RootStackParamList,
  'SignUp'
>;

const SignUp = () => {
  const navigation = useNavigation<SingUpScreenNavigationProp>();
  // Estados para los atributos del usuario
  const [name, setName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [occupation, setOccupation] = useState('');
  const [age, setAge] = useState('');
  const [role, setRole] = useState('Estudiante');
  const [description, setDescription] = useState('');
  const [loading, setLoading] = useState(false);

  const validateEmail = (email) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  };

  const checkEmailExists = async (email) => {
    try {
      const response = await axios.get(
        `http://10.0.2.2:1337/api/usuarios?filters[email][$eq]=${email}`,
      );
      console.log('Email check response:', response.data);
      return response.data.length > 0;
    } catch (error: any) {
      console.error(
        'Error checking email:',
        error.response ? error.response.data : error.message,
      );
      return false;
    }
  };
  const handleRegister = async () => {
    console.log('Starting registration...');
    if (
      !name ||
      !lastName ||
      !email ||
      !password ||
      !confirmPassword ||
      !occupation ||
      !age ||
      !role ||
      !description
    ) {
      Alert.alert('Error', 'Por favor, comeplete todos los campos.');
      return;
    }
    if (!validateEmail(email)) {
      Alert.alert('Error', 'Por favor, ingrese un correo electrónico válido.');
      return;
    }

    if (password !== confirmPassword) {
      Alert.alert('Error', 'Las contraseñas no coinciden.');
      return;
    }
    setLoading(true); // Mostrar spinner
    try {
      const emailExist = await checkEmailExists(email);
      if (emailExist) {
        setLoading(false); // Ocultar spinner
        Alert.alert('Error', 'El correo electronico ya esta registrado.');
        return;
      }

      const body = {
        data: {
          name: name,
          lastName: lastName,
          email: email,
          password: password,
          occupation: occupation,
          age: age,
          role: role,
          description: description,
        },
      };
      console.log(body);
      const response = await axios.post(
        'http://10.0.2.2:1337/api/usuarios',
        body, // Aquí enviamos el objeto body directamente
        {
          headers: {
            'Content-Type': 'application/json',
          },
        },
      );
      console.log('Registration response', response.data);
      setLoading(false); // Ocultar spinner
      // Mostrar mensaje de éxito
      Alert.alert('Registro exitoso', 'Tu cuenta ha sido creada exitosamente', [
        {
          text: 'OK',
          onPress: () => navigation.navigate('Login'), // Navegar a la pantalla de Login
        },
      ]);
    } catch (error) {
      console.error(
        'Error registering',
        error.response ? error.response.data : error.message,
      );
      setLoading(false); // Ocultar spinner
      Alert.alert(
        'Error',
        'Hubo un problema con el registro. Intentalo de nuevo',
      );
    }
  };

  return (
    <ScrollView contentContainerStyle={styles.contentContainer}>
      <View style={styles.container}>
        <Spinner
          visible={loading}
          textContent={'Registrando...'}
          textStyle={styles.spinnerTextStyle}
        />
        <TouchableOpacity onPress={() => navigation.navigate('Login')}>
          <Text style={styles.goback}>Atrás</Text>
        </TouchableOpacity>
        <Image
          source={require('../assets/Logo-no-background.png')}
          style={styles.logoBackground}
        />
        <Text style={styles.title}>Registro</Text>
        <CustomTextInput
          iconName="user"
          placeholder="Nombre"
          value={name}
          onChangeText={setName}
        />
        <CustomTextInput
          iconName="user"
          placeholder="Apellido"
          value={lastName}
          onChangeText={setLastName}
        />
        <CustomTextInput
          iconName="envelope-o"
          placeholder="Correo"
          value={email}
          onChangeText={setEmail}
        />
        <CustomTextInput
          iconName="lock"
          placeholder="Contraseña"
          value={password}
          onChangeText={setPassword}
          secureTextEntry
        />
        <CustomTextInput
          iconName="lock"
          placeholder="Confirmar Contraseña"
          value={confirmPassword}
          onChangeText={setConfirmPassword}
          secureTextEntry
        />
        <CustomTextInput
          iconName="briefcase"
          placeholder="Ocupación"
          value={occupation}
          onChangeText={setOccupation}
        />
        <CustomTextInput
          iconName="calendar"
          placeholder="Edad"
          value={age}
          onChangeText={text => setAge(text.replace(/[^0-9]/g, ''))} // Solo permitir números
          keyboardType="numeric"
        />
        <Picker
          style={styles.picker}
          selectedValue={role}
          onValueChange={itemValue => setRole(itemValue)}>
          <Picker.Item label="Estudiante" value="Estudiante" />
          <Picker.Item label="Profesor" value="Profesor" />
          <Picker.Item label="Administrador" value="Administrador" />
        </Picker>
        <CustomTextInput
          iconName="address-book"
          multiline
          numberOfLines={4}
          placeholder="Descripción/Biografía"
          value={description}
          onChangeText={setDescription}
        />
        <Button title="Registrarse" onPress={handleRegister} />
        <TouchableOpacity onPress={() => navigation.navigate('Login')}>
          <Text style={styles.signInText}>
            ¿Ya tienes cuenta?{' '}
            <Text style={styles.singInTextBold}> Inicia Sesión </Text>
          </Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
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
  contentContainer: {
    justifyContent: 'center',
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
  imagePickerButton: {
    backgroundColor: 'blue', // Color de fondo similar al de los botones
    padding: 15,
    borderRadius: 12, // Bordes redondeados
    alignItems: 'center',
    marginBottom: 20,
  },
  imagePickerText: {
    color: 'white', // Texto blanco sobre fondo azul
    fontSize: 16,
    fontWeight: 'bold',
  },
  picker: {
    backgroundColor: '#f0f0f0',
    width: '100%',
    height: '5%',
    marginBottom: 20,
  },
  spinnerTextStyle: {
    color: '#FFF',
  },
});
export default SignUp;
