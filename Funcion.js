$(document).ready(function(){

    $.ajax({
        url : 'Productos.txt',
        dataType: "text",
        success : function (data) 
        {
            data = JSON.parse(data).Productos;

            let html = ``;

            for (let i = 0; i < data.length; i++) {
                
                html += `<div class="CardProducts">
                            <img id="Img${i+1}" class="ProductsImg" src="${data[i].imagen}" alt="Producto${i}">
                            <div class="Details" id="Details${i+1}">
                                <b class="Title">${data[i].titulo}<i id="Look${i+1}" class="fa fa-plus link-icon"></i></b>
                                <div class="Price">
                                    <b>PRECIO</b> 
                                    <p>$ ${data[i].precio}</p>
                                </div>
                                <div class="Category">
                                    <b>CATEGORÍA</b>
                                    <p>${data[i].categoria}</p>
                                </div>
                                <div class="Description">
                                    <b>DESCRIPCIÓN</b>
                                    <p>${data[i].descripcion}</p>
                                </div>
                            </div>
                        </div>`
                
            }

            $('#Products').append(html);

            for (let i = 0; i < data.length; i++) {
                $(`#Look${i+1}`).click(()=>{
                    LookDetails($(`#Details${i+1}`), $(`#Look${i+1}`), $(`#Img${i+1}`));
                })                
            }
        }
    });

    $('#btnEn').click(function() {
        let lib = new google.translate.TranslateService();
        lib.translatePage('es', 'en', function () {});
        $('#btnSp').show();
        $('#btnEn').hide();
    });

    $('#btnSp').click(function() {
        location.reload();
        $('#btnSp').hide();
        $('#btnEn').show();
    });  

    $('#btnWp').click(function(){
        window.open('https://wa.link/5zwm9d');
    });
});


const LookDetails = (Details, icon, img) =>{

    if(icon.hasClass('fa-plus')) {
        Details.css({'height':'260px',
                     'translate':'0 -205px',
                     'margin-bottom':'-205px',
                     'opacity':'.8',
                     'box-shadow':'0px 10px 15px #fa0'});

        img.css('z-index', '10');
    
        icon.addClass('fa-minus');
        icon.removeClass('fa-plus');
    } else {
        Details.css({'height':'55',
                     'translate':'0',
                     'margin-bottom':'0',
                     'opacity':'1',
                     'box-shadow':'0px 5px 15px #fa0'});
        
        setTimeout(() => {
            img.css('z-index', '50');
        }, 1000);
    
        icon.addClass('fa-plus');
        icon.removeClass('fa-minus');
    }

}
