import { Button } from "../Button";
import { logout } from "../../api/auth";
import "./LogoutButton.css";

export const LogoutButton = () => {
  const handleLogout = async () => {
    await logout();
    window.location.reload();
  };

  return (
    <div className="logout-button">
      <Button kind="secondary" onClick={handleLogout}>
        Выйти
      </Button>
    </div>
  );
};