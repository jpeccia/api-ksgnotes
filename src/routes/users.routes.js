const { Router } = require("express");

const UsersControllers = require("../controllers/UsersControllers");

const usersRoutes = Router();

const usersControllers = new UsersControllers();

usersRoutes.post("/", usersControllers.create);
usersRoutes.put("/:id", usersControllers.update);

module.exports = usersRoutes;
