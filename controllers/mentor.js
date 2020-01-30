const Mentor = require("../model/mentor");
const TaskMentor = require("../model/mentorTask");
const _ = require("lodash");
const formidable = require("formidable");
const fs = require("fs");
require("dotenv").config();

exports.mentorId = (req, res, next, Id) => {
    Mentor.findById(Id)
    .exec((err, user) => {
        if(err || !user) return res.status(402).json({ error: "User not found" });
        
        req.userProfile = user;
        next();
    })
}

exports.taskId = (req, res, next, Id) => {
    TaskMentor.findById(Id)
    .exec((err, user) => {
        if(err || !user) return res.status(402).json({ error: "User not found" });
        
        req.taskProfile = user;
        next();
    })
}

exports.addMentor = async (req, res) => {
    // const mentor = await Mentor(req.body); 
    // mentor.save((err, user) => {
    //     if(err) return res.status(402).json({ error: "Data is not Enter" });

    //     res.status(200).json({ User: user });
    // });
    let form = new formidable.IncomingForm();
    form.keepExtensions = true;
    form.parse(req, (err, fields, files) => {
        if(err) return res.status(400).json({ err: "Data is not Enter" });

        let mentor = new Mentor(req.body);
        mentor = _.extend(mentor, fields);

        if(files.photo) {
            mentor.photo.data = fs.readFileSync(files.photo.path);
            mentor.photo.contentType = files.photo.type;    
        }

        mentor.save((err, result) => {
        if(err) {
            return res.status(400).json({
                error: err
            });
        }
        res.json(result);
        });
    }); 
}

exports.getMentor = (req, res) => {
    return res.json(req.userProfile);
}

exports.photoUrl = (req, res) => {
    res.set("Content-Type", req.userProfile.photo.contentType);
    return res.send(req.userProfile.photo.data);
}

exports.upadteMentor = (req, res) => {
    let form = new formidable.IncomingForm();
    form.keepExtensions = true;
    form.parse(req, (err, fields, files) => {
        if(err) { return res.status(400).json({error: "Photo Could not be uploaded"}) };
        
        //save
        let user = req.userProfile;
        user = _.extend(user, fields);
        user.updated = Date.now();

        if(files.photo) {
            user.photo.data = fs.readFileSync(files.photo.path);
            user.photo.contentType = files.photo.type;
        }

        user.save((err, result) => {
            if(err) {
                return res.status(400).json({
                    error: "You are not authorized to perform this action"
                });
            }
            res.json(result);
        });
    });   
}

exports.deleteMentor = (req, res, next) => {
    Mentor.remove(req.userProfile, (err, user) => {
        if(err) return res.status(400).json({ err: "Data is not Enter" });
        
        res.json({user});
    });
}

exports.AllMentor = (req, res) => {
    Mentor.find((err, user) => {
        if(err) return res.status(400).json({ err: "Data is not Enter" });
        res.json(user); 
    }).select("name")
}

exports.taskMentor = (req, res) => {

    let task = TaskMentor(req.body);
    task.postedBy = req.userProfile;
    task = _.extend(task);

    task.save((err, result) => {
    if(err) {
        return res.status(400).json({
            error: err
        });
    }
    res.json(result);
    });        
}