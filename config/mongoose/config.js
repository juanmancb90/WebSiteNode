'use strict';
const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/camisetas', function(err) {
	if (err) {
		throw err;
	} else {
		console.log("MongoDB connect success");
	}
});

module.exports = mongoose;