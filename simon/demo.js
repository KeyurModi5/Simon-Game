

$("input").keypress(function(event){
    console.log(event.key );
});

$("button").on("click",function(){
    $("h1").slideToggle();
});