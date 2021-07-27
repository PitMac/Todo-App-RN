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
import {updateTask} from '../services/TaskService';
import {useNavigation} from '@react-navigation/native';
import {styles} from '../styles/Styles';

LogBox.ignoreLogs([
  'Non-serializable values were found in the navigation state',
]);

export default function UpdateTask({route}) {
  const navigation = useNavigation();
  const {item, data} = route.params;
  const [title, setTitle] = useState(item.title);
  const [desc, setDesc] = useState(item.description);
  const [doo, setDo] = useState(false);

  const updateData = async id => {
    console.log(title);
    await updateTask(id, title, desc);
    await data();
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
          value={doo}
          onChange={() => setDo(previousState => !previousState)}
        />
      </View>
      <View>
        <TouchableOpacity
          style={styles.button}
          onPress={() => updateData(item.id)}>
          <Text style={styles.textButton}>Update</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
