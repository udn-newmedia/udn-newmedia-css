($(document).ready(function(){

    let w = $(window).width()
    let h = $(window).height()
    let scroll_now
    let total_height = $('body').height() - h
    const headTop = (w >= 768) ? '6px' : '4px'

    $(window).on('scroll', function(){

        scroll_now = $(window).scrollTop();
        movie1 = scroll_now - $('#movie-1').offset().top + h;

        if(scroll_now > h){
            $('#indicator').css('opacity', 1)
            $('#head').css('top', headTop)
        }
        else{
            $('#indicator').css('opacity', 0)
            $('#head').css('top', '0')
        }

        $('#indicator-bar').css('width', scroll_now/total_height * 100 + '%');

        if(movie1 > h/3 && movie1 < h + 200){
            if($('#movie-1').get(0).paused == true){
                moviePlay(1);
            }
        }
        else{
            if($('#movie-1').get(0).paused == false){
                moviePause(1)
            }
        }

    })

}))