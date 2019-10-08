var multer = require('multer');
const storage = multer.diskStorage({
    destination:(req,file,next)=>{
        next(null,'./uploads');
    },
    filename:function(req, file, next )
    {
        next(null, `${Date.now()}-${file.orignalname}`)
    }
});
const uploads = multer({ storage });

module.exports = uploads;