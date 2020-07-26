import React from 'react';
import { StyleSheet, Text, View, FlatList } from 'react-native';
import Header from './components/header'
import Input from './components/input'
import TodoItem from './components/todoItem'

export default class App extends React.Component {

  constructor() {
    super();
    this.state = {
      todoInput: '',
      todos: [
        { id: 0, title: "Example 1(Added to List)", done: false },
        { id: 1, title: "Example 2(Done on Click)", done: true },
      ]
    }
  }

  addNewTodo = () => {
    let todos = this.state.todos;
    if (this.state.todoInput) {
      todos.unshift({
        id: todos.length + 1,
        title: this.state.todoInput,
        done: false
      })
    }
    this.setState({
      todos,
    })
  }

  toggleDone = (item) => {
    let todos = this.state.todos;

    todos = todos.map(
      (todo) => {
        if (todo.id === item.id) {
          todo.done = !todo.done;
        }
        return todo
      }
    )

    this.setState({ todos })
  }

  removeTodo = (item) => {

    let todos = this.state.todos;

    todos = todos.filter(
      todo => todo.id !== item.id
    )

    this.setState({ todos })

  }


  render() {
    return (
      <View style={styles.container}>
        <View style={styles.statusbar} />
        <Header title="Todo List" />

        <Input
          textChange={todoInput => this.setState({ todoInput })}
          addNewTodo={() => this.addNewTodo()} />
        <FlatList
          data={this.state.todos}
          extraData={this.state}
          keyExtractor={(items, index) => index.toString()}
          renderItem={({ item, index }) => {
            return (
              <TodoItem
                todoItem={item}
                toggleDone={() => this.toggleDone(item)}
                removeTodo={() => this.removeTodo(item)} />
            )
          }}
        /><View style={styles.footerView}>
          <Text style={styles.footer}>
            Created By Salman Ahmed Ansari
          </Text>
        </View>

      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  statusbar: {
    backgroundColor: '#000000',
    height: 28
  },
  footer: {
    color: "#AAAAAA",
    fontWeight: '400'

  },
  footerView: {
    height: 60,
    alignItems: 'center',
    justifyContent: 'center'
  }

});
