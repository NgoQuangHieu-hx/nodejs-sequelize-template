const path = require('path');
const fs = require('fs');

/**
 * @api {get} /get-image Lấy ảnh
 * @apiName Lấy ảnh
 * @apiGroup Get
 *
 * @apiParam {String} null
 **/
module.exports = function (router) {
    router.get('/test-connection', function (req, res, next) {
        try {
            console.log(__dirname);
            const imagePath = req.params.path ?? '';
            if (fs.existsSync(path.join(__dirname, '..', 'images', imagePath)) && imagePath != '') {
                res.sendFile(path.join(__dirname, '..', 'images', imagePath));
            } else {
                res.sendFile(path.join(__dirname, '..', 'images', 'error-image-generic.png'));
            }
        } catch (error) {
            console.error(error);
        }
    })
}