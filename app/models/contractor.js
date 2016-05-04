var mongoose = require('mongoose');

module.exports = mongoose.model('Contractor', {
	// text : {type : String, default: ''},
	// textEnd : {type : String, default: ''}

	contractor : {type : String, default: ''},
	// cataId : {type : String, default: ''},
    timeSlot : {type : String, default: ''},


});