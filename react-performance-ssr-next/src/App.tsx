import { Routes, Route } from "react-router";
import { BrowserRouter } from "react-router-dom";
import CusomLayout from "./components/Layout/Layout";

import HomePage from "./pages/HomePage/HomePage";
import PostsPage from "./pages/PostsPage/PostsPage";
import AlbumsPage from "./pages/AlbumsPage/AlbumsPage";
import TodoPage from "./pages/TodoPage/TodoPage";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<CusomLayout />}>
          <Route index element={<HomePage />} />
          <Route path="posts" element={<PostsPage />} />
          <Route path="albums" element={<AlbumsPage />} />
          <Route path="todos" element={<TodoPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
