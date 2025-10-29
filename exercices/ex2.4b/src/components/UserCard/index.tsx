import "./UserCard.css";

interface UserCardProps {
  nom: string;
  age: number;
  estEnLigne: boolean;
}

const UserCard = (props: UserCardProps) => {
  return (
    <div className="user-card">
      <h2>{props.nom}</h2>
      <p>{props.age}</p>
      <p className={props.estEnLigne ? "en-ligne" : "hors-ligne"}>
        {props.estEnLigne ? "En Ligne" : "Hors Ligne"}
      </p>
    </div>
  );
};

export default UserCard;
