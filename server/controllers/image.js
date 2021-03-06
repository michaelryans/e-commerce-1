const Image = require('../models/image')
class ImageController {
    static uploadPicture(req,res) {
        Image.create({
            image: req.file.cloudStoragePublicUrl,
            user: req.decoded._id,
            // tags: req.file.labels
        })
        .then(created=> {
            res.status(201).json(created)
        })
        .catch(err => {
            res.status(500).json({
                message:'error update picture model',
                err: err.errors.image
            })
        })
    }
}
module.exports = ImageController