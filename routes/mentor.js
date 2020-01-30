const express = require("express");
const router = express.Router();

const { taskMentor, AllMentor, addMentor, mentorId, getMentor, photoUrl, upadteMentor, deleteMentor } = require("../controllers/mentor")

router.post("/addmentor", addMentor);
router.get("/allmentor", AllMentor)
router.get("/mentor/:userID", getMentor);
router.put("/mentor/update/:userID", upadteMentor);

//Photo URL
router.get("/mentor/photourl/:userID", photoUrl);

router.post("/givetask/:userID", taskMentor);

//Delete User
router.delete("/mentor/delete/:userID", deleteMentor);

//UserID Params
router.param("userID", mentorId);

module.exports  = router;