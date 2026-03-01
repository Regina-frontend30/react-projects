import "./UserView.css";
import { User } from "../../api/auth";
import { LogoutButton } from "../LogoutButton/LogoutButton";
import { NotesListView } from "../NotesListView/NotesListView";

interface UserViewProps {
  user: User;
}

export const UserView = ({ user }: UserViewProps) => {
  const firstLetter = user.username.slice(0, 1).toUpperCase();

  return (
    <div className="user-view">
      <div className="user-view__header">
        <div className="user-view__logo">{firstLetter}</div>
        <span className="user-view__name">{user.username}</span>
        <LogoutButton />
      </div>

      <NotesListView />
    </div>
  );
};