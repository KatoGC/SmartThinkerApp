import {
  SafeAreaView,
  ScrollView,
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import {useNavigation} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import {RootStackParamList} from '../../../App';

const HomeScreen = () => {
  const navigation = useNavigation<StackNavigationProp<RootStackParamList>>(); // Obtén el objeto de navegación
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <TouchableOpacity onPress={() => navigation.navigate('Login')}>
          <Text style={styles.logoutButtonText}>Cerrar Sesión (Temporal)</Text>
        </TouchableOpacity>
        {/* Barra de Búsqueda */}
        <View style={styles.searchContainer}>
          <TextInput style={styles.searchInput} placeholder="Buscar cursos" />
          <Icon
            style={styles.icon}
            name="search-outline"
            size={20}
            color="gray"
          />
        </View>

        {/* Actividades */}
        <View style={styles.section}>
          <TouchableOpacity
            onPress={() => navigation.navigate('ActivitiesScreen')}>
            <Text style={styles.sectionTitle}>Actividades</Text>
          </TouchableOpacity>
        </View>

        {/* Cursos */}
        <View style={styles.section}>
          <TouchableOpacity
            onPress={() => navigation.navigate('CoursesScreen')}>
            <Text style={styles.sectionTitle}>Cursos</Text>
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
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 1,
    borderWidth: 1.5,
    borderColor: '#ccc',
    borderRadius: 10,
    margin: 5,
  },
  icon: {
    paddingRight: 5,
  },
  searchInput: {
    flex: 1,
    marginRight: 15,
  },
  section: {
    marginBottom: 20,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginLeft: 10,
    marginBottom: 10,
  },
  logoutButtonText: {
    fontSize: 16,
  },
});

export default HomeScreen;
