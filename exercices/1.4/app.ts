import express from "express";

import filmsRouter from "./routes/films";

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));


// Application-level statistic middleware that count every GET request from the API
let getCounter = 0;
app.use((req, _res, next) => {
    if(req.method === "GET" && req.path !== "/favicon.ico") {   // Les navigateurs modernes essaient généralement de récupérer le favicon (GET vers /favicon.ico).
        getCounter++;
        console.log(`GET counter : ${getCounter}`); // Log the count
        //console.log(`GET counter : ${getCounter} | URL : ${req.url}`); // Log the count and the requested URL
    }
    next(); // No 'res', so next() must be called to continue the request
});


/* 
    Exercice supplémentaire
1. SD-Map de Java : key = protocole + route & value = nombre de requêtes à incrementer
2. Corps du middleware : 
    - À chaque requête, construire la clé key = ${req.method} ${req.path}
    - Si clé existe, incrémenter sa valeur, sinon initialiser à 1
3. Afficher tous les compteurs (foreach) dans la console à chaque requête 
*/

app.use("/films", filmsRouter);

export default app;
