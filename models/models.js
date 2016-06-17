'use strict';
const mongoose = require('../config/mongoose/config'), 
			camisetasSchema = require('../models/schema').camisetasSchema;

const models = {
	camisetas: mongoose.model('camisetas', camisetasSchema)
};
//console.log("se crea el model");
//console.log(models);
module.exports = models;