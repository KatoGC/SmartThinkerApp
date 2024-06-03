import {
  SafeAreaView,
  ScrollView,
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  TextInput,
  Alert,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import {useNavigation} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import {RootStackParamList} from '../../../App';
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';

const EditProfileScreen = () => {
  const navigation = useNavigation<StackNavigationProp<RootStackParamList>>();
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const jwt = await AsyncStorage.getItem('jwt');
        if (!jwt) {
          navigation.navigate('Login');
          return;
        }
        const response = await axios.get('http://10.0.2.2:1337/api/users/me', {
          headers: {
            Authorization: `Bearer ${jwt}`,
          },
        });
        setUserData(response.data);
      } catch (error) {
        console.error(
          'Error fetching user data:',
          error.response ? error.response.data : error.message,
        );
        Alert.alert(
          'Error',
          'Ocurrió un error al cargar los datos del usuario',
        );
      }
    };

    fetchUserData();
  }, []); // <-- Ejecuta el efecto solo una vez al montar el componente

  const handleSave = async () => {
    try {
      const jwt = await AsyncStorage.getItem('jwt');
      if (!jwt) {
        navigation.navigate('Login');
        return;
      }

      const response = await axios.put(
        `http://10.0.2.2:1337/api/users/${userData.id}`,
        {
          username: userData.username,
          email: userData.email,
          occupation: userData.occupation,
          description: userData.description,
          age: userData.age,
        },
        {
          headers: {
            Authorization: `Bearer ${jwt}`,
          },
        },
      );

      console.log('Perfil actualizado:', response.data);
      Alert.alert('Éxito', 'Perfil actualizado correctamente');
      navigation.goBack(); // Regresar a la pantalla anterior
    } catch (error) {
      console.error(
        'Error al actualizar el perfil:',
        error.response ? error.response.data : error.message,
      );
      Alert.alert('Error', 'Ocurrió un error al actualizar el perfil');
    }
  };
  const handleCancel = () => {
    // Logica para cancelar cambios
    navigation.goBack(); // Regresar a la pantalla anterior
  };

  return (
    <SafeAreaView style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity onPress={handleCancel}>
          <Icon name="arrow-back-outline" size={30} color="white" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Editar perfil</Text>
      </View>

      <ScrollView contentContainerStyle={styles.contentContainer}>
        {/* User Information */}
        <View style={styles.infoContainer}>
          <Text style={styles.infoLabel}>Nombre</Text>
          <TextInput
            style={styles.infoInput}
            value={userData ? userData.username : ''}
            onChangeText={text => setUserData({...userData, username: text})}
          />

          <Text style={styles.infoLabel}>Email</Text>
          <TextInput
            style={styles.infoInput}
            value={userData ? userData.email : ''}
            onChangeText={text => setUserData({...userData, email: text})}
            keyboardType="email-address"
          />

          <Text style={styles.infoLabel}>Ocupacion</Text>
          <TextInput
            style={styles.infoInput}
            value={userData ? userData.occupation : ''}
            onChangeText={text => setUserData({...userData, occupation: text})}
          />

          <Text style={styles.infoLabel}>Descripcion</Text>
          <TextInput
            style={styles.infoInput}
            value={userData ? userData.description : ''}
            onChangeText={text => setUserData({...userData, description: text})}
          />

          <Text style={styles.infoLabel}>Edad</Text>
          <TextInput
            style={styles.infoInput}
            value={userData ? userData.age.toString() : ''}
            onChangeText={text =>
              setUserData(prevData => ({
                ...prevData,
                age: text === '' ? 0 : parseInt(text, 10),
              }))
            }
            keyboardType="numeric" // Convertir a número
          />
        </View>

        {/* Save and Cancel Buttons */}
        <View style={styles.buttonContainer}>
          <TouchableOpacity style={styles.saveButton} onPress={handleSave}>
            <Text style={styles.saveButtonText}>Guardar</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.cancelButton} onPress={handleCancel}>
            <Text style={styles.cancelButtonText}>Cancelar</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 15,
    backgroundColor: '#1E3A8A', // Navy blue color
  },
  headerTitle: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
    marginLeft: 10,
  },
  contentContainer: {
    alignItems: 'center',
    padding: 15,
  },
  infoContainer: {
    width: '100%',
    marginBottom: 20,
  },
  infoLabel: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  infoInput: {
    width: '100%',
    padding: 10,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 10,
    marginBottom: 15,
  },
  buttonContainer: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  saveButton: {
    flex: 1,
    padding: 15,
    backgroundColor: '#76c7c0',
    borderRadius: 10,
    alignItems: 'center',
    marginRight: 10,
  },
  saveButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  cancelButton: {
    flex: 1,
    padding: 15,
    backgroundColor: '#ff4d4d',
    borderRadius: 10,
    alignItems: 'center',
    marginLeft: 10,
  },
  cancelButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});
export default EditProfileScreen;
