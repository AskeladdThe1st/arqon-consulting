var windowwidth;
if ((windowwidth = $(window).width()) <= 1024) {
    var n = $(".cards li").length;
    rotate = 0,
    number = 40 * -n,
    slide = 0
}
if ((windowwidth = $(window).width()) >= 1025) {
    n = $(".cards li").length;
    rotate = 0,
    number = 62 * -n,
    slide = 0
}
var stateManager = function() {
    var t = null
      , e = function() {
        $("body").width() < 768 ? ("mobile" !== t && a(),
        i()) : ("desktop" !== t && n(),
        r())
    }
      , a = function() {
        t = "mobile",
        console.log("enter mobile")
    }
      , n = function() {
        t = "desktop",
        console.log("enter desktop")
    }
      , i = function() {
        console.log("resizing mobile")
    }
      , r = function() {
        console.log("resizing desktop")
    };
    return {
        init: function() {
            e(),
            $(window).on("resize", e)
        }
    }
}();
function move(t) {
    slide += t,
    $(".cards").css("transform", "translateZ(" + (-number - 40) + "px) rotateY(" + 360 * slide / n + "deg)")
}
stateManager.init(),
$(".cards").css("transform", "translateZ(" + (-number - 40)  + "px)"),
$(".cards li").each(function(t) {
    $(this).css("transform", "rotateY(" + 360 * -t / n + "deg) translateZ(" + number + "px)"),
    $(this).find(".corner").html(t + 1)
}),
$(".slide-left").on("click", function() {
    move(-1),
    deductCarouselProgress()
}),
$(".slide-right").on("click", function() {
    move(1),
    addCarouselProgress()
});
var pbVal = 1
  , prevpbVal = 0
  , nextpbVal = 0;
function addCarouselProgress() {
    $(".cards-cta-btn").removeClass("onactive"),
    (pbVal += 1) > 9 && (pbVal = 1),
    pbVal < 1 && (pbVal = 9),
    (prevpbVal = pbVal - 1) >= 9 && (prevpbVal = 9),
    prevpbVal <= 0 && (prevpbVal = 9),
    (nextpbVal = pbVal + 1) > 9 && (nextpbVal = 1),
    nextpbVal <= 0 && (nextpbVal = 9),
    $(".cards-cta-btn-" + prevpbVal).addClass("onactive"),
    $(".cards-cta-btn-" + pbVal).addClass("onactive"),
    $(".cards-cta-btn-" + nextpbVal).addClass("onactive");
    var t = $(".img-container-" + pbVal).attr("data-case")
      , e = $(".img-container-" + pbVal).attr("data-sub-title")
      , a = $(".img-container-" + pbVal).attr("data-sub-title-link")
      , n = $(".img-container-" + pbVal).attr("data-description");
    $(".section-container-7b .text-content .categoryTitle").html(t),
    $(".section-container-7b .text-content .SubsectionTitleTrigger").attr("aria-label", e),
    $(".section-container-7b .text-content .SubsectionTitleTrigger").attr("data-analytics-link-name", e),
    $(".section-container-7b .text-content .SubsectionTitleTrigger").attr("href", a),
    $(".section-container-7b .text-content .SubsectionTitle").html(e),
    $(".section-container-7b .text-content .Subsectiondescription").html(n),
    $(".progress-bar").css("width", 16.6 * pbVal + "%"),
    $(".progress-bar-label").html(pbVal + "/9")
}
function deductCarouselProgress() {
    $(".cards-cta-btn").removeClass("onactive"),
    (pbVal -= 1) > 9 && (pbVal = 1),
    pbVal < 1 && (pbVal = 9),
    (prevpbVal = pbVal - 1) >= 9 && (prevpbVal = 1),
    prevpbVal <= 0 && (prevpbVal = 9),
    (nextpbVal = pbVal + 1) >= 9 && (nextpbVal = 1),
    nextpbVal <= 0 && (nextpbVal = 9),
    $(".cards-cta-btn-" + prevpbVal).addClass("onactive"),
    $(".cards-cta-btn-" + pbVal).addClass("onactive"),
    $(".cards-cta-btn-" + nextpbVal).addClass("onactive");
    var t = $(".img-container-" + pbVal).attr("data-case")
      , e = $(".img-container-" + pbVal).attr("data-sub-title")
      , a = $(".img-container-" + pbVal).attr("data-sub-title-link")
      , n = $(".img-container-" + pbVal).attr("data-description");
    $(".section-container-7b .text-content .categoryTitle").html(t),
    $(".section-container-7b .text-content .SubsectionTitleTrigger").attr("aria-label", e),
    $(".section-container-7b .text-content .SubsectionTitleTrigger").attr("data-analytics-link-name", e),
    $(".section-container-7b .text-content .SubsectionTitleTrigger").attr("href", a),
    $(".section-container-7b .text-content .SubsectionTitle").html(e),
    $(".section-container-7b .text-content .Subsectiondescription").html(n),
    $(".progress-bar").css("width", 16.6 * pbVal + "%"),
    $(".progress-bar-label").html(pbVal + "/9")
}
