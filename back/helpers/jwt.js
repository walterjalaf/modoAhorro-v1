var jwt = require('jwt-simple');
var moment = require("moment")
var secret = "walter13.08"

exports.createToken = function (user) {
    const payload = {
        sub: user.colaborador_id,
        colaborador_nombre: user.colaborador_nombre,
        estado: user.estado,
        email: user.email,
        iat: moment().unix(),
        exp: moment().add(1, 'day').unix(),
    }
    return jwt.encode(payload, secret);
}