import React from "react";

class ConfirmButton extends React.Component {
    constructor(props){
        super(props);

        this.state = {
            isConfirmed: false,
        };
        
        // 1. bind 방법
        // this.handleConfirm = this.handleConfirm.bind(this);

        // 2. Arrow funcion

        // 3. 함수 컴포넌트 사용
        
    }

    handleConfirm = () => {
        this.setState((prevState) => ({
            isConfirmed: !prevState.isConfirmed
        }));
    }

    render() {
        return (
            <button
                onClick={this.handleConfirm}
                disabled = {this.state.isConfirmed}>

                {this.state.isConfirmed ? "확인됨" : "확인하기"}
            </button>
        );
    }
}

export default ConfirmButton;