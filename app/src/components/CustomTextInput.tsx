import React from 'react';
import {View, TextInput, StyleSheet, TextInputProps} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

interface CustomTextInputProps extends TextInputProps {
  iconName: string;
}

const CustomTextInput: React.FC<CustomTextInputProps> = ({
  iconName,
  ...props
}) => {
  return (
    <View style={styles.container}>
      <Icon name={iconName} size={20} color="#000" style={styles.icon} />
      <TextInput style={styles.input} {...props} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1.5,
    borderColor: 'blue',
    borderRadius: 25,
    padding: 1,
    marginBottom: 20,
  },
  icon: {
    marginRight: 15,
    paddingLeft: 15,
  },
  input: {
    flex: 1,
  },
});

export default CustomTextInput;
