const Sequelize = require("../config/connectToDB").sequalize;

const City = require("../models/cities");
const Movie = require("../models/movies");
const Theater = require("../models/theaters");
const Showing = require("../models/showings");

exports.getTheaters = async (req, res) => {
    try{
        console.log("Came here");
        const city = await City.findByPk(req.params.cityid, {
            include: Theater
        });
        console.log(city);
        const theaterList = city.getTheaters();
        return res.status(200).json(theaterList);
    }
    catch(error) {
        return res.status(500).json({message: error.message});
    }
};

// module.exports = getTheaters;