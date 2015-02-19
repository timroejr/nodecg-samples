'use strict';

/**
 * Reads staff credits from local JSON file and passes to view
 * Reports duration to admin panel
 */

module.exports = function(nodecg) {
    var express = require('express'),
        app = express(),
        fs = require('fs'),
        path = require('path');

    app.post('/gxl-credits/update', function(req, res) {
        try {
            var staffPath = path.join(__dirname, 'staff.json');
            var credits = JSON.parse(fs.readFileSync(staffPath, 'utf8'));
            res.status(200).json(credits);
        } catch (e) {
            res.status(500).send(e);
        }
    });

    nodecg.mount(app);
};
