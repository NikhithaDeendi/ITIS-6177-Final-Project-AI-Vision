const express = require('express');
const axios = require('axios');
const multer = require('multer');
const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('./swagger.json');
const fs = require('fs');
const {errors,statusCodes} = require('./strings.js');
const {headers,port,uriBase,uriBase4} = require('./config.js');
const {isValidFile, isValidFileSize, isValidImage, isValidResolution} = require('./validations.js');


const app = express();

var storage = multer.diskStorage({
  destination:'./uploads',
  filename: function (req, file, cb) {
    cb(null, file.originalname)
  }
})
var upload = multer({ storage: storage })

app.use(express.static(__dirname + '/public'));
app.use('/uploads', express.static('uploads'));

// Identify colors of the image
app.post('/identify-colors', upload.single('image'), (req,res) => {

  if(!req?.file?.filename){
    handleError(req,res);
  }
  else{
    const file = fs.readFileSync(`./uploads/${req?.file?.filename}`)
    
    if(isValidFile(req)){
      const params = {
          'visualFeatures': 'Color',
          'details': '',
          'language': 'en'
      };

      axios({
          method: 'post',
          url: uriBase,
          params,
          data: file,
          headers
        })
        .then((response)=>{
          const {color, metadata} = response.data;
          res.status(statusCodes.SUCCESS);
          res.json({
            color,
            metadata
          });
        })
        .catch((error) => {
          res.send(error);
        });
    }
    else{
      handleError(req,res);
    }
    deleteImage(req.file.filename);
  }
});

// Read text of the image
app.post('/read-text', upload.single('image'), (req,res) => {

  if(!req?.file?.filename){
    handleError(req,res);
  }
  else{
    const file = fs.readFileSync(`./uploads/${req?.file?.filename}`)
    if(isValidFile(req)){
      const params = {
        'features': 'Read',
        'model-version': 'latest',
        'language': 'en',
        'api-version': '2023-10-01'
      };

      axios({
          method: 'post',
          url: uriBase4,
          params,
          data: file,
          headers
        })
        .then((response)=>{
          const {readResult, metadata} = response.data;
          res.status(statusCodes.SUCCESS);
          res.json({
            readResult,
            metadata
          });
        })
        .catch((error) => {
          res.send(error);
        });
    }
    else{
      handleError(req,res);
    }
    deleteImage(req.file.filename);
  }
});

// generate captions of the images
app.post('/caption-generator', upload.single('image'), (req,res) => {

  if(!req?.file?.filename){
    handleError(req,res);
  }
  else{
    const file = fs.readFileSync(`./uploads/${req?.file?.filename}`)

    if(isValidFile(req)){
      const params = {
        'features': 'Caption',
        'model-version': 'latest',
        'language': 'en',
        'api-version': '2023-10-01'
      };

      axios({
          method: 'post',
          url: uriBase4,
          params,
          data: file,
          headers
        })
        .then((response)=>{
          const {captionResult, metadata} = response.data;
          res.status(statusCodes.SUCCESS);
          res.json({
            caption: captionResult,
            metadata
          });
        })
        .catch((error) => {
          res.send(error);
        });
    }
    else{
      handleError(req,res);
    }
    deleteImage(req.file.filename);
  }
});
// generate tags of the images
app.post('/tags-generator', upload.single('image'), (req,res) => {

  if(!req?.file?.filename){
    handleError(req,res);
  }
  else{
    const file = fs.readFileSync(`./uploads/${req?.file?.filename}`)

    if(isValidFile(req)){
      const params = {
        'features': 'Tags',
        'model-version': 'latest',
        'language': 'en',
        'api-version': '2023-10-01'
      };

      axios({
          method: 'post',
          url: uriBase4,
          params,
          data: file,
          headers
        })
        .then((response)=>{
          const {tagsResult, metadata} = response.data;
          res.status(statusCodes.SUCCESS);
          res.json({
            tags: tagsResult,
            metadata
          });
        })
        .catch((error) => {
          res.send(error);
        });
    }
    else{
      handleError(req,res);
    }
    deleteImage(req.file.filename);
  }
});


const handleError = (req,res) => {
  if(!req?.file?.filename){
    res.status(statusCodes.NOT_FOUND);
    res.json(errors.NOT_FOUND)
  }
  else if(!isValidImage(req.file)){
    res.status(statusCodes.BAD_REQUEST);
    res.json(errors.INVALID_FORMAT);
  }
  else if(!isValidFileSize(req.file.size)){
    res.status(statusCodes.BAD_REQUEST);
    res.json(errors.UNSUPPORTED_FILE_SIZE);
  }
  else if(!isValidResolution(req.file.path)){
    res.status(statusCodes.BAD_REQUEST);
    res.json(errors.INVALID_RESOLUTION);
  }
}

const deleteImage = (filename) => {
  fs.unlink(`./uploads/${filename}`, (err) => {
    if (err) {
      console.error(err);
    }
  });
}

app.listen(port, () =>{
    console.log(`App running in port ${port}`);
});

app.use('/docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));
