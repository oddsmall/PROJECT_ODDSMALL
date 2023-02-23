
$("#menuButton").on("click", (e)=>{
    $(e.target).toggleClass("on");

    if (!$(e.target).hasClass("on")) {
        $("#iconLink").css("display", "none");
    } else {
        $("#iconLink").css("display", "flex");
    }
})

$(window).on("scroll", () => {
    let yScroll = window.scrollY;

    if (yScroll > '80') {
        $("#headerWrapper").css("position", "fixed")
        $("#headerWrapper").css("top", "0")
        $("#headerWrapper").css("left", "0")
    } else {
        $("#headerWrapper").css("position", "initial")
    }
})

