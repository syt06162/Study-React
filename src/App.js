import React from "react";
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import styled from "styled-components";

//pages
import MainPage from './mini-blog-project/component/page/MainPage'
import PostWritePage from './mini-blog-project/component/page/PostWritePage'
import PostViewPage from './mini-blog-project/component/page/PostViewPage'

const MainTitleText = styled.p`
    font-size: 24px;
    font-weight: bold;
    text-align: center;
`;

function App(props) {
  return (
    <BrowserRouter>
      <MainTitleText>셜록의 미니 블로그</MainTitleText>
      <Routes>
          <Route index element={<MainPage />}/>
          <Route path="post-write" element={<PostWritePage/>}/>
          <Route path="post/:postId" element={<PostViewPage/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
