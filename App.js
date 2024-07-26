import { useState } from 'react';
import { Button, FlatList, ScrollView, StyleSheet, Text, TextInput, View } from 'react-native';
import GoalItem from './components/GoalItem';
import GoalInput from './components/GoalInput';

export default function App() {


  const [courseGoals, setCourseGoals] = useState([]);

  function addGoalHandler(enteredGoalText) {
    setCourseGoals((courseGoals) => [...courseGoals, { text: enteredGoalText, id: Math.random().toString() }]);
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
    <View style={styles.appContainer}>
      <GoalInput onAddGoal={addGoalHandler} />
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

    </View>
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


