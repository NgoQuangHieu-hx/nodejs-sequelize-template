'use strict';

const express = require('express');
const path = require('path');
const glob = require('glob');
const router = require('express').Router();

module.exports = function (app) {
    const router = express.Router();
    const controllers = glob.sync(path.join(__dirname, 'sample/*.js'));
    controllers.forEach(function (controllerPath) {
        const controller = require(path.resolve(controllerPath));
        controller(router);
    });

    app.use('/', router);
};