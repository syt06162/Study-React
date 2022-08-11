import React from "react";
import { useState } from "react";
import Toolbar from "./Toolbar";

function LandingPage(props) {
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    const onClickLogin = () => {
        setIsLoggedIn(true);
    }
    
    const onClickLogout = () => {
        setIsLoggedIn(false);
    }

    return (
        <div>
            <Toolbar
                isLoggedIn={isLoggedIn  }
                onClickLogin={onClickLogin}
                onClickLogout={onClickLogout}
                />
            <div style={{padding: 15}}>이 메시지는 항상 표시되어야 합니다.</div>
        </div>
    );
}

export default LandingPage;