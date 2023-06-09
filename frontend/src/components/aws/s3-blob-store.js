var aws = require('aws-sdk');
var s3blobs = require('s3-blob-store');

var client = new aws.S3({
  accessKeyId: process.env.S3_ACCESS_KEY,
  secretAccessKey: process.env.S3_SECRET_KEY
});

var store = s3blobs({
  client: client,
  bucket: 'mybucket'
});

// write to s3
fs.createReadStream('/tmp/somefile.txt')
  .pipe(store.createWriteStream({ key: 'somefile.txt' }));

// read from s3
store.createReadStream({ key: 'somefile.txt' })
  .pipe(fs.createWriteStream('/tmp/somefile.txt'));

// remove
store.remove({ key: 'somefile.txt' }, function (err) {
   // ...
});

// exists
store.exists({ key: 'somefile.txt' }, function (err, exists) {
  // ...
});