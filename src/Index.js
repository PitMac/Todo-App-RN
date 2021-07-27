import React, {useState, useEffect} from 'react';
import {View, Text, StyleSheet, Button, TouchableOpacity} from 'react-native';
import FlatListComponent from './components/FlatList';
import {getTask} from './services/TaskService';

export default function Index({navigation}) {
  const [tasks, setTasks] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const getData = async () => {
    const task = await getTask();
    setTasks(task);
  };

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(isLoading);
      getData();
    }, 1000);
  }, []);

  return (
    <View style={styles.container}>
      <View>
        {tasks == '' ? (
          <View
            style={{
              justifyContent: 'center',
              alignItems: 'center',
              alignSelf: 'center',
              alignContent: 'center',
              marginTop: '5%',
            }}>
            <Text style={{fontSize: 17}}>There aren't tasks</Text>
          </View>
        ) : (
          <FlatListComponent tasks={tasks} getDataa={getData} />
        )}
      </View>
      <View
        style={{
          flex: 2,
          alignItems: 'center',
          alignContent: 'center',
          justifyContent: 'flex-end',
          position: 'relative',
          marginBottom: 10,
        }}>
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate('NewTask', {getDataa: getData})}>
          <Text style={styles.text}>New Task</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  button: {
    backgroundColor: '#1e1e1e',
    paddingHorizontal: 30,
    paddingVertical: 12,
    bottom: 15,
    position: 'absolute',
    borderRadius: 12,
    borderWidth: 2,
    borderColor: 'white',
  },
  text: {
    color: 'white',
  },
});
