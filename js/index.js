($(document).ready(function(){

    var scroll_now;
    var read_progress = 10;
    var isMob = detectmob();
    var platform = (isMob == true) ? 'Mob' : 'PC';
    var progress = []
    var movie_progress = [null]

    function detectmob() {
        if( navigator.userAgent.match(/Android/i)
            || navigator.userAgent.match(/webOS/i)
            || navigator.userAgent.match(/iPhone/i)
            || navigator.userAgent.match(/iPad/i)
            || navigator.userAgent.match(/iPod/i)
            || navigator.userAgent.match(/BlackBerry/i)
            || navigator.userAgent.match(/Windows Phone/i)
        ){
            return true;
        }
        else {
            return false;
        }
    }

    function moviePlay(id){
        $('#movie-' + id).get(0).play();
        if(progress[id - 1] == null){
            progress[id - 1] = setInterval(function(){
                var curTime = $('#movie-' + id).get(0).currentTime;
                var temp = curTime / $('#movie-' + id).get(0).duration * 100;
                if(temp > 0.6){
                    $('.video-play[data-target="' + id + '"]').css('opacity', 0);
                }
                if(Math.floor(curTime/5) > movie_progress){
                    movie_progress = Math.floor(curTime/5)
                }
                
                $('#progress-bar-' + id).css('width', temp + '%')
            }, 600)
        }
    }
        
    function moviePause(id){
        $('#movie-' + id).get(0).pause();
        $('.video-play[data-target="' + id + '"]').css('opacity', 1);
        if(progress[id-1]){
            clearInterval(progress[id-1])
            progress[id-1] = null;
        }
    }

    function movieReplay(id){
        $('#movie-' + id).get(0).currentTime = 0;
        $('#movie-' + id).get(0).play();
        $('.progress-bar').css('width', 0);
        clearInterval(progress[id - 1])
        progress[id - 1] = setInterval(function(){
            var temp = $('#movie-' + id).get(0).currentTime / $('#movie-' + id).get(0).duration * 100
            $('#progress-bar-' + id).css('width', temp + '%')
        }, 600)
    }

    function movieVolume(id){
        
        if($('#movie-' + id).get(0).muted == true){
            $('#movie-' + id).get(0).muted = false;
            $('.volume[data-target="' + id + '"]').removeClass('fa-volume-off').addClass('fa-volume-up')
            $('.volume-text[data-target="' + id + '"]').text('點按關聲音');
        }
        else{
            $('#movie-' + id).get(0).muted = true;
            $('.volume[data-target="' + id + '"]').removeClass('fa-volume-up').addClass('fa-volume-off')
            $('.volume-text[data-target="' + id + '"]').text('點按開聲音');
        }
    }

    let w = $(window).width()
    let h = $(window).height()
    let total_height = $('body').height() - h
    const headTop = (w >= 768) ? '6px' : '4px'
    var title = $('title').text();

    $('a').click(function(){
        ga("send", {
            "hitType": "event",
            "eventCategory": "超連結點擊",
            "eventAction": "click",
            "eventLabel": "[" + platform + "] [" + title + "] [" + $(this).attr('href') + "]"
        });
    });

    $('#scroll-down').click(function(){
        ga("send", {
            "hitType": "event",
            "eventCategory": "ham bar",
            "eventAction": "click",
            "eventLabel": "[" + platform + "] [" + title + "] [scroll down]"
        });			
    });

    $('.line-share').click(function(e){
        ga("send", {
            "hitType": "event",
            "eventCategory": "Line Share",
            "eventAction": "click",
            "eventLabel": "[" + platform + "] [" + title + "] [line share]"
        });
        if(detectmob()){
			//手機
			window.location.href="//line.me/R/msg/text/?" + title + "%0D%0A%0D%0A" + $('meta[property="og:description"]').attr('content') + "%0D%0A%0D%0A" + window.location.href;
		}else{
			window.open("https://lineit.line.me/share/ui?url="+window.location.href);
		}
    });

    $(window).on('scroll', function(){

        scroll_now = $(window).scrollTop();

        var cur_scroll = scroll_now/total_height * 100;

        for(;read_progress<=Math.floor(cur_scroll);read_progress+=10){
    
            console.log(read_progress + "%");

            ga("send", {
                "hitType": "event",
                "eventCategory": "read",
                "eventAction": "scroll",
                "eventLabel": "[" + platform + "] [" + title + "] [page read " + read_progress + "%]"
            });
        }

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