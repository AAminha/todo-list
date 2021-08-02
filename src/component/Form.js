import React from "react";
import "./Form.css";

// 인풋과 버튼이 담겨있는 컴포넌트

// 텍스트 내용이 바뀌면 state 업데이트
// 버튼이 클릭되면 새로운 todo 생성 후 todos 업데이트
// 인풋에서 Enter 누르면 버튼을 클릭한 것과 동일한 작업 진행하기

const Form = ({value, onChange, onCreate, onKeyPress}) => {
    return (
        <div className = "form">
            <input
                value={value}
                onChange={onChange}
                onKeyPress={onKeyPress} />
            <div className = "create-button" onClick={onCreate}>
                추가
            </div>
        </div>
    );
};
// value : 인풋 내용
// onCreate : 버튼이 클릭될 때 실행될 함수
// onChange : 인풋 내용이 변경될 때 실행되는 함수
// onKeyPress : 인풋에서 키를 입력할 때 실행되는 함수. 이 함수는 나중에 Enter가 눌렸을 때
// onCreate를 한 것과 동일한 작업을 하기 위해서 사용

/*
중괄호{} 안에 있는 애들은 함수인가보다.
*/

export default Form;
