// // Change more - Quick fix - 4/27/2023
var href_window = window.location.href;
$(function() {
    // TileGrid - Rad Template - image alt for web acc
    $(".rad-card").each(function() {
        // var alt_title = $(this).find(".rad-card__title").text().trim();
        $(this).find("img").attr("alt", "");
    })
    // Rad Card - Global and Recognition Awards - External Links.
    $(".rad-awards-card__rte a").each(function(){
        var rad_card_a = $(this);
        if(rad_card_a.attr("target").indexOf("blank") > -1){
            if(rad_card_a.attr("title") == undefined || rad_card_a.attr("title") == "") {
                rad_card_a.attr("title", "This opens a new tab away from Accenture.com.");
            }
        }
    })

})
