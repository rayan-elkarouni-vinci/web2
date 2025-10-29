import PageTitle from "../PageTitle";
import Cinema from "../Cinema";
import Header from "../Header";
import Footer from "../Footer";
import "./App.css";

const App = () => {
  // Debut des donnees
  const pageTitle = "Informations sur les films dans les cinémas";

  const cinema1Name = "UGC DeBrouckère";

  const moviesCinema1 = [
    {
      title: "HAIKYU-THE DUMPSTER BATTLE",
      director: "Susumu Mitsunaka",
    },
    {
      title: "GOODBYE JULIA",
      director: "Mohamed Kordofani",
    },
    {
      title: "INCEPTION",
      director: "Christopher Nolan",
    },
    {
      title: "PARASITE",
      director: "Bong Joon-ho",
    },
  ];

  const cinema2Name = "UGC Toison d'Or";

  const moviesCinema2 = [
    {
      title: "THE WATCHERS",
      director: "Ishana Night Shyamalan",
    },
    {
      title: "BAD BOYS: RIDE OR DIE",
      director: "Adil El Arbi, Bilall Fallah",
    },
    {
      title: "TENET",
      director: "Christopher Nolan",
    },
    {
      title: "THE IRISHMAN",
      director: "Martin Scorsese",
    },
  ];
  // Fin des donnees

  return (
    <div>
      <Header logoUrl="https://pngdownload.io/wp-content/uploads/2023/12/GTA-6-Logo-PNG-from-Grand-Theft-Auto-VI-Transparent-jpg.webp">
        <h1>Salut moi c'est le Header !</h1>
      </Header>

      <PageTitle title={pageTitle} />
      <Cinema name={cinema1Name} movies={moviesCinema1} />
      <Cinema name={cinema2Name} movies={moviesCinema2} />

      <Footer logoUrl="https://pngdownload.io/wp-content/uploads/2023/12/GTA-6-Logo-PNG-from-Grand-Theft-Auto-VI-Transparent-jpg.webp">
        <p>Salut moi c'est le Footer !</p>
      </Footer> 
    </div>
  );
};

export default App;
