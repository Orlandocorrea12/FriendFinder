var path = require("path")

module.exports = function (data, err) {
    if (err) {
        console.log(err)
        data.get('/', function (req, res) {
            res.sendFile(path.join(__dirname, '../public/home.html'))
        })
    }
    data.get('/', function (req, res) {
        res.sendFile(path.join(__dirname, '../public/home.html'));
    });

    data.get('/survey', function (req, res) {
        res.sendFile(path.join(__dirname, '../public/survey.html'));
    });
};