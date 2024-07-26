import { useState } from 'react';
import { Button, FlatList, ScrollView, StyleSheet, Text, TextInput, View } from 'react-native';
import GoalItem from './components/GoalItem';
import GoalInput from './components/GoalInput';
import { StatusBar } from 'expo-status-bar';

export default function App() {


  const [courseGoals, setCourseGoals] = useState([]);
  const [modelIsVisible, setModelIsVisible] = useState(false);

  function startAddGoalHandler() {
    setModelIsVisible(true);
  }

  function endAddGoalHandler() {
    setModelIsVisible(false);
  }

  function addGoalHandler(enteredGoalText) {
    setCourseGoals((courseGoals) => [...courseGoals, { text: enteredGoalText, id: Math.random().toString() }]);
    endAddGoalHandler();
  }

  function deleteGoalHandler(id) {
    console.log("Pressed!!")
    setCourseGoals((courseGoals) => {
      return courseGoals.filter((goal) => {
        return goal.id !== id;
      });
    });
  }

  return (
    <>
      <StatusBar style='light' />
      <View style={styles.appContainer}>

        <Button title='Add New Goal' color="white" onPress={startAddGoalHandler} />
        <GoalInput onCancel={endAddGoalHandler} onAddGoal={addGoalHandler} visible={modelIsVisible} />
        <View style={styles.goalsContainer}>
          <FlatList data={courseGoals} renderItem={(itemData) => {
            return <GoalItem
              id={itemData.item.id}
              text={itemData.item.text}
              onDeleteItem={deleteGoalHandler} />;
          }}
            keyExtractor={(item, index) => {
              return item.id;
            }}
            alwaysBounceVertical={false}
          />

        </View>

      </View >
    </>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    padding: 60,
    paddingHorizontal: 16,
  },
  goalsContainer: {
    flex: 5
  }
});


