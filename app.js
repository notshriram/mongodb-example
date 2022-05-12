//create an express server to serve mongodb data
const express = require('express');
//connect to mongodb and create a database
const mongoose = require('mongoose');
const app = express();
const port = process.env.PORT || 3000;

//connect to mongodb
mongoose.connect('mongodb://localhost/test', { useNewUrlParser: true });

let UserModel = require('./user')

// let model = new UserModel({
//     FirstName: 'John',
//     LastName: 'Doe',
//     Email: 'donjo@mail.emai',
//     Gender: 'Gmail',
// })

// model.save()
//    .then(doc => {
//      console.log(doc)
//    })
//    .catch(err => {
//      console.error(err)
//    })

//api routes for creating and updating data
app.listen(port, () => {
	console.log(`Server has started! Running at http://localhost:${port}`);
})

//create a new user
app.post('/api/users', (req, res) => {
    let user = new UserModel(req.body);
    user.save()
        .then(doc => {
            res.send(doc);
        }
        )
        .catch(err => {
            res.status(500).send(err);
        }
        )
}
)

//get all users
app.get('/api/users', (req, res) => {
    UserModel.find()
        .then(doc => {
            res.send(doc);
        }
        )
        .catch(err => {
            res.status(500).send(err);
        }
        )
}
)

//get a user by id
app.get('/api/users/:id', (req, res) => {
    UserModel.findById(req.params.id)
        .then(doc => {
            res.send(doc);
        }
        )
        .catch(err => {
            res.status(500).send(err);
        }
        )
}
)

//update a user by id
app.put('/api/users/:id', (req, res) => {
    UserModel.findByIdAndUpdate(req.params.id, req.body, { new: true })
        .then(doc => {
            res.send(doc);
        }
        )
        .catch(err => {
            res.status(500).send(err);
        }
        )
}
)

//delete a user by id
app.delete('/api/users/:id', (req, res) => {
    UserModel.findByIdAndDelete(req.params.id)
        .then(doc => {
            res.send(doc);
        }
        )
        .catch(err => {
            res.status(500).send(err);
        }
        )
}
)
