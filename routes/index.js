const express = require('express');
const router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
    let mascots = [
        {name: 'Sammy', organization: "DigitalOcean", birth_year: 2012},
        {name: 'Tux', organization: "Linux", birth_year: 1996},
        {name: 'Moby Dock', organization: "Docker", birth_year: 2013}
    ];
    let tagline = "No programming concept is complete without a cute animal mascot.";
    res.render('index', {
        mascots: mascots,
        tagline: tagline,
        title: " Express JS"
    });
});

module.exports = router;
