function upload(req, res, next) {
    
    var file = new File();
    var params = req.body;

    file.name = params.name;
    file.n = params.n;
    file.data = params.data;

    file.save((err, fileStored) =>{
        if(err) return res.status(500).send({message: 'An error ocurred'})
    });
}

export default upload;
