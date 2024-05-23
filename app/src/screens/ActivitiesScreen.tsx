import React, {useEffect, useState} from 'react';
import {
  SafeAreaView,
  Text,
  FlatList,
  StyleSheet,
  TouchableOpacity,
  View,
  Image,
} from 'react-native';
import ActivityCard from '../components/ActivityCard'
// ... (Importa tu componente ActivityCard)

const ActivitiesScreen = () => {
  const [activities, setActivities] = useState([]);

  useEffect(() => {
    // Lógica para obtener datos de actividades desde Strapi
    const fetchActivities = async () => {
      try {
        // ... (Realiza la solicitud a tu API de Strapi)
        const activitiesData = await fetchActivitiesFromStrapi();
        setActivities(activitiesData);
      } catch (error) {
        console.error('Error fetching activities:', error);
        // ... (Manejo de errores)
      }
    };

    fetchActivities();
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      {/* Encabezado (Opcional) */}
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Actividades Disponibles</Text>
        {/* ... (Barra de búsqueda y filtros) ... */}
      </View>

      {/* Lista de Actividades */}
      <FlatList
        data={activities}
        renderItem={({item}) => <ActivityCard activity={item} />}
        keyExtractor={item => item.id.toString()}
      />
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    padding: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  headerTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
});

export default ActivitiesScreen;
