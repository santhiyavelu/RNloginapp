import {useState, useContext} from 'react';
import {View, Text, TouchableOpacity, TextInput} from 'react-native';
import {useMyContext} from '../../context/MyContext';
import styles from './styles';

const HomeScreen = ({navigation}) => {
  const {updateData} = useMyContext();

  return (
    <View>
      <Text>Welcome to Home Screen</Text>
      <TouchableOpacity
        style={styles.submit}
        onPress={() => {
          navigation.navigate('Dashboard');
        }}>
        <Text style={styles.buttontext}>Dashboard</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.submit}
        onPress={() => {
          updateData(false);
        }}>
        <Text style={styles.buttontext}>LOG OUT</Text>
      </TouchableOpacity>
    </View>
  );
};
export default HomeScreen;
