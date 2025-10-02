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


// GET all filtered (by 'minimum-duration=value')
router.get("/", (req, res) => {

    // Classique
    if(!req.query["minimum-duration"]) {
      return res.json(films);
    }

    // Filtre
    const minDuration = Number(req.query["minimum-duration"]);

    if(minDuration <= 0) {
      res.send("Wrong minimum duration");
    }

    const filtererdFilms = films.filter(films => films.duration >= minDuration);

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

    if(typeof body.title !== "string" || typeof body.director !== "string" || typeof body.duration !== "number" || typeof body.budget !== "number" || typeof body.description !== "string" || typeof body.imageUrl !== "string") {
      return res.status(400).send("Invalid type of data");
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