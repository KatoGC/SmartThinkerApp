import {View, StyleSheet, Image} from 'react-native';
import React, {useEffect, useRef} from 'react';
import {StackNavigationProp} from '@react-navigation/stack';
import {RootStackParamList} from '../../../App';
import {useNavigation} from '@react-navigation/native';
import * as Animatable from 'react-native-animatable';

type SplashScreenNavigationProp = StackNavigationProp<
  RootStackParamList,
  'SplashScreen'
>;

const SplashScreen = () => {
  const navigation = useNavigation<SplashScreenNavigationProp>();

  const viewRef = useRef(null);

  useEffect(() => {
    viewRef.current?.fadeIn(1000).then(() => {
      setTimeout(() => {
        navigation.replace('Login');
      }, 1000); // Espera 1 segundo más para que se vea la animación
    });
  }, [navigation]);

  return (
    <Animatable.View ref={viewRef} style={styles.container}>
      <Image source={require('../assets/Logo.png')} style={styles.logo} />
      <Image source={require('../assets/Logo-no-background.png')} />
    </Animatable.View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  logo: {
    width: 250,
    height: 250,
    marginBottom: 20,
  },
});
export default SplashScreen;
