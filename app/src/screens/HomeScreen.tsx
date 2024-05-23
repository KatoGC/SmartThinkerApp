import {
  SafeAreaView,
  ScrollView,
  View,
  Text,
  FlatList,
  StyleSheet,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import CourseCard from '../components/CourseCard';
import ActivityCard from '../components/ActivityCard';
import {useNavigation} from '@react-navigation/native';

const HomeScreen = () => {
  const [activities, setActivities] = useState({});
  const [userCourses, setUserCourses] = useState({});
  useEffect(() => {
    const fetchActivitiesAndCourses = async () => {
      try {
        const activitiesData = await fetchActivitiesFromStrapi();
        const coursesData = await fetchCoursesFromStrapi();

        setActivities(activitiesData);
        setUserCourses(coursesData);
      } catch (error) {
        console.error('Error fetching data: ', error);
      }
    };
    fetchActivitiesAndCourses();
  }, []);

  const navigation = useNavigation(); // Obtén el objeto de navegación

  const handleLogout = () => {
    navigation.navigate('Login'); // Navega a la pantalla de Login
  };
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <TouchableOpacity style={styles.logoutButton} onPress={handleLogout}>
          <Text style={styles.logoutButtonText}>Cerrar Sesión (Temporal)</Text>
        </TouchableOpacity>
        {/* Barra de Búsqueda */}
        <View style={styles.searchContainer}>
          <TextInput style={styles.searchInput} placeholder="Search..." />
          <Icon name="search-outline" size={24} color="gray" />
        </View>

        {/* Actividades */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Actividades</Text>
          <FlatList
            data={activities}
            renderItem={({item}) => <ActivityCard activity={item} />}
            keyExtractor={item => item.id.toString()}
            horizontal
            showsHorizontalScrollIndicator={false}
          />
        </View>

        {/* Mis Cursos */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Mis Cursos</Text>
          <FlatList
            data={userCourses}
            renderItem={({item}) => <CourseCard course={item} />}
            keyExtractor={item => item.id.toString()}
          />
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
    padding: 10,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    margin: 10,
  },
  searchInput: {
    flex: 1,
    marginRight: 10,
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
});

export default HomeScreen;
