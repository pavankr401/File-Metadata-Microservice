var express = require('express');
var cors = require('cors');
require('dotenv').config();
var multer = require('multer');
const upload = multer({dest: 'uploads/'})

var app = express();

app.use(cors());
app.use('/public', express.static(process.cwd() + '/public'));
app.use(express.urlencoded({extended: true}));

app.get('/', function (req, res) {
  res.sendFile(process.cwd() + '/views/index.html');
});




const port = process.env.PORT || 4000;
app.listen(port, function () {
  console.log('Your app is listening on port ' + port)
});

app.post("/api/fileanalyse", upload.single('upfile'),function(req, res){
  // console.log(req.file);
  res.json({name: req.file.originalname, type: req.file.mimetype, size: req.file.size})
})