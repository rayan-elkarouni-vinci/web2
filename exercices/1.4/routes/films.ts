import { Router } from "express";

import { Film, NewFilm } from "../types";

const films: Film[] = [
  {
    id: 1,
    title: "Inception",
    director: "Christopher Nolan",
    duration: 148
  },
  {
    id: 2,
    title: "Le Seigneur des Anneaux",
    director: "Peter Jackson",
    duration: 201,
    budget: 281
  },
  {
    id: 3,
    title: "La La Land",
    director: "Damien Chazelle",
    duration: 128
  }
];


const router = Router();


// GET all filtered
router.get("/", (req, res) => {

    let filtererdFilms = films;

    // Filtre 'minimum-duration=value'
    if (req.query["minimum-duration"]) {
      const minDuration = Number(req.query["minimum-duration"]);

      if(isNaN(minDuration)) {
        return res.send("Query must be a number");
      }
      if(minDuration <= 0) {
        return res.send("Wrong minimum duration");
      }

      filtererdFilms = films.filter(films => films.duration >= minDuration);
    }

    // Filtre 'start'
    if(req.query.start) {
      const lettre = req.query.start;

      if(typeof lettre !== "string") {
        return res.send("Query must be a letter");
      }

      filtererdFilms = filtererdFilms.filter((film) => film.title.startsWith(lettre));
    }

    // Tri par titre
    if (req.query.order) {
      if (typeof req.query.order === "string") {
        const order = req.query.order;

        if (order === "title") {
          filtererdFilms.sort((a, b) => a.title.localeCompare(b.title));
        } 
        else if (order === "-title") {
          filtererdFilms.sort((a, b) => b.title.localeCompare(a.title));
        }
      }
    }

    // Pagination
    if (req.query.page && req.query.pageSize) {
      const page = Number(req.query.page) || 1;
      const pageSize = Number(req.query.pageSize) || 10;
      const startIndex = (page - 1) * pageSize;
      const endIndex = startIndex + pageSize;

      filtererdFilms = filtererdFilms.slice(startIndex, endIndex);
    }
    
    return res.json(filtererdFilms);
});


// GET by id
router.get("/:id", (req, res) => {

    const idFilm = Number(req.params.id);

    for(let i = 0; i < films.length; i++) {
      if(films[i].id === idFilm) {
          res.json(films[i]);
      }
    }

    res.sendStatus(404);

});


// POST 
router.post("/", (req, res) => {

    // Recuperation des infos
    const body = req.body;

    // Verifications des infos
    if(!body || !body.title || !body.director || !body.duration) {
      return res.status(400).send("Missing data");
    }

    if(typeof body.title !== "string" || typeof body.director !== "string" || typeof body.duration !== "number") {
      return res.status(400).send("Invalid type of data");
    }

    // Vérification des types optionnels (seulement si présents)
    if (body.budget !== undefined && typeof body.budget !== "number") {
      return res.status(400).send("Invalid type for budget");
    }
    if (body.description !== undefined && typeof body.description !== "string") {
      return res.status(400).send("Invalid type for description");
    }
    if (body.imageUrl !== undefined && typeof body.imageUrl !== "string") {
      return res.status(400).send("Invalid type for imageUrl");
    }


    if (body.duration < 0) {
      return res.status(400).send("Invalid duration");
    }
    if(body.budget < 0) {
      return res.status(400).send("Invalid budget");
    }




    // EX : Bonus - debut

    // Vérifie qu’il n’y a aucune propriété inattendue
    // Vérifie qu'il n'y a aucun mot en trop
    const autorises = ["title", "director", "duration", "budget", "description", "imageUrl"];

    for (const cle of Object.keys(body)) {
      if (!autorises.includes(cle)) {
        return res.status(400).send("Une propriété n'est pas autorisée : " + cle);
      }
    }
    
    // EX : Bonus - fin





    // Extractions des infos
    const {title, director, duration, budget, description, imageUrl} = body as NewFilm;

    // Definition de l'id
    let nextId = 1;
    if (films.length > 0) {
      nextId = films[films.length - 1].id + 1;
    }

    // Creation du nouveau elements a rajouter
    const newFilm: Film = {
      id: nextId,
      title,
      director,
      duration,
      budget,
      description,
      imageUrl
    };

    // Rajouter l'element et le job est terminé
    films.push(newFilm);
    return res.status(201).json(films);
});


export default router;