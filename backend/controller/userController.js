const User=require('../DB/userModel');
require('../DB/dbconnect');
exports.create=(req,res)=>{

    //checking empty fields
    if(!req.body.email || !req.body.username || !req.body.password){
        return res.status(400).send({
            message : "Required field cannot be empty !",
        });
    }

    //creating
    const user =new User({
        email: req.body.email,
        username: req.body.username,
        password: req.body.password,
    });

    //saving
    user
        .save()
        .then((data)=>{
            res.send(data);
        })
        .catch((err)=>{
            res.status(500).send({
                message: err.message || "Some error ocuured during creation of User",
            });
        });
};

exports.findAll=(req,res)=>{
    User.find()
        .sort({username : -1})
        .then((users)=>{
            res.status(200).send(users);
        })
        .catch((err)=>{
            res.status(500).send({
                message: err.message || "Error Occurred",
            });
        });
};

exports.findOne = (req, res) => {
    User.findById(req.params.id)
        .then((user)=>{
            if(!user){
                return res.status(404).send({
                    message: "User not found "+req.params.id,
                });
            }
            res.status(200).send(user);
            console.log(user);
        })
        .catch((err)=>{
            return res.status(500).send({
                message: "Error retrieving user with id "+req.params.id,
            });
        });
};

exports.delete=(req,res)=>{
    User.findByIdAndRemove(req.params.id)
        .then((user)=>{
            if(!user){
                return res.status(404).send({
                    message: "User not Found",
                });
            }
            res.send({message: "User "+req.params.username+" deleted Successfully !"});
        })
        .catch((err)=>{
            return res.status(500).send({
                message: "Error Occurred...",
            });
        });
};

exports.updateUser=(req,res)=>{
    if (!req.body.email || !req.body.username || !req.body.password) {
        res.status(400).send({
          message: "required fields cannot be empty",
        });
      }
    User.findByIdAndUpdate(req.params.id,req.body,{new:true})
      .then((user)=>{
          if(!user){
            return res.status(404).send({
                message: "No user Found",
            });
          }
          res.status(200).send(user);
      })
      .catch((err)=>{
          return res.status(404).send({
              message: "Error occurred...",
          });
      });
};