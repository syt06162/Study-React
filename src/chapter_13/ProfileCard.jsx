import Card from "./Card";

function ProfileCard(props) {
    return (
        <Card title="Sherlock" backgroundColor="#4ea04e">
            <p>안녕하세요, 셜록입니다.</p>
            <p>저는 리액트를 사용해서 개발중입니다.</p>
        </Card>
    );
}

export default ProfileCard;