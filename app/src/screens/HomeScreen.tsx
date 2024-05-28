import {
  SafeAreaView,
  ScrollView,
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  TextInput,
  Image,
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
      <TouchableOpacity onPress={() => navigation.navigate('Login')}>
        <Text style={styles.logoutButtonText}>Cerrar Sesión (Temporal)</Text>
      </TouchableOpacity>

      {/* Header */}
      <View style={styles.header}>
        <Image
          source={require('../assets/Logo-no-background.png')}
          style={styles.logo}
        />
        <View style={styles.headerRight}>
          <TouchableOpacity
            onPress={() => navigation.navigate('Notifications')}>
            <Icon name="notifications-outline" size={30} color="orange" />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate('UserScreen')}>
            <Icon name="person-outline" size={30} color="orange" />
          </TouchableOpacity>
        </View>
      </View>
      <ScrollView>
        {/* Barra de Búsqueda */}
        <View style={styles.searchContainer}>
          <TextInput style={styles.searchInput} placeholder="Buscar cursos" />
          <Icon
            style={styles.searchIcon}
            name="search-outline"
            size={20}
            color="gray"
          />
          <TouchableOpacity>
            <Icon
              style={styles.gridIcon}
              name="grid-outline"
              size={20}
              color="gray"
            />
          </TouchableOpacity>
        </View>
        <ScrollView>
          {/* Actividades */}
          <View style={styles.section}>
            <TouchableOpacity
              onPress={() => navigation.navigate('ActivitiesScreen')}>
              <Text style={styles.sectionTitle}>Actividades</Text>
            </TouchableOpacity>
            <ScrollView horizontal={true} style={styles.activitiesContainer}>
              <View style={styles.activityCard}>
                <Image
                  source={require('../assets/imagenTest.jpg')}
                  style={styles.activityImage}
                />
                <Text style={styles.activityTitle}>Ejemplo de actividad</Text>
                <TouchableOpacity style={styles.enrollButton}>
                  <Text style={styles.enrollButtonText}>Inscribirse</Text>
                </TouchableOpacity>
              </View>
              <View style={styles.activityCard}>
                <Image
                  source={require('../assets/imagenTest.jpg')}
                  style={styles.activityImage}
                />
                <Text style={styles.activityTitle}>Ejemplo de actividad</Text>
                <TouchableOpacity style={styles.enrollButton}>
                  <Text style={styles.enrollButtonText}>Inscribirse</Text>
                </TouchableOpacity>
              </View>
              <View style={styles.activityCard}>
                <Image
                  source={require('../assets/imagenTest.jpg')}
                  style={styles.activityImage}
                />
                <Text style={styles.activityTitle}>Ejemplo de actividad</Text>
                <TouchableOpacity style={styles.enrollButton}>
                  <Text style={styles.enrollButtonText}>Inscribirse</Text>
                </TouchableOpacity>
              </View>
              <View style={styles.activityCard}>
                <Image
                  source={require('../assets/imagenTest.jpg')}
                  style={styles.activityImage}
                />
                <Text style={styles.activityTitle}>Ejemplo de actividad</Text>
                <TouchableOpacity style={styles.enrollButton}>
                  <Text style={styles.enrollButtonText}>Inscribirse</Text>
                </TouchableOpacity>
              </View>
            </ScrollView>
          </View>
        </ScrollView>

        {/* Cursos */}
        <View style={styles.section}>
          <TouchableOpacity
            onPress={() => navigation.navigate('CoursesScreen')}>
            <Text style={styles.sectionTitle}>Cursos</Text>
          </TouchableOpacity>
          <ScrollView horizontal={true} style={styles.activitiesContainer}>
            <View style={styles.activityCard}>
              <Image
                source={require('../assets/imagenTest.jpg')}
                style={styles.activityImage}
              />
              <Text style={styles.activityTitle}>Ejemplo de cursos</Text>
              <TouchableOpacity style={styles.enrollButton}>
                <Text style={styles.enrollButtonText}>Inscribirse</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.activityCard}>
              <Image
                source={require('../assets/imagenTest.jpg')}
                style={styles.activityImage}
              />
              <Text style={styles.activityTitle}>Ejemplo de cursos</Text>
              <TouchableOpacity style={styles.enrollButton}>
                <Text style={styles.enrollButtonText}>Inscribirse</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.activityCard}>
              <Image
                source={require('../assets/imagenTest.jpg')}
                style={styles.activityImage}
              />
              <Text style={styles.activityTitle}>Ejemplo de cursos</Text>
              <TouchableOpacity style={styles.enrollButton}>
                <Text style={styles.enrollButtonText}>Inscribirse</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.activityCard}>
              <Image
                source={require('../assets/imagenTest.jpg')}
                style={styles.activityImage}
              />
              <Text style={styles.activityTitle}>Ejemplo de cursos</Text>
              <TouchableOpacity style={styles.enrollButton}>
                <Text style={styles.enrollButtonText}>Inscribirse</Text>
              </TouchableOpacity>
            </View>
          </ScrollView>
        </View>

        {/*  Mis cursos */}
        <TouchableOpacity>
          <Text style={styles.sectionTitle}>Mis Cursos</Text>
        </TouchableOpacity>
        <View style={styles.courseCard}>
          <Image
            source={require('../assets/imagenTest.jpg')}
            style={styles.courseImage}
          />
          <Text style={styles.courseTitle}>Ejemeplo MiCurso</Text>
          <Text style={styles.courseSubtitle}>Descripcion MiCurso</Text>
          <View style={styles.progressBar}>
            <View style={[styles.progress, {width: '50%'}]} />
          </View>
          <TouchableOpacity style={styles.continueButton}>
            <Text style={styles.continueButtonText}>Continue</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.courseCard}>
          <Image
            source={require('../assets/imagenTest.jpg')}
            style={styles.courseImage}
          />
          <Text style={styles.courseTitle}>Ejemeplo MiCurso</Text>
          <Text style={styles.courseSubtitle}>Descripcion MiCurso</Text>
          {/* Barra progreso */}
          <View style={styles.progressBar}>
            <View style={[styles.progress, {width: '50%'}]} />
          </View>
          <TouchableOpacity style={styles.continueButton}>
            <Text style={styles.continueButtonText}>Continue</Text>
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
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 10,
    margin: 5,
  },
  searchIcon: {
    marginRight: 10,
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
  logo: {
    width: 150,
    height: 35,
    tintColor: 'white',
    resizeMode: 'stretch',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 10,
    backgroundColor: '#1E3A8A', // Navy blue color
  },
  headerRight: {
    flexDirection: 'row',
  },
  gridIcon: {
    marginRight: 10,
  },
  courseCard: {
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 15,
    marginHorizontal: 15,
    marginVertical: 10,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowOffset: {width: 0, height: 2},
    shadowRadius: 5,
    elevation: 5,
  },
  courseImage: {
    width: '100%',
    height: 150,
    borderRadius: 10,
  },
  courseTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginVertical: 5,
  },
  courseSubtitle: {
    fontSize: 14,
    color: 'gray',
  },
  progressBar: {
    height: 5,
    backgroundColor: '#e0e0e0',
    borderRadius: 5,
    overflow: 'hidden',
    marginVertical: 10,
  },
  progress: {
    height: '100%',
    backgroundColor: '#76c7c0',
  },
  continueButton: {
    backgroundColor: '#76c7c0',
    padding: 10,
    borderRadius: 5,
    alignItems: 'center',
  },
  continueButtonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
  activitiesContainer: {
    paddingHorizontal: 15,
  },
  activityCard: {
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 10,
    marginRight: 10,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowOffset: {width: 0, height: 2},
    shadowRadius: 5,
    elevation: 5,
  },
  activityImage: {
    width: 150,
    height: 100,
    borderRadius: 10,
  },
  activityTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    marginVertical: 5,
  },
  enrollButton: {
    backgroundColor: '#1E3A8A',
    padding: 5,
    borderRadius: 5,
    alignItems: 'center',
  },
  enrollButtonText: {
    color: '#fff',
  },
});

export default HomeScreen;
