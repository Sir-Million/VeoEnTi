// Filter js

$(document).ready(function(){
    $(".filter-item").click(function(){
        const value = $(this).attr("data-filter");
        if (value == "all") {
            $(".post-box").show("1000");
        }
        else {
            $(".post-box")
                .not("." + value)
                .removeClass("show")
                .addClass("hide")
            $(".post-box")
                .filter("." + value)
                .removeClass("hide")
                .addClass("show")
        }
    });
    // Add active to btn
    $(".filter-item").click(function(){
        $(this).addClass("active-filter").siblings().removeClass("active-filter");
    });
});