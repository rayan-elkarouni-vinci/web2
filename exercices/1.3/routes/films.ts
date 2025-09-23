import { Router } from "express";

import { Film } from "../types";

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

// Get all films - READ ALL
router.get("/", (_req, res) => {
    return res.json(films);
});

export default router;
