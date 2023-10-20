import { StyleSheet, Text, View, FlatList, ImageBackground, SectionList, ScrollView, SafeAreaView } from 'react-native';
import Button from './button';
import { fruits_vegetables, workouts } from './data';
import ExeSelected from './select';
import { useState } from 'react';

export default function App() {

  const [selectedExe, setselectedExe] = useState([]);

  function chooseExe(Exe) {
    if (Exe === '') {
      if (selectedExe.length > 0) {
        const updatedExe = selectedExe.slice(0, selectedExe.length - 1);
        setselectedExe(updatedExe);
      }
    } else {
      setselectedExe([...selectedExe, Exe]);
    }
  }
  return (
    <ScrollView>
      <View style={styles.container}>
        <Text style={styles.listText}>FlatList - Workouts</Text>
        {/* <ScrollView> */}
        <View >
          <ImageBackground
            style={styles.listImage}
            source={require('./assets/images/gym.jpg')}
          >
            <FlatList
              data={workouts}
              contentContainerStyle={styles.listContainer}
              renderItem={({ item }) => {
                return (
                  <Button ButtonName={item.type} chooseExe={chooseExe} style={{ backgroundColor: 'white' }} />
                )
              }}
              style={styles.listItem}
            />
          </ImageBackground>
          <Text style={styles.listText}>SecondList - Fruits & Vegetables</Text>
          <ImageBackground
            style={styles.listImage}
            source={require('./assets/images/vegetables.jpg')}
          >
            <SectionList
              sections={fruits_vegetables}
              keyExtractor={(item, index) => item + index}
              contentContainerStyle={styles.listContainer}
              renderItem={({ item }) => {
                return (
                  <Button ButtonName={item} chooseExe={chooseExe} />
                )
              }}
              renderSectionHeader={({ section: { title } }) => (
                <Text style={styles.scText}>{title}</Text>
              )}
            />
          </ImageBackground>
        </View>
        {/* </ScrollView> */}
        <View style={styles.exeSelectedContainer}>
          <ExeSelected selectedText={selectedExe} />
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 25,
  },
  listImage: {
    height: 'auto',
    width: '100%',
    paddingBottom: 10,
  },
  listText: {
    textAlign: 'center',
    fontSize: 20,
    fontWeight: 'bold',
    color: 'blue',
    marginVertical: 10,
    // position: 'absolute'
  },
  scText: {
    color: 'white',
    fontSize: 17,
    fontWeight: 'bold',
    margin: 15,
  },
  listContainer: {
    width: '105%',
    margin: 10,
  },
  exeSelectedContainer: {
  //  position: 'absolute'
  },
});
