
var pubs = require("../pubs.json");
const moment = require('moment');
function findAllPubs(){
	console.log(pubs);
	return pubs;
}
function findPubsByDate(){
console.log(pubs._.moment().format('dddd'));
	return pubs.moment.moment().format('dddd');
}


