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

   // e.target은 이벤트가 발생한 DOM을 가르킴
  // e.target.value를 조회하면 현재 input의 value를 알 수 있다.
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

/*
컴포넌트끼리 직접 데이터를 전달할때는 부모를 통해서 대화하는 것이 좋음(App.js)
state는 렌더링에 그 값을 필요로 하는 컴포넌트에 먼저 추가.
*/

export default App;
