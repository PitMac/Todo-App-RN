import React, {useState} from 'react';
import {
  View,
  Text,
  TextInput,
  Button,
  LogBox,
  Switch,
  TouchableOpacity,
} from 'react-native';
import {createTask} from '../services/TaskService';
import {styles} from '../styles/Styles';

LogBox.ignoreLogs([
  'Non-serializable values were found in the navigation state',
]);

export default function NewTask({route, navigation}) {
  const [title, setTitle] = useState('');
  const [desc, setDesc] = useState('');
  const [doo, setDo] = useState(false);

  const {getDataa} = route.params;

  const sendData = async () => {
    await createTask(title, desc);
    await getDataa();
    navigation.goBack();
  };

  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.text}>Title:</Text>
        <TextInput
          onChangeText={text => setTitle(text)}
          value={title}
          style={styles.input}
        />
      </View>
      <View>
        <Text style={styles.text}>Description:</Text>
        <TextInput
          onChangeText={text => setDesc(text)}
          value={desc}
          style={styles.input}
        />
        <Switch
          thumbColor="#1e1e1e"
          trackColor={{true: 'black', false: 'grey'}}
          value={doo}
          onChange={() => setDo(previousState => !previousState)}
        />
      </View>
      <View>
        <TouchableOpacity style={styles.button} onPress={sendData}>
          <Text style={styles.textButton}>Create</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
