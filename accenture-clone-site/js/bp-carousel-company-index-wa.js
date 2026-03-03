//Workaround for company-index bp-carousel live link- to be deleted once fix is applied - FJPC - 01.24.2022

$("#block-section-7 .carousel .cards li.img-container").each(function(){
    var tt = $(this).closest(".cards li.img-container").find("a").attr("href");
    $(this).attr("data-sub-title-link", tt);    
})

// Fix for analytics mail to icon 12/06/2023
$(function(){
    var w_p = window.location.pathname;
    $(".share-icons-container-marquee .social-icon .mail").each(function(){
        $(this).attr({
            "href": w_p,
            "data-analytics-link-name": "mail"
        })
    })
})