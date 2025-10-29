import UserList from "../UserList";
import type { User } from "../../types";
import "./App.css";

const App = () => {
  // Debut des donnees
  const users: User[] = [
    { id: 1, nom: "Ragent", age: 20, estEnLigne: false },
    { id: 2, nom: "Rayan", age: 19, estEnLigne: true },
    { id: 3, nom: "Raimsou", age: 18, estEnLigne: false },
  ];
  // Fin des donnees

  return (
    <div>
      <UserList users={users} />
    </div>
  );
};

export default App;
