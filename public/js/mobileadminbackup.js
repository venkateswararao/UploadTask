
var adminplayer = new Player();
var sliderBarInUse = false;
var selectedBeatNumberadmin = -1;


$(document).ready(function () {
    //fixImageDimensions();
    initadminEventHandlers();
    setupadminEvents();
    $(".lazy").lazyload();
    //$("#producerPopUp").popup({
    //    history: false, afterclose: function (event, ui) {
    //        $('body').css("overflow-y", "visible");
    //        popUpOpened = false;
    //    }
    //});
    //getBeatsFromServer();

});

function initadminEventHandlers() {

    /*$(window).scroll(function(event){
        $('.titleBar').toggle( $(window).scrollTop() < 40 );
    });*/

    

    sliderBar.Init();

    $('.slapchartPlayerWidgetadmin').on('touchmove', function (e) {
        e.preventDefault();
    });

   

    

    getPlayAdminButton().on('click', function (e) {

        if (adminplayer.isPlaying()) {
            pauseBeatadmin();

        } else {
            playBeatadmin();
        }

    });

  function playorpause(){
    if (adminplayer.isPlaying()) {
        playBeat();

    } else {
        pauseBeat();
    }
  }


    getNextButtonadmin().on('click', function (e) {
     

  playNextSongAdmin();


    });

    getBackButtonadmin().on('click', function (e) {

        if (adminplayer.getCurrentSongPosition() > 5) {
            adminplayer.seek(0);
        } else {
         
            playPreviousSongAdmin();
          
        }

    });

    getBackTenSecondsButtonadmin().on('click', function (e) {

        if (adminplayer.getCurrentSongPosition() > 10) {
            adminplayer.seek(adminplayer.getCurrentSongPosition() - 10);
        } else {
            adminplayer.seek(0);
        }

    });

    getForwardTenSecondsButtonadmin().on('click', function (e) {
        if (adminplayer.getSongDuration() - adminplayer.getCurrentSongPosition() > 10) {
            adminplayer.seek(adminplayer.getCurrentSongPosition() + 10);
        } else {
            adminplayer.seek(0);
        }
    });

   

   
    


    //$(".sliderBar").on('slidestop', function (event) {
    //    var songPosition = $(this).val();

    //    player.seek((songPosition / 1000) * player.getSongDuration());
    //    sliderBarInUse = false;
    //});

    //$(".sliderBar").on('slidestart', function (event) {
    //    sliderBarInUse = true;
    //});


    $(".sliderBar").on('input change', function (event) {
        var songPosition = $(this).val();
        adminplayer.seek((songPosition / 1000) * adminplayer.getSongDuration());
        sliderBarInUse = false;
        if (sliderBarInUse) {
        $('.currentTime').text(formatSongTime(Math.floor($(this).val() / 1000 * adminplayer.getSongDuration())));

        }
    });
   

    $(document).on('click', '.userBeats', function (e) {
      var self = $(this).parents(".list");
    //  function createInterval() {
        console.log("In setTimeOut");
        var id = $(self).attr("id");
        console.log("id..."+id);
        var BeatNumber = id.split('_')[1];
        var thisBeatNumber = parseInt(BeatNumber);
        console.log("thisBeatNumber..."+thisBeatNumber);

        if (selectedBeatNumberadmin == thisBeatNumber) {
            getPlayAdminButton().trigger('click');
        } else {
            clearAllAdminBeats();
           // $(this).addClass('selected');
            //$(this).find('.transparentPlayButton').html('pause');
            //$(this).find('.transparentPlayButton').attr("src", "imgs/PlayerImages/pause-sign.png")
            adminplayer.clear();

            var url = $(self).find("input.songbeatadmin").val();
            // var url = $(this).attr("url");
            selectedBeatNumberadmin = thisBeatNumber;
            //var bg = $(this).find(".producerImage").css('background-image');
            var bg = $(self).find(".imgbeatpic").attr('src');
            $('.beatInfoInPlayeradmin').css('visibility', 'visible');
            $('.sliderContainer').css('padding-top', '0px');
            bg = bg.replace('url(', '').replace(')', '').replace(/\"/gi, "");
            initAndAminPlayBeat(url, bg, $(self).find(".producerNameadmin ").text(), $(self).find(".producerLinkadmin").text(), $(self).find(".submittedDate").text());
            adminplayer.play();
        }
      //   if(!clickTriggered) {
      //     clickTriggered = true;
      //     //clearInterval(interval);
      //    $(this).trigger('click');
       //
      //  }
      //  else
      //   clickTriggered = false;
          //clearInterval(interval);
    //  }
      //var interval = setInterval(createInterval, 200);

    });

    // $(document).on('click', '.info', function (e) {
    //     var thisProducer = $(this).find('.producerLink').text();
    //     var thisProducerImage = $(this).find('.producerImage').css('background-image');
    //     openProducerPopup(thisProducer, thisProducerImage);
    //     //e.stopPropagation();
    // });
}




function pauseBeatadmin() {
    getPlayAdminButton().children('.playButtonIconadmin').attr("src", "imgs/PlayerImages/play.png");
    //getPlayButton().children('.playButtonIcon').html("play_arrow");
    //$('.beat.selected').find('.transparentPlayButton').html('play_arrow');
    // $('.beat.selected').find('.transparentPlayButton').attr("src", "imgs/PlayerImages/play-sign.png");

    adminplayer.pause();
}

function playBeatadmin() {
    // if ($('.userBeats.selected').length == 0) {
        if (selectedBeatNumberadmin == -1) {
        
      console.log("length"+$('.userBeats.selected').length);
      console.log("userbeats length"+$($('.userBeats')[0]));
        $($('.userBeats')[0]).trigger('click');
        return;
    }
    getPlayAdminButton().children('.playButtonIconadmin').attr("src", "imgs/PlayerImages/pause.png");
    //getPlayButton().children('.playButtonIcon').html("pause");
    //$('.beat.selected').find('.transparentPlayButton').html('pause_arrow');
    // $('.beat.selected').find('.transparentPlayButton').attr("src", "imgs/PlayerImages/pause-sign.png");

    adminplayer.play();
}




function playsongbeat(beatnum,id){
var thisBeatNumber = beatnum;


        if (selectedBeatNumberadmin == thisBeatNumber) {
            getPlayAdminButton().trigger('click');
        } else {
            
            clearAllAdminBeats();
            //$('beatadminNumber_' + (thisBeatNumber) + '').children('div').has("userBeats").addClass("selected");
           // $('beatadminNumber_' + (thisBeatNumber) + '>.beats > .userBeats').addClass("selected");
            // if(id.find(".beats.userBeats")){
            //    id.find(".beats > .userBeats").addClass('selected');
            //    //id.find(".beats.userBeats").className += " selected";

            //   //var d = document.getElementById('beatNumber_' + (selectedBeatNumberadmin + 1) + '').querySelector('.beats.userBeats');
            //   // d.className += " selected";
            // }
            adminplayer.clear();
            //$(this).find('.transparentPlayButton').html('pause');
            //$(this).find('.transparentPlayButton').attr("src", "imgs/PlayerImages/pause-sign.png")
            

            var url = id.find("input.songbeatadmin").val();
            // var url = $(this).attr("url");
            selectedBeatNumberadmin = thisBeatNumber;
            //var bg = $(this).find(".producerImage").css('background-image');
            var bg = id.find(".imgbeatpic").attr('src');
            $('.beatInfoInPlayeradmin').css('visibility', 'visible');
            $('.sliderContainer').css('padding-top', '0px');
            bg = bg.replace('url(', '').replace(')', '').replace(/\"/gi, "");
            initAndAminnpPlayBeat(url, bg, id.find(".producerNameadmin ").text(), id.find(".producerLinkadmin").text(), id.find(".submittedDate").text());
            //adminplayer.play();
        }

}

function playNextSongAdmin() {
    var beatFound = $('#beatadminNumber_' + (selectedBeatNumberadmin + 1) + '');
    //var beatFound = $('.beat[beatNumber="' + (selectedBeatNumber + 1) + '"]');

    if (beatFound.length > 0) {

        playsongbeat(selectedBeatNumberadmin + 1,beatFound);
       //$('beatadminNumber_' + (selectedBeatNumberadmin + 1) + '>.beats > .userBeats').trigger('click');
      // beatFound.find('.userBeats').trigger('click');
      // if(beatFound.find(".userBeats")){
      //   var found=beatFound.children(".userBeats");
      //   beatFound.children(".userBeats").trigger('click');
      // }

    }
}

function playPreviousSongAdmin() {

    if (selectedBeatNumberadmin > 0) {
        //$('.beat[beatNumber="' + (selectedBeatNumber - 1) + '"]').trigger('click');
        playsongbeat(selectedBeatNumberadmin - 1, $('#beatadminNumber_' + (selectedBeatNumberadmin - 1) + ''));
       // $('#beatNumber_' + (selectedBeatNumber - 1) + '').find(".beats.userBeats").trigger('click');
    }
    else if (selectedBeatNumberadmin == 0) {
      //  $('#beatNumber_' + (selectedBeatNumber) + '').trigger('click');
      adminplayer.seek(0);
   }
}




function initAndAminPlayBeat(songURL, imgsrc, producerName, beatTitle, submittedDate) {

    adminplayer = new LocalPlayer();
    //player = new SoundCloudPlayer();
    //player.init(songURL);
    // console.log("userid"+ userid);
    adminplayer.init(songURL, $('.jplayer'));
    $(document).trigger('playerReady');
   // player.play();
    $('.slapchartPlayerWidgetadmin .beatimage img').attr("src", imgsrc);;
    $('.slapchartPlayerWidgetadmin .producerName').text(producerName);
    $('.slapchartPlayerWidgetadmin .beatTitle').text(beatTitle);
    $('.slapchartPlayerWidgetadmin .submittedTime').text(submittedDate);
    // $('.slapchartPlayerWidget .beatotherUserid').val(userid);
    // $('.slapchartPlayerWidget .beatotherUserLogo').val(userLogo);
    // $(".socialproducerImage").css("background-image", userLogo);


}
function initAndAminnpPlayBeat(songURL, imgsrc, producerName, beatTitle, submittedDate) {

    adminplayer = new LocalPlayer();
    //player = new SoundCloudPlayer();
    //player.init(songURL);
    // console.log("userid"+ userid);
    adminplayer.init(songURL, $('.jplayer'));
   
    adminplayer.play();
    $('.slapchartPlayerWidgetadmin .beatimage img').attr("src", imgsrc);;
    $('.slapchartPlayerWidgetadmin .producerName').text(producerName);
    $('.slapchartPlayerWidgetadmin .beatTitle').text(beatTitle);
    $('.slapchartPlayerWidgetadmin .submittedTime').text(submittedDate);
    getPlayAdminButton().children('.playButtonIconadmin').attr("src", "imgs/PlayerImages/pause.png");
    // $('.slapchartPlayerWidget .beatotherUserid').val(userid);
    // $('.slapchartPlayerWidget .beatotherUserLogo').val(userLogo);
    // $(".socialproducerImage").css("background-image", userLogo);


}



function getPlayAdminButton() {
    return $('.slapchartPlayerWidgetadmin .controlsadmin .playButtonadmin');
}
function getNextButtonadmin() {
    return $('.slapchartPlayerWidgetadmin .controlsadmin .nextButtonadmin');
}

function getBackButtonadmin() {
    return $('.slapchartPlayerWidgetadmin .controlsadmin .backButtonadmin');
}



function getBackTenSecondsButtonadmin() {
    return $('.slapchartPlayerWidgetadmin .controlsadmin .backTenSecondsButtonadmin');
}

function getForwardTenSecondsButtonadmin() {
    return $('.slapchartPlayerWidgetadmin .controlsadmin .forwrardTenSecondsButtonadmin');
}





function clearAllAdminBeats() {
    selectedBeatNumberadmin=-1;
    //$('.userBeats').removeClass("selected");
    // $('.beat').find('.transparentPlayButton').html('play_arrow');
    // $('.beat').find('.transparentPlayButton').attr("src", "imgs/PlayerImages/play-sign.png");
}



function setupadminEvents() {
    $(document).on('playerReady', function (objectEvent) {
        sliderBar.setPosition(0);
        playBeatadmin();
    });

    $(document).on('songEnded', function (objectEvent) {
        sliderBar.setPosition(0);
        getPlayAdminButton().children('.playButtonIconadmin').attr("src", "imgs/PlayerImages/pause.png");
        //getPlayButton().children('.playButtonIcon').html("play_arrow");

        playNextSongAdmin();
    });

    $(document).on('loadedData', function (objectEvent) {
        $('.endTime').text(formatSongTime(Math.floor(adminplayer.getSongDuration())));
    });

    $(document).on('timeupdate', function (objectEvent) {

        if (!sliderBarInUse) {
            var currentPosition = adminplayer.getCurrentSongPosition();
            var songDuration = adminplayer.getSongDuration();

            var currentPercentage = currentPosition / songDuration;
            sliderBar.setPosition(currentPosition / songDuration);
            $('.currentTime').text(formatSongTime(Math.floor(currentPosition)));
        }

    });
}



function closePopUp() {
    // $('#producerPopUp').modal("close");
    //popUpOpened = false;
}

/**
 *	Slider Bar Object
 */

 var sliderBar = {
     getSliderBar: function () {
         return $("input.sliderBar");
     },
     Init: function () {
         this.getSliderBar().bootstrapSlider();
     },
     setPosition: function (percentage) {
         this.getSliderBar().bootstrapSlider('setValue', percentage * 1000);
     },
     getPosition: function () {
         return this.getSliderBar().bootstrapSlider('getValue');
     }
 }
