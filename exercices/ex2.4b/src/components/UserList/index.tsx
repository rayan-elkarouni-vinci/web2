import UserCard from "../UserCard";
import type { User } from "../../types";


interface UserListProps {
  users: User[];
}

const UserList = (props: UserListProps) => {
  return (
    <div>
      {props.users.map((user) => (
        <UserCard
          key={user.id}
          nom={user.nom}
          age={user.age}
          estEnLigne={user.estEnLigne}
        />
      ))}
    </div>
  );
};

export default UserList;