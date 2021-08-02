import React from "react";
import "./TodoListTemplate.css";

const TodoListTemplate = ({todos, form, children}) => {

    const undoneTasks = todos.filter(todo => !todo.checked);

    let today = new Date();

    let year = today.getFullYear();
    let month = today.getMonth() + 1;
    let date = today.getDate();

    return (
        <main className = "todo-list-template">
            <div className = "title">
                {year}년 {month}월 {date}일
            </div>
            <section className = "form-wrapper">
                {form}
            </section>
            <section className = "todos-wrapper">
                {children}
            </section>
            <section className=  "task-left">
                할 일 {undoneTasks.length}개 남음
            </section>
        </main>
    );
};

export default TodoListTemplate;