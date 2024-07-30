$(document).ready(function(){
    $('header button').click(function() {
        $('form').slideDown();
    })

    $('#btn-cancel').click(function() {
        $('form').slideUp();
    });
    
    $('form').on('submit', function(e) {
        e.preventDefault();
        const newAdressImage = $('#new-adress-image').val();
        const newItem = $('<li style="display: none"></li>');
        $(`<img src ="${newAdressImage}" />`).appendTo(newItem);

        $(`<div class="overlay-image-link">
            <a href="${newAdressImage}" target="_blank" title="See full size image">
                See full size image
            </a>
            </div>
            `).appendTo(newItem);
            $(newItem).appendTo('ul');
            $(newItem).fadeIn(1000);
            $('#new-adress-image').val('');
    })

})