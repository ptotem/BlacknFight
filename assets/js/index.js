var defend_count=0;
var attack_count=0;
var timer = null;
var interval = 1000;

$(function(){
    init();
});

function init(){
    setTimeout(function(){
        $('.block').hide();
        $('#logo').fadeIn(1500);

        setTimeout(function(){
            $('#logo').fadeOut('slow');

            setTimeout(function(){
                $('.block').hide();
                $('#menu').show();
            },1000);

        },3000);
    },500)



    $('#start_game').click(function(){
        $('.block').hide();
        $('#defend_mode').show();

    });

    $('#tutorial').click(function(){
        $('.block').hide();
        $('#defend_mode').show();
        attack_mode();
    });

    $('.pb_attack').click(function(){
     attack_mode();

    })

    $('.pb_block').click(function(){
        defend_mode();
    })
}


function attack_mode(){

        if (attack_count == 0){
            $('#attack_mode_status').show();
            $('#attack_mode_description').html("Perfect. You got a hit. Look at your opponents HP, it has decreased. Both you and your opponent have a HP of 15. You will need to hit your opponent 15 times to win. Try hitting again now..")

        }else if (attack_count == 1){
            $('#attack_mode_status').show();
            $('#attack_mode_description').html("Brilliant! You got managed to successfully hit your opponent again. For every time you manage to hit successfully you get another turn. Go on, attack again")
        }else if (attack_count==2){
            $('#attack_mode_status').text('Blocked')
            $('#attack_mode_status').show();
            $('#attack_mode_description').html("Looks like you got blocked by your opponent. It’s time for you to defend yourself now, get ready…");
        }

        if (attack_count >= 2){
            setTimeout(function(){
                $('.block').hide();
                $('#defend_mode').show();
                show_countdown();
            },2000)

        }
    attack_count=attack_count+1
    setTimeout(function(){
        $('#attack_mode_status').hide();
    },1000);

}

function defend_mode(){

    $('#defend_timing').show();
    if (defend_count == 0){
        show_countdown();
        $('#defend_mode_status').show();
        $('#defend_mode_description').html("Oh! You did not block your opponent and got hit. Check out your HP drain. Try again, the AI can be quite a tricky opponent sometimes")
    }else if (defend_count == 1){
        show_countdown();
        $('#defend_mode_status').show();
        $('#defend_mode_description').html("Oh! You did not block your opponent and got hit. Check out your HP drain. Try again, the AI can be quite a tricky opponent sometimes")

    }else if (defend_count==2){
        $('#defend_mode_status').text('Blocked')
        $('#defend_mode_status').show();
        $('#defend_mode_description').html("Good! You managed to block an Attack. Time for you to play with the real thing. Watch yourself; the opponent (bot) will keep learning your attack patterns as you play. So it’s just going to get harder to hit your opponent");
    }


        if (defend_count >= 2){
            setTimeout(function(){
                $('.block').hide();
                $('#game_over').show();
            },2000)

        }
    defend_count=defend_count+1

}

function show_countdown(){
    var a= 3
    timer =setInterval(function(){
        $('#defend_timing').text(a);
        a = a-1;
        check_and_stop(a);
    },interval);
}

function check_and_stop(my_var){
    if(my_var <= 0){
        clearInterval(timer);
        timer = null;
        $('#defend_timing').text('');
    }
}


function game_over(){

}





