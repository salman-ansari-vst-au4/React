import React, { Component } from 'react';
import Input from './components/input'
import List from './components/list'
import './App.css';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';

class Wrapper extends Component {

  state = {
    todo: [
      { date: "2020-12-31", todo: "First" },
      { date: "2020-12-31", todo: "Second" },
      { date: "2020-12-31", todo: "Third" }
    ],
    editTodo: "",
    indexToUpdate: "",
    filter: null
  }

  getFormData(data) {
    if (data.todo && data.date) {
      this.setState({
        todo: [...this.state.todo, data]
      });
    }
  }

  complete(data, i) {
    console.log(data)
    this.setState(state => {
      const todo = state.todo.map((item, index) => {
        if (index === i)
          return data;
        else
          return item;
      })
      return {
        todo,
      }
    })
  }
  edit(index) {
    let editData = {
      todo: this.state.todo[index].todo,
      date: this.state.todo[index].date,
      isEdit: true
    };
    this.setState({
      editTodo: editData,
      indexToUpdate: index
    });
  }
  delete(index) {
    this.state.todo.forEach((item, i) => {
      if (index === i) {
        this.state.todo.splice(i, 1);
        this.setState({
          todo: [...this.state.todo]
        });
      }
    })
  }
  update(data) {
    if (data.todo && data.date && this.state.todo[this.state.indexToUpdate] !== data) {
      this.setState(state => {
        const todo = state.todo.map((item, index) => {
          if (index === this.state.indexToUpdate)
            return data;
          else
            return item;
        })
        return {
          todo,
        }
      })
      // this.state.todo[this.state.indexToUpdate] = data;
    }

    
  }

  filter(value) {
    this.setState({
      filter: value
    });
  }

  list() {
    return (
      <div className="border shadow w-50 mx-auto bg-white p-2 rounded">
        <ul className="list-group list-group-flush">
          {this.state.todo.map((data, index) => {

            if (this.state.filter === true) {
              if (data.completed) {
                return (
                  <List
                    key={(index).toString()}
                    index={index}
                    todo={data.todo}
                    date={data.date}
                    completed={data.completed}
                    completeIndex={(data, i) => { this.complete(data, i) }}
                    editIndex={i => { this.edit(i) }}
                    deleteIndex={i => { this.delete(i) }}
                  />)
              }
            }
            if (this.state.filter === false) {
              if (!data.completed) {
                return (
                  <List
                    key={(index).toString()}
                    index={index}
                    todo={data.todo}
                    date={data.date}
                    completed={data.completed}
                    completeIndex={(data, i) => { this.complete(data, i) }}
                    editIndex={i => { this.edit(i) }}
                    deleteIndex={i => { this.delete(i) }}
                  />)
              }
            }
            if (this.state.filter === null) {
              return (
                <List
                  key={(index).toString()}
                  index={index}
                  todo={data.todo}
                  date={data.date}
                  completed={data.completed}
                  completeIndex={(data, i) => { this.complete(data, i) }}
                  editIndex={i => { this.edit(i) }}
                  deleteIndex={i => { this.delete(i) }}
                />)
            }
          })}
        </ul>
      </div>
    )
  }


  render() {
    return (
      <div className="" >
        <header className="bg-white p-1 shadow mb-4">
          <p className="display-4 text-center mb-0">Todo List</p>
        </header>
        <Input
          getTodoData={data => this.getFormData(data)}
          todoEdit={this.state.editTodo}
          getUpdatedData={data => this.update(data)} />
        <div className=" w-50 mx-auto pb-3">
          <div class="btn-group dropright float-right">
            <button type="button" className="btn text-secondary pr-4" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
              <i className="fa fa-sliders-h" />
            </button>
            <div className="dropdown-menu">
              <a className="dropdown-item" onClick={() => this.filter(null)}>All</a>
              <a className="dropdown-item" onClick={() => this.filter(true)}>Completed</a>
              <a className="dropdown-item" onClick={() => this.filter(false)}>Active</a>
            </div>
          </div>

        </div><br />
        {this.state.todo.length ? this.list() : ""}
      </div >
    )
  }
}


export default Wrapper;
