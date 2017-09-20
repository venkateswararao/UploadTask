$(document).ready(function () {
    // $("#btnSignIn").click(function () {
    //
    //     $(".btnLogin").css("display", "none");
    //     $(".btnLogout").css("display", "block");
    //     $(".UserName").css("display", "block");
    //     // $(".UserName").html("Welcome John!");
    //     $("#LogInModal").modal("hide");
    // })
    // $(".btnLogout").click(function () {
    //
    //     $(".btnLogin").css("display", "block");
    //     $(".btnLogout").css("display", "none");
    //     $(".UserName").css("display", "none");
    //     //$(".UserName").html("welcome John!");
    //     //$("#LogInModal").modal("hide");
    // })


    $(".producerImage").click(function () {
        imageurl = $(this).css('background-image');
        sproducerLink = $(this).parent().find(".producerLink").html();

        // $("#SocialIconsModal").modal("show");
        $(".socialproducerImage").css('background-image', imageurl);
        $(".socialproducerLink").html(sproducerLink);

        //$(".UserName").html("welcome John!");
        //$("#LogInModal").modal("hide");
    })

});
