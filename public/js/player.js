"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Player = function () {
    function Player() {
        _classCallCheck(this, Player);
    }

    _createClass(Player, [{
        key: "init",
        value: function init(songURL) { }
    }, {
        key: "play",
        value: function play() { }
    }, {
        key: "pause",
        value: function pause() { }
    }, {
        key: "stop",
        value: function stop() { }
    }, {
        key: "seek",
        value: function seek() { }
    }, {
        key: "clear",
        value: function clear() { }
    }, {
        key: "isPlaying",
        value: function isPlaying() { }
    }, {
        key: "getSongDuration",
        value: function getSongDuration() { }
    }, {
        key: "getCurrentSongPosition",
        value: function getCurrentSongPosition() { }
    }]);

    return Player;
}();

var LocalPlayer = function (_Player) {
    _inherits(LocalPlayer, _Player);

    function LocalPlayer() {
        _classCallCheck(this, LocalPlayer);

        return _possibleConstructorReturn(this, Object.getPrototypeOf(LocalPlayer).call(this));
    }

    _createClass(LocalPlayer, [{
        key: "init",
        value: function init(songURL, $jPlayerElement) {
            if (jplayer) {
                jplayer.jPlayer("setMedia", {
                    mp3: songURL
                });

            } else {
                jplayer = $jPlayerElement;
                jplayer.jPlayer({
                    ready: function ready() {
                        $(this).jPlayer("setMedia", {
                            mp3: songURL
                        });
                        $(document).trigger('playerReady');
                    },
                    loadeddata: function loadeddata(event) {
                        $(document).trigger('loadedData');
                    },
                    ended: function ended(event) {
                        $(document).trigger("songEnded");
                    },
                    timeupdate: function timeupdate(event) {
                        $(document).trigger("timeupdate");
                    }
                });
            }
        }
    }, {
        key: "play",
        value: function play() {
            jplayer.jPlayer("play");
        }
    }, {
        key: "pause",
        value: function pause() {
            jplayer.jPlayer("pause");
        }
    }, {
        key: "stop",
        value: function stop() {
            jplayer.jPlayer("stop");
        }
    }, {
        key: "seek",
        value: function seek(songPosition) {
            //jplayer.jPlayer("playHead", songPercentage);
            if (this.isPlaying()) {
                jplayer.jPlayer("play", songPosition);
            } else {
                jplayer.jPlayer("pause", songPosition);
            }
        }
    }, {
        key: "clear",
        value: function clear() {
            jplayer.jPlayer("clearMedia");
        }
    }, {
        key: "isPlaying",
        value: function isPlaying() {
            return !$('.jplayer').data().jPlayer.status.paused;
        }
    }, {
        key: "getSongDuration",
        value: function getSongDuration() {
            return $('.jplayer').data().jPlayer.status.duration;
        }
    }, {
        key: "getCurrentSongPosition",
        value: function getCurrentSongPosition() {
            return $('.jplayer').data().jPlayer.status.currentTime;
        }
    }]);

    return LocalPlayer;
}(Player);


var SoundCloudPlayer = function (_Player2) {
    _inherits(SoundCloudPlayer, _Player2);

    function SoundCloudPlayer() {
        _classCallCheck(this, SoundCloudPlayer);

        return _possibleConstructorReturn(this, Object.getPrototypeOf(SoundCloudPlayer).call(this));
    }

    _createClass(SoundCloudPlayer, [{
        key: "init",
        value: function init(songURL) {

            if (!sc_player) {
                SC.initialize({
                    client_id: '3ea06af1cedd7d2e578acb62f7300c01'
                });
            }

            //TODO:
            // Resolve stream id from: http://api.soundcloud.com/resolve?url=http://soundcloud.com/matas/hobnotropic&client_id=YOUR_CLIENT_ID'

            var song = "/tracks/196340512";
            SC.stream(song).then(function (player) {
                sc_player = player;

                $(document).trigger('playerReady');
            });
        }
    }, {
        key: "play",
        value: function play() {
            sc_player.play();
        }
    }, {
        key: "pause",
        value: function pause() {
            sc_player.pause();
        }
    }, {
        key: "seek",
        value: function seek(songPosition) {
            sc_player.seek(songPosition);
        }
    }, {
        key: "clear",
        value: function clear() { }
    }, {
        key: "isPlaying",
        value: function isPlaying() {
            return sc_player._isPlaying;
        }
    }, {
        key: "getSongDuration",
        value: function getSongDuration() {
            return sc_player.streamInfo.duration;
        }
    }, {
        key: "getCurrentSongPosition",
        value: function getCurrentSongPosition() {
            return sc_player.currentTime();
        }
    }]);

    return SoundCloudPlayer;
}(Player);

var sc_player = null;
var jplayer = null;
