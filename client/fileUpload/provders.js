orion.filesystem.providerUpload = function(options, success, failure) {
    S3.upload(options.fileList, "/orionjs", function(error, result) {
        if (error) {
            failure(error);
        } else {
          console.log(options.fileList[0]);
          var file = options.fileList;
            if (options.fileList[0].type == 'image/jpeg') {
              console.log('hey');
            }
            success(result.url, { s3Path: result.relative_url });
        }

    });
}
// Official S3 Remove Provider
orion.filesystem.providerRemove = function(file, success, failure)  {
    S3.delete(file.meta.s3Path, function(error, result) {
        if (error) {
            failure(error);
        } else {
            success();
        }
    })
}
