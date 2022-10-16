$(document).ready(function(){

    $('#btnIng').click(function() {
        let lib = new google.translate.TranslateService();
        lib.translatePage('es', 'en', function () {});
        $("#btnIng")[0].style.display = 'none';
        $("#btnEsp")[0].style.display = '';

    });
    $('#btnEsp').click(function() {
        $("#btnEsp")[0].style.display = 'none';
        $("#btnIng")[0].style.display = '';
        location.reload();
    });  
    $('#btnWp').click(function(){
        window.open('https://wa.link/5zwm9d');
    });
    
});

