$( document ).ready(function() {
    Dropzone.autoDiscover = false;
    var myDropzone = new Dropzone(".dropzone", {
        url: '/api/file',
        autoProcessQueue: true,
        maxFilesize: maxFilesize,
        acceptedFiles : acceptedFiles
    });
    myDropzone.on("queuecomplete", function(file, http) {
        window.setTimeout(function(){
            location.reload();
        }, 1000);
    });
    myDropzone.on("sending", function(file, fromData) {
        if ($('.alert-danger').length > 0) {
            $('.alert-danger').remove();
        }
    });
    myDropzone.on("error", function(file, errorMessage) {
        var html = '<div class="alert alert-danger" role="alert">' + errorMessage.file[0] + '</div>';
        $('.col-md-12').first().prepend(html);
        setTimeout(function() {
            myDropzone.removeFile(file);
        }, 2000);
    });
});
