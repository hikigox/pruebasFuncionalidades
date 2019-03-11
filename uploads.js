
const multer = require('multer')
const path = require('path')

const v1= {}

//Intance sotrage , ponerle el nombre y tipo al archivo , como tambien la hubicacion .
var storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, 'public/uploads/fotos/')
    },
    filename: function (req, file, cb) {
      cb(null, file.originalname + '-' + Date.now() + path.extname(file.originalname))
    }
  });
  
  
   let nameImg ='lion';
 v1.upload = multer({ storage: storage ,
    fileFilter:(req,file,callback)=>{
      checkFileType(file,callback);
  }}).single('foto');
  
 
  const checkFileType = (file,callback) => {
      const validateTypes = /jpeg|jpg|png|gif/;
  
  
      const checkExt = validateTypes.test(path.extname(file.originalname).toLowerCase());
  
      const mime = validateTypes.test(file.mimetype);
    if(mime && checkExt){
    return callback(null,true);
    }else {
  const err ='tipo invalido';
   return     callback(err,false);
    }
  }


  module.exports = v1;