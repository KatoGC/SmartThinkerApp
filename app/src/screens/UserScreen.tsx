import React, {useEffect, useState} from 'react';
import {
  SafeAreaView,
  ScrollView,
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  TextInput,
  Image,
  Alert,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import {useNavigation} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import {RootStackParamList} from '../../../App';
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';

const UserScreen = () => {
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
        console.log('User data fetched:', response.data);
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
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Icon name="arrow-back-outline" size={30} color="white" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Perfil</Text>
      </View>

      <ScrollView contentContainerStyle={styles.contentContainer}>
        {/* Avatar */}
        <View style={styles.avatarContainer}>
          <Image
            source={{uri: 'https://unavatar.io/katogc'}} // Reemplaza con la URL de la imagen del avatar del usuario
            style={styles.avatar}
          />
        </View>

        {/* User Information */}
        {userData && (
          <View style={styles.infoContainer}>
            <Text style={styles.infoLabel}>Nombre</Text>
            <TextInput
              style={styles.infoInput}
              value={userData.username}
              editable={false}
            />

            <Text style={styles.infoLabel}>Email</Text>
            <TextInput
              style={styles.infoInput}
              value={userData.email}
              editable={false}
            />

            <Text style={styles.infoLabel}>Ocupacion</Text>
            <TextInput
              style={styles.infoInput}
              value={userData.occupation}
              editable={false}
            />

            <Text style={styles.infoLabel}>Descripcion</Text>
            <TextInput
              style={styles.infoInput}
              value={userData.description}
              editable={false}
            />

            <Text style={styles.infoLabel}>Edad</Text>
            <TextInput
              style={styles.infoInput}
              value={userData.age.toString()}
              editable={false}
            />
          </View>
        )}
        {/* Edit Profile Button */}
        <TouchableOpacity
          style={styles.editButton}
          onPress={() => navigation.navigate('EditProfileScreen')}>
          <Text style={styles.editButtonText}>Editar Perfil</Text>
        </TouchableOpacity>

        {/* Logout Button */}
        <TouchableOpacity
          style={styles.logoutButton}
          onPress={() => navigation.navigate('Login')}>
          <Text style={styles.logoutButtonText}>Cerrar Sesion</Text>
        </TouchableOpacity>
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
  avatarContainer: {
    marginBottom: 20,
  },
  avatar: {
    width: 100,
    height: 100,
    borderRadius: 50,
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
    backgroundColor: '#f0f0f0',
  },
  editButton: {
    width: '100%',
    padding: 15,
    backgroundColor: '#76c7c0',
    borderRadius: 10,
    alignItems: 'center',
    marginBottom: 10,
  },
  editButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  logoutButton: {
    width: '100%',
    padding: 15,
    backgroundColor: '#ff4d4d',
    borderRadius: 10,
    alignItems: 'center',
  },
  logoutButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default UserScreen;
