import { useState } from "react";
import { Button, Image, Modal, StyleSheet, TextInput, View } from "react-native";

function GoalInput(props) {
    const [enteredGoalText, setEnteredGoalText] = useState("");

    function goalInputHandler(enteredText) {
        setEnteredGoalText(enteredText);
    }

    function addGoalHandler() {
        props.onAddGoal(enteredGoalText);
        setEnteredGoalText('');
    }

    return (
        <Modal visible={props.visible} animationType="slide">
            <View style={styles.inputContainer}>
                <Image source={require('../assets/images/goal.png')} style={styles.image} />
                <TextInput placeholder='Your course goal!'
                    style={styles.textInput}
                    onChangeText={goalInputHandler}
                    value={enteredGoalText}
                />
                <View style={styles.buttonContainer}>
                    <View style={styles.button}>
                        <Button title='Add Goal' onPress={addGoalHandler} />
                    </View>
                    <View style={styles.button}>
                        <Button title="Cancel" onPress={props.onCancel} />
                    </View>
                </View>
            </View>
        </Modal>
    )
}

const styles = StyleSheet.create({
    inputContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 24,
        padding: 16,
        backgroundColor: '#311b6b'
    },
    textInput: {
        borderWidth: 1,
        borderColor: '#cccccc',
        width: "100%",
        padding: 8,
        color: 'white'
    },
    buttonContainer: {
        flexDirection: 'row'
    },
    button: {
        width: '30%',
        marginHorizontal: 8
    },
    image: {
        width: 100,
        height: 100,
        margin: 20,
    }
})

export default GoalInput;