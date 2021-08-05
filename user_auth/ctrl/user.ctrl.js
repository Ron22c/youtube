class UserController {
    
    static async registerUser(req, res) {
        try {

            let name = req.body.name;
            let email = req.body.email;
            let password = req.body.password;

            if(!name || !email || !password) throw {status: 400, message: 'please provide mandetory fields'};

            res.send('registerUser');
        } catch(err) {
            console.log('ERROR!!! -> ', err);
            res.send(err);
        }
    }

    static async authenticateUser(req, res) {
        try {
            res.send('authenticateUser');

        } catch(err) {
            console.log('ERROR!!! -> ', err);
            res.send(err);
        }
    }

    static async activateUser(req, res) {
        try {
            res.send('activateUser');

        } catch(err) {
            console.log('ERROR!!! -> ', err);
            res.send(err);
        }
    }
}

module.exports = UserController;