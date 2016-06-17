'use strict';
const mongoose = require('../config/mongoose/config'),
	  Schema = mongoose.Schema;

const camisetasSchema = {
	camisetasSchema: new Schema({
		color: {type: String},
		precio: {type: String},
		descripcion: {type: String},
		imagen: {type: String}
	})
};
//console.log("Se crea el schema");
//console.log(camisetasSchema);

module.exports = camisetasSchema;