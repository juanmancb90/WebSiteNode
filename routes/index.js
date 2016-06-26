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

/**
 * [description]
 * @param  {[type]} req           [description]
 * @param  {[type]} res           [description]
 * @param  {[type]} next)         {	camisetas.find({} [description]
 * @param  {[type]} function(err, camisetas)             {		if        (err) return res.send('Ha surgido un error.');				res.render('tiendamongo', {			titulo: 'Shirt Stores', 			camisetas: camisetas		});	});} [description]
 * @return {[type]}               [description]
 */
router.get('/tiendamongo', function(req, res, next) {
	camisetas.find({}, function(err, camisetas) {
		if (err) return res.send('Ha surgido un error.');
		//let x = 1;
		res.render('tiendamongo', {
			titulo: 'Shirt Stores', 
			camisetas: camisetas
		});
	});
});

/**
 * [description]
 * @param  {[type]} req   [description]
 * @param  {[type]} res   [description]
 * @param  {[type]} next) {	res.render('agregar', {		titulo: "Tienda Online"	});} [description]
 * @return {[type]}       [description]
 */
router.get('/agregar', function(req, res, next) {
	res.render('agregar', {
		titulo: "Tienda Online"
	});
});

/**
 * [description]
 * @param  {[type]} req   [description]
 * @param  {[type]} res   [description]
 * @param  {[type]} next) {	console.log(req);	var imgUrl;	if (req.body.color ! [description]
 * @return {[type]}       [description]
 */
router.post('/agregar', function(req, res, next) {
	console.log(req);
	var imgUrl;
	if (req.body.color !== null | req.body.color !== "") {
		for (var i in camisetasData) {
			if (req.body.color === camisetasData[i].titulo) {
				imgUrl = camisetasData[i].imagen;
			}
		}
	}
	var newItem = new camisetas({
		color: req.body.color, 
		precio: req.body.precio, 
		descripcion: req.body.descripcion,
		imagen: imgUrl
	});
	newItem.save();
	res.redirect('/tiendamongo');
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