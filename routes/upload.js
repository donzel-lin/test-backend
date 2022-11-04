var express = require('express');
var router = express.Router();
const formidable = require('formidable')
const fs = require('fs')
router.post('/single', (req, res, next) => {
    const form = new formidable.IncomingForm();
    form.uploadDir = "./public/files" // 上传目录
    form.options.keepExtensions = true
    form.parse(req, (err, fields, files) => {
      if (err) {
        next(err);
        return;
      }
      console.log(fields, files, 'asdf' )
      res.json({ fields, files });
    });
  });
  
router.get('/', (req, res, next) => {
    console.log('aaa')
    res.send('respond with a resource');
})
module.exports = router;
