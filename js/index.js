($(document).ready(function(){

    let w = $(window).width()
    let h = $(window).height()
    let scroll_now
    let total_height = $('body').height() - h
    const headTop = (w >= 768) ? '6px' : '4px'

    $(window).on('scroll', function(){

        scroll_now = $(window).scrollTop();

        if(scroll_now > h){
            $('#indicator').css('opacity', 1)
            $('#head').css('top', headTop)
        }
        else{
            $('#indicator').css('opacity', 0)
            $('#head').css('top', '0')
        }

        $('#indicator-bar').css('width', scroll_now/total_height * 100 + '%');

    })

}))