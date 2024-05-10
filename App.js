import React, { useState } from "react";
import { View, Text, TextInput, Button, FlatList } from "react-native";

const App = () => {
  const [todos, setTodos] = useState([]);
  const [newTodo, setNewTodo] = useState("");

  const addTodo = () => {
    if (newTodo.trim()) {
      setTodos([...todos, { id: Date.now(), text: newTodo }]);
      setNewTodo("");
    }
  };

  const removeTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  return (
    <View style={{ padding: 20 }}>
      <Text style={{ fontSize: 24 }}>TODO APP </Text>
      <TextInput
        value={newTodo}
        onChangeText={setNewTodo}
        placeholder="Add a todo..."
        style={{ borderWidth: 1, padding: 10, marginVertical: 10 }}
      />
      <Button title="Add Todo" onPress={addTodo} />
      <FlatList
        data={todos}
        renderItem={({ item }) => (
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              marginVertical: 5,
            }}
          >
            <Text>{item.text}</Text>
            <Button title="Remove" onPress={() => removeTodo(item.id)} />
          </View>
        )}
      />
    </View>
  );
};

export default App;
