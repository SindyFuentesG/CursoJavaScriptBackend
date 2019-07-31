var reservaModel = require('./../models/reservasModel');

exports.create_book = function(req, res){
    reservaModel.create({
        namePersona : req.body.namePersona, 
        correoPersona : req.body.correoPersona,
        fechaReserva : req.body.fechaReserva,
        horaReserva : req.body.horaReserva,
        idServicio : req.body.idServicio
    }).then(data => res.status(200).send ('Se guardo la reserva con extio'))
    .catch(err => res.status(500).send(err))
    ;
}