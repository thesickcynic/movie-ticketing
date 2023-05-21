const Sequelize = require("../config/connectToDB").sequalize;

const Datatypes = require('sequelize');
const Showing = Sequelize.define('Showing', {
    id: {
        type: Datatypes.BIGINT(),
        autoIncrement: true,
        primaryKey:true
    },
    showingDate: {
        type: Datatypes.DATE,
        allowNull: false
    },
    showingAudio: {
        type: Datatypes.STRING(100)
    },
    showingSubtitleLanguage: {
        type: Datatypes.STRING(100)
    }
});

module.exports = Showing