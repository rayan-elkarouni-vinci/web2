import "./UserList.css";
import UserCard from "../UserCard/index.tsx";

interface User {
  id: number;
  name: string;
  age: number;
}

interface UserListProps {
  users: User[];
}

const UserList = (props: UserListProps) => {
  return (
    <div>
      {props.users.map((user) => (
        <UserCard key={user.id} name={user.name} age={user.age} />
      ))}
    </div>
  );
};

export default UserList;
