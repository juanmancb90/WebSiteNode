var express = require('express');
var camisetas = require('../models/models').camisetas;
var router = express.Router();


var camisetasData = [
	{titulo: "Naranja", imagen: "images/camiseta1.png"}, 
	{titulo: "Roja", imagen: "images/camiseta2.png"}, 
	{titulo: "Azul", imagen: "images/camiseta3.png"}, 
	{titulo: "Verde", imagen: "images/camiseta4.png"}
];

/* GET home page. */
router.get('/', function(req, res, next) {
  //res.send("Hola mundo con Express.js");
	res.render('index', { title: 'Shirt Store' });
});

/**
 * [description]
 * @param  {[type]} req   [description]
 * @param  {[type]} res   [description]
 * @param  {[type]} next) {		res.render('tienda', {		titulo: "Shit Stores", 		camisetas: camisetasData	});} [description]
 * @return {[type]}       [description]
 */
router.get('/tienda', function(req, res, next) {
	//res.send("Coming soon");
	res.render('tienda', {
		titulo: "Shirt Stores", 
		camisetas: camisetasData
	});
});

router.get('/tiendamongo', function(req, res, next) {
	camisetas.find({}, function(err, camisetas) {
		if (err) return res.send('Ha surgido un error.');
		
		res.render('tiendamongo', {
			titulo: 'Shirt Stores', 
			camisetas: camisetas
		});
	});
});


router.get('/agregar', function(req, res, next) {
	res.render('agregar');
});

router.post('/agregar', function(req, res, next) {
	var newItem = new camisetas({
		color: req.body.color, 
		precio: req.body.color, 
		descripcion: req.body.descripcion,
		imagen: req.body.imagen

	});
});
/**
 * [description]
 * @param  {[type]} req  [description]
 * @param  {[type]} res) {	var        obj [description]
 * @return {[type]}      [description]
 */
router.get('/tienda/comprar/:camiseta', function(req, res, next) {
	//res.send("mostrando camiseta " + req.params.camiseta );
	var obj = camisetasData.filter(function(obj) {
		if (req.params.camiseta === obj.titulo) {
			res.render('compra', obj);
		} 
	})[0];
});

module.exports = router;