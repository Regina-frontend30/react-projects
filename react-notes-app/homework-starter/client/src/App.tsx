import "./App.css";
import { AuthForm } from "./components/AuthForm";
import { UserView } from "./components/UserView/UserView";
import { useMe } from "./hooks/useMe";
import { Loader } from "./components/Loader/Loader";

function App() {
  const { user, isLoading } = useMe();

  if (isLoading) {
    return <Loader />;
  }

  if (!user) {
    return (
      <div className="app">
        <AuthForm />
      </div>
    );
  }

  return (
    <div className="app">
      <UserView user={user} />
    </div>
  );
}

export default App;