// RAD triage/quick fix JS - 4/24/2023
$(window).on("load", function() {
    var w_href = window.location.href
      , target_hash = "#" + w_href.split("#")[1];
    if (w_href.indexOf("#") > -1) {
        $("html, body").animate({
            scrollTop: $(target_hash).offset().top - $(".cmp-global-header__navbar-container").height()
        }, 1000);
    }
})