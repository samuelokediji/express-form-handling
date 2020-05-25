var url = 'https://mylogging.io';

function log(message) {
    //send an http request
    console.log(message);
}

module.exports.log = log;
module.exports.endPoint = url;