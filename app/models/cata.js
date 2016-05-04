var mongoose = require('mongoose');

module.exports = mongoose.model('Cata', {
	// text : {type : String, default: ''},
	// textEnd : {type : String, default: ''}

	cata : {type : String, default: ''},
	cataId : {type : String, default: ''}

});