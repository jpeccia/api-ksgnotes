const { Router } = require("express");

const NotesControllers = require("../controllers/NotesController");

const notesRoutes = Router();

const notesControllers = new NotesControllers();

notesRoutes.get("/", notesControllers.index);
notesRoutes.post("/:user_id", notesControllers.create);
notesRoutes.get("/:id", notesControllers.show);
notesRoutes.delete("/:id", notesControllers.delete);

module.exports = notesRoutes;
