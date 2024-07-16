const express = require('express');
const app = express();
const routes = express.Router();

const gayController = require('../src/controllers/GayController');

// ROTAS DO CABARÉ

routes.get('/gay/:id', gayController.GayDa);

module.exports = routes;