
// ------ Side-bar :

let menuWidth = $(".side-menu").outerWidth(true);
$(".side-bar").css("left" , `-${menuWidth}px`);

$(".close").click(() => {
    $(".side-bar").animate({"left" : `-${menuWidth}px`} , 300);
});

$(".open").click(() => {
    $(".side-bar").animate({"left" : `0px`} , 300);
});

// ------ Open :

$(window).scroll(() => {
    
    if($(window).scrollTop() > $(".home").innerHeight() - ($(".home").innerHeight())* 0.5 ){
        $(".open").fadeOut(50);
    }
    else{
        $(".open").fadeIn(50);
    }
});

// ------ Singers - Slides :

$(".slider h3").click((e) => {
    $(e.target).next().slideToggle();

    $(".slider div").not($(e.target).next()).slideUp();
});

// ------- Duration :

window.onload = function (){
    countDown ("25 July 2024 10:00:00");
};

function countDown (count){

    let partyDate = new Date (count);
    partyDate = (partyDate.getTime()/1000);

    let now = new Date();
    now = (now.getTime()/1000);

    remainTime = (partyDate - now);

    let days = Math.floor (remainTime / (24*60*60));
    let hours = Math.floor ((remainTime - (days * (24*60*60))) / 3600);
    let minutes = Math.floor ((remainTime - (days * (24*60*60)) - (hours * 3600)) / 60);
    let seconds = Math.floor ((remainTime - (days * (24*60*60)) - (hours *3600) - (minutes * 60)));

    $("#day").html(`${days} D`);
    $("#hour").html(`${hours} H`);
    $("#minute").html(`${minutes} M`);
    $("#second").html(`${seconds} S`);

    setInterval(() => {
        countDown(count);
    }, 1000);
}

// ------- Text Area :

$("textarea").keyup((e) => {
    let textLength = $(e.target).val().length;
    console.log(textLength);

    $("#charNum").text(100-textLength);

});

