import React from "react";
import TodoListTemplate from "./component/TodoListTemplate";
import Form from "./component/Form";
import TodoItemList from "./component/TodoItemList";

class App extends React.Component {

  id = 0

  state = {
    input : '',
    todos : []
  }

  handleChange = (e) => {
    this.setState({ input : e.target.value });
  }

  handleCreate = () => {
    const { input, todos } = this.state;
    this.setState({
      input: '',
      todos: todos.concat({
        id : this.id++,
        text : input,
        checked : false
      })
    });
  }

  handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      this.handleCreate();
    }
  }

  handleToggle = (id) => {
    const {todos} = this.state;

    const index = todos.findIndex(todo => todo.id === id);
    const selected = todos[index];    // 선택한 객체
    const nextTodos = [...todos];     // 배열 복사

    // 기존의 값들 복사, checked 값 덮어쓰기
    nextTodos[index] = {
      ...selected,
      checked: !selected.checked
    };

    this.setState ({
      todos: nextTodos
    });
  }

  handleRemove = (id) => {
    const {todos} = this.state;
    this.setState ({
      todos: todos.filter(todo => todo.id !== id)
    });
  }

  render() {
    const { input, todos } = this.state;
    const {
      handleChange,
      handleCreate,
      handleKeyPress,
      handleToggle,
      handleRemove
    } = this;
    
    return (
      <TodoListTemplate
        todos = {todos}
        form = {(
          <Form
            value = {input}
            onKeyPress = {handleKeyPress}
            onChange = {handleChange}
            onCreate = {handleCreate}
          />
        )}>
        <TodoItemList
          todos = {todos}
          onToggle = {handleToggle}
          onRemove = {handleRemove}
        />
      </TodoListTemplate>
    );
  }
}

export default App;
