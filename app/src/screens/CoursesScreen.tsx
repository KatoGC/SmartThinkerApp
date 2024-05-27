import React from 'react';
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
import Icon from 'react-native-vector-icons/Ionicons';
import {useNavigation} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import {RootStackParamList} from '../../../App';

const CoursesScreen = () => {
  const navigation = useNavigation<StackNavigationProp<RootStackParamList>>();

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Icon name="arrow-back" size={30} color="gray" />
        </TouchableOpacity>
        <View style={styles.headerRight}>
          <TouchableOpacity
            onPress={() => navigation.navigate('Notifications')}>
            <Icon name="notifications-outline" size={30} color="gray" />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate('UserScreen')}>
            <Icon name="person-outline" size={30} color="gray" />
          </TouchableOpacity>
        </View>
      </View>

      <ScrollView>
        <View style={styles.searchContainer}>
          <TextInput style={styles.searchInput} placeholder="Buscar cursos" />
          <Icon
            style={styles.icon}
            name="search-outline"
            size={20}
            color="gray"
          />
        </View>

        <View style={styles.filterContainer}>
          <TouchableOpacity style={styles.filterButton}>
            <Text>All</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.filterButton}>
            <Text>Progress</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.filterButton}>
            <Text>Finished</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.filterButton}>
            <Text>New</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.filterButton}>
            <Text>Trending</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.courseCard}>
          <Image
            source={{uri: 'https://example.com/course-image.jpg'}}
            style={styles.courseImage}
          />
          <Text style={styles.courseTitle}>
            Introduction to Web Development
          </Text>
          <Text style={styles.courseInstructor}>Instructor | Davit Rouben</Text>
          <View style={styles.courseRating}>
            <Text>20/40</Text>
            <Icon name="star" size={20} color="orange" />
            <Text>4.5</Text>
          </View>
          <View style={styles.progressBar}>
            <View style={[styles.progress, {width: '50%'}]} />
          </View>
          <TouchableOpacity style={styles.continueButton}>
            <Text style={styles.continueButtonText}>Continue Learning</Text>
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
    justifyContent: 'space-between',
    padding: 15,
  },
  headerRight: {
    flexDirection: 'row',
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    borderWidth: 1.5,
    borderColor: '#ccc',
    borderRadius: 10,
    margin: 10,
  },
  icon: {
    paddingRight: 5,
  },
  searchInput: {
    flex: 1,
    marginRight: 15,
  },
  filterContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingVertical: 10,
  },
  filterButton: {
    padding: 10,
    backgroundColor: '#f0f0f0',
    borderRadius: 5,
  },
  courseCard: {
    backgroundColor: '#fff',
    margin: 10,
    padding: 10,
    borderRadius: 10,
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
  courseInstructor: {
    fontSize: 14,
    color: 'gray',
  },
  courseRating: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 5,
  },
  progressBar: {
    height: 5,
    backgroundColor: '#e0e0e0',
    borderRadius: 5,
    overflow: 'hidden',
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
    marginTop: 10,
  },
  continueButtonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
});

export default CoursesScreen;
