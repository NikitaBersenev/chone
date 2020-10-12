module.exports.homelist = function (req, res, next) {
    res.render('locations-list', { title: 'Home' });
}

module.exports.locationInfo = function (req, res, next) {
    res.render('location-info', { title: 'Location info' });
}

module.exports.addReview = function (req, res, next) {
    res.render('index', { title: 'Add review' });
}
