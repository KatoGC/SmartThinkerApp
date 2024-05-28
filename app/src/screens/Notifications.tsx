import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  View,
  Text,
} from 'react-native';
import React from 'react';
import {useNavigation} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import {RootStackParamList} from '../../../App';
import Icon from 'react-native-vector-icons/Ionicons';

const notifications = [
  {
    id: 1,
    title: 'New Course Available',
    message: 'Check out the new course on React Native.',
    date: '2024-05-27',
  },
  {
    id: 2,
    title: 'Assignment Due',
    message: 'Your assignment is due tomorrow.',
    date: '2024-05-26',
  },
  {
    id: 3,
    title: 'Profile Updated',
    message: 'Your profile has been successfully updated.',
    date: '2024-05-25',
  },
];

const Notifications = () => {
  const navigation = useNavigation<StackNavigationProp<RootStackParamList>>();
  return (
    <SafeAreaView style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Icon name="arrow-back-outline" size={30} color="white" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Notifications</Text>
      </View>

      <ScrollView contentContainerStyle={styles.contentContainer}>
        {notifications.map(notification => (
          <View key={notification.id} style={styles.notificationCard}>
            <Text style={styles.notificationTitle}>{notification.title}</Text>
            <Text style={styles.notificationMessage}>
              {notification.message}
            </Text>
            <Text style={styles.notificationDate}>{notification.date}</Text>
          </View>
        ))}
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
    padding: 15,
  },
  notificationCard: {
    backgroundColor: '#f9f9f9',
    padding: 15,
    borderRadius: 10,
    marginBottom: 10,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 1,
  },
  notificationTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  notificationMessage: {
    fontSize: 16,
    marginBottom: 5,
  },
  notificationDate: {
    fontSize: 14,
    color: '#777',
  },
});
export default Notifications;
