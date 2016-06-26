var socket = io.connect('http://localhost:3000/');
socket.emit("UserConnected");

socket.on("Connected", function(data) {
	console.log(data);
});


$(document).ready(function()
{
	$("#btnChat").click(function(evt) {
		evt.preventDefault();
		$("#chatDiv").show();
		$(this).hide();
	});

	$("#chatter").submit(function(evt) {
		evt.preventDefault();
		var mensaje = $("#m").val();
		//console.log(mensaje);
		if (mensaje !== '') {
			socket.emit("addNewMessage", mensaje);
			$('#m').val('');
		} else {
			swal({
				title: "Error", 
				text: "Ingresa tu mensaje!",
				type: "error",
				confirmButtonText: "Aceptar"
			});
		}
		return false;
	});

	socket.on("refreshChat", function(data) {
		if (data['action'] === "msg") {
			//console.log(data['message']);
			$('#messages').prepend($('<li>').text(data['message']));
		} else {
			swal({
				title: "Error!", 
				text: "Ops ha ocurrido un error!",
				type: "error",
				confirmButtonText: "Aceptar"
			});
		}
	});
});