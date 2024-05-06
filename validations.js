const sizeOf = require('image-size')

const MAX_FILE_SIZE = 4194304

const isValidImage = (file) => {

    const type = file.mimetype;
    if(type == "image/jpeg" || type == "image/png" ||type == "image/gif" || type == "image/bmp"){
        try{
            sizeOf(file.path);
            return true;
        }
        catch{
            return false
        }
    }
    else{
      return false;
    }
};

const isValidResolution = (filepath) => {

    try{
        const dimensions = sizeOf(filepath);
        if(dimensions.height > 50 && dimensions.height < 16000 && dimensions.width > 50 && dimensions.width < 16000){
            return true;
        }
        else {
            return false;
        }
    }
    catch{
        return false;
    }
};

const isValidFileSize = (size) => {
    return size<MAX_FILE_SIZE;
}

const isValidFile = (req) => {
    return isValidImage(req.file) && isValidFileSize(req.file.size) && isValidResolution(req.file.path)
}

module.exports = {isValidImage, isValidFileSize, isValidResolution, isValidFile};
