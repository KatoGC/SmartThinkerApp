import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  FlatList,
  SafeAreaView,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons'; // O el paquete de iconos que prefieras

const CourseScreen = ({route}) => {
  const {courseId} = route.params; // Obtén el ID del curso desde los parámetros de navegación
  const [course, setCourse] = useState(null);

  useEffect(() => {
    // Lógica para obtener los datos del curso desde Strapi usando el courseId
    const fetchCourseDetails = async () => {
      try {
        // Realiza la solicitud a tu API de Strapi
        // ...
        const courseData = await fetchCourseFromStrapi(courseId);
        setCourse(courseData);
      } catch (error) {
        console.error('Error fetching course details:', error);
        // Manejo de errores (mostrar mensaje al usuario, etc.)
      }
    };

    fetchCourseDetails();
  }, [courseId]); // El useEffect se ejecuta cada vez que cambia el courseId

  if (!course) {
    return <Text>Cargando curso...</Text>; // Mostrar un indicador de carga mientras se obtienen los datos
  }

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <Image
          source={{uri: course.imagenDestacada}}
          style={styles.coverImage}
        />

        <View style={styles.courseInfo}>
          <Text style={styles.courseTitle}>{course.titulo}</Text>
          <View style={styles.instructorInfo}>
            <Text style={styles.instructorName}>
              {course.instructor.nombre}
            </Text>
            {/* ... (Calificación del instructor) ... */}
          </View>
          <View style={styles.courseDetails}>
            <Icon name="time-outline" size={18} color="gray" />
            <Text style={styles.courseDetailText}>{course.duracion}</Text>
            <Icon name="book-outline" size={18} color="gray" />
            <Text style={styles.courseDetailText}>
              {course.lecciones.length} módulos
            </Text>
          </View>
          <Text style={styles.courseDescription}>{course.descripcion}</Text>
        </View>

        {/* Lecciones */}
        <View style={styles.lessonsContainer}>
          <Text style={styles.sectionTitle}>Lecciones</Text>
          <FlatList
            data={course.lecciones}
            renderItem={({item}) => (
              <View style={styles.lessonItem}>
                <Image
                  source={{uri: item.miniatura}}
                  style={styles.lessonImage}
                />
                <View style={styles.lessonInfo}>
                  <Text style={styles.lessonTitle}>{item.titulo}</Text>
                  <Text style={styles.lessonDuration}>{item.duracion} min</Text>
                </View>
                <TouchableOpacity style={styles.playButton}>
                  <Icon name="play-circle-outline" size={24} color="white" />
                </TouchableOpacity>
              </View>
            )}
            keyExtractor={item => item.id.toString()}
          />
        </View>

        {/* Botón "Enroll Now" */}
        <TouchableOpacity style={styles.enrollButton}>
          <Text style={styles.enrollButtonText}>Enroll Now</Text>
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
  coverImage: {
    width: '100%',
    height: 200, // Ajusta la altura según tus necesidades
  },
  courseInfo: {
    padding: 20,
  },
  courseTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  instructorInfo: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  instructorName: {
    fontSize: 16,
    marginRight: 10,
  },
  courseDetails: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  courseDetailText: {
    fontSize: 14,
    color: 'gray',
    marginLeft: 5,
    marginRight: 15,
  },
  courseDescription: {
    fontSize: 16,
    lineHeight: 24, // Espacio entre líneas
  },
  lessonsContainer: {
    padding: 20,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  lessonItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  lessonImage: {
    width: 50,
    height: 50,
    borderRadius: 5,
    marginRight: 10,
  },
  lessonInfo: {
    flex: 1, // Ocupa el espacio restante
  },
  lessonTitle: {
    fontSize: 16,
    marginBottom: 5,
  },
  lessonDuration: {
    fontSize: 14,
    color: 'gray',
  },
  playButton: {
    padding: 10,
    borderRadius: 20,
    backgroundColor: 'blue',
  },
  enrollButton: {
    backgroundColor: 'orange',
    padding: 15,
    borderRadius: 5,
    alignItems: 'center',
    marginHorizontal: 20,
    marginBottom: 20,
  },
  enrollButtonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
});
