import React from "react";
import "./App.css";

import { useMe } from "./hooks/useMe";
import { AuthForm } from "./components/AuthForm";
import { UserView } from "./components/UserView";
import { Layout } from "./components/Layout";
import { NoteForm } from "./components/NoteForm";
import { NotesListView } from "./components/NotesListView";

function App() {
  const { user, isLoading } = useMe();

  return (
    <div className="app">
      {isLoading && <div>Загрузка...</div>}

      {!isLoading && !user && <AuthForm />}

      {!isLoading && user && (
        <React.Fragment>
          <UserView user={user} />
          <Layout>
            <NoteForm />
            <NotesListView />
          </Layout>
        </React.Fragment>
      )}
    </div>
  );
}
export default App;
