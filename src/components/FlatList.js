import React from 'react';
import {View, Text, FlatList, TouchableOpacity, StyleSheet} from 'react-native';
import {deleteTask} from '../services/TaskService';
import {useNavigation} from '@react-navigation/native';

export default function FlatListComponent({tasks, getDataa}) {
  const navigation = useNavigation();
  const deleteData = async id => {
    await deleteTask(id);
    await getDataa();
  };
  const getData = ({item}) => {
    return (
      <View style={styles.container}>
        <View style={{alignItems: 'center', paddingBottom: 20}}>
          <Text style={styles.text}>Title:</Text>
          <Text style={styles.textItem}>{item.title}</Text>
          <Text style={styles.text}>Description: </Text>
          <Text style={styles.textItem}>{item.description}</Text>
        </View>
        <View style={{flexDirection: 'row', justifyContent: 'space-around'}}>
          <TouchableOpacity
            onPress={() =>
              navigation.navigate('UpdateTask', {item: item, data: getDataa})
            }
            style={styles.buttonupdate}>
            <Text style={styles.textbutton}>Update</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => deleteData(item.id)}
            style={styles.button}>
            <Text style={styles.textbutton}>Delete</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  };
  return (
    <View>
      <FlatList data={tasks} renderItem={getData} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'grey',
    marginTop: 20,
    marginHorizontal: 10,
    paddingVertical: 20,
    justifyContent: 'center',
    borderRadius: 10,
  },
  text: {
    color: 'white',
    fontSize: 18,
  },
  textItem: {
    fontSize: 16,
  },
  button: {
    backgroundColor: '#1e1e1e',
    borderRadius: 20,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    width: '40%',
  },
  buttonupdate: {
    backgroundColor: '#1e1e1e',
    borderRadius: 20,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    width: '40%',
  },
  textbutton: {
    color: 'white',
  },
});
