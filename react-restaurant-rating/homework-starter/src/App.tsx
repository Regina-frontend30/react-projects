import { RestaurantsPage } from "./pages/RestaurantsPage";
import { Logo } from "./components/Logo";
import { UserAvatar } from "./components/UserAvatar";
import "./styles.css";

function App() {
  return (
    <>
      <header>
        <Logo />
        <UserAvatar />
      </header>

      <main>
        <RestaurantsPage />
      </main>

      <footer>
        <p>Privacy Policy</p>
        <p className="corporation">2022 Eats</p>
        <p>Terms Of Service</p>
      </footer>
    </>
  );
}

export default App;
