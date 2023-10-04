'use strict';

const express = require('express');
const path = require('path');
const glob = require('glob');

module.exports = function (app) {
    const router = express.Router();
    const controllers = glob.sync(path.resolve('./src/controllers/*.js'));
    controllers.forEach(function (controllerPath) {
        require(path.resolve(controllerPath))(app);
    });

    return router;
};
