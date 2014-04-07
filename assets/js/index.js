$(function(){
    init();
});

function init(){
    setTimeout(function(){
        $('.block').hide();
        $('#logo').show();
        setTimeout(function(){
            $('.block').hide();
            $('#menu').show();
        },1000)
    },2000)

    $('#start_game').click(function(){
        $('.block').hide();
        $('#defend_mode').show();
    });

}





