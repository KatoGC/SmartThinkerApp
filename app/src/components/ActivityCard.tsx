import React from 'react';
import {View, Text, Image, TouchableOpacity, StyleSheet} from 'react-native';

const ActivityCard = ({activity}) => {
  return (
    <TouchableOpacity style={styles.card}>
      <Image source={{uri: activity.imagen}} style={styles.image} />
      <View style={styles.info}>
        <Text style={styles.title}>{activity.titulo}</Text>
        <Text style={styles.description}>{activity.descripcion}</Text>
      </View>
    </TouchableOpacity>
  );
};
const styles = StyleSheet.create({
  card: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 15,
    margin: 10,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
  },
  image: {
    width: 80,
    height: 80,
    borderRadius: 8,
    marginRight: 15,
  },
  info: {
    flex: 1, // Ocupa el espacio restante
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  description: {
    fontSize: 14,
    color: 'gray',
  },
});

export default ActivityCard;