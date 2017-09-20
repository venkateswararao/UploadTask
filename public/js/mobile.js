
var player = new Player();
var sliderBarInUse = false;
var selectedBeatNumber = -1;
var popUpOpened = false;
var clickTriggered = false;


/*Admin*/
var adminplayer = new Player();
var selectedBeatNumberadmin = -1;

$(document).ready(function () {
    fixImageDimensions();
    initEventHandlers();
    setupEvents();
    $(".lazy").lazyload();

     /*Admin*/
    initadminEventHandlers();
   
    //$("#producerPopUp").popup({
    //    history: false, afterclose: function (event, ui) {
    //        $('body').css("overflow-y", "visible");
    //        popUpOpened = false;
    //    }
    //});
    //getBeatsFromServer();

});

function initEventHandlers() {

    /*$(window).scroll(function(event){
        $('.titleBar').toggle( $(window).scrollTop() < 40 );
    });*/

    $(window).resize(function () {
        fixImageDimensions();
    });

    sliderBar.Init();

    $('.slapchartPlayerWidget').on('touchmove', function (e) {
        e.preventDefault();
    });

    // $(window).scroll(function (e) {
    //     if (popUpOpened) {
    //         closePopUp();
    //     }
    // });

    getPlayButton().on('click', function (e) {

        if (player.isPlaying()) {
            pauseBeat();

        } else {
            playBeat();
        }

    });



  function playorpause(){
    if (player.isPlaying()) {
        playBeat();

    } else {
        pauseBeat();
    }
  }


    getNextButton().on('click', function (e) {

  playNextSong();

    });

    getBackButton().on('click', function (e) {

        if (player.getCurrentSongPosition() > 5) {
            player.seek(0);
        } else {

            playPreviousSong();
        }

    });

    getBackTenSecondsButton().on('click', function (e) {

        if (player.getCurrentSongPosition() > 10) {
            player.seek(player.getCurrentSongPosition() - 10);
        } else {
            player.seek(0);
        }

    });

    getForwardTenSecondsButton().on('click', function (e) {
        if (player.getSongDuration() - player.getCurrentSongPosition() > 10) {
            player.seek(player.getCurrentSongPosition() + 10);
        } else {
            player.seek(0);
        }
    });

    // getSubmitPageButton().on('click', function (e) {

    //     if (player.isPlaying()) {
    //         getPlayButton().trigger('click');
    //     }

    //     $('.mainPage').hide();
    //     $('.submitPage').show("slide", { direction: "right" }, 300);
    // });

    // getSubmitPageBackButton().on('click', function (e) {
    //     $('.submitPage').hide();
    //     $('.mainPage').show("slide", { direction: "left" }, 300);
    // });

    // getSubmitButton().on('click', function (e) {

    //     var json = getSubmitPageJson();

    //     $.ajax({
    //         method: "POST",
    //         url: "http://localhost:3000/songs/add",
    //         data: JSON.stringify(json),
    //         headers: {
    //             'Content-Type': 'application/json'
    //         }
    //     }).success(function () {
    //         alert("added song");
    //     }).error(function (err) {
    //         alert(err.status + ": " + err.responseText);
    //     });
    // });


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
          var loc=window.location.href;
          if(loc.search("beats")==-1){
            player.seek((songPosition / 1000) * player.getSongDuration());
            //adminplayer.seek((songPosition / 1000) * adminplayer.getSongDuration());
            sliderBarInUse = false;
            if (sliderBarInUse) {
            $('.currentTime').text(formatSongTime(Math.floor($(this).val() / 1000 * player.getSongDuration())));
            //$('.currentTime').text(formatSongTime(Math.floor($(this).val() / 1000 * adminplayer.getSongDuration())));
          }
          }else
          {
            //player.seek((songPosition / 1000) * player.getSongDuration());
            adminplayer.seek((songPosition / 1000) * adminplayer.getSongDuration());
            sliderBarInUse = false;
            if (sliderBarInUse) {
            //$('.currentTime').text(formatSongTime(Math.floor($(this).val() / 1000 * player.getSongDuration())));
            $('.currentTime').text(formatSongTime(Math.floor($(this).val() / 1000 * adminplayer.getSongDuration())));
          }
          }




      });

    $(document).on('click', '.beat', function (e) {
        var target=e.target;
        if($(target).parents().hasClass("info"))
      var res=  $(target).parents().hasClass("info");
      if(res!=true){
        var id = $(this).attr("id");
        var BeatNumber = id.split('_')[1];
        var thisBeatNumber = parseInt(BeatNumber);

        if (selectedBeatNumber == thisBeatNumber) {
            getPlayButton().trigger('click');
        } else {
            clearAllSelectedBeats();
            $(this).addClass('selected');
            //$(this).find('.transparentPlayButton').html('pause');
            $(this).find('.transparentPlayButton').attr("src", "imgs/PlayerImages/pause-sign.png")
            player.clear();
            var url = $(this).find("input.songbeat").val();
            // var url = $(this).attr("url");
            selectedBeatNumber = thisBeatNumber;
            //var bg = $(this).find(".producerImage").css('background-image');
            var bg = $(this).css('background-image');
            bg = bg.replace('url(', '').replace(')', '').replace(/\"/gi, "");
            $('.beatInfoInPlayer').css('visibility', 'visible');
            $('.sliderContainer').css('padding-top', '0px');
            initAndPlayBeat(url, bg, $(this).find(".producerName .producerLink").text(), $(this).find(".beatName").text(), $(this).find(".beatUserid").val(), $(this).find(".beatUserLogo").val());
        }
}
    });




}
function initadminEventHandlers() {

    /*$(window).scroll(function(event){
        $('.titleBar').toggle( $(window).scrollTop() < 40 );
    });*/



    // sliderBar.Init();

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


    // $(".sliderBar").on('input change', function (event) {
    //     var songPosition = $(this).val();
    //     adminplayer.seek((songPosition / 1000) * adminplayer.getSongDuration());
    //     sliderBarInUse = false;
    //     if (sliderBarInUse) {
    //     $('.currentTime').text(formatSongTime(Math.floor($(this).val() / 1000 * adminplayer.getSongDuration())));

    //     }
    // });


    $(document).on('click', '.userBeats', function (e) {
      var self = $(this).parents(".list");
    //  function createInterval() {
        console.log("In setTimeOut");
        var id = $(self).attr("id");
        console.log("id..."+id);
        var BeatNumber = id.split('_')[1];
        var tabchanged=$(self).find(".tabchanged ").val()
        var thisBeatNumber = parseInt(BeatNumber);
        console.log("thisBeatNumber..."+thisBeatNumber);
        if(tabchanged)
         {
           selectedBeatNumberadmin=-1;
         }
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
             initAndAminnpPlayBeat(url, bg, $(self).find(".producerNameadmin ").text(), $(self).find(".producerLinkadmin").text(), $(self).find(".submittedDate").text());
            //adminplayer.play();
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


function pauseBeat() {
    getPlayButton().children('.playButtonIcon').attr("src", "imgs/PlayerImages/play.png");
    //getPlayButton().children('.playButtonIcon').html("play_arrow");
    //$('.beat.selected').find('.transparentPlayButton').html('play_arrow');
    $('.beat.selected').find('.transparentPlayButton').attr("src", "imgs/PlayerImages/play-sign.png");

    player.pause();
}

function playBeat() {

    if ($('.beat.selected').length == 0) {
        $($('.beat')[0]).trigger('click');
        return;
    }
    getPlayButton().children('.playButtonIcon').attr("src", "imgs/PlayerImages/pause.png");
    //getPlayButton().children('.playButtonIcon').html("pause");
    //$('.beat.selected').find('.transparentPlayButton').html('pause_arrow');
    $('.beat.selected').find('.transparentPlayButton').attr("src", "imgs/PlayerImages/pause-sign.png");

    player.play();
}






function playNextSong() {
    var beatFound = $('#beatNumber_' + (selectedBeatNumber + 1) + '');
    //var beatFound = $('.beat[beatNumber="' + (selectedBeatNumber + 1) + '"]');

    if (beatFound.length > 0) {
        beatFound.trigger('click');
    }
    else{
      $('#beatNumber_0').trigger('click');
    }
}

function playPreviousSong() {

    if (selectedBeatNumber > 0) {
        //$('.beat[beatNumber="' + (selectedBeatNumber - 1) + '"]').trigger('click');
        $('#beatNumber_' + (selectedBeatNumber - 1) + '').trigger('click');
    }
    else if (selectedBeatNumber == 0) {
      //  $('#beatNumber_' + (selectedBeatNumber) + '').trigger('click');
      player.seek(0);
   }
}




function initAndPlayBeat(songURL, imgsrc, producerName, beatTitle, userid, userLogo) {

    player = new LocalPlayer();
    //player = new SoundCloudPlayer();
    //player.init(songURL);
    player.init(songURL, $('.jplayer'));
    $(document).trigger('playerReady');
    // $('.slapchartPlayerWidget .beatimage img').css("display","block").attr("src", imgsrc);
    $('.slapchartPlayerWidget .beatimage img').attr("src", userLogo);
    $('.slapchartPlayerWidget .producerName').text(producerName);
    $('.slapchartPlayerWidget .beatTitle').text(beatTitle);
    $('.slapchartPlayerWidget .beatotherUserid').val(userid);
    $('.slapchartPlayerWidget .beatotherUserLogo').val(userLogo);
    $(".socialproducerImage").css("background-image", userLogo);


}




function getPlayButton() {
    return $('.slapchartPlayerWidget .controls .playButton');
}



function getNextButton() {
    return $('.slapchartPlayerWidget .controls .nextButton');
}

function getBackButton() {
    return $('.slapchartPlayerWidget .controls .backButton');
}


function getBackTenSecondsButton() {
    return $('.slapchartPlayerWidget .controls .backTenSecondsButton');
}

function getForwardTenSecondsButton() {
    return $('.slapchartPlayerWidget .controls .forwrardTenSecondsButton');
}



function clearAllSelectedBeats() {
    $('.beat').removeClass("selected");
    // $('.beat').find('.transparentPlayButton').html('play_arrow');
    $('.beat').find('.transparentPlayButton').attr("src", "imgs/PlayerImages/play-sign.png");
}


/*Admin*/

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

      // console.log("length"+$('.userBeats.selected').length);
      // console.log("userbeats length"+$($('.userBeats')[0]));
        $($('.userBeats')[0]).trigger('click');
        return;
    }

    else{
     
      adminplayer.play();
    }

    getPlayAdminButton().children('.playButtonIconadmin').attr("src", "imgs/PlayerImages/pause.png");
   // getPlayAdminButton().children('.playButtonIconadmin').attr("src", "imgs/PlayerImages/pause.png");
    //getPlayButton().children('.playButtonIcon').html("pause");
    //$('.beat.selected').find('.transparentPlayButton').html('pause_arrow');
    // $('.beat.selected').find('.transparentPlayButton').attr("src", "imgs/PlayerImages/pause-sign.png");

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

    else
    {

        var lastindex = $('#beatadminNumber_0');
         if (lastindex.length > 0) {
        playsongbeat(0,lastindex);
        }
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
     //adminplayer.play();
   // player.play();
    $('.slapchartPlayerWidgetadmin .beatimage img').attr("src", imgsrc);;
    $('.slapchartPlayerWidgetadmin .producerName').text(producerName);
    $('.slapchartPlayerWidgetadmin .beatTitle').text(beatTitle);
    $('.slapchartPlayerWidgetadmin .submittedTime').text(submittedDate);
     getPlayAdminButton().children('.playButtonIconadmin').attr("src", "imgs/PlayerImages/pause.png");
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
   
    $(document).trigger('playerReady');

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





function fixImageDimensions() {
    var defaultWidth = 375;
    var defaultHeight = 200;
    var width = $(window).width();
    if ($(window).width() > 788) {
        $(".content").addClass("container");
        newWidth = 450;
    } else {
        newWidth = $(window).width();
        $(".content").removeClass("container");
    }
    var newHeight = (newWidth / defaultWidth) * defaultHeight;

    $('.beat').width(newWidth);
    $('.beat').height(newHeight);
    $('.info').css("margin-top", (newHeight - $('.info').height() - 15) + "px");
    $('.transparentPlayButton').css({ 'top': ((-1 * newHeight / 2) + 20) + "px", 'left': newWidth / 2 - (72 / 2) + "px" });
}



function setupEvents() {
    $(document).on('playerReady', function (objectEvent) {
        sliderBar.setPosition(0);
        var loc=window.location.href;
        if(loc.search("beats")==-1){
           playBeat();
        }else
        {
           playBeatadmin();
        }

    });

    $(document).on('songEnded', function (objectEvent) {
        sliderBar.setPosition(0);
         var loc=window.location.href;
        if(loc.search("beats")==-1){
            getPlayButton().children('.playButtonIcon').attr("src", "imgs/PlayerImages/play-sign.png");
        //getPlayButton().children('.playButtonIcon').html("play_arrow");

        playNextSong();
        }else
        {
           getPlayAdminButton().children('.playButtonIconadmin').attr("src", "imgs/PlayerImages/pause.png");
        //getPlayButton().children('.playButtonIcon').html("play_arrow");

        playNextSongAdmin();
        }

    });

    $(document).on('loadedData', function (objectEvent) {
        var loc=window.location.href;
        if(loc.search("beats")==-1){
            $('.endTime').text(formatSongTime(Math.floor(player.getSongDuration())));
        }else
        {
           $('.endTime').text(formatSongTime(Math.floor(adminplayer.getSongDuration())));
        }

    });

    $(document).on('timeupdate', function (objectEvent) {

        if (!sliderBarInUse) {

             var loc=window.location.href;
        if(loc.search("beats")==-1){
            var currentPosition = player.getCurrentSongPosition();
            var songDuration = player.getSongDuration();

            var currentPercentage = currentPosition / songDuration;
            sliderBar.setPosition(currentPosition / songDuration);
            $('.currentTime').text(formatSongTime(Math.floor(currentPosition)));
        }else
        {
          var currentPosition = adminplayer.getCurrentSongPosition();
            var songDuration = adminplayer.getSongDuration();

            var currentPercentage = currentPosition / songDuration;
            sliderBar.setPosition(currentPosition / songDuration);
            $('.currentTime').text(formatSongTime(Math.floor(currentPosition)));
        }

        }

    });
}

function setupadminEvents() {
    // $(document).on('playerReady', function (objectEvent) {
    //     sliderBar.setPosition(0);
    //     playBeatadmin();
    // });

    // $(document).on('songEnded', function (objectEvent) {
    //     sliderBar.setPosition(0);
    //     getPlayAdminButton().children('.playButtonIconadmin').attr("src", "imgs/PlayerImages/pause.png");
    //     //getPlayButton().children('.playButtonIcon').html("play_arrow");

    //     playNextSongAdmin();
    // });

    // $(document).on('loadedData', function (objectEvent) {
    //     $('.endTime').text(formatSongTime(Math.floor(adminplayer.getSongDuration())));
    // });

    // $(document).on('timeupdate', function (objectEvent) {

    //     if (!sliderBarInUse) {
    //         var currentPosition = adminplayer.getCurrentSongPosition();
    //         var songDuration = adminplayer.getSongDuration();

    //         var currentPercentage = currentPosition / songDuration;
    //         sliderBar.setPosition(currentPosition / songDuration);
    //         $('.currentTime').text(formatSongTime(Math.floor(currentPosition)));
    //     }

    // });
}


function openProducerPopup(thisProducer, thisProducerImage) {
    $("#producerPopUp .producerBio .popupProducerName").text(thisProducer);
    $("#producerPopUp .producerImage").css("background-image", thisProducerImage);
    //$('#producerPopUp').modal("show");
    //$('body').css('overflow-y', 'hidden');
    popUpOpened = true;
    //$('#SocialIconsModal').modal("hide");
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
         this.getSliderBar().bootstrapSlider('setValue', percentage * 982);
     },
     getPosition: function () {
         return this.getSliderBar().bootstrapSlider('getValue');
     }
 }
