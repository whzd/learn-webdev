$("h1").css("color", "red");

$("button").html("<em>Hey</em>");

console.log($("img").attr("src"));

$("a").attr("href", "https://www.yahoo.com");

$(document).keypress(function(event){
    $("h1").text(event.key);
});

$("button").on("click", function() {
    $("h1").slideToggle();
});
