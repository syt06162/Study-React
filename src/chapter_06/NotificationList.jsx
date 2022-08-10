import React from "react";
import Notification from "./Notification";

const reservedNotifications = [
    {
        id: 1,
        message: "안녕하세요, 오늘 일정을 알려드립니다.",
    },
    {
        id: 2,
        message: "오전은 피곤합니다",
    },
    {
        id: 3,
        message: "점심식사 시간입니다.",
    },
    {
        id: 4,
        message: "30분 후 잠시 휴식하겠습니다.",
    },
    {
        id: 5,
        message: "퇴근합시다.",
    },
];

var timer;

class NotificationList extends React.Component {
    constructor(props){
        super(props);

        this.state = {
            notifications: [],
        };
    }

    componentDidMount() {
        const { notifications } = this.state;
        timer = setInterval( () => {
            if (notifications.length < reservedNotifications.length){
                const index = notifications.length;
                notifications.push(reservedNotifications[index]);
                this.setState({
                    notifications : notifications
                });
            } else {
                clearInterval(timer);
            }
        }, 2000);
    }

    // react 18 업데이트로 인한 변경점 - Strict 모드에서도 잘 작동하도록 Unmount 구현
    componentWillUnmount() {
        if (timer) {
            clearInterval(timer);
        }    
    }

    render() {
        return (
            <div>
                {this.state.notifications.map((notification) => {
                    return (<Notification 
                        message={notification.message}
                        id={notification.id}
                        key={notification.key}/>);
                })}
            </div>
        );
    }
}

export default NotificationList;