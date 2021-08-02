// TodoItem 컴포넌트 여러 개를 렌더링해주는 역할

import React from "react";
import TodoItem from "./TodoItem";

class TodoItemList extends React.Component {

    // 컴포넌트 life cycle method 중 하나
    // 컴포넌트가 리렌더링을 할지 말지 정함.
    // todos 값이 바뀔 때 리렌더링됨.
    
    shouldComponentUpdate (nextProps, nextState) {
        return this.props.todos !== nextProps.todos;
    }

    render() {
        const { todos, onToggle, onRemove } = this.props;

        const todoList = todos.map(
            ({id, text, checked}) => (
                <TodoItem
                    id = {id}
                    text = {text}
                    checked = {checked}
                    onToggle = {onToggle}
                    onRemove = {onRemove}
                    key = {id}
                />
            )
        );

        return (
            <div>
                {todoList}
            </div>
        );
    }
}

// todos : todo 객체들이 들어있는 배열
// onToggle : 체크박스를 키고 끄는 함수
// onRemove : 아이템을 삭제시키는 함수

export default TodoItemList;