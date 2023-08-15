import {useState, useContext} from 'react';
import {View, Text, TouchableOpacity, TextInput} from 'react-native';
import {UserContext} from '../../context/UserContext';
import styles from './styles';

const HomeScreen = ({navigation}) => {
  const {setIsuserlogged} = useContext(UserContext);

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
          setIsuserlogged(false);
        }}>
        <Text style={styles.buttontext}>LOG OUT</Text>
      </TouchableOpacity>
    </View>
  );
};
export default HomeScreen;
