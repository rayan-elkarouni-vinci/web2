import "./UserCard.css";

interface UsersCardProps {
  name: string;
  age: number;
}

const UserCard = (props: UsersCardProps) => {
  return (
    <div>
      <h2>{props.name}</h2>
      <p>Age: {props.age}</p>
    </div>
  );
};

export default UserCard;
