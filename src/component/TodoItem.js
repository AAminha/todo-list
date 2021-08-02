import React from "react";
import { MdDelete } from 'react-icons/md';
import "./TodoItem.css";

class TodoItem extends React.Component {
    shouldComponentUpdate (nextProps, nextState) {
        return this.props.checked !== nextProps.checked;
    }

    CheckCircle () {
        const {checked, onToggle} = this.props;



    }

    render() {
        const { text, checked, id, onToggle, onRemove } = this.props;

        return (
            <div className = "todo-item">
                <div className = "check-box" checked = {checked} onClick = {() => onToggle(id)}>
                    { checked && (<div className="check-mark"> ✔ </div>) }

                </div>
                <div className = {`todo-text ${checked && "checked"}`}>
                    <div> {text} </div>
                </div>
                <div className = "remove" onClick = {(e) => {
                    e.stopPropagation();    // onToggle이 실행되지 않도록 함
                    onRemove(id)}
                }>
                    <MdDelete size={20} />
                </div>
            </div>
        );
    }
}

// text : todo 내용
// checked : 체크박스 상태
// id : todo의 고유 아이디
// onToggle : 체크박스를 키고 끄는 함수
// onRemove : 아이템을 삭제시키는 함수

export default TodoItem;