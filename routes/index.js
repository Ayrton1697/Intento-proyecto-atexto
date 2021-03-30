import express from 'express';
const router = express.Router();

import fileController from '../controllers/fileController.js';

function routes() {
    
    // Agrega nuevos archivos via POST
    router.post('/upload',async (req, res)=> {
      if(req.files === null){
         return res.status(400).json({msg:'No file sent!'});
     
       }else{
          fileController.upload();
         return res.status(200).json({msg: 'Uploaded!'});
       }

    });
        //Editar nombre del archivo
        router.post('/edit',async (req, res)=> {
         try {
            await Archivos.findOneAndDelete({_id : req.params.id});
            res.json({mensaje : 'The file has been deleted!'});
        } catch (error) {
            console.log(error);
            next();
        }
   
       });
    //Borrar archivo
    router.post('/delete',async (req, res)=> {
      try {
         await Archivos.findOneAndDelete({_id : req.params.id});
         res.json({mensaje : 'The file has been deleted!'});
     } catch (error) {
         console.log(error);
         next();
     }

    });
    router.get('/test',function(req, res){
           try{
        res.json({ mensaje : 'Route testing' });
       } 
       catch (error){
        res.json({error:'este es el error'});
        res.send(error);
        next();
       }
    });


    return(router)

}
export default routes;