"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const films = [
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
const router = (0, express_1.Router)();
// Get all filtered (by 'minimum-duration=value')
router.get("/", (req, res) => {
    // GET ALL classique
    if (!req.query["minimum-duration"]) {
        return res.json(films);
    }
    // Filtre
    const minDuration = Number(req.query["minimum-duration"]);
    if (minDuration <= 0) {
        res.send({ error: "Wrong minimum duration" });
    }
    const filtererdFilms = films.filter(films => films.duration >= minDuration);
    return res.json(filtererdFilms);
});
// Get by id
router.get("/:id", (req, res) => {
    const idFilm = Number(req.params.id);
    for (let i = 0; i < films.length; i++) {
        if (films[i].id === idFilm) {
            res.json(films[i]);
        }
    }
    res.sendStatus(404);
});
exports.default = router;
