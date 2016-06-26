'use strict';

/**
 * Modulo para administrar los evento de socket
 * @param  {[type]} io [socket event]
 * @return {[type]}    [request]
 */
const chatConfig = function(io) {
	/**
	 * Iniciar conexion de eventos
	 * @param  socket event on
	 * @return {[type]}         [emit]
	 */
	io.on('connection', function(socket) {
		//usuario conectado
		/**
		 * [description]
		 * @param  {[type]} userName) {	string del nombre del usuario}
		 * @return {[type]}           [emit]
		 */
		socket.on('UserConnected', function() {
			console.log("connected user");
			socket.emit("Connected", {
				action: "msg", 
				message: "Usuario conectado"
			});
		});

		//envio de mensajes del usuario
		/**
		 * [description]
		 * @param  {[type]} mensaje) {mensaje enviado por el usuario}
		 * @return {[type]}          [socket emit]
		 */
		socket.on('addNewMessage', function(mensaje) {
			console.log("Mensaje recibido: "+mensaje);
			socket.broadcast.emit("refreshChat", {
				action: "msg", 
				message: mensaje
			});
		});

		/**
		 * evento de desconexion
		 * @param  {[type]} ) {}
		 * @return {[type]}   [socket emit]
		 */
		socket.on('disconnect', function() {
			socket.broadcast.emit("userDisconnect", {action: "msg", message: "el usuario se ha desconectado."});
		});
	});
};

module.exports = chatConfig;