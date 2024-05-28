import {
  SafeAreaView,
  ScrollView,
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import React, {useState} from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import {useNavigation} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import {RootStackParamList} from '../../../App';

const EditProfileScreen = () => {
  const navigation = useNavigation<StackNavigationProp<RootStackParamList>>();

  // Estado para los campos de usuario
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [occupation, setOccupation] = useState('');
  const [role, setRole] = useState('Estudiante');

  const handleSave = () => {
    // Logica para guardar cambios
    // Strapi
    console.log('Guardando cambios...', {name, email, occupation, role});
    navigation.goBack();
  };

  const handleCancel = () => {
    // Logica para cancelar cambios
    navigation.goBack();
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
            value={name}
            onChangeText={setName}
          />

          <Text style={styles.infoLabel}>Email</Text>
          <TextInput
            style={styles.infoInput}
            value={email}
            onChangeText={setEmail}
            keyboardType="email-address"
          />

          <Text style={styles.infoLabel}>Ocupacion</Text>
          <TextInput
            style={styles.infoInput}
            value={occupation}
            onChangeText={setOccupation}
          />

          <Text style={styles.infoLabel}>Rol</Text>
          <TextInput
            style={styles.infoInput}
            value={role}
            onChangeText={setRole}
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
