const jwt = require('jsonwebtoken');
const config = require('config');

module.exports = function(req, res, next){
    //Get Token from header
    const token = req.header('x-auth-token');

    //Check if not token
    if(!token){
        return res.status(401).json({msg: 'No token, authorization denied'});
    }

    try {
        const decode = jwt.verify(token,config.get('jwtSecret'));
        req.user = decode.user;
        next();
    } catch (error) {
        res.status(401).json({msg: 'Token is invalid'});
    }
}