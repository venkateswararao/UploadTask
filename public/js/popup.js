var imageCropped = false;
$(document).ready(function () {
    //$("#btnforgotPwd").click(function () {
    //    $("#LogInModal").modal('hide');
    //    $("#PasswordAssistanceModal").modal('show');
    //})
    //$("#btnSignUp").click(function () {
    //    $("#LogInModal").modal('hide');
    //    $("#CreateAccountModal").modal('show');
    //})

    $("#ContactPage").click(function () {
        setTimeout(function () { $("#ContactModal").modal('show'); }, 1000);

        //$("#PasswordAssistanceModal").modal('show');
    })
    $("#AboutPage").click(function () {
        setTimeout(function () { $("#AboutModal").modal('show'); }, 1000);

        //$("#CreateAccountModal").modal('show');
    })
    $("#FeedbackPage").click(function () {
        setTimeout(function () { $("#FeedbackModal").modal('show'); }, 1000);

        //$("#PasswordAssistanceModal").modal('show');
    })
    // $(".beatInfoInPlayer").click(function () {
    //     $("#SocialIconsModal").modal('show');
    // })
    // $(".beatInfo").click(function () {
    //     $("#SocialIconsModal").modal('show');
    // })
    // $(".producerLink").click(function (e) {
    //     e.stopPropogation();
    //     $('#SocialIconsModal').modal('hide');
    //     var thisProducer = $(this).text();
    //     var thisProducerImage = $(this).closest(".producerImage").css('background-image');
    //     $("#producerPopUp .producerBio .popupProducerName").text(thisProducer);
    //     $("#producerPopUp .producerImage").css("background-image", thisProducerImage);
    //     $('#producerPopUp').modal("show");
    //
    // });

    $(".imgprofilepic").click(function (e) {
        var JcropAPI = $('#SelectedImage').data('Jcrop');
        if (JcropAPI != undefined) {
            JcropAPI.destroy();
        }
        document.getElementById('imgInp').click();
        //$("#CropModal").modal('show');
        $('#SelectedImage').attr('src', "");
    })
    $(".imgcircleprofilepic").click(function () {
        var JcropAPI = $('#SelectedCircleImage').data('Jcrop');
        if (JcropAPI != undefined) {
            JcropAPI.destroy();
        }
        document.getElementById('imgCirInp').click();

        // $("#CircleCropModal").modal('show');
        $('#SelectedCircleImage').attr('src', "");
        // $("#CropModal").modal('show');
    })
    $("#imgInp").change(function (e) {
        var file = this.files[0];
        if (!file.type.match('image/jp.*') && !file.type.match('image/png') && !file.type.match('image/bmp')) {
            alert("Please Uplaod jpg/jpeg/png/bmp images only");
            this.value = null; //the tricky part is to "empty" the input file here I reset the form.
            return;
        }
        $("#CropModal").modal('show');
        if ($('#SelectedImage').length > 0) {
            $('#SelectedImage').remove();
        }
        $('#loadimg').css("display", "block");


        getOrientation(file, function (ori) { // 1. get exif
            reader(file, ori ? ori : 1);
        });
        this.value = null; return false;
        //readURL(this);
        //setTimeout(function () { readURL($("#imgInp")); }, 5);
    });
    function getOrientation(file, callback) {
        var reader = new FileReader();
        reader.onload = function (e) {

            var view = new DataView(e.target.result);
            if (view.getUint16(0, false) != 0xFFD8) return callback(-2);
            var length = view.byteLength;
            var offset = 2;
            while (offset < length) {
                var marker = view.getUint16(offset, false);
                offset += 2;
                if (marker == 0xFFE1) {
                    var little = view.getUint16(offset += 8, false) == 0x4949;
                    offset += view.getUint32(offset + 4, little);
                    var tags = view.getUint16(offset, little);
                    offset += 2;
                    for (var i = 0; i < tags; i++)
                        if (view.getUint16(offset + (i * 12), little) == 0x0112)
                            return callback(view.getUint16(offset + (i * 12) + 8, little));
                }
                else if ((marker & 0xFF00) != 0xFF00) break;
                else offset += view.getUint16(offset, false);
            }
            return callback(0); // +- edit
        };
        reader.readAsArrayBuffer(file.slice(0, 64 * 1024));
    }

    function reader(file, ori) {
            var reader = new FileReader(); // 2. FileReader

            reader.onload = function (e) {
                var img = new Image();
                img.onload = function () {
                    if (this.width > 900 && this.height > 480) {


                        if (ori === 1) {
                            var w = this.width;
                            var h = this.height;
                        }
                        else if (ori === 3) {
                            var w = this.width;
                            var h = this.height;
                        }
                        else if (ori < 0) {
                            var w = this.width;
                            var h = this.height;
                        }
                        else {
                            var h = this.width;
                            var w = this.height;
                        }

                        //if (ori === 1) { // -- removed
                        //    var img0 = img; // -- removed
                        //} else { // -- removed

                        var canvas = document.createElement('canvas'); // 3. canvas
                        var ctx = canvas.getContext('2d');
                        canvas.width = w; // ++ added
                        canvas.height = h; // ++ added

                        if (ori === 1) { // ++ added
                            ctx.drawImage(img, 0, 0, w, h); // ++ added
                        } else if (ori === 3) { // 4. transform, drawImage
                            ctx.transform(-1, 0, 0, -1, w, h);
                            ctx.drawImage(img, 0, 0, w, h);
                        } else if (ori === 6) {
                            ctx.transform(0, 1, -1, 0, w, 0);
                            ctx.drawImage(img, 0, 0, h, w);
                        }
                        else if (ori < 0) {
                            ctx.drawImage(img, 0, 0, w, h);
                        }
                        else {
                            ctx.transform(0, -1, 1, 0, 0, h);
                            ctx.drawImage(img, 0, 0, h, w);
                        }

                            var img0 = canvas.toDataURL(); // 5. get image

                            $('#SelectedImage').attr("src", "");
                            if (ori === 1) {
                                $("<img id='SelectedImage' src='" + e.target.result + "' class='img img-responsive' style='display: block' alt='Loading your image please wait!' />").appendTo("#maincroppeddiv");
                                // $('#SelectedImage').attr('src', e.target.result);
                            }
                            else {
                                $("<img id='SelectedImage' src='" + img0 + "' class='img img-responsive' style='display: block' alt='Loading your image please wait!' />").appendTo("#maincroppeddiv");
                                // $('#SelectedImage').attr('src', img0);
                            }

                            $('#loadimg').css("display", "none");
                            $('#SelectedImage').css("display", "block");
                            function createJcropArea() {
                                var width2 = jQuery('#SelectedImage').prop('naturalWidth');
                                var height2 = jQuery('#SelectedImage').prop('naturalHeight');
                                //var width2 = jQuery('#SelectedImage').width();
                                //var height2 = jQuery('#SelectedImage').width();
                                //var finalWidth = width2 - parseInt(width2 % 15);
                                //var finalHeight = height2 - parseInt(height2 % 8);


                                var finalWidth = 15 * (parseInt(width2 / 15) * 3 / 4);
                                var finalHeight = (8 * finalWidth) / 15;
                                console.log(finalWidth + " finalWidth " + finalHeight)
                                x = width2 / 2 - finalWidth / 2
                                y = height2 / 2 - finalHeight / 2

                                console.log(height2 + " height2 " + y);

                                x1 = x + 900
                                y1 = y + 480
                                $('#SelectedImage').Jcrop({
                                    setSelect: [x, y, finalWidth, finalHeight],
                                    //aspectRatio: 15 / 8,
                                    //setSelect: [900, 480, width2, height2],
                                    minSize: [finalWidth, finalHeight],
                                    maxSize: [finalWidth, finalHeight],
                                    onChange: SetCoordinates,
                                    onSelect: SetCoordinates,
                                    allowSelect: false,
                                    allowResize: false,
                                    trueSize: [width2, height2]
                                });
                                clearInterval(interval);
                                $("#btncrop").removeAttr("disabled");
                            }


                        var interval = setInterval(createJcropArea, 2000);
                    }
                    else {
                        $("#CropModal").modal('hide');
                        alert("Uploaded image not less than 900x480 resolution");
                    }
                }
                img.src = e.target.result;

            }
            reader.readAsDataURL(file);
        }
    function readURL(input) {
        if (input.files && input.files[0]) {
            var reader = new FileReader();
            reader.onload = function (e) {

                $('#SelectedImage').attr('src', e.target.result);
                //$('#SelectedImage').addClass("rotate90");

                //$('#SelectedImage').css("display", "block");
                //var width2 = jQuery('#SelectedImage').prop('naturalWidth');
                //var height2 = jQuery('#SelectedImage').prop('naturalHeight');
                ////var width2 = jQuery('#SelectedImage').width();
                ////var height2 = jQuery('#SelectedImage').width();
                //x = width2 / 2 - 900 / 2
                //y = height2 / 2 - 480 / 2
                //x1 = x + 900
                //y1 = y + 480
                ////x = width2 / 2 - 100;
                ////y = height2 / 2 - 100;
                ////x1 = x + 200;
                ////y1 = y + 200;
                function createJcropArea() {
                    $('#SelectedImage').css("display", "block");
                    var width2 = jQuery('#SelectedImage').prop('naturalWidth');
                    var height2 = jQuery('#SelectedImage').prop('naturalHeight');
                    //var width2 = jQuery('#SelectedImage').width();
                    //var height2 = jQuery('#SelectedImage').width();
                    x = width2 / 2 - 900 / 2
                    y = height2 / 2 - 480 / 2
                    x1 = x + 900
                    y1 = y + 480
                    //x = width2 / 2 - 100;
                    //y = height2 / 2 - 100;
                    //x1 = x + 200;
                    //y1 = y + 200;
                    $('#SelectedImage').Jcrop({
                        setSelect: [x, y, x1, y1],
                        minSize: [900, 480],
                        maxSize: [900, 480],
                        onChange: SetCoordinates,
                        onSelect: SetCoordinates,
                        allowResize: false,
                        trueSize: [width2, height2]
                    });
                    clearInterval(interval);

                }
                var interval = setInterval(createJcropArea, 2000);
            }


            reader.readAsDataURL(input.files[0]);
        }
    }
    function SetCoordinates(c) {
        $('#imgX1').val(c.x);
        $('#imgY1').val(c.y);
        $('#imgWidth').val(c.w);
        $('#imgHeight').val(c.h);
        $('#btncrop').show();
    };
    $("#imgCirInp").change(function () {
       var file = this.files[0];
       if (!file.type.match('image/jp.*') && !file.type.match('image/png') && !file.type.match('image/bmp')) {
           alert("Please Uplaod jpg/jpeg/png/bmp images only");
           this.value = null; //the tricky part is to "empty" the input file here I reset the form.
           return;
       }
       $("#CircleCropModal").modal('show');
       if ($('#SelectedCircleImage').length > 0) {
           $('#SelectedCircleImage').remove();
       }
       $('#loadCirimg').css("display", "block");

       getOrientation(file, function (ori) { // 1. get exif
           readerCir(file, ori ? ori : 1);
       });
       this.value = null; return false;
       // readCricURL(this);
   });
   function readerCir(file, ori) {
       var reader = new FileReader(); // 2. FileReader

       reader.onload = function (e) {
           var img = new Image();
           img.onload = function () {
               if (this.width > 400 && this.height > 400) {


                   if (ori === 1) {
                       var w = this.width;
                       var h = this.height;
                   }
                   else if (ori === 3) {
                       var w = this.width;
                       var h = this.height;
                   }
                   else if (ori < 0) {
                       var w = this.width;
                       var h = this.height;
                   }
                   else {
                       var h = this.width;
                       var w = this.height;
                   }

                   //if (ori === 1) { // -- removed
                   //    var img0 = img; // -- removed
                   //} else { // -- removed

                   var canvas = document.createElement('canvas'); // 3. canvas
                   var ctx = canvas.getContext('2d');
                   canvas.width = w; // ++ added
                   canvas.height = h; // ++ added

                   if (ori === 1) { // ++ added
                       ctx.drawImage(img, 0, 0, w, h); // ++ added
                   } else if (ori === 3) { // 4. transform, drawImage
                       ctx.transform(-1, 0, 0, -1, w, h);
                       ctx.drawImage(img, 0, 0, w, h);
                   } else if (ori === 6) {
                       ctx.transform(0, 1, -1, 0, w, 0);
                       ctx.drawImage(img, 0, 0, h, w);
                   } else if (ori < 0) {
                       ctx.drawImage(img, 0, 0, w, h);
                   }
                   else {
                       ctx.transform(0, -1, 1, 0, 0, h);
                       ctx.drawImage(img, 0, 0, h, w);
                   }

                       var img0 = canvas.toDataURL(); // 5. get image

                       if (ori === 1) {
                           $("<img id='SelectedCircleImage' src='" + e.target.result + "' class='img img-responsive' style='display: block' alt='Loading your image please wait!' />").appendTo("#maincroppedCirdiv");
                           //$('#SelectedCircleImage').attr('src', e.target.result);
                       }
                       else {
                           $("<img id='SelectedCircleImage' src='" + img0 + "' class='img img-responsive' style='display: block' alt='Loading your image please wait!' />").appendTo("#maincroppedCirdiv");
                           //$('#SelectedCircleImage').attr('src', img0);
                       }
                       function createJcropArea() {
                           $('#loadCirimg').css("display", "none");
                           $('#SelectedCircleImage').css("display", "block");
                           var width2 = jQuery('#SelectedCircleImage').prop('naturalWidth');
                           var height2 = jQuery('#SelectedCircleImage').prop('naturalHeight');

                           var finalWidth = (parseInt(width2) * 3 / 4);
                           var finalHeight = finalWidth;
                           console.log(finalWidth + " finalWidth " + finalHeight)
                           //x = width2 / 2 - finalWidth / 2
                           //y = height2 / 2 - finalHeight / 2


                           x = width2 / 2 - finalWidth / 2
                           y = height2 / 2 - finalWidth / 2
                           x1 = x + finalWidth
                           y1 = y + finalWidth

                           if (y1 >= height2 - 100) {
                               console.log("If clause...")

                               finalHeight = (parseInt(height2) * 3 / 4);
                               finalWidth = finalHeight;


                               //x = width2 / 2 - finalWidth / 2
                               //y = height2 / 2 - finalHeight / 2


                               x = width2 / 2 - finalHeight / 2
                               y = height2 / 2 - finalHeight / 2
                               x1 = x + finalHeight
                               y1 = y + finalHeight

                           }

                           $('#SelectedCircleImage').Jcrop({
                               setSelect: [x, y, x1, y1],
                               //aspectRatio:1,
                               minSize: [finalWidth, finalWidth],
                               maxSize: [finalWidth, finalWidth],
                               onChange: SetCoordinates,
                               onSelect: SetCoordinates,
                               allowSelect: false,
                               allowResize: false,
                               trueSize: [width2, height2]
                           });
                           clearInterval(interval);
                          $("#btncircrop").removeAttr("disabled");
                       }


                   var interval = setInterval(createJcropArea, 2000);
               }
               else {
                   $("#CircleCropModal").modal('hide');
                   alert("Uploaded image not less than 400x400 resolution");
               }
           }
           img.src = e.target.result;

       }
       reader.readAsDataURL(file);
   }
    function readCricURL(input) {
        if (input.files && input.files[0]) {
            var reader = new FileReader();
            reader.onload = function (e) {
                setTimeout(function () {
                    $('#SelectedCircleImage').attr('src', e.target.result);
                    $('#SelectedCircleImage').show();
                    var width2 = jQuery('#SelectedCircleImage').prop('naturalWidth');
                    var height2 = jQuery('#SelectedCircleImage').prop('naturalHeight');
                    x = width2 / 2 - 100;
                    y = height2 / 2 - 100;
                    x1 = x + 200;
                    y1 = y + 200;
                    $('#SelectedCircleImage').Jcrop({
                        setSelect: [x, y, x1, y1],
                        onChange: SetCoordinates,
                        onSelect: SetCoordinates,
                        trueSize: [width2, height2]
                    });
                }, 200);
            }

            reader.readAsDataURL(input.files[0]);
        }
    }
    // $("#btnRotateLeft").click(function () {
    //     angle -= 90;
    //     $(".jcrop-holder").rotate(angle);
    //     var jcrop_api = $('#SelectedImage').data('Jcrop');
    //     jcrop_api.setOptions({
    //         rotate: angle < 0 ? 360 + angle : angle
    //     });
    //     if (angle <= -360) angle = 0;
    // });
    // $("#btnRotateRight").click(function () {
    //     angle += 90;
    //     $(".jcrop-holder").rotate(angle);
    //     var jcrop_api = $('#SelectedImage').data('Jcrop');
    //     jcrop_api.setOptions({
    //         rotate: angle
    //     });
    //     if (angle >= 360) angle = 0;
    // });
    $("#btncircrop").click(function () {
        var x1 = $('#imgX1').val();
        var y1 = $('#imgY1').val();
        var width = $('#imgWidth').val();
        var height = $('#imgHeight').val();
        var canvas = $("#canvas")[0];
        var context = canvas.getContext('2d');
        var img = new Image();

        img.onload = function () {
            canvas.height = height;
            canvas.width = width;
            context.drawImage(img, x1, y1, width, height, 0, 0, width, height);
            imageCropped = true;
            $('.imgcircleprofilepic').attr("src", canvas.toDataURL('image/jpeg', 1.0));
            $('#imgCropped').val(canvas.toDataURL('image/jpeg', 1.0));
            $("#beatNumber_1 .infoBox .info .producerImage").css("background-image", 'url(' + canvas.toDataURL('image/jpeg', 1.0) + ')');
        };

        img.src = $('#SelectedCircleImage').attr("src");
        context.clearRect(0, 0, canvas.width, canvas.height);
        var JcropAPI = $('#SelectedCircleImage').data('Jcrop');
        if (JcropAPI != undefined) {
            JcropAPI.destroy();
        }
        $("#CircleCropModal").modal("hide");
        $('body').addClass('modal-open');
    })

    $("#btncrop").click(function () {

        var x1 = $('#imgX1').val();
        var y1 = $('#imgY1').val();
        var width = $('#imgWidth').val();
        var height = $('#imgHeight').val();
        var canvas = $("#canvas")[0];
        var context = canvas.getContext('2d');
        var img = new Image();
        img.onload = function () {
            canvas.height = height;
            canvas.width = width;
            context.drawImage(img, x1, y1, width, height, 0, 0, width, height);
            imageCropped = true;
            $('.imgprofilepic').attr("src", canvas.toDataURL('image/jpeg'));
            $('#imgCropped').val(canvas.toDataURL('image/jpeg'));
            $("#beatNumber_1").css("background-image", 'url(' + canvas.toDataURL('image/jpeg') + ')');
        };
        img.src = $('#SelectedImage').attr("src");
        context.clearRect(0, 0, canvas.width, canvas.height);
        var JcropAPI = $('#SelectedImage').data('Jcrop');
        if (JcropAPI != undefined) {
            JcropAPI.destroy();
        }
        $('#SelectedImage').remove();
        $("#CropModal").modal("hide");
        $('body').addClass('modal-open');

    })
     



});
