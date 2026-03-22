import { Routes, Route } from "react-router";
import { BrowserRouter } from "react-router-dom";
import CusomLayout from "./components/Layout/Layout";
import { lazy, Suspense } from "react";

const HomePage = lazy(() => import("./pages/HomePage/HomePage"));
const PostsPage = lazy(() => import("./pages/PostsPage/PostsPage"));
const AlbumsPage = lazy(() => import("./pages/AlbumsPage/AlbumsPage"));
const TodoPage = lazy(() => import("./pages/TodoPage/TodoPage"));

const App = () => {
  return (
    <BrowserRouter>
      <Suspense fallback={<div>Загрузка...</div>}>
        <Routes>
          <Route path="/" element={<CusomLayout />}>
            <Route index element={<HomePage />} />
            <Route path="posts" element={<PostsPage />} />
            <Route path="albums" element={<AlbumsPage />} />
            <Route path="todos" element={<TodoPage />} />
          </Route>
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
};

export default App;
