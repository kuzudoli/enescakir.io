function clock() {
    var date = new Date();
    var hours = date.getHours();
    var minutes = date.getMinutes();

    var time = hours + ":" + minutes;
    document.getElementById("top-clock").innerText = time;
    document.getElementById("top-clock").textContent = time;

    setTimeout(clock, 1000);

}
clock();

$(window).on("load",function(){
    $(".loader-wrapper").fadeOut("slow");
})
