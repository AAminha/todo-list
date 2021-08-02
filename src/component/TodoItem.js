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
            // onClick을 하면 onToggle(id)가 진행됨을 의미? onToggle이 함수니까.
            // onToggle과 onRemove는 id를 파라미터로 넣으면 해당 id를 가진 데이터를 업데이트함
            // 파라미터를 넣어주어야 하기 때문.
            // HTML에서 "& times"단어를 사용하면 ×로 변경
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
            // 템플릿 리터럴은 (``)이것으로 감싼다.
            // 템플릿 리터럴은 그거.. 문자열 합치는 거(+) 응용 버전.
            // `todo-text ${checked && 'checked'}`
            // "todo-text " + checked && 'checked'
        );
    }
}

// text : todo 내용
// checked : 체크박스 상태
// id : todo의 고유 아이디
// onToggle : 체크박스를 키고 끄는 함수
// onRemove : 아이템을 삭제시키는 함수

/*
onToggle & onRemove : id를 파라미터로 가지며, 해당 id를 가진 데이터를 업데이트 함.
e.stopPropagation : 삭제 부분에 들어간 이벤트가 해당 부모의 이벤트까지 전달되지 않도록 해줌.
엑스마크는 &times로 표현된다.
{text} : todo 내용
*/

export default TodoItem;