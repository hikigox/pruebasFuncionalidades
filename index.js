const express = require('express')
const logger = require('morgan')

const path = require('path')
const os = require('os');
const QRCode = require('qrcode');
const fs = require('fs');
const firebase = require('./firebaseStorage');
const uploads = require('./uploads');
const imgDir = path.join(__dirname,"public/uploads/fotos/lion-1551475621366.png");



const app = express();

const port = 3000;
app.use(logger('dev'));

app.use(express.json());

app.use(express.urlencoded({ extended: false }));


app.post('/', (req,res,next) => {
req.body.direccion = 'Hola'
res.json(req.body)
});
  app.post('/upload',(req,res) => {
    nameImg = req.params['tipo'];
    // console.log(nameImg);
    
      uploads.upload(req,res,(err) => {
            if(err){
              res.json({
                message:'tipo de imagen invalido',
                err
              })
                console.log(err);
                
            }else{         
              if(req.file){
        console.log(req.file.mimetype);
        
                firebase.example(path.join("./public/uploads/fotos/",req.file.filename));

                res.json({
                  data:req.body,
                  img:path.join(__dirname,"public/uploads/",req.file.filename)
                })
         
              }  else {
                console.log('No ingreso imagen');
                res.json({
                  message:'no ingreso imagen',
                  data: req.body
                })
              } 
             
              
                
    
            }
        })
    })

    // QRCode.toDataURL('https://www.npmjs.com/package/qrcode#installation', function (err, url) {
    //   console.log(url)
    // })
    var opts = {
      errorCorrectionLevel: 'H',
      type: 'image/jpeg',
      rendererOpts: {
        quality: 0.3
      }
    }

    var url = 'https://i.kym-cdn.com/photos/images/newsfeed/001/249/766/670.jpg';

function qr() {
  // let path1 = path.join(__dirname,"public/uploads/Qr/",'Qr'+ Date.now()+'.png');
  let path1 = path.join(__dirname,"public/uploads/fotos/Koala.jpg-1552101989002.jpg");

  // firebase.example(path1);
  
  // QRCode.toFile(path1, url,opts, function (err) {
   
  //   if (err) throw err
  //   console.log('done')
  //   fs.unlink(path1,(err) =>{
  //    if(err){

  //     return console.log('Error');

  //    } 
     
  //    console.log('Imagen Borrada');
     
  //   })
  // })
}

app.listen(port,()=>{
  qr();
  console.log(`inicio el servidor en el puerto ${port}`);
});


