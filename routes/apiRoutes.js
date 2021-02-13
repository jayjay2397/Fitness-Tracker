const Workout = require("../models/workout")

module.exports = (app) => {
    app.get("/api/workout", (req,res) => {
        Workout.find()
        .then(data =>{
            res.json(data)
        })
        .catch(err =>{
            res.status(400).json(err);
        })
    });

    app.post("/api/workout", (req,res) => {
        Workout.create({})
        .then(data =>{ 
            res.json(data)
        })
        .catch(err =>{
            res.status(400).json(err);
        })
    });

    app.get("/api/workout/range", (req,res) => {
        Workout.find()
        .then(data =>{ 
            res.json(data)
        })
        .catch(err =>{
            res.status(400).json(err);
        })
    });
    
    app.post("/api/workout/range", (req,res) => {
        Workout.create({})
        .then(data =>{ 
            res.json(data)
        })
        .catch(err =>{
            res.status(400).json(err);
        })
    });

    app.put("/api/workouts/:id",({body,params},res)=>{   
        Workout.findByIdAndUpdate(  
         params.id,
         {$push:{exercises:body} },
         {new: true,runValidators:true }
        )
        .then(data => res.json(data))
        .catch(err => { 
            res.status(400).json(err)
        })
    });
}
