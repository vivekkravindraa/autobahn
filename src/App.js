import { BrowserRouter, Routes, Route } from "react-router-dom";
import PostsView from "./features/posts/PostsView";
import Post from "./features/posts/Post";
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<PostsView />}></Route>
        <Route path="posts" element={<PostsView />}>
          <Route path=":postId" element={<Post />}></Route>
        </Route>
        <Route
          path="*"
          element={<span>There's nothing to show up here!</span>}
        ></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
