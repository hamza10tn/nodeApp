const Users = require('../model/userModel');
const User = require('../model/userModel');


// async function list(req, res, next) {
//     res.end('User List')
//         // await User.find()
//         .then((err, data) => {
//             if (err) {
//                 res.status(503).json(err)
//             }
//             else {
//                 res.status(200).json(data)
//             }
//         })
// }
async function list(req, res, next) {
    try {
        const data = await Users.find();
        res.status(200).json(data);
    } catch (err) {
        res.status(503).json(err);
    }
}


// const create = async (req, res, next) => {
//     const { nom, email } = req.body
//     console.log(req.body.nom);
//     console.log(req.params.age)
//     const { age } = req.params
//     console.log(req.params);


//     await new User({
//         nom: nom,
//         email: email,
//         age: age,
//     }).save()
//         .then((err, data) => {
//             if (err) {
//                 console.log('error' + err);
//             }
//             else {
//                 console.log('saved' + data);
//             }
//         })
//     res.json('User added ! nom : ' + nom + ' email : ' + email + ' age : ' + age)
// }
const create = async (req, res, next) => {
    const { name, email } = req.body;
    const { age } = req.params;

    try {
        const newUser = new User({
            name,
            email,
            age,
        });
        const savedUser = await newUser.save();
        res.json(`User added! Nom: ${savedUser.name}, Email: ${savedUser.email}, Age: ${savedUser.age}`);
    } catch (err) {
        res.status(500).json({ error: 'Error saving user', details: err });
    }
};







module.exports = { create, list }