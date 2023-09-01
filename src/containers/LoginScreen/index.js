import {View, Text, TouchableOpacity, TextInput} from 'react-native';
import styles from './styles';
import {useState, useContext} from 'react';
import {useMyContext} from '../../context/MyContext';
import Config from 'react-native-config';

const LoginScreen = props => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const {updateData} = useMyContext();

  return (
    <View>
      <Text>{Config.ENV}</Text>
      <Text>{Config.API_URL}</Text>

      <TextInput
        value={username}
        onChangeText={changedText => {
          setUsername(changedText);
        }}
        placeholder="Enter Username"
        style={styles.textinput}
      />
      <TextInput
        value={password}
        onChangeText={changedText => {
          setPassword(changedText);
        }}
        placeholder="Enter Password"
        style={styles.textinput}
      />

      <TouchableOpacity
        style={styles.submit}
        onPress={() => {
          updateData(true);
        }}>
        <Text style={styles.buttontext}>Login</Text>
      </TouchableOpacity>
    </View>
  );
};

export default LoginScreen;
