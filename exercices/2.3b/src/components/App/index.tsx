import PageTitle from "../PageTitle";
import UserList from "../UserList";
import Footer from "../Footer";

const App = () => {
  // Debut des donnees
  const title = "Welcome to My App";

  const users = [
    {
      id: 1,
      name: "Alice",
      age: 25,
    },
    {
      id: 2,
      name: "Bob",
      age: 30,
    },
    {
      id: 3,
      name: "Charlie",
      age: 35,
    },
  ];

  const footerText = "© 2023 My App";
  // Fin des donnees

  return (
    <div>
      <PageTitle title={title} />
      <UserList users={users} />
      <Footer text={footerText} />
    </div>
  );
};

export default App;
