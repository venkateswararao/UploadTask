

function str_pad_left(string, pad, length) {
    return (new Array(length + 1).join(pad) + string).slice(-length);
}

function formatSongTime(time) {

    var minutes = Math.floor(time / 60);

    var seconds = time - minutes * 60;

    var hours = Math.floor(time / 3600);
    time = time - hours * 3600;

    var finalTime = str_pad_left(minutes, '0', 1) + ':' + str_pad_left(seconds, '0', 2);

    return finalTime;
}