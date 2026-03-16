import { Link, useParams } from "react-router-dom";
import { USERS } from "../../data";
import "./UserInfoPage.css";

export function UserInfoPage() {
	const { userId } = useParams();
	const user = USERS.find((u) => u.id === Number(userId));

	if (!user) {
		return (
			<div className="userInfoPage">
				<h2>UserInfoPage</h2>

				<div className="users">
					<p>Пользователь не найден</p>
				</div>
			</div>
		);
	}

	const playlistId = user.playlist?.id;

	return (
		<div className="userInfoPage">
			<h2>UserInfoPage</h2>

			<div className="users">
				<p>{user.jobTitle}</p>
				<p>{user.email}</p>
				<img src={user.avatar} alt="" width={200} height={200} />
				<p>{user.fullName}</p>
				<p>{user.bio}</p>
				{typeof playlistId === "number" && (
					<Link to={`/playlists/${playlistId}`}>Плейлист</Link>
				)}
			</div>
		</div>
	);
}
