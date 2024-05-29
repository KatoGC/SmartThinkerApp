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
import CustomTextInput from '../components/CustomTextInput';
import ImagePicker from 'react-native-image-crop-picker';
import {Picker} from '@react-native-picker/picker';
import axios from 'axios';

type SingUpScreenNavigationProp = StackNavigationProp<
  RootStackParamList,
  'SingUp'
>;

const SingUp = () => {
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

  const handleRegister = async () => {
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
    try {
      const response = await axios.post(
        'http://10.180.2.26:1337/api/usuarios',
        body, // Aquí enviamos el objeto body directamente
        {
          headers: {
            'Content-Type': 'application/json',
          },
        },
      );
      console.log(response.data);

      // // Mostrar mensaje de exito
      // Alert.alert('Registro exitoso', 'Tu cuenta ha sido creada exitosamente', [
      //   {
      //     text: 'OK',
      //     onPress: () => navigation.navigate('Login'),
      //   },
      // ]);
    } catch (error) {
      console.error(
        'Error',
        error.response ? error.response.data : error.message,
      );
    }
  };

  return (
    <ScrollView contentContainerStyle={styles.contentContainer}>
      <View style={styles.container}>
        <TouchableOpacity onPress={() => navigation.navigate('Login')}>
          <Text style={styles.goback}>Atras</Text>
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
});
export default SingUp;
