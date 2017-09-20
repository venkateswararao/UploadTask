
var player = new Player();
var sliderBarInUse = false;
var selectedBeatNumber = -1;
var popUpOpened = false;

var clickTriggered = false;

$(document).ready(function () {
    fixImageDimensions();
    initEventHandlers();
    setupEvents();
    $(".lazy").lazyload();
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

    $(window).scroll(function (e) {
        if (popUpOpened) {
            closePopUp();
        }
    });

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

    getSubmitPageButton().on('click', function (e) {

        if (player.isPlaying()) {
            getPlayButton().trigger('click');
        }

        $('.mainPage').hide();
        $('.submitPage').show("slide", { direction: "right" }, 300);
    });

    getSubmitPageBackButton().on('click', function (e) {
        $('.submitPage').hide();
        $('.mainPage').show("slide", { direction: "left" }, 300);
    });

    getSubmitButton().on('click', function (e) {

        var json = getSubmitPageJson();

        $.ajax({
            method: "POST",
            url: "http://localhost:3000/songs/add",
            data: JSON.stringify(json),
            headers: {
                'Content-Type': 'application/json'
            }
        }).success(function () {
            alert("added song");
        }).error(function (err) {
            alert(err.status + ": " + err.responseText);
        });
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
        player.seek((songPosition / 1000) * player.getSongDuration());
        sliderBarInUse = false;
        if (sliderBarInUse) {
        $('.currentTime').text(formatSongTime(Math.floor($(this).val() / 1000 * player.getSongDuration())));

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
    console.log("userid"+ userid);
    player.init(songURL, $('.jplayer'));
    $(document).trigger('playerReady');
    // $('.slapchartPlayerWidget .beatimage img').css("display","block").attr("src", imgsrc);
    $('.slapchartPlayerWidget .beatimage img').attr("src", imgsrc);
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

function getSubmitPageButton() {
    return $('.mainPage .submitPageButton');
}

function getSubmitPageBackButton() {
    return $('.submitPage .backButton');
}

function getSubmitButton() {
    return $('.submitPage .submitBeatButton');
}

function clearAllSelectedBeats() {
    $('.beat').removeClass("selected");
    // $('.beat').find('.transparentPlayButton').html('play_arrow');
    $('.beat').find('.transparentPlayButton').attr("src", "imgs/PlayerImages/play-sign.png");
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

function getSubmitPageJson() {

    var jsonObject = {};
    var $submitPageInputs = $('.submitPageTextBox');
    $.each($submitPageInputs, function (index, value) {
        var jsonKey = $(value).attr("jsonKey");
        var jsonValue = $(value).val();

        jsonObject[jsonKey] = jsonValue;
    });

    jsonObject.siteId = 0;

    return jsonObject;
}

function setupEvents() {
    $(document).on('playerReady', function (objectEvent) {
        sliderBar.setPosition(0);
        playBeat();
    });

    $(document).on('songEnded', function (objectEvent) {
        sliderBar.setPosition(0);
        getPlayButton().children('.playButtonIcon').attr("src", "imgs/PlayerImages/play-sign.png");
        //getPlayButton().children('.playButtonIcon').html("play_arrow");

        playNextSong();
    });

    $(document).on('loadedData', function (objectEvent) {
        $('.endTime').text(formatSongTime(Math.floor(player.getSongDuration())));
    });

    $(document).on('timeupdate', function (objectEvent) {

        if (!sliderBarInUse) {
            var currentPosition = player.getCurrentSongPosition();
            var songDuration = player.getSongDuration();

            var currentPercentage = currentPosition / songDuration;
            sliderBar.setPosition(currentPosition / songDuration);
            $('.currentTime').text(formatSongTime(Math.floor(currentPosition)));
        }

    });
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
         this.getSliderBar().bootstrapSlider('setValue', percentage * 1000);
     },
     getPosition: function () {
         return this.getSliderBar().bootstrapSlider('getValue');
     }
 }
