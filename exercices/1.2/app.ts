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
        console.log(`GET counter : ${getCounter} | URL : ${req.url}`); // Log the count and the URL of the request
    }
    next(); // No 'res', so next() must be called to continue the request
});

app.use("/films", filmsRouter);

export default app;
